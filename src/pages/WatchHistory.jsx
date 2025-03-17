import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { deleteWatchHistory, getHistory } from '../services/allApi';


function WatchHistory() {
  
  const [AllHistory, setAllHistory] = useState([])
  const getAllHistory = async () => {
    const resp = await getHistory();
    console.log(resp);
    const { data } = resp;
    setAllHistory(data)

  }
  useEffect(() => {
    getAllHistory()
  }, [])

  const deleteHistory = async(id) =>{
   await deleteWatchHistory(id) 
   getAllHistory(id) 
  }


  return (
    <>
      <div className='container mt-5 d-flex justify-content-between'>
        <h3 className='textStyle' style={{ fontSize: "20px" }}>WATCH HISTORY</h3>
        <Link to={'/home'} style={{ textDecoration: "none", color: "white" }} > <i class="fa-solid fa-arrow-left me-2"></i>BACK TO HOME</Link>
      </div>

      <table className='textStyle table mt-5 mb-5 container' data-bs-theme='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>CAPTION</th>
            <th>URL</th>
            <th>TIME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            AllHistory.length>0?
            AllHistory.map((Item)=>(
            <tr>
            <td>1</td>
            <td>Sthuthi</td>
            <td>www.youtube.com/sthuthi</td>
            <td>2025-03-05 12:45</td>

            <td>  <Button className='ms-2' onClick={()=>deleteHistory(Item.id)} variant='danger'><i style={{ backgroundColor: "red" }} className="fa-solid fa-trash"></i></Button></td>

          </tr>
            )):
            <p className='m-5 text-danger' style={{ padding : "5px"}}>NO HISTORY FOUND</p>

          }
          

        </tbody>
      </table>

    </>
  )
}

export default WatchHistory
