import './styles.scss'
import FontAwesomeIcons from '../../components/Buttons/FontAwesomeIcons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <div className="container">
                    <NavbarBrand>
                        <h2>Xplica</h2>
                    </NavbarBrand>
                    <div>
                        <ul className="navbar-nav">
                            <LinkContainer to="/alun@s">
                                <Nav.Link> Alun@s </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/adicionaralun@">
                                <Nav.Link> Adicionar alun@ </Nav.Link>
                            </LinkContainer>
                            {/* <Nav.Link> */}
                                <button>Logout</button>
                            {/* </Nav.Link> */}
                        </ul>
                        
                        
                        
                    </div>
                </div>
            </Navbar>
            {/* <nav className="navbar navbar-dark bg-dark">
                
            </nav> */}
        </header>
    )
}

export default Header
