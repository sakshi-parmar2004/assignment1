import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const Navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center bg-[#F7F8F9] relative">
      <div className="absolute bottom-0 flex flex-col gap-4 p-5 ">
        <h2 className="text-2xl font-bold text-left text-[#1D2226]">
          Welcome to PopX
        </h2>
        <p className="text-[#1D2226] opacity-60 font-semibold text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button
          className="flex justify-center items-center px-6 py-2 bg-[#6C25FF] cursor-pointer rounded-md text-white font-semibold"
          onClick={() => Navigate("/signup")}
        >
          Create Account
        </button>
        <button
          className="flex justify-center items-center px-6 py-2 bg-[#6C25FF4B] cursor-pointer rounded-md font-semibold"
          onClick={() => Navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
