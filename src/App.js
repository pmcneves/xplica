import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles.scss'

import 'react-dates/lib/css/_datepicker.css';
import { Provider } from 'react-redux';
import AppRouter from './routes'
import configureStore from './store/configureStore';
import { setUserUid } from './screens/Login/actions';

const store = configureStore();
const uid = localStorage.getItem('uid')

if (uid) {
  store.dispatch(setUserUid(uid))
}

const Xplica = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default Xplica;
