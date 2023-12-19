import React from 'react'
import profile from "../assets/profile.png";
import git from "../assets/github.png"
import linkin from "../assets/linkin.png"
import facebook from "../assets/facebook.png"
import instgram from "../assets/instgram.png"

const About = () => {
    return (
        <section className='w-full h-screen bg-stone-900 flex justify-around items-center' id="about"> 
            {/* Start profile image */}
            <div className='w-1/2 relative'>
                <div className='w-1/2 h-3/4 bg-red-500 rounded-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0'></div>

                <img src={profile} className='h-1/6' alt='profile'/>
            </div>
            {/* End profile image */}

            {/* Start About */}
            <div className='w-1/2 flex justify-center items-center flex-col'>
                <div className='w-3/4'>
                    <p>
                        <span className='text-red-600 text-3xl font-bold mr-6'> About Me </span>
                        <ul className='inline-flex my-7'>
                            <li className='mr-6'><img src={git} className='w-5' alt="github"/></li>
                            <li className='mr-6'><img src={linkin} className='w-5' alt="linkin"/></li>
                            <li className='mr-6'><img src={facebook} className='w-5' alt="facebook"/></li>
                            <li className='mr-6'><img src={instgram} className='w-5' alt="instgram"/></li>
                        </ul>
                    </p>

                    <p className='text-slate-300 tracking-wide text-lg my-5'>Hello, I'm Hein Thu, a creative software developer passionate about crafting impactful solutions. And Enthusiastic learner, always exploring new technologies.</p>
                    
                    <p className='text-slate-300 tracking-wide text-lg underline underline-offset-2 mb-5'>What I Do?</p>
                    
                    <ul className='text-slate-300 tracking-wide text-lg '>
                        <li>Web-Development</li>
                        <li>App-Development</li>
                    </ul>
                    
                    <button className='w-full bg-red-500 text-white tracking-wide text-lg rounded mt-14 py-3'>Download Resume</button>
                </div>
            </div>
            {/* End About */}

        </section>
    )
}

export default About