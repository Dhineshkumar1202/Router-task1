import React from 'react';
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

import caImage1 from '../../assets/images-1/Ca-1.webp';
import caImage2 from '../../assets/images-1/Ca-2.jpg';
import caImage3 from '../../assets/images-1/Ca-3.jpeg';

export const Career = () => {
  return (
    <div className="card-container">
      <Card className="blog-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={caImage1} />
        <Card.Body>
          <Card.Title>Data Engineering Course with Bigdata and Hadoop</Card.Title>
          <Card.Text>
            Available in <b>English</b>
          </Card.Text>
          <hr />
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>EMI Options Available</ListGroup.Item>
          <ListGroup.Item>Placement Guidance</ListGroup.Item>
          <ListGroup.Item>1:1 Mentor Doubt Clearing Sessions</ListGroup.Item>
        </ListGroup>
        <button>Know More..</button>
      </Card>

      <Card className="blog-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={caImage2} />
        <Card.Body>
          <Card.Title>AutoCAD Course Mechanical Engineers</Card.Title>
          <Card.Text>
            Available in <b>English</b> <b>Tamil</b>
          </Card.Text>
          <hr />
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>EMI Options Available</ListGroup.Item>
          <ListGroup.Item>Placement Guidance</ListGroup.Item>
          <ListGroup.Item>1:1 Mentor Doubt Clearing Sessions</ListGroup.Item>
        </ListGroup>
        <button>Know More..</button>
      </Card>

      <Card className="blog-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={caImage3} />
        <Card.Body>
          <Card.Title>AutoCAD Course for Civil Engineers</Card.Title>
          <Card.Text>
            Available in <b>English</b> <b>Tamil</b>
          </Card.Text>
          <hr />
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>EMI Options Available</ListGroup.Item>
          <ListGroup.Item>Placement Guidance</ListGroup.Item>
          <ListGroup.Item>1:1 Mentor Doubt Clearing Sessions</ListGroup.Item>
        </ListGroup>
        <button>Know More..</button>
      </Card>
    </div>
  );
};
