import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navba.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchit } from '../slices/Searchslice';


export default function Tonavbar() {
  let[search,setSearch]=useState("")
  let nav=useNavigate()
  let dispatch =useDispatch();
  let searchbtn=()=>{
    // console.log(search)
    dispatch(searchit(search));
    nav("/search")
  }
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
            <Nav.Link as={Link} to="/" className='active'>Home</Nav.Link>
            <Nav.Link  as={Link} to="about" >Booking</Nav.Link>
            <NavDropdown title="Salon Own Only" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/signUp" >SignUp</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/login" >
                Login
              </NavDropdown.Item>
             
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 bg-light text-dark searchbarinput"
              data-bs-theme="dark"
              name="search"
              onChange={(e)=>{setSearch(e.target.value)}}

            />
            <Button variant="outline-success" className='btnsearchbar' onClick={searchbtn} >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}
