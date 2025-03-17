import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


import { addCategory, deleteVideoCategory, getAllCategory } from '../services/allApi';
import { toast } from 'react-toastify';




function Category() {


  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }
  const handleShow = () => setShow(true);
  const [CategoryName, setCategoryName] = useState("")
  const [Categories, setCatergorires] = useState([])
  const handleAddCategory = async () => {
    if (!CategoryName) {
      toast.warning("PLEASE FILL THE CATEGORY NAME");
    }
    else {
      const body = {
        CategoryName,
        allVideos: []
      }
      const response = await addCategory(body)
      console.log(response);
      if (response.status === 201) {
        toast.warning(`${CategoryName} SUCCESSFULLY SAVED`)
        getCategories();
      }
      handleClose()
    }

  }
  const getCategories = async () => {
    const response = await getAllCategory()
    console.log("Categories");
    console.log(response);
    const { data } = response
    setCatergorires(data)


  }
  useEffect(() => {
    getCategories()
  }, [])

  const deleteCategory = async (id)=>{
    await deleteVideoCategory(id)
    getCategories()
  }


  return (
    <>
      <div>
        <button className='btn btn-warning' onClick={handleShow}>ADD NEW CATEGORY</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme='dark'
      >
        <Modal.Header closeButton>
          <Modal.Title className='textStyle'><i class="fa-solid fa-bars me-2"></i> ADD <span style={{ color: "#FFD43B" }}>CATEGORY</span> </Modal.Title>
        </Modal.Header>
        <Modal.Body className='textStyle'>
          <p className='textStyle' style={{ textAlign: "center" }}>PLEASE FILL THE FORM</p>

          <Form className='p-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

              <Form.Control type="text" placeholder="CATEGORY NAME"
                onChange={(e) => setCategoryName(e.target.value)} />

            </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button style={{ backgroundColor: "#FFD43B", color: "black", border: "none" }} onClick={handleAddCategory} >ADD</Button>
        </Modal.Footer>
      </Modal>


      {
        Categories?.map((item => (
          <div className='border border-secondary rounded mt-3 p-3'>
            <div className='d-flex justify-content-between align-items-center m-2'>
              <h6>{item.CategoryName}</h6>
              <button className='btn btn-danger fa-solid fa-trash' onClick={(e)=>deleteCategory(item.id)} ></button>
            </div>
          </div>
        )))
      }
    </>
  )
}

export default Category
