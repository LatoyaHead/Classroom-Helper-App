import React from 'react'
import './lights.css'
import student6 from '../img/student6.avif'

const PaperPasser = () => {
  return (
    <div className='container1'>
        <h1 className='title'>Paper Passer</h1>
        <div className='student-name'>
          <h2 className='student-name1'>Student Name: Taylor Roberson</h2>
          <h2 className='student-name1'>Favorite Subject: Math</h2>
        </div>
        <ul>
          <li>Passes out any papers you need passed out for classwork or to take home.</li>
        </ul>
        <div class='border'>
          <img src={student6} alt='student2' class='light'></img>
        </div>
      </div>
  )
}

export default PaperPasser