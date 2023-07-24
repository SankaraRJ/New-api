import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from "../src/image/mig2.jpg";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
function Body() {
   
  return (
    <Container className="grid-layout my-4" fluid='md' >
    <Row className='align-items-center'>
    <Col className='colum-style' xs={12} md={12} lg={6} xl={7} ><img src={"https://www.sportco.io/images/post/ez_1616753227.jpg"}  className='img-fluid rounded' alt='img'  /></Col>
        <Col className='main-text display-4' xs={12} md={8} lg={6} xl={5}> Barcelona Official page
        <div>
        {' '} <Button  size="lg" variant="outline-info">
        <Spinner animation="grow" variant="info" size='sm'/>Our Culture</Button>
        </div>
        </Col>
    </Row>
  </Container>
  )
}

export default Body;