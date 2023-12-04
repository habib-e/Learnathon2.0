import React from 'react';
import {
    FaFacebook,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";
  
  import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
export const Social = () => {
  return (
    <div className="md:hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2B89A8]}">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/imthehabib/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1A5265]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/habib-e"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#094621]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/imthehabib"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#183058]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="basharmd978@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#B0233A]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1fsNCFCmc1x0XNLpWqOCGxVVN_FLrUF6s/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
  )
}
