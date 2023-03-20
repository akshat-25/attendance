import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const currYear = new Date().getFullYear();
  return (
    <div className="h-screen  bg-gradient-to-r from-black via-stone-800 to-black flex flex-col justify-center items-center">
      <h1 className="text-5xl text-orange-500">
        Application Developed By Team BINARY BRAINS
      </h1>
      <div className="grid grid-cols-4  text-white text-2xl divide-x-2 border-y-white  mt-20">
        <div className="px-5 flex flex-col justify-center items-center ">
          <b className="text-white"> Akshat Parakh</b>
          <div className="flex flex-row">
            <a
              href="https://github.com/akshat-25"
              className="text-white hover:scale-110 cursor-pointer mt-5 h-15 w-15 mr-3"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/akshat-parakh-4a945b236/"
              className="text-cyan-600 hover:scale-110 cursor-pointer mt-5 h-10 w-10"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="px-5 flex flex-col justify-center items-center ">
          <b className="text-white"> Vaibhav Bairathi</b>
          <div className="flex flex-row">
            <a
              href="https://github.com/vaibhavbai1"
              className="text-white hover:scale-110 cursor-pointer mt-5 h-15 w-15 mr-3"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/vaibhav-bairathi/"
              className="text-cyan-600 hover:scale-110 cursor-pointer mt-5 h-10 w-10"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="px-5 flex flex-col justify-center items-center ">
          <b className="text-white"> Aayushi Sharma</b>
          <div className="flex flex-row">
            <a
              href="https://github.com/Aayushi2302"
              className="text-white hover:scale-110 cursor-pointer mt-5 h-15 w-15 mr-3"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aayushi-sharma-910234216/"
              className="text-cyan-600 hover:scale-110 cursor-pointer mt-5 h-10 w-10"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="px-5 flex flex-col justify-center items-center ">
          <b className="text-white"> Krishna Rathi</b>
          <div className="flex flex-row">
            <a
              href="https://github.com/krishnarathi-27"
              className="text-white hover:scale-110 cursor-pointer mt-5 h-15 w-15 mr-3"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/krishna-rathi-539b62200/"
              className="text-cyan-600 hover:scale-110 cursor-pointer mt-5 h-10 w-10"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      {
        <footer className="text-xl text-white mt-96">
          Copyright &copy; {currYear}
        </footer>
      }
    </div>
  );
};

export default About;
