const types = {
    GET_STUDENT: 'GET_STUDENT',
    SET_STUDENT: 'SET_STUDENT'
}

export default types

export const getStudent = (id) => ({
    type: types.GET_STUDENT,
    id
})

export const setStudent = (student) => ({
    type: types.SET_STUDENT,
    student
})