import React from 'react'
import student8 from '../img/student8.avif'
import './lights.css'

const Lights = () => {
  return (
      <div className='container1'>
        <h1 className='title'>Light Helper</h1>
        <ul>
          <li>Turn off lights when we leave the classroom.</li>
          <li>Turn on lights when we return to the classroom.</li>
        </ul>
        <h2>Student Name: Jasmine Culllers</h2>
        <h2>Favorite Subject: Math</h2>
        <div class='border'>
          <img src={student8} alt='student8' class='light'></img>
        </div>
      </div>
  )
}

export default Lights