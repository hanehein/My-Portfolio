import React from "react";
import { motion } from "framer-motion";

const workData = [
  {
    year: "Aug 2024 ~ Jan 2025",
    header: "Frontend Developer",
    semiHeader: "Thiha Development Co. Ltd, Myanmar",
    param:
      "Thiha Development is a construction company with an additional focus on software development for internal operational improvements",
  },
  {
    year: "Jan 2023 ~ April 2024",
    header: "Software Developer",
    semiHeader: "Exbrain Technology Co. ltd, Myanmar",
    param:
      "Exbrain Technology is a leading software house specializing in Website Development, Mobile Development and Website Hosting.",
  },
  {
    year: "Jan 2022 ~  Dec 2023",
    header: "Software Developer",
    semiHeader: "Exbrain Education, Myanmar",
    param:
      "Exbrain Education is a training center that functions as a school for students, offering comprehensive instruction in various areas of software development, including Java, JavaScript, PHP, Laravel, Vue, and more.",
  },
];

const schoolData = [
  {
    year: "2019 ~ 2020",
    header: "BSc (Hons) Information Technology",
    param: "Management Development Institute, Singapore (MDIS)",
    courses: [
      "Project Management",
      "Client Focused Business Solutions",
      "ICT Service Management",
      "Emerging Database Technologies",
    ],
  },
  {
    year: "2017 ~ 2019",
    header: "Pearson BTEC Level 5 HND Diploma",
    param: "YOUTH International University, Myanmar",
    courses: [
      "Project Design",
      "Networking Infrastructure",
      "Internet Server Management",
      "Managing Software Project",
    ],
  },
];

const ExperienceVariants = {
  hide: {
    y: "100%",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.5, when: "beforeChildren" },
  },
};

const ExperienceItemVariants = {
  hide: {
    y: "50%",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Resume = () => {
  return (
    <section
      className="w-full py-20 bg-black text-white overflow-hidden"
      id="resume"
    >
      {/* Start Header */}
      <div className="md:text-center md:w-full w-11/12 mx-auto">
        <p className="lg:text-5xl sm:text-4xl text-3xl font-bold mb-3 text-red-500">
          Resume
        </p>
      </div>
      {/* End Header */}

      <div className="w-full mx-auto">
        {/* Start Experience */}
        <div className="flex lg:flex-row flex-col w-11/12 mx-auto justify-center mt-10 lg:space-x-6">
          {/* start education */}
          <div className="lg:w-6/12 lg:pl-8 lg:mb-0 mb-6 h-[450px] overflow-y-auto ">
            <div>
              <motion.p
                className="text-lg font-bold tracking-wide"
                variants={ExperienceVariants}
                initial="hide"
                whileInView="show"
              >
                Bachelor & Certificates
              </motion.p>

              {schoolData.map((w) => (
                <motion.div
                  className="w-full flex lg:mt-10 mt-4"
                  key={w.header}
                  variants={ExperienceVariants}
                  initial="show"
                  whileInView="show"
                >
                  <motion.div
                    className="w-full"
                    variants={ExperienceItemVariants}
                  >
                    <p className="text-lg text-red-600 font-bold">
                      {w.header} <span className="text-white">({w.year})</span>
                    </p>
                    <p className="text-base mt-2">{w.param}</p>

                    <ul className="grid grid-cols-2 gap-2 my-2 list-inside list-disc text-white/60">
                      {w.courses.map((course) => (
                        <li key={course}>{course}</li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* end education */}
          <hr className="mx-24" />
          {/* start work */}
          <div className="lg:w-6/12 lg:mt-0 mt-6 h-[450px] overflow-y-auto">
            <div className="">
              <motion.p
                className="text-xl font-bold tracking-wide"
                variants={ExperienceVariants}
                initial="hide"
                whileInView="show"
              >
                Work Experience
              </motion.p>
              {workData.map((w) => (
                <motion.div
                  className="w-full flex lg:mt-10 mt-4"
                  key={w.header}
                  variants={ExperienceVariants}
                  initial="show"
                  whileInView="show"
                >
                  <motion.div
                    className="w-full"
                    variants={ExperienceItemVariants}
                  >
                    <p className="text-lg text-red-600 font-bold">
                      {w.header} <span className="text-white">({w.year})</span>
                    </p>
                    <p className="mt-2">{w.semiHeader}</p>
                    <p className="text-base my-2 text-white/60">{w.param}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* end work */}
        </div>
        {/* End Experience */}
      </div>
    </section>
  );
};

export default Resume;
