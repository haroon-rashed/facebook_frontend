import React from "react";
import { Link } from "react-router-dom";

const PeopleKNow = ({ f_name, l_name, _id }) => {
  return (
    <div>
      <>
        <div className="bg-white sm:h-[350px] w-[100%] rounded-2xl overflow-hidden sm:shadow-sm shadow-gray-400 sm:my-3 my-1">
          <div className="flex sm:flex-col  items-center justify-content gap-2 ">
            <Link to={`/profile/${_id}`}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                className="sm:h-[200px] object-contain rounded-full sm:rounded-t-2xl sm:rounded-b-none h-[100px] sm:w-[100%]"
                alt=""
              />
            </Link>
            <div className="flex flex-col p-0">
              <p className=" font-semibold capitalize">{f_name} {l_name}</p>
              <div className="flex items-center">

              </div>
              <div className="flex sm:flex-col gap-2">
                <button className="px-7 py-1 whitespace-nowrap  rounded-lg w-full sm:my-1 bg-[#DFE9F2] text-blue-500 p-2 font-semibold">
                  Add friend
                </button>
                <button className="px-7 py-1  rounded-lg w-full p-2 bg-gray-200 ">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default PeopleKNow;
