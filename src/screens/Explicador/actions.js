const types = {
    GET_STUDENTS: 'GET_STUDENTS',
    SET_STUDENTS: 'SET_STUDENTS',
    SUBMIT_STUDENT: 'SUBMIT_STUDENT',
    REMOVE_STUDENT: 'REMOVE_STUDENT',
    ADD_STUDENT: 'ADD_STUDENT',
}
export default types

export const getStudents = () => ({ 
    type: types.GET_STUDENTS,
})

export const setStudents = (students) => ({
    type: types.SET_STUDENTS,
    students,
})

export const submitStudent = (data) => ({
    type: types.SUBMIT_STUDENT,
    data,
})

export const addStudent = (data) => ({
    type: types.ADD_STUDENT,
    data
})

export const removeStudent = (id) => ({
    type: types.REMOVE_STUDENT,
    id,
})