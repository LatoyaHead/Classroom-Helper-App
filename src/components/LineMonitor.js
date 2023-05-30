import React from 'react'
import './lights.css'
import student2 from '../img/student2.avif'

const LineMonitor = () => {
  return (
    <div className='container1'>
    <h1 className='title'>Line Monitor</h1>
    <div className='student-name'>
      <h2 className='student-name1'>Student Name: Chad Roberson</h2>
      <h2 className='student-name1'>Favorite Subject: Math</h2>
    </div>
    <ul>
      <li>If there are issues with the line you will walk alongside the line and keep the line straight and quiet.</li>
    </ul>
    <div class='border'>
      <img src={student2} alt='student2' class='light'></img>
    </div>
  </div>
  )
}

export default LineMonitor