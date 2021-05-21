import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyB0hQrRpj8qbgb6mkLbDStRxdwOjUhHpd8",
  authDomain: "xplica-93d61.firebaseapp.com",
  projectId: "xplica-93d61",
  storageBucket: "xplica-93d61.appspot.com",
  messagingSenderId: "571632396238",
  appId: "1:571632396238:web:6339aeb2b8f03c1aaced9f"
  };

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export const addStudentToDb = async (student) => await database.ref(`/students/${student.id}`).set(student.info);

export const removeStudentFromDb = async (id) => await database.ref(`/students/${id}`).remove()

export const fetchStudentsFromDb = async () => await database
  .ref('students')
  .once("value")
  .then(snapshot=> {
    const students = []
    snapshot.forEach(childSnapshot => {
      students.push({id: childSnapshot.key, info: childSnapshot.val()})
    })
    return students
  })
