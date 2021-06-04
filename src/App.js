import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles.scss'
import { Provider } from 'react-redux';
import AppRouter from './routes'
import configureStore from './store/configureStore';
import { fetchStudentsFromDb, logInToApp } from './firebase';
import { loadStudentsFromDb } from './screens/Explicador/actions';


const store = configureStore();

const fetchStudents = async () => {
  const students = await fetchStudentsFromDb()
  store.dispatch(loadStudentsFromDb(students))
}
fetchStudents()


const Xplica = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default Xplica;
