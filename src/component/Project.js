import React, { useState } from "react";
import ProjectDetailModal from "./PojectDetails/ProjectDetailModal";
import { motion } from "framer-motion";
// image import
import myschool1 from "../assets/Projectimg/myschool/myschool1.png";
import myschool2 from "../assets/Projectimg/myschool/myschool2.png";
import myschool3 from "../assets/Projectimg/myschool/myschool3.png";
import myschoollogo from "../assets/Projectimg/myschool/myschool_logo.png";
import bridge1 from "../assets/Projectimg/bridge/bridge1.png";
import bridge2 from "../assets/Projectimg/bridge/bridge2.png";
import bridge3 from "../assets/Projectimg/bridge/bridge3.png";
import bridgelogo from "../assets/Projectimg/bridge/bridge_logo.png";
import shark1 from "../assets/Projectimg/sharktopsun/shark1.png";
import shark2 from "../assets/Projectimg/sharktopsun/shark2.png";
import shark3 from "../assets/Projectimg/sharktopsun/shark3.png";
import sharklogo from "../assets/Projectimg/sharktopsun/sharktopsun_logo.png";
import offlog1 from "../assets/Projectimg/offlog/offlog1.png";
import offlog2 from "../assets/Projectimg/offlog/offlog2.png";
import offlog3 from "../assets/Projectimg/offlog/offlog3.png";
import offloglogo from "../assets/Projectimg/offlog/offlog_logo.png";

const projectVariants = {
  hide: { x: "200px", opacity: 0},
  show: { x: 0, opacity: 1, transition: { duration: 0.5}}
};

const projectRighImageVariants = {
  hide: { x: "200px", opacity: 0},
  show: { x: "-100px", opacity: 1, transition: { duration: 0.5, delay: 0.5}}
}


const projectLeftImageVariants = {
  hide: { x: "200px", opacity: 0},
  show: { x: "100px", opacity: 1, transition: { duration: 0.5, delay: 0.5}}
}

const projects = [
  {
    title: "My School",
    subTitle: "Student Management Software",
    website: "http://www.exbrainedu.com",
    stack: "VILT (Vue, Inertia, Laravel, Tailwind)",
    languages: ["Vue", "Inertia", "Laravel", "Tailwind"],
    paragraph:
      "My School is a comprehensive online platform designed to streamline various administrative tasks and enhance communication between students, teachers, and administrators. This documentation provides a brief overview of the key features and functionalities of the website",
    image: [myschool1, myschool2, myschool3, myschoollogo],
    body1: [
      "Student Management: Manage student profiles and information.",
      "Monthly Report Attendance & Exam Mark: Generate and manage monthly reports, attendance records, and exam marks.",
      "Admin Roles: Assign different access levels and permissions to administrators.",
    ],
    body2: [
      "Lecture and Video Upload: Easily upload and stream lectures and videos.",
      "User-friendly Interface: Intuitive design for easy navigation.",
      "Blog & Guide : Share articles, news, and educational content within the school community,And Access helpful resources and guides on various topics.",
    ],
  },
  {
    title: "BRIDGE",
    subTitle: "Japan Job Seeking Software",
    website: "http://www.bridge-mm.com",
    stack: "VILT (Vue, Inertia, Laravel, Tailwind)",
    languages: ["Vue", "Inertia", "Laravel", "Tailwind"],
    paragraph:
      "Bridge, our agency company, focuses on assisting teenagers in finding jobs in Japan. By simply uploading their resumes, we connect them with suitable employment opportunities, helping them kickstart their careers.",
    image: [bridge1, bridge2, bridge3, bridgelogo],
    body1: [
      "Create CV: Users can easily create their own professional CVs and customization options.",
      "Code Testing: Job seekers can demonstrate their technical skills by completing coding challenges in various programming languages.",
    ],
    body2: [
      "CV Reviews: Users can submit their CVs for feedback and suggestions from industry professionals or peers",
      "Interview Scheduling: The app helps users manage their interview schedules by providing options to accept, decline, or reschedule interviews.",
    ],
  },
  {
    title: "SharkTopSun",
    subTitle: "Product Show Case",
    website: "http://www.sharktopsun.com",
    stack: "VILT (Vue, Inertia, Laravel, Tailwind)",
    languages: ["Vue", "Inertia", "Laravel", "Tailwind"],
    paragraph:
      "SharkTopSun is a showcase website for solar panels, inverters, and batteries. It includes information about their products, details about each product, and articles providing insights into their offerings.",
    image: [shark1, shark2, shark3, sharklogo],
    body1: [
      "Product Detail: Viewer can easily find products with categories and check product information details ",
      "Inquiry for Product: if Viewer want to buy or want more detail of the product viewer can send email to administrator",
      "Article or Blog Post: Viewer can also view articles of sharktopsun products likes knowledge sharing that upload from admin side",
    ],
    body2: [
      "Upload: Easily upload products information data, images, homepage banner and so on",
      "User-friendly Interface: Intuitive design for easy navigation.",
      "Dashboard : admin can easily see most of the information about their website how many viewer of webpage like this",
    ],
  },
  {
    title: "OFF-LOG",
    subTitle: "HR Management System",
    website: "http://www.sharktopsun.com",
    stack: "MERN (Mongo, Express, React, Node)",
    languages: ["Mongo", "Express", "React", "Node"],
    paragraph:
      "Off-log is a comprehensive online platform that automates HR processes, enhances communication, and streamlines employee management. Key features include:",
    image: [offlog1, offlog2, offlog3, offloglogo],
    body1: [
      "User Authentication and Access Control: Secure login with multiple user roles.",
      "Leave and Attendance Management: Online leave requests, approval, and tracking.",
      "Reporting and Analytics: Customizable reports for HR metrics and data-driven insights.",
    ],
    body2: [
      "Customize Holidays Calendar: Capability to customize and manage holidays and time-off policies according to the organization's requirements.",
      "Payroll Management: Comprehensive payroll processing and management, including salary calculations, tax deductions, and generating pay stubs.",
    ],
  },
];

