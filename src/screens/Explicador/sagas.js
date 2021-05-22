import {put, call, takeLatest, take} from '@redux-saga/core/effects'
import { addStudentToDb, removeStudentFromDb } from '../../firebase'
import types from './actions'

export function* addStudentSaga() {
    yield takeLatest(types.ADD_STUDENT, addStudent)
}
 
function* addStudent({student}) {
    yield put({type: types.ADD_STUDENT_TO_STORE, student})
    yield call(addStudentToDb, student);
}

export function* removeStudentSaga() {
    yield takeLatest(types.REMOVE_STUDENT, removeStudent)
}

function* removeStudent({id}) {
    yield put({type: types.REMOVE_STUDENT_FROM_STORE, id})
    yield call(removeStudentFromDb, id)
}