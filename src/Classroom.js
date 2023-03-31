import React from 'react'
import './classroom.css'
import apple from './img/apple.png'

const classroom = () => {
  return (
    <div>
      <section>
        <header>
          <a href='#' class='logo'><img src={apple} alt='apple'></img></a>
          <h1>Welcome to Mrs. Moore's</h1>
        </header>
      </section>
      <div>
      <ul>
            <li><a href='#'>Line Leader</a></li>
            <li><a href='#'>Line Monitor</a></li>
            <li><a href='#'>Paper Passer</a></li>
            <li><a href='#'>Work Monitor</a></li>
            <li><a href='#'>Breakfast Helper</a></li>
            <li><a href='#'>Lunch Helper</a></li>
            <li><a href='#'>Snack Helper</a></li>
            <li><a href='#'>Ticket Helper</a></li>
            <li><a href='#'>Chair Stacker</a></li>
            <li><a href='#'>Sanitizer manager</a></li>
          </ul>
      </div>
    </div>
  )
}

export default classroom