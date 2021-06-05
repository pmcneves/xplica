import './styles.scss'
import FontAwesomeIcons from '../../components/Buttons/FontAwesomeIcons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch } from 'react-redux'
import { loggingOutFromStore } from '../../screens/Login/actions'


const Header = () => {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(loggingOutFromStore())
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <div className="container">
                    <NavbarBrand>
                        <h2 className="navbar__logo">Xplica</h2>
                    </NavbarBrand>
                    <div>
                        <ul className="navbar-nav">
                            <LinkContainer to="/alun@s">
                                <Nav.Link> Alun@s </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/adicionaralun@">
                                <Nav.Link> Adicionar alun@ </Nav.Link>
                            </LinkContainer>
                            <NavDropdown title={<FontAwesomeIcons icon={faCog} classes={"btn-cog"}/>} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.3">Perfil</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout}>Terminar sessão</NavDropdown.Item>
                            </NavDropdown>
                        </ul>
                        
                        
                        
                    </div>
                </div>
            </Navbar>
        </header>
    )
}

export default Header
