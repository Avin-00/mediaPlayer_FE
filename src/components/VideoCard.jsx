import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';


function VideoCard({displayVideo, setDeleteVideoStatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    const { caption, embededLink } = displayVideo;
    const today = new Date();
    console.log(today);
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const day = today.getDay();
    console.log(year,month,day );
    const hour = today.getHours();
    const mins = String(today.getUTCMinutes()).padStart(2, '0');
    const timeValue = day+'-'+month+'-'+year+""+hour+":"+mins;

     console.log(timeValue);
     const history = {
      caption,
      embededLink,
      timeStamp:timeValue
     }
        await addToHistory(history);
       
  }
  
console.log("Each Video Item");
console.log(displayVideo);

   
  const removeVideo = async (id)=>{
    const response =  await deleteVideo(id)
    console.log("Delete Response");
    console.log(response);
    if(response.status === 200){
      setDeleteVideoStatus(response)
      toast.success(`${displayVideo.caption} SUCCESSFULLY DELETED`)
    }
    
    
  }      


  return (
    <>
     <Card data-bs-theme = 'dark' className='textStyle me-2' style={{ width: '20rem',height : '100%', border : "solid", borderRadius : "10px", color : "black" }}>
      <Card.Img onClick={handleShow} variant="top" src={displayVideo.thumbnailUrl} height={200}/>
      <Card.Body>


        <div className='d-flex justify-content-between'>
        <Card.Title className='textStyle'>{displayVideo.caption.slice(0.12)}</Card.Title>
        
        <Button className='ms-2 p-3' variant='danger'><i style={{backgroundColor :"red"}} className="fa-solid fa-trash" 
        onClick={()=>removeVideo(displayVideo.id)}
        ></i></Button>
        </div>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
         data-bs-theme = 'dark'
      >
        <Modal.Header closeButton>
          <Modal.Title className='textStyle'>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={displayVideo.embededLink}></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor : "#FFD43B", color : "black", textDecoration : "none", border : "none"}} onClick={handleClose}>
            Close
          </Button>
  
        </Modal.Footer>
      </Modal>
      <ToastContainer
position="top-center"
autoClose={5000}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  )
}

export default VideoCard
