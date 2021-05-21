import { createBrowserHistory } from 'history';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ExplicadorMenu from '../screens/Explicador';
import Student from '../screens/Student';

export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ExplicadorMenu} exact/>
                <Route path="/:id" component={Student}/>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
