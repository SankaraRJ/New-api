import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ListGroup from 'react-bootstrap/ListGroup';
function Footer() {
  return (
    <div >
   
    <Row className='footer'>
        <Col >
<h3 className='text-center my-4'>Contact-Us</h3 >
<ListGroup horizontal  >
      <ListGroup.Item ><img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt='insta' width={30} height={30} /></ListGroup.Item>
      <ListGroup.Item>
<img src="https://cdn-icons-png.flaticon.com/128/5968/5968534.png" alt='insta' width={30} height={30} /></ListGroup.Item>
      <ListGroup.Item><img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt='insta' width={30} height={30} /></ListGroup.Item>
      <ListGroup.Item>
<img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt='insta' width={30} height={30} /></ListGroup.Item>
    </ListGroup>



        </Col>
    </Row>
   
    </div>
  )
}

export default Footer