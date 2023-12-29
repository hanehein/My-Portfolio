import React from "react";

import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <nav className="fixed left-12 top-1/2 -translate-y-1/2 z-50">
      <ul className="flex flex-col space-y-14">
        <li className="">
          <a href="#home" className="">
            <Icon
              icon="bx:home"
              className=" text-white hover:text-red-600 text-4xl"
            />
          </a>
        </li>
        <li className="">
          <a href="#about">
            <Icon
              icon="iconamoon:profile"
              className=" text-white hover:text-red-600  text-4xl"
            />
          </a>
        </li>
        <li className="">
          <a href="#home">
            <Icon
              icon="pepicons-pop:cv"
              className=" text-white hover:text-red-600  text-4xl"
            />
          </a>
        </li>
        <li className="">
          <a href="#home">
            <Icon
              icon="ci:window-code-block"
              className=" text-white hover:text-red-600  text-4xl"
            />
          </a>
        </li>
        <li className="">
          <a href="#home">
            <Icon
              icon="gg:website"
              className=" text-white hover:text-red-600  text-4xl"
            />
          </a>
        </li>
        <li className="">
          <a href="#home">
            <Icon
              icon="ic:outline-mail"
              className=" text-white hover:text-red-600  text-4xl"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
