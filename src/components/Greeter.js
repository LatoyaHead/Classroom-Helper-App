import React from 'react'
import { useNavigate } from 'react-router-dom'
import './lights.css'
import student7 from '../img/student7.avif'
import back from '../img/apple.png' 


const Greeter = () => {
  const navigate = useNavigate()

  return (
    <div className='container1'>
      <div class='header1'>
        <h1 className='title'>Greeter</h1>
        <img class='logo' src={back} alt='apple' onClick={() => navigate(-1)} />
      </div>
      <div className='student-name'>
        <h2 className='student-name1'>Student Name: Tia Roberson</h2>
        <h2 className='student-name1'>Favorite Subject: Writing</h2>
      </div>
        <ul>
          <li>In the morning the greeter stands in the doorway to greet everyone coming in the classroom door.</li>
        </ul>
        <div class='border'>
          <img src={student7} alt='student2' class='students'></img>
        </div>
    </div>
  )
}


export default Greeter