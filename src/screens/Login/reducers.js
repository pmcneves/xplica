import typesAuth from './actions'

const authReducer = (state={}, action) => { 
    switch(action.type) {
        case typesAuth.LOG_IN_TO_STORE:
            console.log(!!action.uid)
            return {
                uid: action.uid
            }
        case typesAuth.LOG_OUT_FROM_STORE:
            console.log(state)
            return {}
        default:
            return state
    }
}

export default authReducer