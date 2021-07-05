import { takeLatest, call, put } from "@redux-saga/core/effects"
import { addNewAssessment, fetchStudentFromDb } from "../../firebase"
import types, { setStudent } from "./actions"

function* newAssesmments({data}) {
    console.log(data)
    try {   
        yield call(addNewAssessment, data)
    } catch(e) {
        console.log(e)
    }
}

function* getStudent({id}) {
    try {
        const studentInfo = yield call(fetchStudentFromDb, id);
        const dataToSet = {
            studentInfo,
            id
        }
        yield put(setStudent(dataToSet))
    } catch(e) {
        console.log(e)
    }
}

export default function* studentSagas() {
    yield takeLatest(types.GET_STUDENT, getStudent)
    yield takeLatest(types.NEW_ASSESSMENT, newAssesmments)
}