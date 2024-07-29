import React from 'react';
import Card from 'react-bootstrap/Card';

export const FullStackDevelopment = () => {
  return (
    <div className="card-container">
      <Card className="blog-card">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/FSD-1.jpg" />
        <Card.Body>
          <Card.Title>Best Full-Stack Development Project Ideas in 2024</Card.Title>
          <Card.Text>
          By Isha Sharma <br></br>
          23 Jul, 2024
        </Card.Text>
        </Card.Body>
      </Card>
      </Card>
      <Card className="blog-card">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/FSD-2.webp" />
        <Card.Body>
          <Card.Title>How Long Would It Take to Be a Full Stack Developer?</Card.Title>
          <Card.Text>
          By Meghana D <br></br>
          26 Mar, 2024
          </Card.Text>
        </Card.Body>
      </Card>
      </Card>
      <Card className="blog-card">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/FSD-3.webp" />
        <Card.Body>
          <Card.Title>7 Unique Web Development Project Ideas for Beginners</Card.Title>
          <Card.Text>
          By Lukesh S <br></br>
          02 Apr, 2024
          </Card.Text>
        </Card.Body>
      </Card>
      </Card>
    </div>
  );
};
