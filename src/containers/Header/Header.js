import './styles.scss'
import FontAwesomeIcons from '../../components/Buttons/FontAwesomeIcons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Nav, Navbar, NavbarBrand, NavDropdown, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch } from 'react-redux'
import { logOut } from '../../screens/Login/actions'


const Header = () => {
    const dispatch = useDispatch()

    const logout = () => dispatch(logOut())

    return (
        <header>
            <Navbar collapseOnSelect expand='sm' bg="dark" variant="dark">
                <Container>
                    <NavbarBrand>
                        <h2 className="navbar__logo">Xplica</h2>
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <div>
                            <ul className="navbar-nav">
                                <LinkContainer to="/adicionaralun@">
                                    <Nav.Link> Adicionar alun@ </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/alun@s">
                                    <Nav.Link> Alun@s </Nav.Link>
                                </LinkContainer>
                                <Nav.Link onClick={logout}> Terminar sessão </Nav.Link>
                            </ul>
                            
                            
                            
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
