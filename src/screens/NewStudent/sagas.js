import {put, call, takeLatest} from '@redux-saga/core/effects'
import { addStudentToDb} from '../../firebase'
import types from './actions'

function* submitStudent({ data }) {
    try {
        yield call(addStudentToDb, data)
        yield call(data.history.push('/alun@s'))
    } catch (e) {
        console.log(e)
    }
}

export default function* newStudentSagas() {
    yield takeLatest(types.SUBMIT_STUDENT, submitStudent)
}