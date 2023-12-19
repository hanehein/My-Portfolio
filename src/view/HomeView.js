import React from 'react'
import Home from '../component/Home'
import About from '../component/About'
import Resume from '../component/Resume'
import Skill from '../component/Skill'
import Project from '../component/Project'
import Contact from '../component/Contact'

const HomeView = () => {
  return (
    <>
        <Home/>
        <About/>
        <Resume/>
        <Skill/>
        <Project/>
        <Contact/>
    </>
  )
}

export default HomeView