import React from "react";
import { img } from "../assets/assets";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col pt-4">
      {/* Header */}
      <div className="bg-[#FFFFFF] m-4">
        <h1 className="text-3xl">Account Settings</h1>
      </div>

      {/* Main section */}
      <div className="bg-[#F7F8F9] p-10 flex-grow overflow-auto">
        <div className="flex gap-4">
          <div className="relative ">
            <img
              src={img.img1}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <img
              className="absolute bottom-0 right-0 w-6 h-6"
              src={img.camera}
              alt="Camera Icon"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="font-bold">Marry Doe</h2>
            <span>Marry@Gmail.Com</span>
          </div>
        </div>

        <div className="mt-6 ">
          <h1 className="text-[#1D2226] ">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
