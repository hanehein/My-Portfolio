import React from 'react'
import javascript from "../assets/javascript.png";
import styles from "../style/skill.module.css"
import laravel from "../assets/laravel.png"
import tailwind from "../assets/tailwind.png"
import vue from "../assets/vue.png"
import arrow from "../assets/arrow.png"
import react from "../assets/react.png"
import node from "../assets/nodejs.png"
import mongo from "../assets/mongo.png"
import firebase from "../assets/firebase.png"
import php from "../assets/php.png"
import express from "../assets/expres.png"
import mysql from "../assets/mysql.png"
import digitalOcean from "../assets/digitalOcean.png"


const languages = [
    {
        name: "JavaScript",
        image: javascript,
        knowledge: 90
    },
    {
        name: "React Js",
        image: react,
        knowledge: 90
    },
    {
        name: "Laravel",
        image: laravel,
        knowledge: 90
    },
    {
        name: "Node Js",
        image: node,
        knowledge: 90
    },
    {
        name: "MongoDB",
        image: mongo,
        knowledge: 90
    },
    {
        name: "Firebase",
        image: firebase,
        knowledge: 90
    },
    {
        name: "Tailwind",
        image: tailwind,
        knowledge: 90
    },
    {
        name: "Vue Js",
        image: vue,
        knowledge: 90
    },
    {
        name: "Php",
        image: php,
        knowledge: 90
    },
    {
        name: "Express Js",
        image: express,
        knowledge: 90
    },
    {
        name: "MySQL",
        image: mysql,
        knowledge: 90
    },
    {
        name: "Digital Ocean",
        image: digitalOcean,
        knowledge: 90
    }
];


