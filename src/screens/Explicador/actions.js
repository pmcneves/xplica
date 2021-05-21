const types = {
    ADD_STUDENT: 'ADD_STUDENT',
    ADD_STUDENT_TO_STORE: 'ADD_STUDENT_TO_STORE',
    REMOVE_STUDENT: 'REMOVE_STUDENT',
    REMOVE_STUDENT_FROM_STORE:'REMOVE_STUDENT_FROM_STORE',
    LOAD_STUDENTS:'LOAD_STUDENTS',
    LOAD_STUDENTS_FROM_DB:'LOAD_STUDENTS_FROM_DB',
}
export default types

export const removeStudentFromStore = (id) => ({
    type: types.REMOVE_STUDENT,
    id
})

export const loadStudentsFromDb = (students) => ({
    type: types.LOAD_STUDENTS,
    students
})

export const addStudent = (student={}) => ({
    type: types.ADD_STUDENT,
    student
})