const Project = () => {
  const [projectData, setProjectData] = useState();
  const [showModal, setShowModal] = useState(false);

  const modalShowHandler = (index) => {
    toggleModal();
    setProjectData((prev) => (prev = projects[index]));
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    // <section className="w-full py-20 bg-black text-white">
    //   {/* Start Header */}
    //   <div className="text-center mb-14">
    //     <p className="text-[40px] font-bold mb-4">
    //       My <span className="text-red-500">Projects</span>
    //     </p>
    //     <p className="font-bold">Some Things I've Build</p>
    //   </div>
    //   {/* End Header */}

    //   <div className="grid grid-cols-12">
    //     <div className="col-start-2 col-span-11 mr-20">
    //       {projects.map((project, index) => (
    //         <>
    //           {index % 2 === 0 ? (
    //             <div
    //               className="grid grid-cols-12 mb-8 place-items-center cursor-pointer"
    //               key={index}
    //               onClick={() => modalShowHandler(index)}
    //             >
    //               <motion.div className="col-start-2 col-span-5" variants={projectVariants} initial="hide" whileInView="show">
    //                 <p className="text-red-500 tracking-wide">
    //                   Featured Project
    //                 </p>
    //                 <p className="text-lg tracking-wide my-3">
    //                   {project.title}
    //                 </p>
    //                 <p className="bg-[#151414] rounded relative z-10 py-4 px-3 mb-2">
    //                   {project.paragraph}
    //                 </p>
    //                 <ul>
    //                   {project.languages.map((language) => (
    //                     <li className="inline-block mr-4 bg-[#DF4F4F] px-3 rounded-md">
    //                       {language}
    //                     </li>
    //                   ))}
    //                 </ul>
    //               </motion.div>

    //               <motion.div className="col-span-6 -translate-x-1/4 relative z-0 hover:z-10" variants={projectRighImageVariants} initial="hide" whileInView="show">
    //                 <div className="w-full h-full bg-black/50 hover:bg-transparent absolute left-0"></div>
    //                 <img src={project.image[0]} alt="" />
    //               </motion.div>
    //             </div>
    //           ) : (
    //             <div
    //               className="grid grid-cols-12 mb-8 place-items-center cursor-pointer"
    //               key={index}
    //               onClick={() => modalShowHandler(index)}
    //             >
    //               <motion.div className="col-start-1 col-span-6 translate-x-1/4 relative z-0 hover:z-20" variants={projectLeftImageVariants} initial="hide" whileInView="show">
    //                 <div className="w-full h-full bg-black/50 hover:bg-transparent absolute left-0"></div>
    //                 <img src={project.image[0]} alt="" />
    //               </motion.div>

    //               <motion.div className="col-span-5 text-right" variants={projectVariants} initial="hide" whileInView="show">
    //                 <p className="text-red-500 tracking-wide">
    //                   Featured Project
    //                 </p>
    //                 <p className="text-lg tracking-wide my-3">
    //                   {project.title}
    //                 </p>
    //                 <p className="bg-[#1D1C1C] rounded relative z-10 py-4 px-3 mb-2">
    //                   {project.paragraph}
    //                 </p>
    //                 <ul>
    //                   {project.languages.map((language) => (
    //                     <li className="inline-block mr-8 bg-[#DF4F4F] px-3 rounded-md">
    //                       {language}
    //                     </li>
    //                   ))}
    //                 </ul>
    //               </motion.div>
    //             </div>
    //           )}
    //         </>
    //       ))}
    //     </div>
    //   </div>
    //   {showModal && <ProjectDetailModal showModal={showModal} projectData={projectData} close={toggleModal} />}
    // </section>

    <section className="w-full py-20 bg-black text-white">
    {/* Start Header */}
    <div className="text-center mb-14">
      <p className="text-[40px] font-bold mb-4">
        My <span className="text-red-500">Projects</span>
      </p>
      <p className="font-bold">Some Things I've Build</p>
    </div>
    {/* End Header */}

    <div className="w-9/12 mx-auto">
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <>
            {index % 2 === 0 ? (
              <div
                className="flex justify-center mb-8 place-items-center cursor-pointer "
                key={index}
                onClick={() => modalShowHandler(index)}
              >
                <motion.div className="w-7/12 " variants={projectVariants} initial="hide" whileInView="show">
                  <p className="text-red-500 tracking-wide">
                    Featured Project
                  </p>
                  <p className="text-lg tracking-wide my-3">
                    {project.title}
                  </p>
                  <p className="bg-[#151414] rounded relative z-10 py-4 px-3 mb-2">
                    {project.paragraph}
                  </p>
                  <ul>
                    {project.languages.map((language) => (
                      <li className="inline-block mr-4 bg-[#DF4F4F] px-3 rounded-md">
                        {language}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div className="w-6/12 -translate-x-1/4 relative z-0 " variants={projectRighImageVariants} initial="hide" whileInView="show">
                  <div className="w-full h-full bg-black/50 hover:bg-transparent absolute left-0"></div>
                  <img src={project.image[0]} alt="" />
                </motion.div>
              </div>
            ) : (
              <div
                className="flex justify-end mb-8 place-items-center cursor-pointer"
                key={index}
                onClick={() => modalShowHandler(index)}
              >
                <motion.div className="w-6/12 translate-x-1/4 relative z-0" variants={projectLeftImageVariants} initial="hide" whileInView="show">
                  <div className="w-full h-full bg-black/50 hover:bg-transparent absolute left-0"></div>
                  <img src={project.image[0]} alt="" />
                </motion.div>

                <motion.div className="w-7/12 text-right" variants={projectVariants} initial="hide" whileInView="show">
                  <p className="text-red-500 tracking-wide">
                    Featured Project
                  </p>
                  <p className="text-lg tracking-wide my-3">
                    {project.title}
                  </p>
                  <p className="bg-[#1D1C1C] rounded relative z-10 py-4 px-3 mb-2">
                    {project.paragraph}
                  </p>
                  <ul>
                    {project.languages.map((language) => (
                      <li className="inline-block mr-8 bg-[#DF4F4F] px-3 rounded-md">
                        {language}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
    {showModal && <ProjectDetailModal showModal={showModal} projectData={projectData} close={toggleModal} />}
  </section>
  );
};

export default Project;
