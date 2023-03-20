// import { signOut } from "firebase/auth";
// import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CSVReader from "./CSVReader";
// import Calender from "../components/Calender";
const LoginDash = () => {
  const location = useLocation();
  const { email } = location.state;
  const dateToday = new Date().getDate().toString();

  return (
    <div className="bg-neutral-900 h-screen">
      <div className="text-white flex flex-col justify-center items-center h-32 pt-10 text-4xl">
        <h1>Attendance Tracking using Facial Recognition</h1>
        <p className="mt-5">Today : March {dateToday}, 2023</p>
      </div>

      <div className="flex flex-row px-12 mt-20">
        <img
          className="w-32 h-32"
          src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
          alt="Avatar"
          srcSet=""
        />
        <p className="text-4xl text-white ml-10 mt-5"> Hello, {email}! </p>
      </div>

      <div className="flex flex-col justify-center px-10">
        <CSVReader />
      </div>

      <div className="flex flex-row justify-start bg-neutral-900 ">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-full focus:outline-none focus:shadow-outline ml-12"
        >
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default LoginDash;
