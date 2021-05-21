import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import explicandosReducer from '../screens/Explicador/reducers'
import createSagaMiddleware from 'redux-saga'
import { initSagas } from "./initSagas"

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const configureStore = () => {
    const store = createStore(
        combineReducers({
            explicandos: explicandosReducer
        }),
        composeWithDevTools(applyMiddleware(...middlewares))
    );
    initSagas(sagaMiddleware)
    return store
}

export default configureStore