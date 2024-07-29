import React from 'react'
import { Card } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';



export const Career = () => {
  return  <div className="card-container" >
    <Card className="blog-card">
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="src/assets/Ca-1.webp" />
  <Card.Body>
    <Card.Title>Data Engineering Course with Bigdata and Hadoop</Card.Title>
    <Card.Text>
    Available in <b>English</b>
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroup.Item>EMI Options Available</ListGroup.Item>
    <ListGroup.Item>Placement Guidance</ListGroup.Item>
    <ListGroup.Item>1:1 Mentor Doubt Clearing Sessions</ListGroup.Item>
  </ListGroup>
  <button>know More..</button>
</Card>
</Card>
<Card className="blog-card">
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="src/assets/Ca-2.jpg" />
  <Card.Body>
    <Card.Title>AutoCAD Course Mechanical Engineers</Card.Title>
    <Card.Text>
    Available in <b>English</b> <b>Tamil</b>
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroup.Item>EMI Options Available</ListGroup.Item>
    <ListGroup.Item>Placement Guidance</ListGroup.Item>
    <ListGroup.Item>1:1 Mentor Doubt Clearing Sessions</ListGroup.Item>
  </ListGroup>
  <button>know More..</button>
</Card>
</Card>
<Card className="blog-card">
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="src/assets/Ca-3.jpeg" />
  <Card.Body>
    <Card.Title>AutoCAD Course for Civil Engineers</Card.Title>
    <Card.Text>
    Available in <b>English</b> <b>Tamil</b>
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroup.Item>EMI Options Available</ListGroup.Item>
    <ListGroup.Item>Placement Guidance</ListGroup.Item>
    <ListGroup.Item>1:1 Mentor Doubt Clearing Sessions</ListGroup.Item>
  </ListGroup>
  <button>know More..</button>
</Card>
</Card>
</div>
}