const Skill = () => {
    return (
        // <section  className='w-full py-20 bg-black/90 text-white'>
        //     {/* Start Header */}
        //     <div className='text-center '>
        //         <p className='text-[40px] font-bold mb-3'>Professional <span className='text-red-500'>SkillSet</span></p>
        //         <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Nullam sem semper venenatis gravida lobortis viverra. Aenean integer sit etiam nec.</p>
        //     </div>
        //     {/* End Header */}

        //     {/* Start languae */}
        //     <div className='flex justify-center items-center mt-20'>
        //         <div className='w-4/6 grid grid-cols-6 gap-4'>
        //             {
        //                 languages.map((language, index) => (
        //                     <div key={index}>
        //                         <div className='flex justify-center items-start'>
        //                             <div className='w-16 h-16 bg-neutral-700 rounded-lg relative mr-2'>
        //                                 <img src={language.image} className='w-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' alt={language.image}/>    
        //                             </div>

        //                             <div className={styles.knowledgePercentage}>
        //                                 <span className='text-[10px]'>{language.knowledge} %</span>
                                        
        //                                 <div>
        //                                     <div className='w-[15px] h-[3px] bg-white rounded-lg mb-1 mx-auto'></div>
        //                                     <div className='w-[15px] h-[3px] bg-[#DF4F4F] rounded-lg mb-1 mx-auto'></div>
        //                                     <div className='w-[15px] h-[3px] bg-[#DF4F4F] rounded-lg mb-1 mx-auto'></div>
        //                                     <div className='w-[15px] h-[3px] bg-[#DF4F4F] rounded-lg mb-1 mx-auto'></div>
        //                                     <div className='w-[15px] h-[3px] bg-[#DF4F4F] rounded-lg mb-1 mx-auto'></div>
        //                                 </div>
        //                             </div>
        //                         </div>

        //                         <p className='text-center'>{language.name}</p>
        //                     </div>
        //                 ))
        //             }
        //         </div>
        //     </div>
        //     {/* End languae */}

        //     {/* Start stack */}
        //     <div className='grid grid-cols-11 gap-10 mt-20'>
        //         <div className='col-start-2 col-span-5'>
        //             {/* start header */}
        //             <div className='w-3/4 flex justify-between items-center'>
        //                 <p className='text-lg font-bold underline underline-offset-4 decoration-2 decoration-red-500'>VILT Stack</p>

        //                 <div className='flex'>
        //                     <img src={laravel} className='w-8 mr-4' alt="laravel" />
        //                     <img src={tailwind} className='w-8 mr-4' alt="tailwind" />
        //                     <img src={vue} className='w-8 mr-4' alt="vue" />
        //                     <img src={arrow} className='w-8' alt="arrow" />
        //                 </div>
        //             </div>
        //             {/* end header */}

        //             {/* start body */}
        //             <p className='w-3/4 mt-5 text-sm text-justify'>Vue.js, Inertia.js, Laravel, and Tailwind CSS, I develop high-quality web applications with seamless functionality and user-friendly interfaces.</p>
        //             {/* end body */}
        //         </div>
                
        //         <div className='col-span-5'>
        //             {/* start header */}
        //             <div className='w-3/4 flex justify-between items-center'>
        //                 <p className='text-lg font-bold underline underline-offset-4 decoration-2 decoration-red-500'>MERN Stack</p>

        //                 <div className='flex'>
        //                     <img src={laravel} className='w-8 mr-4' alt="laravel" />
        //                     <img src={tailwind} className='w-8 mr-4' alt="tailwind" />
        //                     <img src={vue} className='w-8 mr-4' alt="vue" />
        //                     <img src={arrow} className='w-8' alt="arrow" />
        //                 </div>
        //             </div>
        //             {/* end header */}

        //             {/* start body */}
        //             <p className='w-3/4 mt-5 text-sm text-justify'>Experienced in MERN stack (MongoDB, Express.js, React.js, Node.js) development, I craft dynamic and responsive web applications, ensuring seamless integration and optimal performance across the entire stack.</p>
        //             {/* end body */}
        //         </div>
        //     </div>
        //     {/* End stack */}
        // </section>

        <section  className='w-full py-20 bg-black/90 text-white'>
        {/* Start Header */}
        <div className='text-center '>
            <p className='text-[40px] font-bold mb-3'>Professional <span className='text-red-500'>SkillSet</span></p>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Nullam sem semper venenatis gravida lobortis viverra. Aenean integer sit etiam nec.</p>
        </div>
        {/* End Header */}

        {/* Start languae */}
        <div className='flex justify-center items-center mt-20'>
            <div className='w-4/6 grid grid-cols-6 gap-4'>
                {
                    languages.map((language, index) => (
                        <div key={index}>
                            <div className='flex justify-center items-start'>
                                <div className='w-16 h-16 bg-neutral-700 rounded-lg relative mr-2'>
                                    <img src={language.image} className='w-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' alt={language.image}/>    
                                </div>

                                <div className={styles.knowledgePercentage}>
                                    <span className='text-[10px]'>{language.knowledge} %</span>
                                    
                                    <div>
                                        <div className='w-[15px] h-[3px] bg-white rounded-lg mb-1 mx-auto'></div>
                                        <div className='w-[15px] h-[3px] bg-[#DF4F4F] rounded-lg mb-1 mx-auto'></div>
                                        <div className='w-[15px] h-[3px] bg-[#DF4F4F] rounded-lg mb-1 mx-auto'></div>
                                        <div className='w-[15px] h-[3px] bg-[#DF4F4F] rounded-lg mb-1 mx-auto'></div>
                                        <div className='w-[15px] h-[3px] bg-[#DF4F4F] rounded-lg mb-1 mx-auto'></div>
                                    </div>
                                </div>
                            </div>

                            <p className='text-center'>{language.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* End languae */}

        {/* Start stack */}
        <div className='flex justify-between w-9/12 space-x-36 mx-auto mt-20'>
            <div className='w-6/12'>
                {/* start header */}
                <div className='w-full flex justify-between items-center'>
                    <p className='text-lg font-bold underline underline-offset-4 decoration-2 decoration-red-500'>VILT Stack</p>

                    <div className='flex'>
                        <img src={laravel} className='w-8 mr-4' alt="laravel" />
                        <img src={tailwind} className='w-8 mr-4' alt="tailwind" />
                        <img src={vue} className='w-8 mr-4' alt="vue" />
                        <img src={arrow} className='w-8' alt="arrow" />
                    </div>
                </div>
                {/* end header */}

                {/* start body */}
                <p className=' mt-5 text-sm text-justify'>Vue.js, Inertia.js, Laravel, and Tailwind CSS, I develop high-quality web applications with seamless functionality and user-friendly interfaces.</p>
                {/* end body */}
            </div>
            
            <div className='w-6/12'>
                {/* start header */}
                <div className='w-full flex justify-between items-center'>
                    <p className='text-lg font-bold underline underline-offset-4 decoration-2 decoration-red-500'>MERN Stack</p>

                    <div className='flex'>
                        <img src={laravel} className='w-8 mr-4' alt="laravel" />
                        <img src={tailwind} className='w-8 mr-4' alt="tailwind" />
                        <img src={vue} className='w-8 mr-4' alt="vue" />
                        <img src={arrow} className='w-8' alt="arrow" />
                    </div>
                </div>
                {/* end header */}

                {/* start body */}
                <p className='mt-5 text-sm text-justify'>Experienced in MERN stack (MongoDB, Express.js, React.js, Node.js) development, I craft dynamic and responsive web applications, ensuring seamless integration and optimal performance across the entire stack.</p>
                {/* end body */}
            </div>
        </div>
        {/* End stack */}
    </section>
    )
}

export default Skill