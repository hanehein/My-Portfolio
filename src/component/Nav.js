import React, { useEffect } from "react";

import { Icon } from "@iconify/react";
import { useState } from "react";
import {
  Link,
  Events,
  scrollSpy,
} from "react-scroll";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    
    Events.scrollEvent.register("begin", function (to, element) {
      // Do something when scrolling begins
    });

    Events.scrollEvent.register("end", function (to, element) {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  return (
    <nav className="fixed  z-50 bottom-10 left-1/2 -translate-x-1/2 backdrop-blur-lg">
      <ul className="flex items-center justify-around space-x-8 sm:space-x-14 md:space-x-16 lg:space-x-20 bg-white/20 rounded-xl md:p-4 md:px-16 sm:p-4 sm:px-10 p-3 px-8 ">
        <li className="">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            className={` ${
              activeSection === "home"
                ? "text-red-600"
                : "hover:text-red-600 text-white"
            } cursor-pointer flex items-center space-x-2`}
          >
            <Icon
              icon="bx:home"
              className="lg:text-4xl md:text-3xl text-2xl cursor-pointer lg:hidden"
            />
            <p className="text-xl lg:flex hidden">Home</p>
          </Link>
        </li>
        <li className="">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            className={` ${
              activeSection === "about"
                ? "text-red-600"
                : "hover:text-red-600 text-white"
            } cursor-pointer`}
          >
            <Icon
              icon="iconamoon:profile"
              className="lg:text-4xl md:text-3xl text-2xl cursor-pointer lg:hidden"
            />
            <p className="text-xl lg:flex hidden">About</p>
          </Link>
        </li>
        <li className="">
          <Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            className={` ${
              activeSection === "resume"
                ? "text-red-600"
                : "hover:text-red-600 text-white"
            } cursor-pointer`}
          >
            <Icon
              icon="pepicons-pop:cv"
              className="lg:text-4xl md:text-3xl text-2xl cursor-pointer lg:hidden"
            />
            <p className="text-xl lg:flex hidden">Resume</p>
          </Link>
        </li>
        <li className="">
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            className={` ${
              activeSection === "skill"
                ? "text-red-600"
                : "hover:text-red-600 text-white"
            } cursor-pointer`}
          >
            <Icon
              icon="ci:window-code-block"
              className="lg:text-4xl md:text-3xl text-2xl cursor-pointer lg:hidden"
            />
            <p className="text-xl lg:flex hidden">Skills</p>
          </Link>
        </li>
        <li className="">
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            className={` ${
              activeSection === "project"
                ? "text-red-600"
                : "hover:text-red-600 text-white"
            }  cursor-pointer`}
          >
            {" "}
            <Icon
              icon="gg:website"
              className="lg:text-4xl md:text-3xl text-2xl cursor-pointer lg:hidden"
            />
            <p className="text-xl lg:flex hidden">Experience</p>
          </Link>
        </li>
        <li className="">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-400}
            duration={500}
            onSetActive={handleSetActive}
            className={` ${
              activeSection === "contact"
                ? "text-red-600"
                : "hover:text-red-600 text-white"
            } cursor-pointer`}
          >
            <Icon
              icon="ic:outline-mail"
              className="lg:text-4xl md:text-3xl text-2xl cursor-pointer lg:hidden"
            />
            <p className="text-xl lg:flex hidden">Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
