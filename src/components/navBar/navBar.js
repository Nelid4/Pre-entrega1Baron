import './navBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/cartWidget';
import LogoPerico from '../assets/img/logo.png'

function BasicExample() {
  return (
    <div className='encabezado'>    
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img className='LogoPerico' src={LogoPerico} alt='logo, rojo, con un perico en el medio' width={155}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Contactanos</Nav.Link>
            <NavDropdown title="Catalogo de Libros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Libros Usados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Libros Nuevos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Todos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Carrito"><CartWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    
    </Navbar>
    </div>

  );
}

export default BasicExample;