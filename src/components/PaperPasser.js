import React from 'react'
import { useNavigate } from 'react-router-dom'
import './lights.css'
import student6 from '../img/student6.avif'
import back from '../img/apple.png' 


const PaperPasser = () => {
  const navigate = useNavigate()
  
  return (
    <div className='container1'>
      <div class='header1'>
        <h1 className='title'>Paper Passer</h1>
        <img class='logo' src={back} alt='apple' onClick={() => navigate(-1)} />
      </div>
      <div className='student-name'>
        <h2 className='student-name1'>Student Name: Taylor Roberson</h2>
        <h2 className='student-name1'>Favorite Subject: Math</h2>
      </div>
      <ul>
        <li>Passes out any papers you need passed out for classwork or to take home.</li>
      </ul>
      <div class='border'>
        <img src={student6} alt='student2' class='students'></img>
      </div>
    </div>
  )
}

export default PaperPasser