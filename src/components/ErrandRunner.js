import React from 'react'
import './lights.css'
import student3 from '../img/student3.avif'


const ErrandRunner = () => {
  return (
    <div className='container1'>
        <h1 className='title'>Errand Runner</h1>
        <ul>
          <li>Turn off lights when we leave the classroom.</li>
          <li>Turn on lights when we return to the classroom.</li>
        </ul>
        <h2>Student Name: Bailey Roberson</h2>
        <h2>Favorite Subject: Science</h2>
        <div class='border'>
          <img src={student3} alt='student2' class='light'></img>
        </div>
      </div>
  )
}

export default ErrandRunner