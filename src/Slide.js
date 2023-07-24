import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  return (
    <div>
    <Container className='my-4'>
                <Row className='text-center'>
                    <Col>
                        <h1 className='h1'>Achievements</h1>
                    </Col>
                </Row>
            </Container>
  <Container className='my-4'>
    <Row>
        <Col>
        <Carousel fade>
<Carousel.Item >
<img className='d-block w-100' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXsgclNmJTqKsMKkgLOw-HM8VITwQ9tfkdMYnD8WiF1KfbvaPNg889GUmC20BmjHH6ke3jiONRp13GSq6vFw4Mg3m9T1Cz7-zAxXo8aK7IEVY7hnbJnLDYqN4Tkym-HqalgD2PPnV6Gogukby1L9Lw0hGYnkdVxL0OpCNDbYpBs9OEnOfFr1JYhIi-/s1000/barcelona%20to%20change%20logo%20%282%29.png" />
<Carousel.Caption>
<h3>First slide label</h3>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img className='d-block w-100' src="https://www.fcbarcelona.com/photo-resources/2019/03/12/304ae4e8-6c40-4e91-a01f-b9c85767bf10/uAnwfqJX.jpghttps://www.fcbarcelona.com/photo-resources/2019/03/12/304ae4e8-6c40-4e91-a01f-b9c85767bf10/uAnwfqJX.jpg?width=1200&height=750" />
<Carousel.Caption>
<h3>Second slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img className='d-block w-100' src="https://d3nfwcxd527z59.cloudfront.net/content/uploads/2021/10/22121117/Lionel-Messi-Barcelona-Real-Madrid-2017.jpg" />
<Carousel.Caption>
<h3>Third slide label</h3>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur.
</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img className='d-block w-100' src="https://www.fcbarcelona.com/photo-resources/2019/02/27/aa3967a5-bc26-4978-bb24-c846a711b8ec/zZDvzczk.jpg?width=1200&height=750" />
<Carousel.Caption>
<h3>Third slide label</h3>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur.
</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img className='d-block w-100' src="https://www.fcbarcelonanoticias.com/uploads/s1/20/61/08/barca-206108.jpeg" />
<Carousel.Caption>
<h3>Third slide label</h3>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur.
</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img className='d-block w-100' src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2015/08/31/1678901-35576577-2560-1440.jpg" />
<Carousel.Caption>
<h3>Third slide label</h3>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur.
</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img className='d-block w-100' src="https://katalonien-tourismus.de/wp-content/uploads/2020/12/camp-nou-som-un-equip.jpg" />
<Carousel.Caption>
<h3>Third slide label</h3>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur.
</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
        </Col>
    </Row>
</Container>
    </div>
  
  )
}

export default Slide