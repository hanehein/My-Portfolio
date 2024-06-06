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
    <section
      className="w-full py-20 bg-black/95 overflow-x-hidden"
      id="about"
    >
      <div className="w-11/12 mx-auto flex md:flex-row flex-col">
        {/* Start profile image */}
        <motion.div
          className="lg:w-5/12 md:w-5/12 w-11/12 self-center relative"
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
          className="md:w-6/12 w-11/12 self-center"
          variants={aboutVariants}
          initial="hide"
          whileInView="show"
        >
          <motion.p variants={aboutItemVariants}>
            <span className="text-red-500 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold mr-6">
              {" "}
              About Me{" "}
            </span>
            <ul className="inline-flex md:my-7 flex-row space-x-8">
              <li className="">
                <a href="https://github.com/hanehein" >
                  <img src={git} className="lg:w-8 sm:w-6 w-5" alt="github" />
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.linkedin.com/in/hein-thu-5541111a3/"
                >
                  <img src={linkin} className="lg:w-8 sm:w-6 w-5" alt="linkin" />
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.facebook.com/profile.php?id=100009737767606"
                >
                  <img src={facebook} className="lg:w-8 sm:w-6 w-5" alt="facebook" />
                </a>
              </li>
              <li className="">
                <a href="https://www.instagram.com/hein_thuu/">
                  <img src={instgram} className="lg:w-8 sm:w-6 w-5" alt="instgram" />
                </a>
              </li>
            </ul>
          </motion.p>

          <motion.p
            className="text-slate-300 tracking-wide lg:text-xl md:text-lg sm:text-base text-base indent-10 lg:my-5 md:mb-5"
            variants={aboutItemVariants}
          >
            Hello, I'm Hein Thu, a creative software developer passionate about
            crafting impactful solutions. And Enthusiastic learner, always
            exploring new technologies.
          </motion.p>

          <motion.p
            className="text-slate-300 tracking-wide lg:text-xl sm:text-lg underline underline-offset-2 mb-3"
            variants={aboutItemVariants}
          >
            What I Do?
          </motion.p>

          <motion.p
            className="text-slate-300 tracking-wide lg:text-xl sm:text-lg"
            variants={aboutItemVariants}
          >
            <img src={task} className="inline-block w-5 mr-5" alt="task" />{" "}
            Web-Development
          </motion.p>
          <motion.p
            className="text-slate-300 tracking-wide lg:text-xl sm:text-lg"
            variants={aboutItemVariants}
          >
            <img src={task} className="inline-block w-5 mr-5" alt="task" />{" "}
            App-Development
          </motion.p>

          {/* <div className='w-full flex justify-center items-center'> */}
          <motion.button
            className="w-full bg-red-500 text-white tracking-wide rounded mt-10 py-2 lg:text-lg sm:text-base"
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
