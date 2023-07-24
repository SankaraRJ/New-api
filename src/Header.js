import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faTrophy,faAddressBook,faImage } from '@fortawesome/free-solid-svg-icons'






function Header() {
  return (
    <Navbar expand="lg" className="bg-body-secondary" bg='light' data-bs-theme="light" fixed="top">
    <Container fluid  className=''>
      <Navbar.Brand href="#" >
      <img src={"https://logos-world.net/wp-content/uploads/2020/04/Barcelona-Logo.png"} alt="img" width={50} height={30} />FC Barcelona</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className='justify-content-center' >
        <Nav
          className="ml-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
          
        >
          <Nav.Link  className='nav-item' href="#action1">
          <FontAwesomeIcon icon={faHouse}  />Home</Nav.Link>
          <Nav.Link className='nav-item' href="#action2">
          <FontAwesomeIcon icon={faImage} />Top Picks</Nav.Link>
          <Nav.Link  className='nav-item' href="#action3">
          <FontAwesomeIcon icon={faTrophy}  style={{"--fa-secondary-color": "#511f1f",}}  />Achievements</Nav.Link>
          <Nav.Link className='nav-item' href="#action4">
          <FontAwesomeIcon icon={faAddressBook}  style={{"--fa-primary-opacity": "1", "--fa-secondary-opacity": "0.2",}} />Contact</Nav.Link>
          
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

  
}

export default Header;

        
   