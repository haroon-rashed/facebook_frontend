import React from "react";
import {
  FaSearch,
  FaHome,
  FaVideo,
  FaRegBookmark,
  FaRocket,
  FaCog,
} from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";

const VideoSidebar = () => {
  return (
    <div className="w-[260px] h-[89vh] overflow-y-scroll hide-scrollbar bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Video</h2>
        <div className="bg-gray-100 p-2 rounded-full cursor-pointer">
          <FaCog />
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full mb-4">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search videos"
          className="ml-2 bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-2">
        <SidebarItem icon={<FaHome />} label="Home" active />
        <SidebarItem icon={<FaVideo />} label="Live" />
        <SidebarItem icon={<BiMoviePlay />} label="Reels" />
        <SidebarItem icon={<FaRocket />} label="Explore" />
        <SidebarItem icon={<FaRegBookmark />} label="Saved videos" />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
        active ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
      }`}
    >
      <div className="bg-gray-200 p-2 rounded-full text-lg text-black">
        {icon}
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default VideoSidebar;
