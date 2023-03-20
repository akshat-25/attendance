import React from "react";
import Navbar from "./Navbar";
import Students from "../assets/students.svg";
import Teachers from "../assets/teachets.svg";
import { Link } from "react-router-dom";
// import LoginStu from "./LoginStu";
// import LoginTea from "./LoginTea";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-black via-stone-800 to-black h-screen">
        <div className="flex flex-col justify-center items-center h-52">
          <h1 className="text-6xl text-white font-bold">Welcome !</h1>
          <p className="text-xl text-white font-semibold mt-5 ml-1">
            Select an option to proceed further
          </p>
        </div>

        <div className="flex justify-around mt-10 ">
          <div className="flex flex-col items-center">
            <img className="h-80 w-80 " src={Students} alt="NA" srcSet="" />
            <Link
              to="/loginstudent"
              className=" hover:scale-105 bg-yellow-400 text-2xl font-semibold p-3 border-solid border-2 border-white rounded-xl mt-10"
            >
              Login as Student
            </Link>
          </div>

          <div class="absolute left-1/2 -ml-0.5 w-0.5 h-96 bg-white"></div>

          <div className="flex flex-col items-center">
            <img className="h-80 w-80" src={Teachers} alt="NA" srcSet="" />
            <Link
              to="/loginteacher"
              className="hover:scale-105 bg-lime-500 text-2xl font-semibold p-3 border-solid border-2 border-white rounded-xl mt-10"
            >
              Login as Teacher
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
