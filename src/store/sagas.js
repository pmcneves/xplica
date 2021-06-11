import { all } from 'redux-saga/effects'
import studentSagas from '../screens/Explicador/sagas'
import authSagas from '../screens/Login/sagas'
import newStudentSagas from '../screens/NewStudent/sagas'

export default function* sagas () {
    yield all(
        [studentSagas(),
        authSagas(),
        newStudentSagas()]
    )
}