const types = {
    SUBMIT_STUDENT: 'SUBMIT_STUDENT'
}

export default types

export const submitStudent = (data) => ({
    type: types.SUBMIT_STUDENT,
    data
})