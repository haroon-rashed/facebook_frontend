import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { sidebar_data } from "../data/sidebar_data";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Animation Variants
const listVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1, // delay between each child
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
};

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  const [open, setOpen] = useState(false);

  return (
    <div className="h-[92vh] hide-scrollbar overflow-y-scroll p-5">
      {/* User Info */}
      <div className="flex gap-2">
        <div className="flex items-center gap-3">
          <div className="w-[45px] h-[45px] bg-gray-200 border-gray-300 rounded-full border flex justify-center items-center">
            <FaUser size={25} className="text-gray-600" />
          </div>
          <h4 className="text-md capitalize font-semibold">
            {user?.f_name} {user?.l_name}
          </h4>
        </div>
      </div>

      {/* Sidebar Items with Stagger Animation */}
      <motion.ul
        className="mt-6 flex flex-col gap-2"
        variants={listVariants}
        initial="initial"
        animate="animate"
      >
        {sidebar_data
          ?.slice(0, open ? sidebar_data?.length : 10)
          ?.map((item, index) => (
            <Link to={item?.link} key={index}>
            <motion.li
             
              variants={itemVariants}
              className="flex items-center hover:bg-gray-200 rounded-sm cursor-pointer p-1 gap-3  font-semibold"
            >
              <img src={item?.icon} alt="sidebar icon" width={40} />
              {item?.title}
            </motion.li>
            
            
            </Link>
          ))}

        {/* Dropdown Item */}
        <li
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 hover:bg-gray-300 rounded-sm cursor-pointer p-1 font-semibold capitalize"
        >
          <div className="flex justify-center items-center h-[40px] w-[40px] bg-gray-200 rounded-full">
            <IoIosArrowDown
              size={24}
              className={`${
                open ? "rotate-180" : "rotate-0"
              } transition-all duration-200`}
            />
          </div>
          <h5>{open ? "See Less" : "See More"}</h5>
        </li>
      </motion.ul>
    </div>
  );
};

export default Sidebar;
