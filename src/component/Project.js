import React from 'react'
import project3 from "../assets/project3.png"

const projects = [
    {
        semiTitle: "Featured Project",
        title: "Build Student Management Software",
        paragraph: "Lorem ipsum dolor sit amet consectetur. Sed id dignissim tincidunt amet amet at. Enim pretium neque at orci. Enim sapien vel in amet risus massa semper quam. Quis interdum eu sapien mollis enim ipsum nullaLorem ipsum dolor sit amet consectetur. Sed id dignissim tincidunt amet amet at. Enim pretium neque at orci. Enim sapien vel in amet risus massa semper quam. Quis interdum eu sapien mollis enim ipsum nulla",
        languages: ["Vue", "Laravel", "Inertia", "Tailwind"],
        image: project3
    },
    {
        semiTitle: "Featured Project",
        title: "Build Student Management Software",
        paragraph: "Lorem ipsum dolor sit amet consectetur. Sed id dignissim tincidunt amet amet at. Enim pretium neque at orci. Enim sapien vel in amet risus massa semper quam. Quis interdum eu sapien mollis enim ipsum nullaLorem ipsum dolor sit amet consectetur. Sed id dignissim tincidunt amet amet at. Enim pretium neque at orci. Enim sapien vel in amet risus massa semper quam. Quis interdum eu sapien mollis enim ipsum nulla",
        languages: ["Vue", "Laravel", "Inertia", "Tailwind"],
        image: project3
    },
    {
        semiTitle: "Featured Project",
        title: "Build Student Management Software",
        paragraph: "Lorem ipsum dolor sit amet consectetur. Sed id dignissim tincidunt amet amet at. Enim pretium neque at orci. Enim sapien vel in amet risus massa semper quam. Quis interdum eu sapien mollis enim ipsum nullaLorem ipsum dolor sit amet consectetur. Sed id dignissim tincidunt amet amet at. Enim pretium neque at orci. Enim sapien vel in amet risus massa semper quam. Quis interdum eu sapien mollis enim ipsum nulla",
        languages: ["Vue", "Laravel", "Inertia", "Tailwind"],
        image: project3
    }
]

const Project = () => {
    return (
        <section className='w-full bg-black text-white py-10'>
            {/* Start Header */}
            <div className='text-center pt-14'>
                <p className='text-[40px] font-bold mb-3'>My <span className='text-red-500'>Projects</span></p>
            </div>
            {/* End Header */}

            <div className='grid grid-cols-11'>
                
                <p className='col-start-2 col-span-10 font-bold my-10'>Some Things I've Build</p>

                {
                    projects.map((project, index) =>(
                        <div className='col-start-2 col-span-10 pr-20'>
                            {
                                index % 2 === 0 ?
                                    <div className='grid grid-cols-2 mb-8' key={index}>
                                        <div className='col-span-1'>
                                            <p className='text-red-500 tracking-wide'>{project.semiTitle}</p>
                                            <p className='text-lg tracking-wide my-3'>{project.title}</p>
                                            <p className='bg-zinc-600 rounded relative z-10 py-4 px-3 mb-2'>{project.paragraph}</p>
                                            <ul>
                                                {
                                                    project.languages.map(language =><li className='inline-block mr-8'>{language}</li>)
                                                }
                                            </ul>                            
                                        </div>

                                        <div className='col-span-1 -translate-x-1/4 relative z-0'>
                                            <div className='w-full h-full bg-red-700/40 absolute left-0'></div>
                                            <img src={project.image} alt={project.image}/>
                                        </div>   
                                    </div>
                                    :
                                    <div className='grid grid-cols-2 mb-8' key={index}>
                                        <div className='col-span-1 translate-x-1/4 relative z-0'>
                                            <div className='w-full h-full bg-red-700/40 absolute left-0'></div>
                                            <img src={project.image} alt={project.image}/>
                                        </div>  

                                        <div className='col-span-1 text-right'>
                                            <p className='text-red-500 tracking-wide'>{project.semiTitle}</p>
                                            <p className='text-lg tracking-wide my-3'>{project.title}</p>
                                            <p className='bg-zinc-600 rounded relative z-10 py-4 px-3 mb-2'>{project.paragraph}</p>
                                            <ul>
                                                {
                                                    project.languages.map(language =><li className='inline-block mr-8'>{language}</li>)
                                                }
                                            </ul>                            
                                        </div> 
                                    </div>
                            }
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Project