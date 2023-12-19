import React from 'react'
import styles from "../style/home.module.css"
import logo from "../assets/heinlogo.png"
import git from "../assets/github.png"
import linkin from "../assets/linkin.png"
import facebook from "../assets/facebook.png"
import instgram from "../assets/instgram.png"
import vector from  "../assets/Vector.png"
import { motion } from 'framer-motion'

const homeVariants = {
    hide: {
        x: "100%",
        opacity: 0
    },
    show: {
        x: "40%",
        opacity: 1,
        transition: {duration: 0.5, delayChildren: 0.5, staggerChildren: 0.8, when: "beforeChildren" }
    }
}

const dataVariants = {
    hide: {
        x: "50%",
        opacity:0
    },
    show : {
        x: 0,
        opacity: 1, 
        transition: { duration: 0.5 }
    }
}

const Home = () => {
    return (
        <section className={`'w-full h-screen ${styles.homes}`} id="home">
            <div className='w-full h-full bg-black opacity-80 text-white relative'>
                {/* Start Header */}
                <div className='flex justify-between items-center pt-8'>
                    <img src={logo} className='w-20 h-7 ml-10' alt='logo'/>
                    <button className='bg-red-600 text-white rounded px-5 py-2 mr-10'>Download Resume</button>
                </div>
                {/* End Header */}

                <motion.div className='absolute top-1/3 -translate-y-1/2' variants={homeVariants} initial="hide" animate="show">
                    <motion.p variants={dataVariants} className={`${styles.para1} text-[55px] font-bold mb-1`}>Hello, I'm <span className='text-red-600'>Hein Thu</span>.</motion.p>
                    <motion.p variants={dataVariants}  className='text-[35px]'>"I'm Software Developer."</motion.p>

                    <motion.ul variants={dataVariants}  className='flex my-7'>
                        <li className='mr-6'><img src={git} className='w-7 h-7' alt="github"/></li>
                        <li className='mr-6'><img src={linkin} className='w-7 h-7' alt="linkin"/></li>
                        <li className='mr-6'><img src={facebook} className='w-7 h-7' alt="facebook"/></li>
                        <li className='mr-6'><img src={instgram} className='w-7 h-7' alt="instgram"/></li>
                    </motion.ul>

                    <motion.button variants={dataVariants}  className='text-lg border-2 border-red-600 px-5 py-2'>View My Work <img src={vector} className='inline-block w-4 h-4 ml-4' alt="vector"/></motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Home