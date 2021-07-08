import types from './actions'


const initialState = {
    loading: true,
    student: {},
    assessmentNumber:0,
    assessments: []
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
                loading: true
            }
        case types.SET_ASSESSMENT:
            return {
                ...state,
                loading: false,
                student: {
                    ...state.student,
                    assessments: [
                        ...state.student.assessments,
                        action.assessment,
                    ]
                }
            }
        default:
            return state
    }
}

export default studentReducer

/*

student: {
                    ...state.student,
                    assessments: [
                        ...state.student.assessments,
                        action.newAssessment
                    ]
                }
*/
 