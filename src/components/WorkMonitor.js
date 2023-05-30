import React from 'react'
import './lights.css'
import student4 from '../img/student4.avif'

const WorkMonitor = () => {
  return (
    <div className='container1'>
        <h1 className='title'>Work Monitor</h1>
        <div className='student-name'>
          <h2 className='student-name1'>Student Name: Tamara Moore</h2>
          <h2 className='student-name1'>Favorite Subject: Science</h2>
        </div>
        <ul>
          <li>Uses a class list on a clipboard to check off students who have finished their work.</li>
        </ul>
        <div class='border'>
          <img src={student4} alt='student2' class='light'></img>
        </div>
      </div>
  )
}

export default WorkMonitor