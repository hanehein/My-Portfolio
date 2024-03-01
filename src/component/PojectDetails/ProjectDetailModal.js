import React from "react";
import myschool1 from "../../assets/Projectimg/myschool/myschool1.png";
import { motion } from "framer-motion";

const modalVariants = {
  hide: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5}
  },
  exit: {
    scale: 0,
    opacity: 0
  }
}

const ProjectDetailModal = ({ showModal, projectData, close }) => {
  // console.log(projectData);
  return (
    <motion.div className="fixed top-0 left-0 bg-black/90 w-full h-full z-50 flex justify-center items-center" style={{ fontFamily: 'Lexend' }}  variants={modalVariants} initial="hide" animate="show" exit="exit">
      <div className="lg:w-10/12 w-11/12 h-[90vh] bg-[#232323] lg:p-18 md:p-12 sm:p-10 p-6 overflow-y-auto relative">
        <div className="w-full flex flex-row items-center lg:space-x-24 md:space-x-8 space-x-6 md:mt-0 mt-4">
          <div className="w-7/12 rounded-lg overflow-hidden">
            <img src={projectData.image[0]}  alt="projectimg"></img>
          </div>
          <div className="w-5/12 flex flex-col space-y-3">
            <div className="flex-row flex flex-wrap items-center " >
              <img src={projectData.image[3]} className="lg:w-20 md:w-14 w-12 lg:mr-5 mr-2" alt="projectimg"></img>
              <p className="lg:text-5xl md:text-3xl sm:text-2xl text-xl tracking-wider">{projectData.title}</p>
            </div>
            <p className="lg:text-2xl md:text-base text-xs ">{projectData.subTitle}</p>
            <a href={projectData.website}>
              <p className="text-[#3A91F8] underline lg:text-lg md:text-sm text-xs">
                {" "}
                {projectData.website}
              </p>
            </a>
            <p className="lg:text-lg md:text-sm text-xs">{projectData.stack}</p>
          </div>
        </div>

        <div className="md:mt-10 mt-6">
          <p className="lg:text-lg md:text-sm text-xs tracking-wider">{projectData.paragraph}</p>
        </div>

        <div className="w-full flex flex-row items-center lg:space-x-24 md:space-x-8 space-x-6 md:mt-10 mt-6">
          
          <div className="w-6/12">
            <ul className="lg:text-lg md:text-sm text-xs list-disc">
              {projectData.body1.map((body1) => (
                <li className=" lg:mb-6 md:mb-5 mb-4">{body1}</li>
              ))}
            </ul>
          </div>
          <div className=" w-6/12">
            <img src={projectData.image[1]} alt="projectimg"></img>
          </div>
        </div>

        <div className="w-full flex flex-row items-center lg:space-x-24 md:space-x-8 space-x-6 md:mt-10 mt-6">
        <div className=" w-6/12">
            <img src={projectData.image[2]} alt="projectimg"></img>
          </div>
          <div className="w-6/12">
            <ul className="lg:text-lg md:text-sm text-xs list-disc">
              {projectData.body2.map((body2) => (
                <li className=" lg:mb-6 md:mb-5 mb-4">{body2}</li>
              ))}
            </ul>
          </div>
        </div>
        <button className=" absolute md:top-6 sm:top-4 top-2 lg:right-10 md:right-8 right-4 " style={{ fontFamily: "Itim" }} onClick={close}>
          <p className="lg:text-4xl md:text-3xl text-2xl text-red-500">X</p>
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectDetailModal;

