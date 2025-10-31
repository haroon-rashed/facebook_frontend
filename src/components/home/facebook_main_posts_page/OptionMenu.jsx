import React from "react";
import { FaPlus, FaMinus, FaSave, FaBell, FaCode, FaClock, FaTimes, FaUserSlash, FaFlag, FaBan } from "react-icons/fa";

const OptionMenu = () => {
  return (
    <div className="absolute top-12 shadow-xl right-0 w-[250px] h-[400px] z-80">
    <div className="relative">
      {/* Triangle Pointer */}
      <div className="absolute right-4 -top-2 w-0 h-0 border-l-8 border-r-8   border-b-8 border-transparent border-b-white z-50"></div>

      <div className="w-[250px] h-[400px] overflow-y-auto bg-white shadow-lg rounded-md border border-gray-300 p-2 z-40">
        <ul className="space-y-2 text-sm text-gray-800">
          <li className="flex items-center p-2 rounded hover:bg-gray-100 cursor-pointer">
            <FaCode className="text-lg mr-2" />
            <p className="font-semibold">Embed</p>
          </li>

          <li className="flex items-center p-2 rounded hover:bg-gray-100 cursor-pointer">
            <FaTimes className="text-lg mr-2" />
            <div>
              <p className="font-semibold">Hide post</p>
              <p className="text-gray-500 text-xs">See fewer posts like this.</p>
            </div>
          </li>

          <li className="flex items-start p-2 rounded hover:bg-gray-100 cursor-pointer">
            <FaClock className="text-lg mr-2 mt-1" />
            <div>
              <p className="font-semibold">Snooze Naveed Hussain for 30 days</p>
              <p className="text-gray-500 text-xs">Temporarily stop seeing posts.</p>
            </div>
          </li>

          <li className="flex items-start p-2 rounded hover:bg-gray-100 cursor-pointer">
            <FaTimes className="text-lg mr-2 mt-1" />
            <div>
              <p className="font-semibold">Hide all from Naveed Hussain</p>
              <p className="text-gray-500 text-xs">Stop seeing posts from this Page.</p>
            </div>
          </li>

          <li className="flex items-start p-2 rounded hover:bg-gray-100 cursor-pointer">
            <FaClock className="text-lg mr-2 mt-1" />
            <div>
              <p className="font-semibold">Snooze Rana Sarfraz for 30 days</p>
              <p className="text-gray-500 text-xs">Temporarily stop seeing posts.</p>
            </div>
          </li>

          <li className="flex items-start p-2 rounded hover:bg-gray-100 cursor-pointer">
            <FaUserSlash className="text-lg mr-2 mt-1" />
            <div>
              <p className="font-semibold">Unfollow Rana Sarfraz</p>
              <p className="text-gray-500 text-xs">Stop seeing posts but stay friends.</p>
            </div>
          </li>

          <li className="flex items-start p-2 rounded hover:bg-gray-100 cursor-pointer">
            <FaFlag className="text-lg mr-2 mt-1" />
            <div>
              <p className="font-semibold">Report post</p>
              <p className="text-gray-500 text-xs">We won't let Rana Sarfraz know who reported this.</p>
            </div>
          </li>

          <li className="flex items-start p-2 rounded hover:bg-gray-100 cursor-pointer">
            <FaBan className="text-lg mr-2 mt-1" />
            <div>
              <p className="font-semibold">Block Rana Sarfraz's profile</p>
              <p className="text-gray-500 text-xs">You won't be able to see or contact each other.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default OptionMenu;
