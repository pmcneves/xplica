import * as addStudentsSaga from '../screens/Explicador/sagas'

export function initSagas(sagaMiddleware) {
    Object.values(addStudentsSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}