import React, { useState } from "react";

import {
    FaBars,
    FaTimes
} from "react-icons/fa";
import { Link } from 'react-scroll';
  
const Mobile = () => {
    const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div>
        {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>

        <li className="py-6 text-4xl">
          {" "}
          <a href ="https://habibportfolio-21f77.web.app/">
            JS Portfolio
          </a>
        </li>

        <li className="py-6 text-4xl">
          {" "}
          <a href ="https://drive.google.com/file/d/1fsNCFCmc1x0XNLpWqOCGxVVN_FLrUF6s/view?usp=sharing">
            CV
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Mobile