import React, { useEffect, useState } from "react";
import javascript from "../assets/javascript.png";
import styles from "../style/skill.module.css";
import laravel from "../assets/laravel.png";
import tailwind from "../assets/tailwind.png";
import vue from "../assets/vue.png";
import arrow from "../assets/arrow.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import mongo from "../assets/mongo.png";
import firebase from "../assets/firebase.png";
import php from "../assets/php.png";
import express from "../assets/expres.png";
import mysql from "../assets/mysql.png";
import digitalOcean from "../assets/digitalOcean.png";

const languages = [
  {
    name: "JavaScript",
    image: javascript,
    knowledge: 80,
    group: "1",
  },
  {
    name: "React Js",
    image: react,
    knowledge: 80,
    group: "1",
  },
  {
    name: "Laravel",
    image: laravel,
    knowledge: 80,
    group: "2",
  },
  {
    name: "Node Js",
    image: node,
    knowledge: 60,
    group: "2",
  },
  {
    name: "MongoDB",
    image: mongo,
    knowledge: 60,
    group: "3",
  },
  {
    name: "Firebase",
    image: firebase,
    knowledge: 40,
    group: "3",
  },
  {
    name: "Tailwind",
    image: tailwind,
    knowledge: 80,
    group: "1",
  },
  {
    name: "Vue Js",
    image: vue,
    knowledge: 80,
    group: "1",
  },
  {
    name: "Php",
    image: php,
    knowledge: 80,
    group: "2",
  },
  {
    name: "Express Js",
    image: express,
    knowledge: 60,
    group: "2",
  },
  {
    name: "MySQL",
    image: mysql,
    knowledge: 80,
    group: "3",
  },
  {
    name: "Digital Ocean",
    image: digitalOcean,
    knowledge: 40,
    group: "3",
  },
];

