import React from 'react'
import "../components/lineleader.css"
import './lights.css'
import student2 from '../img/student2.avif'


const LineLeader = () => {
  return (
    <div className='container1'>
        <h1 className='title'>Line Leader</h1>
        <ul>
          <li>Turn off lights when we leave the classroom.</li>
          <li>Turn on lights when we return to the classroom.</li>
        </ul>
        <h2>Student Name: James Salamander</h2>
        <h2>Favorite Subject: Reading</h2>
        <div class='border'>
          <img src={student2} alt='student2' class='light'></img>
        </div>
      </div>
  )
}

export default LineLeader