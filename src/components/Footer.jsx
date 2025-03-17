import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='d-flex justify-content-center align-item-center mt-5 bg-dark p-3'>
                <div className='d-flex align-item-center justify-content-evenly p-3 ' style={{borderRadius : "30px"}}>
                    <div className='overview' style={{ width: "400px" }}>
                        <h5> <i class="fa-solid fa-video fa-beat-fade text-warning me-3 ms-3 "></i>
                            <span style={{ color: "white", fontWeight: "600" }}>MEDIA </span><span style={{ color: "#FFD43B" }}>PLAYER</span>
                            <p className='mt-3 ms-3' style={{ color: "white", fontWeight: "200", textAlign: "justify", fontSize: "20px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus a expedita dicta sequi repellat porro cupiditate ipsam. Quo modi nisi, fuga, exercitationem facilis nam quidem suscipit, sunt excepturi nostrum quae.</p>
                        </h5>
                    </div>

                    <div className='links d-flex flex-column ms-5' style={{ color: "white" }}>
                        <h4 style={{ color: "#FFD43B", fontWeight: "300", fontSize: "20px" }}>LINKS</h4>

                        <Link to={'/'} style={{textDecoration : "none", color : "white"}}>LANDING PAGE</Link>

                        <Link to={'/home'} style={{textDecoration : "none", color : "white"}} >HOME</Link>

                        <Link to={'/watch'} style={{textDecoration : "none", color : "white"}} >WATCH HISTORY</Link>

                    </div>

                    <div className='links d-flex flex-column ms-5' style={{ color: "white" }}>
                        <h4 style={{ color: "#FFD43B", fontWeight: "300", fontSize: "20px" }}>GUIDES</h4>
                        <a href="https://react.dev/" target='blank' style={{color : "white", textDecoration : "none"}}>REACT</a>
                        <a href="https://react-bootstrap.netlify.app/" target='blank' style={{textDecoration : " none", color : "white"}}>REACT BOOTSTRAP</a>
                        <a href="https://fontawesome.com/" target='blank' style={{textDecoration : "none", color : "white"}}>FONT AWESOME</a>

                    </div>

                    <div className='contact_us ms-5' style={{ color: "white" }}>
                        <h4 style={{ color: "#FFD43B", fontWeight: "300", fontSize: "20px" }}>CONTACT US</h4>
                        <div className='d-flex '>
                            <input type="text" name="" placeholder='Enter your Email' className='form-control' />
                            <button className='btn btn-warning ms-3 me-3'>SUBSCRIBE</button>

                        </div>
                        <div className='d-flex justify-content-evenly mt-3 align-items-center'>
                            <i class="fa-brands fa-instagram fa-2x"></i>
                            <i class="fa-brands fa-github fa-2x"></i>
                            <i class="fa-brands fa-twitter fa-2x"></i>
                            <i class="fa-brands fa-youtube fa-2x"></i>
                        </div>

                    </div>
                </div>
            </div>
            <p className='text-center mt-5' style={{ color: " white" }}>CP © 2025 : MEDIA PLAYER WITH <span style={{ color: "#FFD43B" }}>REACT</span> </p>
        </>
    )
}

export default Footer
