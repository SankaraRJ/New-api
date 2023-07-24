import React from 'react'
import {Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function Middle() {
    return (

        <div>
            <Container className='my-4'>
                <Row className='text-center'>
                    <Col>
                        <h1 className='h1'>Top Picks</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <CardGroup >
                    <Row>
                        <Col md={6}
                            lg={3}
                            xl={3}
                            sm={12}
                            xm={12}
                            className='my-4' >
                            <Card>
                                <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/kTfVo4QI1SfDbT5U8SgKsN71-5E=/0x0:5472x3648/1200x800/filters:focal(2270x2150:3144x3024)/cdn.vox-cdn.com/uploads/chorus_image/image/71546613/1240000173.0.jpg"/>
                                <Card.Body>
                                    <Card.Title>Tickets</Card.Title>
                                    <Badge bg="primary" className='mb-4'>More-Info</Badge>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                                  to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="outline-primary" className='mb-4'>Primary</Button>
                                {' '}
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md={6}
                            lg={3}
                            xl={3}
                            sm={12}
                            xm={12}
                            className='my-4'>
                            <Card>
                                <Card.Img variant="top" src="https://images2.minutemediacdn.com/image/fetch/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1257400156.jpeg"/>
                                <Card.Body>
                                    <Card.Title>Management</Card.Title>
                                    <Badge bg="primary" className='mb-4'>More-Info</Badge>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                                  to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="outline-primary" className='mb-4'>Primary</Button>
                                {' '}
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md={6}
                            lg={3}
                            xl={3}
                            sm={12}
                            xm={12}
                            className='my-4'>
                            <Card>
                                <Card.Img variant="top" src="https://imageio.forbes.com/specials-images/imageserve/6474565b2377758094569955/FC-Barcelona-could-still-be-temporarily-suspended-from-the-Champions-League-/960x0.jpg?format=jpg&width=960"/>
                                <Card.Body>
                                    <Card.Title>Champions-League</Card.Title>
                                    <Badge bg="primary" className='mb-4'>More-Info</Badge>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                                  to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="outline-primary" className='mb-4'>Primary</Button>
                                {' '}
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md={6}
                            lg={3}
                            xl={3}
                            sm={12}
                            xm={12}
                            className='my-4'>
                            <Card>
                                <Card.Img variant="top" src="https://imageio.forbes.com/specials-images/imageserve/1173330683/FC-Barcelona-Femeni-v-CD-Tacon---Primera-Iberdrola/960x0.jpg?format=jpg&width=960"/>
                                <Card.Body>
                                    <Card.Title>Champions-League</Card.Title>
                                    <Badge bg="primary" className='mb-4'>More-Info</Badge>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                                  to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="outline-primary"  className='mb-4'>Primary</Button>
                                {' '}
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>

                    </Row>

                </CardGroup>

            </Container>
           
        </div>


    )
}

export default Middle;
