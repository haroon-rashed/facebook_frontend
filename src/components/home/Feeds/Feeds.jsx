import React from "react";
import Navbar from "../Navbar";
import { feedsData } from "./FeedsData";
import { HiMiniUsers } from "react-icons/hi2";
import { FaAddressCard } from "react-icons/fa";

const Feeds = () => {
  return (
    <>
      <div className="sticky top-0 z-10 shadow-md bg-white ">
        <Navbar />
      </div>
      <div className="grid grid-cols-12">
        {/* col-span3  */}
        <div className="col-span-3 bg-white p-2 shadow-2xl sticky top-16 h-[91vh]">
          <h1 className="font-bold text-2xl">Friends</h1>
          {/* All */}
          <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-md my-2 cursor-pointer">
            <div className=" h-[40px] w-[40px] bg-[#1877F2] rounded-full flex items-center justify-center">
              <FaAddressCard color="white" size={25} />
            </div>
            <p className="text-lg font-semibold">Home</p>
          </div>
          <ul className="flex flex-col items-center justify-center ">
            {feedsData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center w-full p-1 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2 items-center justify-center h-[40px] w-[40px] rounded-full bg-gray-200">
                      {item.icon}
                    </div>
                    <span className="text-lg text-gray-800 font-semibold">
                      {item.title}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-9 bg-gray-200 "></div>
      </div>
    </>
  );
};

export default Feeds;
Feeds;
