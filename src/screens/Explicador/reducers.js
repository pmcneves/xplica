
import types from './actions'

const initialState = {
    loading: true,
    students: []
}

const explicandosReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.GET_STUDENTS:
            return {
                ...state,
                loading: true,
            }   
        case types.SET_STUDENTS:
            return {
                ...state,
                students: action.students,
                loading: false,
            } 
        case types.SUBMIT_STUDENT:
            return {
                ...state,
                loading: true,
            }
        case types.REMOVE_STUDENT:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
        }
}

export default explicandosReducer;



/*
const initialState =  {
    loading: true,
    students: []
}

        case types.ADD_STUDENT_TO_STORE:
            return {
                ...state,
                students: [
                    ...state.students,
                    {
                        id: action.student.id,
                        info: action.student.info
                    }
                ]
            }

            */


            // const explicandosReducer = (state=initialState, action) => {
            //     switch (action.type) {
            //         case types.ADD_STUDENT_TO_STORE:
            //             return [
            //                 ...state, 
            //                 {
            //                     id: action.student.id,
            //                     info: action.student.info
            //                 }
            //             ]
            //         case types.REMOVE_STUDENT_FROM_STORE:
            //             return state.filter(student => student.id !== action.id)
            //         case types.LOAD_STUDENTS_FROM_DB:
            //             return action.students
            //         default:
            //             return state
            //         }
            // }
            
            // export default explicandosReducer;
            
            // const initialState = []