import {put, call, takeLatest} from '@redux-saga/core/effects'
import { logInToApp, logOutFromApp } from '../../firebase'
import typesAuth from './actions'


const getUid = (uid) => localStorage.setItem('uid', uid)
const eraseUid = () => localStorage.clear()

function* logIn({data}) {
    try {
        const info = yield call(logInToApp, data)
        const uid = info.user.uid
        yield put({type: typesAuth.LOG_IN_TO_STORE, uid})
        yield call(getUid, uid)
    }
    catch(error) {
        yield put({type:typesAuth.ERROR, error})
    }
}

function* logOut() {
    try {
        yield call(logOutFromApp)
        yield put({type: typesAuth.LOG_OUT_FROM_STORE})
        yield call(eraseUid)
    } catch(e) {
        console.log(e)
    }
}

export default function* authSagas() {
    yield takeLatest(typesAuth.LOG_IN, logIn)
    yield takeLatest(typesAuth.LOG_OUT, logOut)
}