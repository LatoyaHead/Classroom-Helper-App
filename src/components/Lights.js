import React from 'react'
import student8 from '../img/student8.avif'
import './lights.css'

const Lights = () => {
  return (
    <div className='container1'>
    <h1 className='title'>Lights</h1>
    <div className='student-name'>
      <h2 className='student-name1'>Student Name: Tatiana Moore</h2>
      <h2 className='student-name1'>Favorite Subject: Reading</h2>
    </div>
    <ul>
      <li>Turn off lights when we leave the classroom.</li>
      <li>Turn on lights when we return to the classroom.</li>
    </ul>
    <div class='border'>
      <img src={student8} alt='student2' class='light'></img>
    </div>
  </div>
  )
}

export default Lights