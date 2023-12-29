import React from "react";
import profile from "../assets/profile.png";
import git from "../assets/github.png";
import linkin from "../assets/linkin.png";
import facebook from "../assets/facebook.png";
import instgram from "../assets/instgram.png";
import { motion } from "framer-motion";
import task from "../assets/task.png";

const aboutVariants = {
  hide: {
    x: "100%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.5, when: "beforeChildren" },
  },
};

const aboutItemVariants = {
  hide: {
    x: "50%",
    opacity: 0,
  },
  show: {
    x: "0",
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const About = () => {
  return (
    // <section
    //   className="w-full h-[80vh] bg-black/95 grid grid-cols-11 overflow-x-hidden"
    //   id="about"
    // >
    //   {/* Start profile image */}
    //   <motion.div
    //     className="col-start-2 col-span-5 self-center relative"
    //     initial={{ scale: 0, opacity: 0 }}
    //     whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
    //   >
    //     <div className="w-2/3 h-2/3 bg-[#2F2A2A] rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
    //     <img
    //       src={profile}
    //       className="h-2/6 -translate-y-20 relative z-20"
    //       alt="profile"
    //     />
    //   </motion.div>
    //   {/* End profile image */}

    //   {/* Start About */}
    //   <motion.div
    //     className="col-span-4 self-center"
    //     variants={aboutVariants}
    //     initial="hide"
    //     whileInView="show"
    //   >
    //     <motion.p variants={aboutItemVariants}>
    //       <span className="text-red-500 text-5xl font-bold mr-6">
    //         {" "}
    //         About Me{" "}
    //       </span>
    //       <ul className="inline-flex my-7 flex-row space-x-8">
    //         <li className="">
    //           <a href="https://github.com/hanehein" target="_blank">
    //             <img src={git} className="w-8" alt="github" />
    //           </a>
    //         </li>
    //         <li className="">
    //           <a
    //             href="https://www.linkedin.com/in/hein-thu-5541111a3/"
    //             target="_blank"
    //           >
    //             <img src={linkin} className="w-8" alt="linkin" />
    //           </a>
    //         </li>
    //         <li className="">
    //           <a
    //             href="https://www.facebook.com/profile.php?id=100009737767606"
    //             target="_blank"
    //           >
    //             <img src={facebook} className="w-8" alt="facebook" />
    //           </a>
    //         </li>
    //         <li className="">
    //           <a href="https://www.instagram.com/hein_thuu/" target="_blank">
    //             <img src={instgram} className="w-8" alt="instgram" />
    //           </a>
    //         </li>
    //       </ul>
    //     </motion.p>

    //     <motion.p
    //       className="text-slate-300 tracking-wide text-xl text-justify indent-10 my-5"
    //       variants={aboutItemVariants}
    //     >
    //       Hello, I'm Hein Thu, a creative software developer passionate about
    //       crafting impactful solutions. And Enthusiastic learner, always
    //       exploring new technologies.
    //     </motion.p>

    //     <motion.p
    //       className="text-slate-300 tracking-wide text-xl underline underline-offset-2 mb-3"
    //       variants={aboutItemVariants}
    //     >
    //       What I Do?
    //     </motion.p>

    //     <motion.p
    //       className="text-slate-300 tracking-wide text-lg"
    //       variants={aboutItemVariants}
    //     >
    //       <img src={task} className="inline-block w-5 mr-5" alt="task" />{" "}
    //       Web-Development
    //     </motion.p>
    //     <motion.p
    //       className="text-slate-300 tracking-wide text-lg"
    //       variants={aboutItemVariants}
    //     >
    //       <img src={task} className="inline-block w-5 mr-5" alt="task" />{" "}
    //       App-Development
    //     </motion.p>

    //     {/* <div className='w-full flex justify-center items-center'> */}
    //     <motion.button
    //       className="w-full bg-red-500 text-white tracking-wide rounded mt-10 py-2 text-lg"
    //       variants={aboutItemVariants}
    //     >
    //       Download Resume
    //     </motion.button>
    //     {/* </div> */}
    //   </motion.div>
    //   {/* End About */}
    // </section>

    <section
      className="w-full py-20 bg-black/95  overflow-x-hidden"
      id="about"
    >
      <div className="w-11/12 mx-auto flex">
        {/* Start profile image */}
        <motion.div
          className="ml-10 w-5/12 self-center relative"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
        >
          <div className="w-2/3 h-2/3 bg-[#2F2A2A] rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
          <img
            src={profile}
            className="h-2/6 -translate-y-20 relative z-20"
            alt="profile"
          />
        </motion.div>
        {/* End profile image */}

        {/* Start About */}
        <motion.div
          className="w-6/12 self-center"
          variants={aboutVariants}
          initial="hide"
          whileInView="show"
        >
          <motion.p variants={aboutItemVariants}>
            <span className="text-red-500 text-5xl font-bold mr-6">
              {" "}
              About Me{" "}
            </span>
            <ul className="inline-flex my-7 flex-row space-x-8">
              <li className="">
                <a href="https://github.com/hanehein" target="_blank">
                  <img src={git} className="w-8" alt="github" />
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.linkedin.com/in/hein-thu-5541111a3/"
                  target="_blank"
                >
                  <img src={linkin} className="w-8" alt="linkin" />
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.facebook.com/profile.php?id=100009737767606"
                  target="_blank"
                >
                  <img src={facebook} className="w-8" alt="facebook" />
                </a>
              </li>
              <li className="">
                <a href="https://www.instagram.com/hein_thuu/" target="_blank">
                  <img src={instgram} className="w-8" alt="instgram" />
                </a>
              </li>
            </ul>
          </motion.p>

          <motion.p
            className="text-slate-300 tracking-wide text-xl text-justify indent-10 my-5"
            variants={aboutItemVariants}
          >
            Hello, I'm Hein Thu, a creative software developer passionate about
            crafting impactful solutions. And Enthusiastic learner, always
            exploring new technologies.
          </motion.p>

          <motion.p
            className="text-slate-300 tracking-wide text-xl underline underline-offset-2 mb-3"
            variants={aboutItemVariants}
          >
            What I Do?
          </motion.p>

          <motion.p
            className="text-slate-300 tracking-wide text-lg"
            variants={aboutItemVariants}
          >
            <img src={task} className="inline-block w-5 mr-5" alt="task" />{" "}
            Web-Development
          </motion.p>
          <motion.p
            className="text-slate-300 tracking-wide text-lg"
            variants={aboutItemVariants}
          >
            <img src={task} className="inline-block w-5 mr-5" alt="task" />{" "}
            App-Development
          </motion.p>

          {/* <div className='w-full flex justify-center items-center'> */}
          <motion.button
            className="w-full bg-red-500 text-white tracking-wide rounded mt-10 py-2 text-lg"
            variants={aboutItemVariants}
          >
            Download Resume
          </motion.button>
          {/* </div> */}
        </motion.div>
        {/* End About */}
      </div>
    </section>
  );
};

export default About;
