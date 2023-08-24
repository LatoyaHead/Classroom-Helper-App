import React from 'react'
import { useNavigate } from 'react-router-dom'
import student8 from '../img/student8.avif'
import './lights.css'
import back from '../img/apple.png' 


const Lights = () => {
  const navigate = useNavigate()

  return (
    <div className='container1'><div class='header1'>
    <h1 className='title'>Lights</h1>
    <img class='logo' src={back} alt='apple' onClick={() => navigate(-1)} />
  </div>
    <div className='student-name'>
      <h2 className='student-name1'>Student Name: Tatiana Moore</h2>
      <h2 className='student-name1'>Favorite Subject: Reading</h2>
    </div>
    <ul>
      <li>Turn off lights when we leave the classroom.</li>
      <li>Turn on lights when we return to the classroom.</li>
    </ul>
    <div class='border'>
      <img src={student8} alt='student2' class='students'></img>
    </div>
  </div>
  )
}

export default Lights