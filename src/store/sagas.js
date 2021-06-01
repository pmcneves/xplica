import { all } from 'redux-saga/effects'
import sagasExplicador from '../screens/Explicador/sagas';

export default function* () {
    yield all(
        [sagasExplicador()]
    )
}