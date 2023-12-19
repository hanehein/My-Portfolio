import React from 'react'

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
]

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
            <div className='flex mt-10'>
                {/* start work */}
                <div className='w-1/2 flex justify-center items-center'>
                    <div className='w-3/4 ml-24'>
                        <p className='text-lg font-bold tracking-wide my-8'>Work Experience</p>

                        {
                            workData.map(w => (
                                <div className='w-full flex mb-10' key={w.header}>
                                    <p className='w-1/5'>{w.year}</p>

                                    <div className='w-5/6'>
                                        <p className='text-lg text-red-600 font-bold'>{w.header}</p>
                                        <p className='text-sm text-justify my-3'>{w.param}</p>
                                        {
                                            w.languages.map(language => <button className='text-sm font-bold bg-red-600 text-white mr-4 py-1 px-4 rounded-lg'>{language}</button>)
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* end work */}

                {/* start education */}
                <div className='w-1/2 flex justify-center items-start'>
                    <div className='w-3/4'>
                        <p className='text-lg font-bold tracking-wide my-8'>Bachelor & Certificates</p>

                        {
                            schoolData.map(w => (
                                <div className='w-full flex mb-10' key={w.header}>
                                    <p className='w-1/5'>{w.year}</p>

                                    <div className='w-5/6'>
                                        <p className='text-lg text-red-600 font-bold'>{w.header}</p>
                                        <p className='text-sm text-justify my-3'>{w.param}</p>
                                    </div>
                                </div>
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