import React from 'react'
import Card from 'react-bootstrap/Card';


export const DataScience = () => {
  return (
    <div className="card-container">
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
      <Card.Img variant="top" src="src/assets/DS-2.webp" />
        <Card.Body>
          <Card.Title>12 Real-World Data Science Examples: Power Of Data Science</Card.Title>
          <Card.Text>
          By Lukesh S<br></br>
          25 Mar, 2024
          </Card.Text>
        </Card.Body>
      </Card>
      </Card >
      <Card className="blog-card">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/DS-3.webp" />
        <Card.Body>
          <Card.Title>Can A Commerce Student Do Data Science?</Card.Title>
          <Card.Text>
          By Saakshi Priyadarshini <br></br>
          16 Apr, 2024
          </Card.Text>
        </Card.Body>
      </Card>
      </Card>
    </div>
  )
}
