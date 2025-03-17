import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allApi'

function View({uploadVideoStatus}) {
  const [DeleteVideoStatus, setDeleteVideoStatus] = useState({})
   const [AllVideos, setAllVideos] = useState([])

  const getVideos = async()=>{
    const resp = await getAllVideos()
    const {data} = resp
    setAllVideos(data)
    console.log(AllVideos);
   
   
  }

  useEffect(()=>{
    getVideos()
  }, [uploadVideoStatus, DeleteVideoStatus] )
  console.log(AllVideos);
  
 
  return (
    <>
    <Row>
      {
        AllVideos?.map((item=>(
          
          <Col sm={12} md={6} lg={4} xl={3}>
     <VideoCard displayVideo = {item} setDeleteVideoStatus = {setDeleteVideoStatus}  />
     </Col>
        )))
      }
     
    </Row>
    </>
  )
}

export default View
