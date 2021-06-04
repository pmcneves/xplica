import { all } from 'redux-saga/effects'
import studentSagas from '../screens/Explicador/sagas'
import authSagas from '../screens/Login/sagas'

export default function* sagas () {
    yield all(
        [studentSagas(),
        authSagas()]
    )
}