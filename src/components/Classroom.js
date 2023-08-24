import React from 'react'
import '../components/classroom.css'
import apple from '../img/apple.png'
import desk from '../img/desk.png'
import { useNavigate, Link } from 'react-router-dom'

const Profiles = (props) => {
  const navigate = useNavigate()
  return(
    <div class='container' onClick={()=> navigate(props.url)}>
      <img src={desk} class='desk' alt='desk'></img>
      <p class='desk1'>{props.title}</p>
    </div>
)}

const profiles = [
  {
    title: 'Line Leader',
    url: '/lineleader'
  },
  {
    title: 'Line Monitor',
    url: '/linemonitor'
  },
  {
    title: 'Errand Runner',
    url: '/errandrunner'
  },
  {
    title: 'Work Monitor',
    url: '/workmonitor'
  },
  {
    title: 'Ticket Helper',
    url: '/tickethelper'
  },
  {
    title: 'Paper Passer',
    url: '/paperpasser'
  },
  {
    title: 'Greeter',
    url: '/greeter'
  },
  {
    title: 'Lights',
    url: '/lights'
  },
 
]
const Classroom = () => {
  return (
    <div>
      <div class='header'>
          <p><img src={apple} alt='apple' class='apple'></img></p>
          <h1 class='name'>Mrs. Moore's<br/>Classroom Helpers</h1>
      </div>
      <div class='desk-container'>
        {
          profiles.map(profile => (
            <Profiles title={profile.title} url={profile.url}/>
          ))
        }
      </div>
    </div>
  )
}

export default Classroom