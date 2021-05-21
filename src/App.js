import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import AppRouter from './routes'
import configureStore from './store/configureStore';
import { fetchStudentsFromDb } from './firebase';
import { loadStudentsFromDb } from './screens/Explicador/actions';


const store = configureStore();

const lol = async () => {
  const loleca = await fetchStudentsFromDb()
  store.dispatch(loadStudentsFromDb(loleca))
}
lol()

const Xplica = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default Xplica;
