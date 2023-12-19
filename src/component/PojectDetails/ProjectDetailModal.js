import React from 'react'
import myschool1 from "../../assets/Projectimg/myschool/myschool1.png";


const ProjectDetailModal = () => {
    return (
      <div className='fixed top-0 left-0 bg-black/90 w-full h-full z-50 flex justify-center items-center overflow-y-scroll'>
        <div className='w-11/12 h-[90vh] bg-[#424242] p-10'>
            <div className='w-full'>
                <div className='w-6/12'>
                    <img src={myschool1}></img>
                </div>
                <div className='w-5/12'>
                    <div>
                        <img></img>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }


export default ProjectDetailModal