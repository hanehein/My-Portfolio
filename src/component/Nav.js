import React from 'react'
import home from "../assets/home.png"
import about from "../assets/about.png"
import resume from "../assets/resume.png"
import skill from "../assets/skill.png"
import code from "../assets/code.png"
import mail from "../assets/mail.png"

const Nav = () => {
  return (
    <nav className='fixed left-10 top-1/2 -translate-y-1/2 z-50'>
        <ul>
            <li className='mb-8'><a href='#home'><img src={home} className='w-8' alt="home"/></a></li>
            <li className='mb-8'><a href='#about'><img src={about} className='w-8' alt="about"/></a></li>
            <li className='mb-8'><a href='#home'><img src={resume} className='w-8' alt="hreome"/></a></li>
            <li className='mb-8'><a href='#home'><img src={skill} className='w-8' alt="skill"/></a></li>
            <li className='mb-8'><a href='#home'><img src={code} className='w-8' alt="code"/></a></li>
            <li className='mb-8'><a href='#home'><img src={mail} className='w-8' alt="mail"/></a></li>
        </ul>
    </nav>
  )
}

export default Nav