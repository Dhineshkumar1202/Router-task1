import React from 'react';
import { Card } from 'react-bootstrap';
import dsImage1 from '../../assets/images-3/DS-1.webp';
import dsImage2 from '../../assets/images-3/DS-2.webp';
import dsImage3 from '../../assets/images-3/DS-3.webp';

export const DataScience = () => {
  return (
    <div className="card-container">
      <Card className="blog-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={dsImage1} />
        <Card.Body>
          <Card.Title>Top 10 High Paying Non-Coding Jobs in Data Science in 2024</Card.Title>
          <Card.Text>
            By Isha Sharma <br />
            23 Jul, 2024
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="blog-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={dsImage2} />
        <Card.Body>
          <Card.Title>12 Real-World Data Science Examples: Power Of Data Science</Card.Title>
          <Card.Text>
            By Lukesh S <br />
            25 Mar, 2024
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="blog-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={dsImage3} />
        <Card.Body>
          <Card.Title>Can A Commerce Student Do Data Science?</Card.Title>
          <Card.Text>
            By Saakshi Priyadarshini <br />
            16 Apr, 2024
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
