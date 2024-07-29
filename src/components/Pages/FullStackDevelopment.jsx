import React from 'react';
import { Card } from 'react-bootstrap';
import fsdImage1 from '../../assets/images-4/FSD-1.jpg';
import fsdImage2 from '../../assets/images-4/FSD-2.webp';
import fsdImage3 from '../../assets/images-4/FSD-3.webp';

export const FullStackDevelopment = () => {
  return (
    <div className="card-container">
      <Card style={{ width: '18rem' }} className="blog-card">
        <Card.Img variant="top" src={fsdImage1} />
        <Card.Body>
          <Card.Title>Best Full-Stack Development Project Ideas in 2024</Card.Title>
          <Card.Text>
            By Isha Sharma <br />
            23 Jul, 2024
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }} className="blog-card">
        <Card.Img variant="top" src={fsdImage2} />
        <Card.Body>
          <Card.Title>How Long Would It Take to Be a Full Stack Developer?</Card.Title>
          <Card.Text>
            By Meghana D <br />
            26 Mar, 2024
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }} className="blog-card">
        <Card.Img variant="top" src={fsdImage3} />
        <Card.Body>
          <Card.Title>7 Unique Web Development Project Ideas for Beginners</Card.Title>
          <Card.Text>
            By Lukesh S <br />
            02 Apr, 2024
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
