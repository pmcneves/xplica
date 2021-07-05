const types = {
    GET_STUDENT: 'GET_STUDENT',
    SET_STUDENT: 'SET_STUDENT',
    ACTIVE_STUDENT: 'ACTIVE_STUDENT',
    NEW_ASSESSMENT: 'NEW_ASSESSMENT'
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

export const activeStudent = id => ({
    type: types.ACTIVE_STUDENT,
    id
})

export const newStudentAssessment = newAssessment => ({
    type: types.NEW_ASSESSMENT,
    newAssessment
})