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
  console.log(projectData);
  return (
    <motion.div className="fixed top-0 left-0 bg-black/90 w-full h-full z-50 flex justify-center items-center" style={{ fontFamily: 'Lexend' }}  variants={modalVariants} initial="hide" animate="show" exit="exit">
      <div className="w-10/12 h-[90vh] bg-[#232323] p-10 overflow-y-auto relative">
        <div className="w-full flex flex-row items-center space-x-24">
          <div className="w-7/12 rounded-lg overflow-hidden">
            <img src={projectData.image[0]}></img>
          </div>
          <div className="w-5/12 flex flex-col space-y-3">
            <div className="flex-row flex items-center space-x-5">
              <img src={projectData.image[3]} className="w-20"></img>
              <p className=" text-5xl tracking-wider">{projectData.title}</p>
            </div>
            <p className=" text-3xl ">{projectData.subTitle}</p>
            <a href={projectData.website}>
              <p className="text-[#3A91F8] underline text-xl ">
                {" "}
                {projectData.website}
              </p>
            </a>
            <p className="text-xl">{projectData.stack}</p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xl tracking-wider">{projectData.paragraph}</p>
        </div>

        <div className="w-full flex flex-row items-center space-x-24 mt-10">
          
          <div className="w-6/12">
            <ul className=" list-disc">
              {projectData.body1.map((body1) => (
                <li className="text-xl mb-6">{body1}</li>
              ))}
            </ul>
          </div>
          <div className=" w-6/12">
            <img src={projectData.image[1]}></img>
          </div>
        </div>

        <div className="w-full flex flex-row items-center space-x-24 mt-10">
        <div className=" w-6/12">
            <img src={projectData.image[2]}></img>
          </div>
          <div className="w-6/12">
            <ul className=" list-disc">
              {projectData.body2.map((body2) => (
                <li className="text-xl mb-6">{body2}</li>
              ))}
            </ul>
          </div>
        </div>
        <button className=" absolute top-6 right-8 " style={{ fontFamily: "Itim" }} onClick={close}>
          <p className="text-5xl text-red-500">X</p>
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectDetailModal;

