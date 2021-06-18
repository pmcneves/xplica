import types from './actions'


const initialState = {
    loading: true,
    student: {}
}

const studentReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.GET_STUDENT:
            return {
                ...state,
                loading: true
            }
        case types.SET_STUDENT:
            return {
                ...state,
                loading: false,
                student: action.student
            }
        default:
            return state
    }
}

export default studentReducer