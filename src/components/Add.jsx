import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom';
import uploadVideo from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';

function Add({ setUploadVideoState }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setVideoDetails({
      caption: "",
      thumbnailUrl: "",
      embededLink: ""
    });
  }

  const handleShow = () => setShow(true);
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    thumbnailUrl: "",
    embededLink: ""
  });

  const HandleUpload = async () => {
    console.log("uploade video");
    console.log(videoDetails);
    const { caption, thumbnailUrl, embededLink } = videoDetails
    if (!caption || !thumbnailUrl || !embededLink) {
      toast.warning("PLEASE FILL FORM COMPLETELY")
    }
    else {
      const result = await uploadVideo(videoDetails)
      console.log("result");
      console.log(result);

      if (result.status === 201) {
        setUploadVideoState(result)
        toast.success("VIDEO IS SUCCESSFULLY UPLOADED")
        handleClose()
      } 
      else {
        toast.error('SOMETHING WENT WRONG')
      }


    }


  }

  const setEmbededLink = (data) => {
    const link = `https://www.youtube.com/embed/${data.slice(-11)}`;
    console.log(link);
    setVideoDetails({ ...videoDetails, embededLink: link });
  }

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5 className='textStyle'>UPLOAD <span style={{ color: "#FFD43B" }}>NEW VIDEO</span> </h5>
        <button className='btn' onClick={handleShow}><i className="fa-solid fa-cloud-arrow-up textStyle fs-5"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme='dark'
      >
        <Modal.Header closeButton>
          <Modal.Title className='textStyle'><i className="fa-solid fa-film me-2"></i> UPLOAD <span style={{ color: "#FFD43B" }}>VIDEO</span> </Modal.Title>
        </Modal.Header>
        <Modal.Body className='textStyle'>
          <p className='textStyle' style={{ textAlign: "center" }}>PLEASE FILL THE FORM</p>
          <Form className='p-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="VIDEO TITLE"
                onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} />
              <Form.Control className='mt-4' type="text" placeholder="VIDEO THUMBNAIL"
                onChange={(e) => setVideoDetails({ ...videoDetails, thumbnailUrl: e.target.value })} />
              <Form.Control className='mt-4' type="text" placeholder="VIDEO URL"
                onChange={(e) => setEmbededLink(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button style={{ backgroundColor: "#FFD43B", color: "black", border: "none" }} onClick={HandleUpload}>UPLOAD</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add
