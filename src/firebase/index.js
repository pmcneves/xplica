import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB0hQrRpj8qbgb6mkLbDStRxdwOjUhHpd8",
  authDomain: "xplica-93d61.firebaseapp.com",
  projectId: "xplica-93d61",
  storageBucket: "xplica-93d61.appspot.com",
  messagingSenderId: "571632396238",
  appId: "1:571632396238:web:6339aeb2b8f03c1aaced9f"
  };

const app = () => !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app()

app()


const database = firebase.database()
const auth = firebase.auth()

export const addNewAssessment = async (newAssessment) => await database
  .ref(`students/${newAssessment.currentStudentId}/assessments/${newAssessment.assessmentId}`)
  .set(newAssessment.assessmentInfo)

export const deleteAssessmentFromDb = async ids => await database
.ref(`/students/${ids.currentStudentId}/assessments/${ids.id}`)
.remove()

export const addStudentToDb = async student => await database
  .ref(`/students/${student.id}`)
  .set(student.info);

export const removeStudentFromDb = async id => await database
.ref(`/students/${id}`)
.remove()

export const fetchStudentsFromDb = async () => await database
  .ref(`students`)
  .once("value")
  .then(snapshot=> {
    const students = []
    snapshot.forEach(childSnapshot => {
      students.push({
        id: childSnapshot.key, 
        info: {
          ...childSnapshot.val(),
        }
      })
    })
    return students
  })

export const fetchStudentFromDb = async id => await database
  .ref(`students/${id}`)
  .once("value")
  .then(snapshot => {
    const student = snapshot.val();
    if(student.assessments) {
      student.assessments = Object.keys(student.assessments).map(key=>({
        ...student.assessments[key],
        id: key
    }))}
    return student
  })

export const logInToApp = async (data) => await auth
  .signInWithEmailAndPassword(data.email, data.password)
  .then(user => user)


export const logOutFromApp = async () => await auth.signOut()
