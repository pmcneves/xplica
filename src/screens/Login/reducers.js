import typesAuth from './actions'

const authReducer = (state={}, action) => { 
    switch(action.type) {
        case typesAuth.LOG_IN_TO_STORE:
            return {
                uid: action.info.user.uid
            }
        case typesAuth.LOG_OUT_FROM_STORE:
            return {}
        case typesAuth.ERROR:
            return action.error
        default:
            return state
    }
}

export default authReducer