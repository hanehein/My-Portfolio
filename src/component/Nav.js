import React from 'react'
import home from "../assets/home.png"
import about from "../assets/about.png"
import resume from "../assets/resume.png"
import skill from "../assets/skill.png"
import code from "../assets/code.png"
import mail from "../assets/mail.png"

const Nav = () => {
  return (
    <nav className='fixed left-12 top-1/2 -translate-y-1/2 z-50'>
        <ul className='flex flex-col space-y-14'>
            <li className=''><a href='#home'><img src={home} className='w-7' alt="home"/></a></li>
            <li className=''><a href='#about'><img src={about} className='w-7' alt="about"/></a></li>
            <li className=''><a href='#home'><img src={resume} className='w-7' alt="hreome"/></a></li>
            <li className=''><a href='#home'><img src={skill} className='w-7' alt="skill"/></a></li>
            <li className=''><a href='#home'><img src={code} className='w-7' alt="code"/></a></li>
            <li className=''><a href='#home'><img src={mail} className='w-7' alt="mail"/></a></li>
        </ul>
    </nav>
  )
}

export default Nav