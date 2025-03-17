import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
   <>
   <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly'>
    <Row>

      <Col>
       <h3 className='textStyle'>WELCOME TO <span style={{color : "#FFD43B"}}>MEDIA PLAYER</span> </h3>
       <p className='textStyle mt-3' style={{textAlign : "justify"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam deserunt soluta deleniti?
         Earum quidem omnis corporis ratione soluta nulla asperiores eius reprehenderit necessitatibus,
          animi saepe quas, excepturi labore? Consectetur, natus. Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Cumque veritatis consectetur, repellendus, quod mollitia cupiditate vero natus 
           dolorem aperiam qui quaerat officia fugiat minima, nihil ipsam. Aliquid sapiente delectus nostrum!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea libero placeat delectus, ad nobis ipsa
             perferendis voluptatibus excepturi veniam quasi, amet doloribus dolor aperiam? Ad consequatur quam quas atque tempora?</p>
             <Link to={'/home'}>
             <button className='btn btn-warning mt-3' style={{fontWeight : "600"}}>GET STARTED <i className ="fa-solid fa-arrow-right ms-2" style={{color : "black", backgroundColor :"#FFD43B"}}></i></button>
             </Link>
             
            
      </Col>
      
      <Col>
<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3k0c2Qza3p1aGlneXhsbGlhZXh1bTlyM3k0bXE1dTg1ZjVhNWZ0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5nopImfsweWaLdox1i/giphy.gif" alt="" style={{width :"600px", borderRadius : "20px"}} className='ms-5' />
      </Col>

    </Row>
   </Container>

   {/* second section features */}
   <div className='container'>
    <h3 className='textStyle'>FEATURES </h3>
    <div className='d-flex align-items-center justify-content-evenly mt-5'>
    <Card data-bs-theme = 'dark' style={{ width: '18rem', border : "none", borderColor : "grey"   }}>
      <Card.Img variant="top" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmF3azVzYWw3dzMzM3Buemd6OHZ2OWlwNmRscmJ2d2dwbndrdmdqZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fs0amEdNlgx1w5YFCm/giphy.gif" />
      <Card.Body>
        <Card.Title style={{color : "#FFD43B"}}>ADD VIDEO</Card.Title>
        <Card.Text className='textStyle'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  className='btn btn-warning'>ADD</Button>
      </Card.Body>
    </Card >
    <Card data-bs-theme = 'dark' style={{ width: '18rem', border : "none", borderColor : "grey"   }}>
      <Card.Img variant="top" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHp4NW43MnJkdWZhOXM0aGJoNzgyMTQ4a3QzNHpvanBpN2s2aHBxMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RKK5M1Oy8C62VJk80U/giphy.gif" />
      <Card.Body>
        <Card.Title style={{color : "#FFD43B"}}>VIEW VIDEO</Card.Title>
        <Card.Text className='textStyle'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  className='btn btn-warning'>VIEW</Button>
      </Card.Body>
    </Card>
    <Card data-bs-theme = 'dark' style={{ width: '18rem', border : "none", borderColor : "grey"  }}>
      <Card.Img variant="top" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3ZnZ2JiaW8wczJ4c3F0cGh4NTg4ZGxpZ3UwbmU3bjJ3b3k4dHd4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bc1NdE5z7TdM71wGs1/giphy.gif" />
      <Card.Body>
        <Card.Title style={{color : "#FFD43B"}}>WATCH HISTORY</Card.Title>
        <Card.Text className='textStyle'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={'/watch'}>
   <Button className='btn btn-warning'>HISTORY</Button>
   </Link>
        
      </Card.Body>
    </Card>
   

    </div>
   </div>

   {/* Third Section */}
   <div style={{border : "solid", borderColor : "blac"}} className='container mt-5 mb-5   rounded p-5'>
    <Row>

      <Col>
      <h3 style={{color : "#FFD43B"}} className='mb-4'>SIMPLE & POWERFUL</h3>
      <p className='textStyle'><span className='textStyle fs-5 fw-bolder'>PLAY EVERYTHING : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dignissimos facilis consequatur recusandae ducimus saepe, alias, 
      quibusdam, vero ea accusamus quaerat? Eligendi unde nihil, facere porro earum aliquid sint quod.</p>
      <p className='textStyle'><span className='textStyle fs-5 fw-bolder'>PLAY EVERYTHING : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dignissimos facilis consequatur recusandae ducimus saepe, alias, 
      quibusdam, vero ea accusamus quaerat? Eligendi unde nihil, facere porro earum aliquid sint quod.</p>
      <p className='textStyle'><span className='textStyle fs-5 fw-bolder'>PLAY EVERYTHING : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dignissimos facilis consequatur recusandae ducimus saepe, alias, 
      quibusdam, vero ea accusamus quaerat? Eligendi unde nihil, facere porro earum aliquid sint quod.</p>
      </Col>
      

      <Col>
      <div>
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/tOM-nWPcR4U" title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      </Col>

    </Row>
   </div>
   </>
  )
}

export default LandingPage
