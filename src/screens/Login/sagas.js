import {put, call, takeLatest} from '@redux-saga/core/effects'
import { logInToApp, logOutFromApp } from '../../firebase'
import typesAuth from './actions'


function* logIn({data}) {
    try {
        const info = yield call(logInToApp, data)
        yield put({type: typesAuth.LOG_IN_TO_STORE, info})
    }
    catch(error) {
        yield put({type:typesAuth.ERROR, error})
    }
}

function* logOut() {
    yield call(logOutFromApp)
    yield put({type: typesAuth.LOG_OUT_FROM_STORE})
}

export default function* authSagas() {
    yield takeLatest(typesAuth.LOG_IN, logIn)
    yield takeLatest(typesAuth.LOG_OUT, logOut)
}