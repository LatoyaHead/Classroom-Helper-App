import React from 'react'
import { useNavigate } from 'react-router-dom'
import './lights.css'
import student2 from '../img/student2.avif'
import back from '../img/apple.png' 


const LineMonitor = () => {
  const navigate = useNavigate()

  return (
    <div className='container1'>
      <div class='header1'>
        <h1 className='title'>Line Monitor</h1>
        <img class='logo' src={back} alt='apple' onClick={() => navigate(-1)} />
      </div>
    <div className='student-name'>
      <h2 className='student-name1'>Student Name: Chad Roberson</h2>
      <h2 className='student-name1'>Favorite Subject: Math</h2>
    </div>
    <ul>
      <li>If there are issues with the line you will walk alongside the line and keep the line straight and quiet.</li>
    </ul>
    <div class='border'>
      <img src={student2} alt='student2' class='students'></img>
    </div>
  </div>
  )
}

export default LineMonitor