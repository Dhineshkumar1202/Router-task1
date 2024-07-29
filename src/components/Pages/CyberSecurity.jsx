import React from 'react';
import { Card } from 'react-bootstrap';
import csImage1 from '../../assets/images-2/CS- 1.webp';
import csImage2 from '../../assets/images-2/CS- 2.webp';
import csImage3 from '../../assets/images-2/CS- 3.webp';

export const CyberSecurity = () => {
  return (
    <div className="card-container">
      <Card className="blog-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={csImage1} />
        <Card.Body>
          <Card.Title>Non-Coding Jobs in Cybersecurity: A Comprehensive Guide</Card.Title>
          <Card.Text>
            By Jaishree Tomar <br />
            26 Mar, 2024
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="blog-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={csImage2} />
        <Card.Body>
          <Card.Title>Cybersecurity Vs Ethical Hacking: Top 10 Differences</Card.Title>
          <Card.Text>
            By Tushar Vinocha <br />
            16 Apr, 2024
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="blog-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={csImage3} />
        <Card.Body>
          <Card.Title>8 Different Types of Cybersecurity and Threats Involved</Card.Title>
          <Card.Text>
            By Tushar Vinocha <br />
            25 Mar, 2024
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
