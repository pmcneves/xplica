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
                student: action.student.studentInfo, 
                studentId: action.student.id
            }
        case types.ACTIVE_STUDENT:
            return {
                ...state,
                active: action.id
            }
        case types.NEW_ASSESSMENT:
            return {
                ...state,
                student: {
                    ...state.student,
                    assessments: [
                        // ...state.student.assessments,
                        action.newAssessment
                    ]
                }
            }
        default:
            return state
    }
}

export default studentReducer