import React from "react";
import { FaUser } from "react-icons/fa";
import AddPostModal from "./AddPostModal";
import { motion } from "framer-motion";
const AddPost = () => {
  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-md xl:w-[70%] mx-auto lg:w-[80%] md:w-[90%] w-[95%] p-5 rounded-md border border-gray-200 my-5"
      >
        <div className="flex gap-3 w-full">
          <div className="flex gap-2 w-full">
            <div className="flex items-center gap-3">
              <div className="w-[45px] h-[45px] bg-gray-200 border-gray-300 rounded-full border flex justify-center items-center">
                <FaUser size={25} className="text-gray-600" />
              </div>
            </div>

            <AddPostModal />
          </div>
        </div>
        <hr className="hr" />

        <div className="flex justify-around">
          <div className="flex hover:bg-gray-100 rounded-md cursor-pointer w-full  p-1 text-center gap-3 justify-center items-center">
            <img src="/menu_icons/video-post.png" width={20} alt="video post" />
            <h5 className="text-gray-500 text-md font-semibold">Live Video</h5>
          </div>
          <div className="flex hover:bg-gray-100 rounded-md cursor-pointer w-full  p-1 text-center gap-3 justify-center items-center">
            <img src="/menu_icons/photo-post.png" width={20} alt="video post" />
            <h5 className="text-gray-500 text-md font-semibold">Photo/Video</h5>
          </div>
          <div className="flex hover:bg-gray-100 rounded-md cursor-pointer w-full  p-1 text-center gap-3 justify-center items-center">
            <img
              src="/menu_icons/feeling-post.png"
              width={20}
              alt="video post"
            />
            <h5 className="text-gray-500 text-md font-semibold">
              Feeling/activity
            </h5>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AddPost;
