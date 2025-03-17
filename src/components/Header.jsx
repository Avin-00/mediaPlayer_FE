import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
       <Navbar className="bg-dark">
        <Container  style={{borderRadius : "10px"}}>
          <Navbar.Brand >
            <Link to={'/'} style={{textDecoration : "none"}}>
            <i class="fa-solid fa-video fa-beat-fade text-warning me-3"></i>
            <span style={{color : "white", fontWeight : "600"}}>MEDIA </span><span style={{color : "#FFD43B"}}>PLAYER</span>
            </Link>
          
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
