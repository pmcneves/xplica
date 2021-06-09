import { useSelector } from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const PublicRoute = ({component: Component, ...rest}) => {
    const auth = useSelector(state => state.auth)
    if (!auth) return;
    return (
        <Route {...rest} component={props => !!auth.uid ? <Redirect to="/alun@s"/>  : <Component {...props}/> }/>
    )
}

export default PublicRoute