import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles.scss'
import { Provider } from 'react-redux';
import AppRouter from './routes'
import configureStore from './store/configureStore';
import { loggingInToStore } from './screens/Login/actions';
import { fetchStudentsFromDb } from './firebase';
import { loadStudentsFromDb } from './screens/Explicador/actions';
import firebase from 'firebase/app'
import 'firebase/auth'


const store = configureStore();

const fetchStudents = async () => {
  const students = await fetchStudentsFromDb()
  store.dispatch(loadStudentsFromDb(students))
}
fetchStudents()

// firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//         store.dispatch(loggingInToStore(user.uid))
//     } 
//   })


const Xplica = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default Xplica;