const Skill = () => {
  const [categories, setCategories] = useState(1);

  const categoryHandler = (num) => {
    setCategories(num);
  };

  useEffect(() => {
    languages.forEach((language, langIndex) => {
      const bars = document.querySelectorAll(`.bars-container-${langIndex} .bar`);
      const totalBars = bars.length;
      const filledBars = Math.round((language.knowledge / 100) * totalBars);

      bars.forEach((bar, index) => {
        if (index >= totalBars - filledBars) {
          bar.classList.add('bg-[#DF4F4F]');
          bar.classList.remove('bg-white');
        } else {
          bar.classList.add('bg-white');
          bar.classList.remove('bg-[#DF4F4F]');
        }
      });
    });
  }, [categories]);

  return (
    <section className="w-full py-20 bg-black/90 text-white" id="skill">
      {/* Start Header */}
      <div className="md:text-center md:w-full w-11/12 mx-auto">
        <p className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold mb-3">
          Professional <span className="text-red-500">SkillSet</span>
        </p>
        <p className="text-sm">
          Versatile programmer with expertise in following programming
          languages. Skilled in implementing design, and maintaining software
          solutions. Committed to staying updated on emerging technologies and
          contributing to effective teamwork.{" "}
        </p>
      </div>
      {/* End Header */}

      <div className="my-10 flex justify-center lg:text-base sm:text-sm text-xs">
      <button
          className={` ${
            categories === 0
              ? "bg-[#DF4F4F] px-4 py-1 rounded-s-lg sm:flex hidden"
              : "bg-[#202020] border-gray-500 px-4 py-1 rounded-s-lg sm:flex hidden"
          }`}
          onClick={() => categoryHandler(0)}
        >
          All
        </button>
        <button
          className={` ${
            categories === 1
              ? "bg-[#DF4F4F] px-4 py-1 sm:border-l-[1px] border-[#DF4F4F] sm:rounded-s-none rounded-s-lg"
              : "bg-[#202020] border-[#DF4F4F] px-4 py-1 sm:border-l-[1px] sm:rounded-s-none rounded-s-lg"
          }`}
          onClick={() => categoryHandler(1)}
        >
          Front-End
        </button>
        <button
          className={` ${
            categories === 2
              ? "bg-[#DF4F4F] px-4  border-x-[1px] border-[#DF4F4F]"
              : "bg-[#202020] border-x-[1px] border-[#DF4F4F] px-4"
          }`}
          onClick={() => categoryHandler(2)}
        >
          Back-End
        </button>
        <button
          className={` ${
            categories === 3
              ? "bg-[#DF4F4F] px-4 rounded-e-lg"
              : "bg-[#202020] px-4 rounded-e-lg "
          } `}
          onClick={() => categoryHandler(3)}
        >
          Database & Other
        </button>
      </div>
      {/* Start languae */}
      <div className="flex justify-center items-center ">
       
        <div className="lg:w-5/6 md:w-11/12 grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 md:gap-4 sm:gap-10 gap-10 ">
          {languages.map((language, index) => (
            <>
              {categories == language.group && (
                <div key={index}>
                  <div className="flex justify-center items-start">
                    <div className="w-16 h-16 bg-neutral-700 rounded-lg relative mr-2">
                      <img
                        src={language.image}
                        className="w-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        alt={language.image}
                      />
                    </div>

                    <div className={styles.knowledgePercentage}>
                      <span className="text-[10px]">
                        {language.knowledge} %
                      </span>

                      <div id={`bars-container-${index}`} className={`bars-container-${index}`}>
                        <div className="bar w-[15px] h-[3px] rounded-lg mb-1 mx-auto"></div>
                        <div className="bar w-[15px] h-[3px] rounded-lg mb-1 mx-auto"></div>
                        <div className="bar w-[15px] h-[3px] rounded-lg mb-1 mx-auto"></div>
                        <div className="bar w-[15px] h-[3px] rounded-lg mb-1 mx-auto"></div>
                        <div className="bar w-[15px] h-[3px] rounded-lg mb-1 mx-auto"></div>
                      </div>
                    </div>
                  </div>

                  <p className="text-center">{language.name}</p>
                </div>
              )}
              
            </>
          ))}
          {categories === 0 && (
                <>
                 {languages.map((language, index) => (
                   <div key={index}>
                     <div className="flex justify-center items-start">
                       <div className="w-16 h-16 bg-neutral-700 rounded-lg relative mr-2">
                         <img
                           src={language.image}
                           className="w-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                           alt={language.image}
                         />
                       </div>
       
                       <div className={styles.knowledgePercentage}>
                         <span className="text-[10px]">{language.knowledge} %</span>
       
                         <div id={`bars-container-${index}`} className={`bars-container-${index}`}>
                           <div className="bar w-[15px] h-[3px]  rounded-lg mb-1 mx-auto"></div>
                           <div className="bar w-[15px] h-[3px] rounded-lg mb-1 mx-auto"></div>
                           <div className="bar w-[15px] h-[3px] rounded-lg mb-1 mx-auto"></div>
                           <div className="bar w-[15px] h-[3px] rounded-lg mb-1 mx-auto"></div>
                           <div className="bar w-[15px] h-[3px] rounded-lg mb-1 mx-auto"></div>
                         </div>
                       </div>
                     </div>
       
                     <p className="text-center">{language.name}</p>
                   </div>
                 ))}
               </>
              )}
        </div>
      </div>
      {/* End languae */}

      {/* Start stack */}
      <div className="flex md:flex-row flex-col justify-between lg:w-9/12 md:w-11/12 lg:space-x-36 md:space-x-20 mx-auto mt-20">
        <div className="md:w-6/12 w-10/12 mx-auto">
          {/* start header */}
          <div className="w-full flex justify-between items-center">
            <p className="text-lg font-bold underline underline-offset-4 decoration-2 decoration-red-500">
              VILT Stack
            </p>

            <div className="flex">
              <img src={laravel} className="md:w-8 w-7 mr-4" alt="laravel" />
              <img src={tailwind} className="md:w-8 w-7 mr-4" alt="tailwind" />
              <img src={vue} className="md:w-8 w-7 mr-4" alt="vue" />
              <img src={arrow} className="md:w-8 w-7" alt="arrow" />
            </div>
          </div>
          {/* end header */}

          {/* start body */}
          <p className=" mt-5 text-sm text-justify">
            Vue.js, Inertia.js, Laravel, and Tailwind CSS, I develop
            high-quality web applications with seamless functionality and
            user-friendly interfaces.
          </p>
          {/* end body */}
        </div>

        <div className="md:w-6/12 w-10/12 mx-auto md:mt-0 mt-4">
          {/* start header */}
          <div className="w-full flex justify-between items-center">
            <p className="text-lg font-bold underline underline-offset-4 decoration-2 decoration-red-500">
              MERN Stack
            </p>

            <div className="flex">
              <img src={mongo} className="md:w-8 w-7 mr-4" alt="laravel" />
              <img src={express} className="md:w-8 w-7 mr-4" alt="tailwind" />
              <img src={react} className="md:w-8 w-7 mr-4" alt="vue" />
              <img src={node} className="md:w-8 w-7" alt="arrow" />
            </div>
          </div>
          {/* end header */}

          {/* start body */}
          <p className="mt-5 text-sm text-justify">
            Experienced in MERN stack (MongoDB, Express.js, React.js, Node.js)
            development, I craft dynamic and responsive web applications,
            ensuring seamless integration and optimal performance across the
            entire stack.
          </p>
          {/* end body */}
        </div>
      </div>
      {/* End stack */}
    </section>
  );
};

export default Skill;
