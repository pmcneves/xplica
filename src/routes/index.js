import { createBrowserHistory } from 'history';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Header from '../containers/Header/Header';
import ExplicadorMenu from '../screens/Explicador';
import NewStudent from '../screens/NewStudent';
import Student from '../screens/Student';
import Error from '../screens/Error'

export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/alun@s" component={ExplicadorMenu}/>
                <Route path="/adicionaralun@" component={NewStudent}/>
                <Route path="/alun@/:id" component={Student}/>
                <Route component={Error}/>
            </Switch>
            {/* <Route render={({location})=>(
                <TransitionGroup>
                    <CSSTransition timeout={300} className="fade" key={location.key}>
                        <Switch location={location}>
                            <Route path="/alun@s" component={ExplicadorMenu}/>
                            <Route path="/adicionaralun@" component={NewStudent}/>
                            <Route path="/alun@/:id" component={Student}/>
                            <Route component={Error}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}/> */}
            
            
        </BrowserRouter>
    )
}

export default AppRouter
