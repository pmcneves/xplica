import { useSelector } from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import Header from '../containers/Header/Header'

const PrivateRoute = ({component: Component, ...rest}) => {
    const auth = useSelector(state => state.auth)
    console.log(!!auth.uid)
    return (
        <Route {...rest} component={props => (
            !!auth.uid ? (
                <div>
                    <Header />
                    <Component {...props}/> 
                </div>
            ) : (
                <Redirect to="/"/>
            )
        )}/> 
    )
}

export default PrivateRoute