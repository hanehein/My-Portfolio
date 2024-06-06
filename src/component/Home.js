import React from "react";
import styles from "../style/home.module.css";
import logo from "../assets/heinlogo.png";
import git from "../assets/github.png";
import linkin from "../assets/linkin.png";
import facebook from "../assets/facebook.png";
import instgram from "../assets/instgram.png";
import vector from "../assets/Vector.png";
import { motion } from "framer-motion";
import DownloadPDF from "./DownloadPDF";

const homeVariants = {
  hide: {
    x: "100%",
    opacity: 0,
  },
  show: {
    x: "30%",
    opacity: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.8,
      when: "beforeChildren",
    },
  },
};

const dataVariants = {
  hide: {
    x: "50%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Home = () => {
  return (
    <section className={`'w-full h-screen ${styles.homes}`} id="home">
      <div className="w-full h-full bg-black opacity-80 text-white relative">
        {/* Start Header */}
        <div className="flex justify-between items-center pt-8">
          <img src={logo} className="lg:w-20 sm:w-18 w-16 lg:h-7 sm:h-6 h-5  lg:ml-16 md:ml-12 sm:ml-10 ml-6" alt="logo" />
          <DownloadPDF className="bg-red-600 cursor-pointer text-white rounded lg:text-base sm:text-sm text-sm px-5 py-2 lg:mr-16 md:mr-12 sm:mr-10 mr-6">
            
          </DownloadPDF>
        </div>
        {/* End Header */}

      <div className=" w-full h-full absolute z-[-10] top-0 left-0 flex items-center">
        <motion.div
          className="lg:ml-10"
          variants={homeVariants}
          initial="hide"
          animate="show"
        >
          <motion.p
            variants={dataVariants}
            className={`${styles.para1} lg:text-[55px] md:text-[45px] sm:text-[40px] text-[30px] font-bold mb-1`}
          >
            Hello, I'm <span className="text-red-600">Hein Thu</span>.
          </motion.p>
          <motion.p variants={dataVariants} className="lg:text-[35px] md:text-[25px] sm:text-[20px] text-[18px]">
            "I'm Software Developer."
          </motion.p>

          <motion.ul variants={dataVariants} className="flex md:my-7 my-4 flex-row space-x-8">
            <li className="">
              <a href="https://github.com/hanehein">
                <img src={git} className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 w-5 h-5" alt="github" />
              </a>
            </li>
            <li className="">
              <a href="https://www.linkedin.com/in/hein-thu-5541111a3/">
                <img src={linkin} className="lg:w-7 lg:h-7 sm:w-6 sm:h-6  w-5 h-5" alt="linkin" />
              </a>
            </li>
            <li className="">
              <a href="https://www.facebook.com/profile.php?id=100009737767606" >
                <img src={facebook} className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 w-5 h-5" alt="facebook" />
              </a>
            </li>
            <li className="">
              <a href="https://www.instagram.com/hein_thuu/">
                <img src={instgram} className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 w-5 h-5" alt="instgram" />
              </a>
            </li>
          </motion.ul>

          <motion.a
            variants={dataVariants}
            className="lg:text-lg sm:text-base text-sm border-2 border-red-600 px-5 py-2 group"
            href="#about"
          >
            View My Work{" "}
            <img
              src={vector}
              className="inline-block lg:w-4 lg:h-4 w-3 h-3 ml-4 group-hover:rotate-90 transition-all duration-300 md:rotate-0 rotate-90"
              alt="vector"
            />
          </motion.a>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
