import React from 'react'
import { useNavigate } from 'react-router-dom'
import './lights.css'
import student5 from '../img/student5.avif'
import back from '../img/apple.png' 

const TicketHelper = () => {
  const navigate = useNavigate()

  return (
    <div className='container1'>
      <div class='header1'>
        <h1 className='title'>Ticket Helper</h1>
        <img class='logo' src={back} alt='apple' onClick={() => navigate(-1)} />
      </div>
    <div className='student-name'>
      <h2 className='student-name1'>Student Name: Caleb Roberson</h2>
      <h2 className='student-name1'>Favorite Subject: Social Studies</h2>
    </div>
    <ul>
      <li>Responsible for passing out tickets to students that have won tickets as an award.</li>
    </ul>
    <div class='border'>
      <img src={student5} alt='student2' class='students'></img>
    </div>
  </div>
  )
}

export default TicketHelper