import React from 'react'
import { motion } from 'framer-motion'

const  workData = [
    {
        year: "2022 ~ Present",
        header: "Software Developer",
        semiHeader: "Exbrain Technology Co. ltd, Myanmar",
        param: "Exbrain Technology is a leading software house specializing in Website Development, Mobile Development and Website Hosting.",
        languages: ["React Native", "Restful API", "React", "MongoDB"]
    },
    {
        year: "2021 ~ 2023",
        header: "HR Management Software",
        semiHeader: "Exbrain Education, Myanmar",
        param: "Exbrain Education is a training center that functions as a school for students, offering comprehensive <br/> instruction in various areas of software development, including Java, JavaScript, PHP, Laravel, Vue, and more",
        languages: ["React Native", "Restful API"]
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
        courses: ["Project Design, Implementation and Evaluation", "Networking Infrastructure", "Internet Server Management", "Managing Software Project"]
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
        // <section className='w-full py-20 bg-black text-white overflow-hidden'>
        //     {/* Start Header */}
        //     <div className='text-center'>
        //         <p className='text-5xl font-bold mb-3 text-red-500'>Resume</p>
        //         <p className='text-xl'>Lorem ipsum dolor sit amet consectetur. Nullam sem semper venenatis gravida lobortis viverra. Aenean integer sit etiam nec.</p>
        //     </div>
        //     {/* End Header */}

        //     {/* Start Experience */}
        //     <div className='grid grid-cols-11'>
        //         {/* start work */}
        //         <div className='col-start-2 col-span-5'>
        //             <div>
        //                 <motion.p className='text-xl font-bold tracking-wide my-8' variants={ExperienceVariants} initial="hide" whileInView="show">Work Experience</motion.p>

        //                 {
        //                     workData.map(w => (
        //                         <motion.div className='w-full flex mb-10' key={w.header} variants={ExperienceVariants} initial="hide" whileInView="show">
        //                             <motion.p className='w-1/5 text-xl' variants={ExperienceItemVariants}>{w.year}</motion.p>

        //                             <motion.div className='w-4/6' variants={ExperienceItemVariants}>
        //                                 <p className='text-lg text-red-600 font-bold'>{w.header}</p>
        //                                 <p>{w.semiHeader}</p>
        //                                 <p className='text-sm text-justify my-3'>{w.param}</p>
        //                                 {
        //                                     w.languages.map(language => <button className='text-sm font-bold bg-red-500 text-white mr-4 py-1 px-4 rounded-lg'>{language}</button>)
        //                                 }
        //                             </motion.div>
        //                         </motion.div>
        //                     ))
        //                 }
        //             </div>
        //         </div>
        //         {/* end work */}

        //         {/* start education */}
        //         <div className='col-span-5 pr-2'>
        //             <div>
        //                 <motion.p className='text-lg font-bold tracking-wide my-8' variants={ExperienceVariants} initial="hide" whileInView="show">Bachelor & Certificates</motion.p>

        //                 {
        //                     schoolData.map(w => (
        //                         <motion.div className='w-full flex mb-10' key={w.header} variants={ExperienceVariants} initial="hide" whileInView="show">
        //                             <motion.p className='w-1/6' variants={ExperienceItemVariants}>{w.year}</motion.p>

        //                             <motion.div className='w-5/6' variants={ExperienceItemVariants}>
        //                                 <p className='text-lg text-red-600 font-bold'>{w.header}</p>
        //                                 <p className='text-sm text-justify my-3'>{w.param}</p>

        //                                 <ul className='grid grid-cols-2 gap-2 list-inside list-disc'>
        //                                     {
        //                                         w.courses.map(course => <li key={course}>{course}</li>)
        //                                     }
        //                                 </ul>
        //                             </motion.div>
        //                         </motion.div>
        //                     ))
        //                 }
        //             </div>
        //         </div>
        //         {/* end education */}
        //     </div>
        //     {/* End Experience */}
        // </section>

        <section className='w-full py-20 bg-black text-white overflow-hidden'>

        {/* Start Header */}
        <div className='text-center'>
            <p className='text-5xl font-bold mb-3 text-red-500'>Resume</p>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur. Nullam sem semper venenatis gravida lobortis viverra. Aenean integer sit etiam nec.</p>
        </div>
        {/* End Header */}

        <div className='w-11/12 mx-auto '>
        {/* Start Experience */}
        <div className='flex w-full justify-center mt-10'>
            {/* start work */}
            <div className='w-5/12'>
                <div>
                    <motion.p className='text-xl font-bold tracking-wide' variants={ExperienceVariants} initial="hide" whileInView="show">Work Experience</motion.p>

                    {
                        workData.map(w => (
                            <motion.div className='w-full flex mt-10' key={w.header} variants={ExperienceVariants} initial="hide" whileInView="show">
                                <motion.p className='w-1/5 text-xl' variants={ExperienceItemVariants}>{w.year}</motion.p>

                                <motion.div className='w-4/6' variants={ExperienceItemVariants}>
                                    <p className='text-lg text-red-600 font-bold'>{w.header}</p>
                                    <p>{w.semiHeader}</p>
                                    <p className='text-sm text-justify my-3'>{w.param}</p>
                                    {
                                        w.languages.map(language => <button className='text-sm font-bold bg-red-500 text-white mr-4 py-1 px-4 mb-2 rounded-lg'>{language}</button>)
                                    }
                                </motion.div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            {/* end work */}

            {/* start education */}
            <div className='w-5/12'>
                <div>
                    <motion.p className='text-lg font-bold tracking-wide' variants={ExperienceVariants} initial="hide" whileInView="show">Bachelor & Certificates</motion.p>

                    {
                        schoolData.map(w => (
                            <motion.div className='w-full flex mt-10' key={w.header} variants={ExperienceVariants} initial="hide" whileInView="show">
                                <motion.p className='w-1/6' variants={ExperienceItemVariants}>{w.year}</motion.p>

                                <motion.div className='w-5/6' variants={ExperienceItemVariants}>
                                    <p className='text-lg text-red-600 font-bold'>{w.header}</p>
                                    <p className='text-sm text-justify my-3'>{w.param}</p>

                                    <ul className='grid grid-cols-2 gap-2 list-inside list-disc'>
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
        </div>
        {/* End Experience */}

        </div>
    </section>
    )
}

export default Resume