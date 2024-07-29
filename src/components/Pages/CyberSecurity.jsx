import React from 'react'
import { Card } from 'react-bootstrap'

export const CyberSecurity = () => {
  return (
    <div className="card-container">
      <Card className="blog-card">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/CS- 1.webp" />
        <Card.Body>
          <Card.Title>Non-Coding Jobs in Cybersecurity: A Comprehensive Guide</Card.Title>
          <Card.Text>
          By Jaishree Tomar <br></br>
          26 Mar, 2024
          </Card.Text>
        </Card.Body>
      </Card>
      </Card>
      <Card className="blog-card">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/CS- 2.webp" />
        <Card.Body>
          <Card.Title>Cybersecurity Vs Ethical Hacking: Top 10 Differences</Card.Title>
          <Card.Text>
          By Tushar Vinocha <br></br>
          16 Apr, 2024
          </Card.Text>
        </Card.Body>
      </Card>
      </Card>
      <Card className="blog-card">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/CS- 3.webp" />
        <Card.Body>
          <Card.Title>8 Different Types of Cybersecurity and Threats Involved</Card.Title>
          <Card.Text>
          By Tushar Vinocha <br></br>
          25 Mar, 2024
          </Card.Text>
        </Card.Body>
      </Card>
      </Card>
    </div>
  )
}
