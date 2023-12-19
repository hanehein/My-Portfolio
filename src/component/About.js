import React from 'react'
import profile from "../assets/profile.png";
import git from "../assets/github.png"
import linkin from "../assets/linkin.png"
import facebook from "../assets/facebook.png"
import instgram from "../assets/instgram.png"
import { motion } from 'framer-motion';
import task from "../assets/task.png";

const aboutVariants = {
    hide: {
        x: "100%", 
        opacity: 0
    },
    show: {
        x: 0, 
        opacity: 1, 
        transition: { duration: 0.5, staggerChildren: 0.5, when: "beforeChildren"}
    }
};

const aboutItemVariants = {
    hide: {
        x: "50%",
        opacity: 0
    },
    show: {
        x: "0",
        opacity: 1,
        transition: { duration: 0.8}
    }
}

const About = () => {
    return (
        <section className='w-full h-[90vh] bg-black/90 grid grid-cols-11 overflow-x-hidden' id="about"> 
            {/* Start profile image */}
            <motion.div className='col-start-2 col-span-5 self-center relative' initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1,  opacity: 1, transition: { duration: 1}}}>
                <div className='w-2/3 h-2/3 bg-[#2F2A2A] rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'></div>
                <img src={profile} className='h-2/6 -translate-y-10 relative z-20' alt='profile'/>
            </motion.div>
            {/* End profile image */}

            {/* Start About */}
            <motion.div className='col-span-4 self-center' variants={aboutVariants} initial="hide" whileInView="show">
                    <motion.p variants={aboutItemVariants}>
                        <span className='text-red-600 text-3xl font-bold mr-6' > About Me </span>
                        <ul className='inline-flex my-7'>
                            <li className='mr-6'><img src={git} className='w-5' alt="github"/></li>
                            <li className='mr-6'><img src={linkin} className='w-5' alt="linkin"/></li>
                            <li className='mr-6'><img src={facebook} className='w-5' alt="facebook"/></li>
                            <li className='mr-6'><img src={instgram} className='w-5' alt="instgram"/></li>
                        </ul>
                    </motion.p>

                    <motion.p className='text-slate-300 tracking-wide text-lg text-justify indent-10 my-5' variants={aboutItemVariants}>
                        Hello, I'm Hein Thu, a creative software developer passionate about crafting impactful solutions. And Enthusiastic learner, always exploring new technologies.
                    </motion.p>
                    
                    <motion.p className='text-slate-300 tracking-wide text-lg underline underline-offset-2 mb-3' variants={aboutItemVariants}>What I Do?</motion.p>
                    
                    <motion.p className='text-slate-300 tracking-wide' variants={aboutItemVariants}><img src={task} className='inline-block w-5 mr-5' alt="task"/> Web-Development</motion.p>
                    <motion.p className='text-slate-300 tracking-wide' variants={aboutItemVariants}><img src={task} className='inline-block w-5 mr-5' alt="task"/> App-Development</motion.p>
                    
                    {/* <div className='w-full flex justify-center items-center'> */}
                        <motion.button className='w-full bg-red-500 text-white tracking-wide rounded mt-10 py-2' variants={aboutItemVariants}>Download Resume</motion.button>
                    {/* </div> */}
            </motion.div>
            {/* End About */}

        </section>
    )
}

export default About