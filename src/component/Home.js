import React from 'react'
import styles from "../style/home.module.css"
import logo from "../assets/heinlogo.png"
import git from "../assets/github.png"
import linkin from "../assets/linkin.png"
import facebook from "../assets/facebook.png"
import instgram from "../assets/instgram.png"
import vector from  "../assets/Vector.png"

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

                <div className='absolute left-1/4 top-1/2 -translate-y-1/2'>
                    <p className={`${styles.para1} text-[55px] font-bold mb-1`}>Hello, I'm <span className='text-red-600'>Hein Thu</span>.</p>
                    <p className='text-[35px]'>"I'm Software Developer."</p>

                    <ul className='flex my-7'>
                        <li className='mr-6'><img src={git} className='w-7 h-7' alt="github"/></li>
                        <li className='mr-6'><img src={linkin} className='w-7 h-7' alt="linkin"/></li>
                        <li className='mr-6'><img src={facebook} className='w-7 h-7' alt="facebook"/></li>
                        <li className='mr-6'><img src={instgram} className='w-7 h-7' alt="instgram"/></li>
                    </ul>

                    <button className='text-lg border-2 border-red-600 px-5 py-2'>View My Work <img src={vector} className='inline-block w-4 h-4 ml-4' alt="vector"/></button>
                </div>
            </div>
        </section>
    )
}

export default Home