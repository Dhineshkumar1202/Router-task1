import React from 'react';
import { Card } from 'react-bootstrap';

import fsdImage from '../../assets/images-4/FSD-1.jpg';
import dsImage from '../../assets/images-3/DS-1.webp';
import csImage from '../../assets/images-2/CS- 1.webp';

export const All = () => {
  return (
    <div className="card-container">
      <Card className="blog-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={fsdImage} />
        <Card.Body>
          <Card.Title>Best Full-Stack Development Project Ideas in 2024</Card.Title>
          <Card.Text>
            By Isha Sharma <br />
            23 Jul, 2024
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="blog-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={dsImage} />
        <Card.Body>
          <Card.Title>Top 10 High Paying Non-Coding Jobs in Data Science in 2024</Card.Title>
          <Card.Text>
            By Isha Sharma <br />
            23 Jul, 2024
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="blog-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={csImage} />
        <Card.Body>
          <Card.Title>Non-Coding Jobs in Cybersecurity: A Comprehensive Guide</Card.Title>
          <Card.Text>
            By Jaishree Tomar <br />
            26 Mar, 2024
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
