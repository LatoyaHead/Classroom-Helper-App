import React from 'react'
import './lights.css'
import student1 from '../img/student1.avif'
import apple from '../img/apple.png' 



const LineLeader = () => {
  return (
    <div className='container1'>
      <div class='header1'>
        <h1 className='title'>Line Leader</h1>
        <img class='logo' src={apple} alt='apple'></img>
      </div>
      <div className='student-name'>
        <h2 className='student-name1'>Student Name: Chase Roberson</h2>
        <h2 className='student-name1'>Favorite Subject: Reading</h2>
      </div>
      <ul>
        <li>Stands at the front of the line and leads the class wherever we go.</li>
      </ul>
      <div class='border'>
        <img src={student1} alt='student2' class='light'></img>
      </div>
      </div>
  )
}

export default LineLeader