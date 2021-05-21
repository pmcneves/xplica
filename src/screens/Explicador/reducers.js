
import types from './actions'

const explicandosReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ADD_STUDENT_TO_STORE:
            return [
                ...state, 
                {
                    id: action.student.id,
                    info: action.student.info
                }
            ]
        case types.REMOVE_STUDENT_FROM_STORE:
            return state.filter(student => student.id !== action.id)
        case types.LOAD_STUDENTS:
            return action.students
        default:
            return state
        }
}

export default explicandosReducer;

const initialState = []