import React from 'react'
import { motion } from 'framer-motion'

const  workData = [
    {
        year: "2022 ~ Present",
        header: "Software Developer",
        semiHeader: "Exbrain Technology Co. ltd, Myanmar",
        param: "Exbrain Technology is a leading software house specializing in Website Development, Mobile Development and Website Hosting.",
    },
    {
        year: "2021 ~ 2023",
        header: "HR Management Software",
        semiHeader: "Exbrain Education, Myanmar",
        param: "Exbrain Education is a training center that functions as a school for students, offering comprehensive instruction in various areas of software development, including Java, JavaScript, PHP, Laravel, Vue, and more.",
    }
]

const  schoolData = [
    {
        year: "2021 ~ 2023",
        header: "BSc (Hons) Information Technology",
        param: "Management Development Institute, Singapore (MDIS)",
        courses: ["Project Management", "Client Focused Business Solutions", "ICT Service Management", "Emerging Database Technologies"]
    },
    {
        year: "2021 ~ 2023",
        header: "Pearson BTEC Level 5 HND Diploma",
        param: "YOUTH International University, Myanmar",
        courses: ["Project Design", "Networking Infrastructure", "Internet Server Management", "Managing Software Project"]
    }
];

const ExperienceVariants = {
    hide: {
        y: "100%", 
        opacity: 0
    },
    show: {
        y: 0, 
        opacity: 1, 
        transition: { duration: 0.5, staggerChildren: 0.5, when: "beforeChildren"}
    }
};

const ExperienceItemVariants = {
    hide: {
        y: "50%",
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5}
    }
}

const Resume = () => {
    return (
        <section className='w-full py-20 bg-black text-white overflow-hidden' 
      id="resume"
      >

        {/* Start Header */}
        <div className='md:text-center md:w-full w-11/12 mx-auto'>
            <p className='lg:text-5xl sm:text-4xl text-3xl font-bold mb-3 text-red-500'>Resume</p>
            {/* <p className='lg:text-xl sm:text-base lg:mx-0 sm:mx-24'>Lorem ipsum dolor sit amet consectetur. Nullam sem semper venenatis gravida lobortis viverra. Aenean integer sit etiam nec.</p> */}
        </div>
        {/* End Header */}

        <div className='w-full mx-auto '>
        {/* Start Experience */}
        <div className='flex lg:flex-row flex-col w-11/12 mx-auto justify-center mt-10 lg:space-x-6'>
           
            {/* start education */}
            <div className='lg:w-6/12 lg:pl-8 lg:mb-0 mb-6'>
                <div>
                    <motion.p className='text-lg font-bold tracking-wide' variants={ExperienceVariants} initial="hide" whileInView="show">Bachelor & Certificates</motion.p>

                    {
                        schoolData.map(w => (
                            <motion.div className='w-full flex lg:mt-10 mt-4' key={w.header} variants={ExperienceVariants} initial="hide" whileInView="show">
                                {/* <motion.p className='w-1/6 text-lg' variants={ExperienceItemVariants}>{w.year}</motion.p> */}

                                <motion.div className='w-full' variants={ExperienceItemVariants}>
                                    <p className='text-lg text-red-600 font-bold'>{w.header} <span className='text-white'>({w.year})</span></p>
                                    <p className='text-base  mt-2'>{w.param}</p>

                                    <ul className='grid grid-cols-2 gap-2 my-2 list-inside list-disc text-white/60'>
                                        {
                                            w.courses.map(course => <li key={course}>{course}</li>)
                                        }
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            {/* end education */}
            <hr className='mx-24'/>
             {/* start work */}
             <div className='lg:w-6/12 lg:mt-0 mt-6'>
                <div className=''>
                    <motion.p className='text-xl font-bold tracking-wide' variants={ExperienceVariants} initial="hide" whileInView="show">Work Experience</motion.p>
                    {
                        workData.map(w => (
                            <motion.div className='w-full flex lg:mt-10 mt-4' key={w.header} variants={ExperienceVariants} initial="hide" whileInView="show">
                                {/* <motion.p className='w-1/5 text-lg' variants={ExperienceItemVariants}>{w.year}</motion.p> */}

                                <motion.div className='w-full' variants={ExperienceItemVariants}>
                                    <p className='text-lg text-red-600 font-bold'>{w.header} <span className='text-white'>({w.year})</span></p>
                                    <p className='mt-2'>{w.semiHeader}</p>
                                    <p className='text-base my-2 text-white/60'>{w.param}</p>
                                
                                </motion.div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            {/* end work */}

        </div>
        {/* End Experience */}

        </div>
    </section>
    )
}

export default Resume