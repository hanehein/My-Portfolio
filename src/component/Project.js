import React from "react";
import ProjectDetailModal from "./PojectDetails/ProjectDetailModal";
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

const projects = [
  {
    title: "My School",
    subTitle: "Student Management Software",
    website: "http://www.exbrainedu.com",
    languages: "VILT (Vue, Inertia, Laravel, Tailwind)",
    paragraph:
      "My School is a comprehensive online platform designed to streamline various administrative tasks and enhance communication between students, teachers, and administrators. This documentation provides a brief overview of the key features and functionalities of the website",
    image: [myschool1, myschool2, myschool3, myschoollogo],
    body: [
      "Student Management: Manage student profiles and information.",
      "Monthly Report Attendance & Exam Mark: Generate and manage monthly reports, attendance records, and exam marks.",
      "Admin Roles: Assign different access levels and permissions to administrators.",
      "Lecture and Video Upload: Easily upload and stream lectures and videos.",
      "User-friendly Interface: Intuitive design for easy navigation.",
      "Blog & Guide : Share articles, news, and educational content within the school community,And Access helpful resources and guides on various topics."
    ],
  },
  {
    title: "BRIDGE",
    subTitle: "Japan Job Seeking Software",
    website: "http://www.bridge-mm.com",
    languages: "VILT (Vue, Inertia, Laravel, Tailwind)",
    paragraph:
      "Bridge, our agency company, focuses on assisting teenagers in finding jobs in Japan. By simply uploading their resumes, we connect them with suitable employment opportunities, helping them kickstart their careers.",
    image: [bridge1, bridge2, bridge3, bridgelogo],
    body: [
      "Create CV: Users can easily create their own professional CVs and customization options.",
      "Code Testing: Job seekers can demonstrate their technical skills by completing coding challenges in various programming languages.",
      "CV Reviews: Users can submit their CVs for feedback and suggestions from industry professionals or peers",
      "Interview Scheduling: The app helps users manage their interview schedules by providing options to accept, decline, or reschedule interviews.",
    ],
  },
  {
    title: "SharkTopSun",
    subTitle: "Product Show Case",
    website: "http://www.sharktopsun.com",
    languages: "VILT (Vue, Inertia, Laravel, Tailwind)",
    paragraph:
      "SharkTopSun is a showcase website for solar panels, inverters, and batteries. It includes information about their products, details about each product, and articles providing insights into their offerings.",
    image: [shark1, shark2, shark3, sharklogo],
    body: [
      "Product Detail: Viewer can easily find products with categories and check product information details ",
      "Inquiry for Product: if Viewer want to buy or want more detail of the product viewer can send email to administrator",
      "Article or Blog Post: Viewer can also view articles of sharktopsun products likes knowledge sharing that upload from admin side",
      "Upload: Easily upload products information data, images, homepage banner and so on",
      "User-friendly Interface: Intuitive design for easy navigation.",
      "Dashboard : admin can easily see most of the information about their website how many viewer of webpage like this"
    ],
  },
  {
    title: "OFF-LOG",
    subTitle: "HR Management System",
    website: "http://www.sharktopsun.com",
    languages: "MERN (Mongo, Express, React, Node)",
    paragraph:
      "Off-log is a comprehensive online platform that automates HR processes, enhances communication, and streamlines employee management. Key features include:",
    image: [offlog1, offlog2, offlog3, offloglogo],
    body: [
      "User Authentication and Access Control: Secure login with multiple user roles.",
      "Leave and Attendance Management: Online leave requests, approval, and tracking.",
      "Reporting and Analytics: Customizable reports for HR metrics and data-driven insights.",
      "Customize Holidays Calendar: Capability to customize and manage holidays and time-off policies according to the organization's requirements.",
      "Payroll Management: Comprehensive payroll processing and management, including salary calculations, tax deductions, and generating pay stubs.",
    ],
  }
];

const Project = () => {
  return (
    <section className="w-full bg-black text-white py-10 px-32">
      {/* Start Header */}
      <div className="text-center pt-14">
        <p className="text-[40px] font-bold mb-3">
          My <span className="text-red-500">Projects</span>
        </p>
      </div>
      {/* End Header */}

      <p className="font-bold my-10">Some Things I've Build</p>

      {projects.map((project, index) => (
        <>
          {index % 2 === 0 ? (
            <div className="grid grid-cols-2 mb-8" key={index}>
              <div className="col-span-1">
                <p className="text-red-500 tracking-wide">Featured Project</p>
                <p className="text-lg tracking-wide my-3">{project.title}</p>
                <p className="bg-zinc-600 rounded relative z-10 py-4 px-3 mb-2">
                  {project.paragraph}
                </p>
                              
              </div>

              <div className="col-span-1 -translate-x-1/4 relative z-0">
                <div className="w-full h-full bg-red-700/40 absolute left-0"></div>
                <img src={project.image[0]} alt={project.image[0]} />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 mb-8" key={index}>
              <div className="col-span-1 translate-x-1/4 relative z-0">
                <div className="w-full h-full bg-red-700/40 absolute left-0"></div>
                <img src={project.image[0]} alt={project.image[0]} />
              </div>

              <div className="col-span-1 text-right">
                <p className="text-red-500 tracking-wide">Featured Project</p>
                <p className="text-lg tracking-wide my-3">{project.title}</p>
                <p className="bg-zinc-600 rounded relative z-10 py-4 px-3 mb-2">
                  {project.paragraph}
                </p>
                {/* <ul>
                                            {
                                                project.languages.map(language =><li className='inline-block mr-8'>{language}</li>)
                                            }
                                        </ul>                             */}
              </div>
            </div>
          )}
        </>
      ))}
      {/* <ProjectDetailModal /> */}
    </section>
  );
};

export default Project;
