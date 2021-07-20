import { takeLatest, call, put, select } from "@redux-saga/core/effects"
import { addNewAssessment, deleteAssessmentFromDb, fetchStudentFromDb } from "../../firebase"
import types, { setStudent } from "./actions"
import { getAssessmentSlice } from './selectors';

function* deleteAssessment({ids}) {
    try {
        yield call(deleteAssessmentFromDb, ids )
        const state = yield select(getAssessmentSlice)
        const selectingAssessments = state.filter(assessment=>assessment.id !== ids.id)       
        yield put({type: types.DELETE_ASSESSMENT, selectingAssessments})
    } catch(e) {
        console.log(e)
    }
}

function* newAssesmments({newAssessment}) {
    const assessment = {
        ...newAssessment.assessmentInfo,
        id: newAssessment.assessmentId,
    }
    try {   
        yield call(addNewAssessment, newAssessment)
        yield put({type:types.SET_ASSESSMENT, assessment})
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
    yield takeLatest(types.REMOVE_ASSESSMENT_SPY, deleteAssessment)
}