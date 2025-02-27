import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../css/navba.css'

export default function Tonavbar() {
  return (
    <>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand  className='logo'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKs0xS60kYfv1LosA-6ge-dywWTVfJ7nSeJA&s" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="" className='active'>Home</Nav.Link>
            <Nav.Link  as={Link} to="" >Booking</Nav.Link>
            <NavDropdown title="Salon Own Only" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="" >Salon Own Only</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="" >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="" >
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 bg-light text-dark searchbarinput"
              data-bs-theme="dark"
              

            />
            <Button variant="outline-success" className='btnsearchbar'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}
