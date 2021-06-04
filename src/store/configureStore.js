import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import explicandosReducer from '../screens/Explicador/reducers'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import authReducer from "../screens/Login/reducers"

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const store = createStore(
        combineReducers({
            explicandos: explicandosReducer,
            auth: authReducer,
        }),
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(sagas)
    return store
}

export default configureStore