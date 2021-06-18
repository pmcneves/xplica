import { all } from 'redux-saga/effects'
import studentsSagas from '../screens/Explicador/sagas'
import authSagas from '../screens/Login/sagas'
import newStudentSagas from '../screens/NewStudent/sagas'
import studentSagas from '../screens/Student/sagas'

export default function* sagas () {
    yield all(
        [studentsSagas(),
        authSagas(),
        newStudentSagas(),
        studentSagas()]
    )
}