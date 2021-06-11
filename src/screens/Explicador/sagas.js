import { put, call, takeLatest, select } from '@redux-saga/core/effects'
import { addStudentToDb, removeStudentFromDb, fetchStudentsFromDb } from '../../firebase'

import types, { setStudents, addStudent } from './actions'
import { getExpSlice } from './selectors';

function* loadAllStudents() {
    try {
        const students = yield call(fetchStudentsFromDb)
        yield put(setStudents(students))
    } catch(e) {
        console.log(e)
    }
}

function* submitStudent({ data }) {
    try {
        yield call(addStudentToDb, data)
        yield put(addStudent(data))
    } catch (e) {
        console.log(e)
    }
}

function* removeStudent({ id }) {
    try {
        yield call(removeStudentFromDb, id)
        const state = yield select(getExpSlice); 
        state.students = state.students.filter((student) => student.id !== id);
        yield put(setStudents(state.students))
    } catch (e) {
        console.log(e)
    }
}

export default function* studentSagas() {
    yield takeLatest(types.GET_STUDENTS, loadAllStudents)
    yield takeLatest(types.SUBMIT_STUDENT, submitStudent)
    yield takeLatest(types.REMOVE_STUDENT, removeStudent)
}