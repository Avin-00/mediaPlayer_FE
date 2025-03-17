import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'
import { ToastContainer } from 'react-toastify';

function Home() {
  const [uploadVideoStatus, setUploadVideoState] = useState({})
  return (
    <>
      <div className='container d-flex align-items-center mt-5 justify-content-between'>
        <Add setUploadVideoState = {setUploadVideoState} />
        <Link style={{ textDecoration: "none" }} to={'/watch'}>
          <span className='fs-5 textStyle'>WATCH HISTORY <i class="fa-solid fa-clock-rotate-left ms-2"></i></span>
        </Link>
      </div>

      {/* second section */}
      <div className='container-fluid mt-5 w-100 mb-5'>
        <div className='row'>
          <div className='col-md-9 textStyle'>
            <View uploadVideoStatus ={uploadVideoStatus} />
          </div>

          <div className='col-md-3 textStyle'>
            <Category/>
          </div>
        </div>
      </div>
      <ToastContainer
position="top-center"
autoClose={2000}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  )
}

export default Home
