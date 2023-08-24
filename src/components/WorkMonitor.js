import React from 'react'
import { useNavigate } from 'react-router-dom'
import './lights.css'
import student4 from '../img/student4.avif'
import back from '../img/apple.png' 


const WorkMonitor = () => {
  const navigate = useNavigate()

  return (
    <div className='container1'>
      <div class='header1'>
        <h1 className='title'>Work Monitor</h1>
        <img class='logo' src={back} alt='apple' onClick={() => navigate(-1)} />
      </div>
        <div className='student-name'>
          <h2 className='student-name1'>Student Name: Tamara Moore</h2>
          <h2 className='student-name1'>Favorite Subject: Science</h2>
        </div>
        <ul>
          <li>Uses a class list on a clipboard to check off students who have finished their work.</li>
        </ul>
        <div class='border'>
          <img src={student4} alt='student2' class='students'></img>
        </div>
      </div>
  )
}

export default WorkMonitor