import {put, call, takeLatest} from '@redux-saga/core/effects'
import { addStudentToDb, removeStudentFromDb } from '../../firebase'
import types from './actions'


function* addStudent({student}) {
    yield put({type: types.ADD_STUDENT_TO_STORE, student})
    yield call(addStudentToDb, student);
}

function* removeStudent({id}) {
    yield put({type: types.REMOVE_STUDENT_FROM_STORE, id})
    yield call(removeStudentFromDb, id)
}


export default function* studentSagas() {
    yield takeLatest(types.ADD_STUDENT, addStudent)
    yield takeLatest(types.REMOVE_STUDENT, removeStudent)
}