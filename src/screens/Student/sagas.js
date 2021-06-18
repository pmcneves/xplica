import { takeLatest, call, put } from "@redux-saga/core/effects"
import { fetchStudentFromDb } from "../../firebase"
import types, { setStudent } from "./actions"

function* getStudent({id}) {
    try {
        const studentInfo = yield call(fetchStudentFromDb, id);
        yield put(setStudent(studentInfo))
    } catch(e) {
        console.log(e)
    }
}

export default function* studentSagas() {
    yield takeLatest(types.GET_STUDENT, getStudent)
}