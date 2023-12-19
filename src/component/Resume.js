import React from 'react'
import { motion } from 'framer-motion'

const  workData = [
    {
        year: "2021-2023",
        header: "Bridge Mobile",
        param: "Lorem ipsum dolor sit amet consectetur. Sed id dignissim tincidunt amet amet at. Enim pretium neque at orci. Enim sapien vel in amet risus massa semper quam. Quis interdum eu sapien mollis enim ipsum nulla",
        languages: ["React Native", "Restful API"]
    },
    {
        year: "2021-2023",
        header: "HR Management",
        param: "Lorem ipsum dolor sit amet consectetur. Sed id dignissim tincidunt amet amet at. Enim pretium neque at orci. Enim sapien vel in amet risus massa semper quam. Quis interdum eu sapien mollis enim ipsum nulla",
        languages: ["React Native", "Restful API"]
    }
]

const  schoolData = [
    {
        year: "2021-2023",
        header: "Bridge Mobile",
        param: "Lorem ipsum dolor sit amet consectetur. Sed id dignissim tincidunt amet amet at. Enim pretium neque at orci. Enim sapien vel in amet risus massa semper quam. Quis interdum eu sapien mollis enim ipsum nulla",
    },
    {
        year: "2021-2023",
        header: "HR Management",
        param: "Lorem ipsum dolor sit amet consectetur. Sed id dignissim tincidunt amet amet at. Enim pretium neque at orci. Enim sapien vel in amet risus massa semper quam. Quis interdum eu sapien mollis enim ipsum nulla",
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
        <section className='w-full h-screen bg-black text-white'>
            {/* Start Header */}
            <div className='text-center pt-14'>
                <p className='text-[40px] font-bold mb-3'>Resume</p>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Nullam sem semper venenatis gravida lobortis viverra. Aenean integer sit etiam nec.</p>
            </div>
            {/* End Header */}

            {/* Start Experience */}
            <div className='grid grid-cols-11 mt-10'>
                {/* start work */}
                <div className='col-start-2 col-span-5'>
                    <div>
                        <motion.p className='text-lg font-bold tracking-wide my-8' variants={ExperienceVariants} initial="hide" whileInView="show">Work Experience</motion.p>

                        {
                            workData.map(w => (
                                <motion.div className='w-full flex mb-10' key={w.header} variants={ExperienceVariants} initial="hide" whileInView="show">
                                    <motion.p className='w-1/5' variants={ExperienceItemVariants}>{w.year}</motion.p>

                                    <motion.div className='w-4/6' variants={ExperienceItemVariants}>
                                        <p className='text-lg text-red-600 font-bold'>{w.header}</p>
                                        <p className='text-sm text-justify my-3'>{w.param}</p>
                                        {
                                            w.languages.map(language => <button className='text-sm font-bold bg-red-600 text-white mr-4 py-1 px-4 rounded-lg'>{language}</button>)
                                        }
                                    </motion.div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
                {/* end work */}

                {/* start education */}
                <div className='col-span-5 pr-2'>
                    <div>
                        <motion.p className='text-lg font-bold tracking-wide my-8' variants={ExperienceVariants} initial="hide" whileInView="show">Bachelor & Certificates</motion.p>

                        {
                            schoolData.map(w => (
                                <motion.div className='w-full flex mb-10' key={w.header} variants={ExperienceVariants} initial="hide" whileInView="show">
                                    <motion.p className='w-1/5' variants={ExperienceItemVariants}>{w.year}</motion.p>

                                    <motion.div className='w-4/6' variants={ExperienceItemVariants}>
                                        <p className='text-lg text-red-600 font-bold'>{w.header}</p>
                                        <p className='text-sm text-justify my-3'>{w.param}</p>
                                    </motion.div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
                {/* end education */}
            </div>
            {/* End Experience */}
        </section>
    )
}

export default Resume