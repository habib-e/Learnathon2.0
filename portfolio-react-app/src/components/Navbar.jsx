import React from "react";
// import React from "react";

import { Link } from "react-scroll";
import Logo from "../assets/logoh.png";
import Mobile from "./Mobile";
import { Social } from "./Social";
const Navbar = () => {
  // const [nav, setNav] = useState(false);
  // const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="" style={{ width: "50px" }} />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
      
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <a href ="https://habibportfolio-21f77.web.app/">
            JS Portfolio
          </a>
        </li>

        <li>
          <a href ="https://drive.google.com/file/d/1fsNCFCmc1x0XNLpWqOCGxVVN_FLrUF6s/view?usp=sharing">
            CV
          </a>
        </li>
      </ul>

      <Mobile />

      {/* Social Media */}
      <Social />
    </div>
  );
};

export default Navbar;
