import { createBrowserHistory } from 'history';
import { BrowserRouter, Switch } from 'react-router-dom';
import ExplicadorMenu from '../screens/Explicador';
import NewStudent from '../screens/NewStudent';
import Student from '../screens/Student';
import Error from '../screens/Error'
import Login from '../screens/Login'
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute'
import Profile from '../screens/Profile';


export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute path="/" exact component={Login}/> 
                <PrivateRoute path="/alun@s" component={ExplicadorMenu}/>
                <PrivateRoute path="/adicionaralun@" component={NewStudent}/>
                <PrivateRoute path="/profile" component={Profile}/>
                <PrivateRoute path="/alun@/:id" component={Student}/>
                <PrivateRoute component={Error}/>) 
            </Switch>        
        </BrowserRouter>
    )
}

export default AppRouter
