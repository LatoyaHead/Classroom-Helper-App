import React from 'react'
import './lights.css'
import student3 from '../img/student3.avif'


const ErrandRunner = () => {
  return (
    <div className='container1'>
        <h1 className='title'>Errand Runner</h1>
        <div className='student-name'>
          <h2 className='student-name1'>Student Name: Trinity Moore</h2>
          <h2 className='student-name1'>Favorite Subject: Reading</h2>
        </div>
        <ul>
          <li>If the teacher needs to send anything, the errand runner takes it.</li>
          <li>If the teacher needs to pick up anything, the errand runner gets it.</li>
        </ul>
        <div class='border'>
          <img src={student3} alt='student2' class='light'></img>
        </div>
      </div>
  )
}

export default ErrandRunner