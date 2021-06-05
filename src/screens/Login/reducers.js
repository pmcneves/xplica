import typesAuth from './actions'

const authReducer = (state={}, action) => { 
    switch(action.type) {
        case typesAuth.LOG_IN_TO_STORE:
            return {
                uid: action.uid
            }
        case typesAuth.LOG_OUT_FROM_STORE:
            return {}
        default:
            return state
    }
}

export default authReducer