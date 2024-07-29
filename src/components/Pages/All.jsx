import React from 'react'
import { Card } from 'react-bootstrap'




export const All = () => {
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
      <Card.Img variant="top" src="src/assets/DS-1.webp" />
        <Card.Body>
          <Card.Title>Top 10 High Paying Non-Coding Jobs in Data Science in 2024</Card.Title>
          <Card.Text>
          By Isha Sharma <br></br>
          23 Jul, 2024
          </Card.Text>
        </Card.Body>
      </Card>
      </Card>
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
  </div>
  )
}
