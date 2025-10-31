import React, { useState } from "react";
import { BsFillQuestionCircleFill, BsQuestionCircleFill } from "react-icons/bs";
import { FaListUl, FaMoon, FaUser } from "react-icons/fa";
import { FaPersonRifle } from "react-icons/fa6";
import { HiLockClosed } from "react-icons/hi";
import { IoIosArrowForward, IoIosSettings } from "react-icons/io";
import { MdArrowBack, MdFeedback, MdKeyboardAlt } from "react-icons/md";
import { PiLineSegmentsDuotone } from "react-icons/pi";
import { RiInboxArchiveFill, RiLogoutBoxFill } from "react-icons/ri";
import { TbLockHeart, TbMessageReportFilled, TbWorld } from "react-icons/tb";
import { ImUserCheck } from "react-icons/im";
import { SiGocd } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AccountSetting = () => {
  const [setting, setSetting] = useState(false);
  // const [settingBack, setSettingBack] = useState(false);
  const [support, setSupport] = useState(false);
  const [display, setDisplay] = useState(false);
  const [keyboard, setKeyboard] = useState(false);
  const [darkMode, setDarkMode] = useState("off");
  const [compact, setCompact] = useState("off");
  const [shortcut, setShortcut] = useState("off");
  const { user } = useSelector((state) => state.auth)
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white p-2 shadow-2xl shadow-gray-700 z-10 w-[350px] rounded-lg translate-y-4 absolute translate-x-full top-10 right-100  ${setting ? "hidden" : "block"
          } ${support ? "hidden" : "block"}
        ${display ? "hidden" : "block"}`}
      >
        <div className="p-2  rounded-md shadow-md shadow-gray-300  w-full">
          <div className="flex items-center gap-1">
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] border-2 border-gray-300">
              <FaUser size={22} className="text-gray-700" />
            </div>
            <Link to={`/profile/${user?._id}`}>
              <h2>
                {user?.f_name} {user?.l_name}
              </h2>
            </Link>
          </div>
          <hr className="hr " />
          <div className="rounded-lg bg-gray-200 flex items-center justify-center p-2 hover:bg-gray-300">
            <FaPersonRifle className="text-center" />
            <h2>See all profiles</h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-5 w-full">
          <div
            onClick={() => setSetting(!setting)}
            className={`flex items-center justify-between w-full p-2 hover:bg-gray-200/50 rounded-md my-1 cursor-pointer`}
          >
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] cursor-pointer ">
              <IoIosSettings size={22} className="text-gray-700" />
            </div>
            <p className="font-bold me-auto ms-2 ">Settings and privacy</p>
            <IoIosArrowForward size={25} color="gray" />
          </div>
          <div
            onClick={() => setSupport(!support)}
            className="flex items-center justify-between w-full p-2 hover:bg-gray-200/50 rounded-md my-1 cursor-pointer  "
          >
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
              <BsQuestionCircleFill size={22} className="text-gray-700" />
            </div>
            <p className="font-bold me-auto ms-2 ">Help and support</p>
            <IoIosArrowForward size={25} color="gray" />
          </div>
          <div
            onClick={() => setDisplay(!display)}
            className="flex items-center justify-between w-full p-2 hover:bg-gray-200/50 rounded-md my-1 cursor-pointer "
          >
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
              <FaMoon size={22} className="text-gray-700" />
            </div>
            <p className="font-bold me-auto ms-2 ">Display & accessibility</p>
            <IoIosArrowForward size={25} color="gray" />
          </div>
          <div className="flex items-center  w-full p-2 hover:bg-gray-200/50 rounded-md my-1  ">
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
              <MdFeedback size={22} className="text-gray-700" />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold me-auto ms-2 ">Give feedback</p>
              <p className=" me-auto ms-2">CTRL B</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full p-2 hover:bg-gray-200/50 rounded-md my-1  ">
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
              <RiLogoutBoxFill size={22} className="text-gray-700" />
            </div>
            <p className="font-bold me-auto ms-2 ">Log out</p>
          </div>
        </div>
        <p className="px-2 m-0">
          <span className="text-gray-500 hover:underline cursor-pointer font-bold text-[13px]">
            Privacy
          </span>{" "}
          .{" "}
          <span className="text-gray-500 hover:underline cursor-pointer font-bold text-[13px]">
            Terms
          </span>
          .{" "}
          <span className="text-gray-500 hover:underline cursor-pointer font-bold text-[13px]">
            Advertising
          </span>{" "}
          .{" "}
          <span className="text-gray-500 hover:underline cursor-pointer font-bold text-[13px]">
            Ad Choices
          </span>{" "}
          .
          <span className="text-gray-500 hover:underline cursor-pointer font-bold text-[13px]">
            Cookies
          </span>{" "}
          .{" "}
          <span className="text-gray-500 hover:underline cursor-pointer font-bold text-[13px]">
            More
          </span>
          <span className="text-gray-500 text-[12px]"> Meta © 2025</span>
        </p>
      </div>
      {/*  Settings & privacy */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white p-2 shadow-2xl shadow-gray-700   rounded-lg translate-y-4 w-[350px]  absolute translate-x-full top-10 right-100 ${setting ? "block" : "hidden"
          }  `}
      >
        <div className="flex items-center justify-start gap-4 mx-auto my-3 w-[400px]">
          <div
            onClick={() => setSetting(false)}
            className={`hover:bg-gray-200 flex items-center justify-center rounded-full h-[30px] w-[30px] cursor-pointer  `}
          >
            <MdArrowBack size={20} className="text-gray-700" />
          </div>

          <p className="font-bold text-2xl whitespace-nowrap">
            Settings & privacy
          </p>
        </div>
        <div className="flex flex-col bg-white z-50 items-center gap-2">
          <div className="flex items-center justify-between w-full hover:bg-gray-200/50 rounded-md p-2 ">
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
              <IoIosSettings size={25} className="text-gray-700" />
            </div>
            <p className="font-bold me-auto ms-2 ">Settings</p>
          </div>
          <div className="flex items-center justify-between w-full hover:bg-gray-200/50 rounded-md p-2 ">
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
              <TbWorld size={25} className="text-gray-700" />
            </div>
            <p className="font-bold me-auto ms-2 ">Language</p>
          </div>
          <div className="flex items-center justify-between w-full hover:bg-gray-200/50 rounded-md p-2 ">
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
              <TbLockHeart size={25} className="text-gray-700" />
            </div>
            <p className="font-bold me-auto ms-2 ">Privacy Chekup</p>
          </div>
          <div className="flex items-center justify-between w-full hover:bg-gray-200/50 rounded-md p-2 ">
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
              <HiLockClosed size={25} className="text-gray-700" />
            </div>
            <p className="font-bold me-auto ms-2 ">Privacy Center</p>
          </div>
          <div className="flex items-center justify-between w-full hover:bg-gray-200/50 rounded-md p-2 ">
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
              <FaListUl size={20} className="text-gray-700" />
            </div>
            <p className="font-bold me-auto ms-2 ">Activity log</p>
          </div>
          <div className="flex items-center justify-between w-full hover:bg-gray-200/50 rounded-md p-2 ">
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
              <PiLineSegmentsDuotone size={25} className="text-gray-700" />
            </div>
            <p className="font-bold me-auto ms-2 ">Content preferences</p>
          </div>
        </div>
      </div>
      {/*  Help & support*/}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white p-2 shadow-2xl shadow-gray-700  w-[350px] rounded-lg translate-y-4 transition-all duration-100 absolute translate-x-full top-10 right-100  ${support ? "block " : "hidden"
          }`}
      >
        <div className="flex items-center justify-start gap-4 mx-auto my-3 w-full">
          <div
            onClick={() => setSupport(false)}
            className="hover:bg-gray-200 flex items-center justify-center rounded-full h-[30px] w-[30px] cursor-pointer "
          >
            <MdArrowBack size={20} className="text-gray-700" />
          </div>

          <p className="font-bold text-2xl whitespace-nowrap">Help & support</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-between w-full hover:bg-gray-200/50 rounded-md p-2 ">
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
              <BsFillQuestionCircleFill size={20} className="text-gray-700" />
            </div>
            <p className="font-bold me-auto ms-2 ">Help center</p>
          </div>
          <div className="flex items-center justify-between w-full hover:bg-gray-200/50 rounded-md p-2 ">
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
              <ImUserCheck size={20} className="text-gray-700" />
            </div>
            <p className="font-bold me-auto ms-2 ">Account status</p>
          </div>
          <div className="flex items-center justify-between w-full hover:bg-gray-200/50 rounded-md p-2 ">
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
              <RiInboxArchiveFill size={20} className="text-gray-700" />
            </div>
            <p className="font-bold me-auto ms-2 ">Support inbox</p>
          </div>
          <div className="flex items-center justify-between w-full hover:bg-gray-200/50 rounded-md p-2 ">
            <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
              <TbMessageReportFilled size={20} className="text-gray-700" />
            </div>
            <p className="font-bold me-auto ms-2 ">Report a problem</p>
          </div>
        </div>
      </div>

      {/*   Display & accessibility */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white p-2 shadow-2xl shadow-gray-700  w-[350px] rounded-lg translate-y-4 absolute translate-x-full top-10 right-100 ${display ? "block" : "hidden"
          } ${keyboard ? "hidden" : "block"} `}
      >
        <div className="flex items-center justify-start gap-4 mx-auto my-3 w-full">
          <div
            onClick={() => setDisplay(false)}
            className="hover:bg-gray-200 flex items-center justify-center rounded-full h-[30px] w-[30px] cursor-pointer"
          >
            <MdArrowBack size={20} className="text-gray-700" />
          </div>

          <p className="font-bold text-2xl whitespace-nowrap">
            Display & accessibility
          </p>
        </div>
        <div className="flex flex-col items-center justify bg-center">
          <div className="flex items-start gap-2  w-full">
            <div className="bg-gray-200 flex items-center  justify-center rounded-full h-[35px] w-[35px] ">
              <FaMoon size={20} className="text-gray-700" />
            </div>
            <div className="flex flex-col items-center  w-[90%]">
              <p className="font-bold me-auto  ">Dark mode</p>
              <p className="text-gray-500 text-[13px]">
                Adjust the appearance of Facebook to reduce glare and give your
                eyes a break.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center w-full  rounded-md">
            {/* Option Off */}
            <div
              className={`flex items-center justify-between w-full p-3 rounded-md cursor-pointer ${darkMode === "off" ? "bg-gray-200" : ""
                }`}
              onClick={() => setDarkMode("off")}
            >
              <p className="font-bold ps-10">Off</p>
              <input
                type="radio"
                name="darkMode"
                value="off"
                checked={darkMode === "off"}
                onChange={() => setDarkMode("off")}
                className="h-[20px] w-[20px] "
              />
            </div>

            {/* Option On */}
            <div
              className={`flex items-center justify-between w-full p-3 rounded-md cursor-pointer ${darkMode === "on" ? "bg-gray-200" : ""
                }`}
              onClick={() => setDarkMode("on")}
            >
              <p className="font-bold ps-10">On</p>
              <input
                type="radio"
                name="darkMode"
                value="on"
                checked={darkMode === "on"}
                onChange={() => setDarkMode("on")}
                className="h-[20px] w-[20px]"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 w-full ps-10 pe-0">
            <div className="flex flex-col items-center w-[90%] py-2">
              <p className="font-bold me-auto  ">Automatic</p>
              <p className="text-gray-500 text-[12px]">
                We'll automatically adjust the display based on your device's
                system settings.
              </p>
            </div>
            <div className=" flex items-center justify-center rounded-full h-[35px] w-[35px]  pe-2">
              <input type="radio" className="h-[20px] w-[20px]" />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2 w-full">
          <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
            <SiGocd size={20} className="text-gray-700" />
          </div>
          <div className="flex flex-col items-center w-[90%]">
            <p className="font-bold me-auto  ">Compact mode</p>
            <p className="text-gray-500 text-[13px]">
              Make your font size smaller so that more content that fit on your
              screen.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center w-full  rounded-md">
          {/* Option Off */}
          <div
            className={`flex items-center justify-between w-full p-3 rounded-md cursor-pointer ${compact === "off" ? "bg-gray-200" : ""
              }`}
            onClick={() => setCompact("off")}
          >
            <p className="font-bold ps-10">Off</p>
            <input
              type="radio"
              name="compact"
              value="off"
              checked={compact === "off"}
              onChange={() => setCompact("off")}
              className="h-[20px] w-[20px]"
            />
          </div>

          {/* Option On */}
          <div
            className={`flex items-center justify-between w-full p-3 rounded-md cursor-pointer ${compact === "on" ? "bg-gray-200" : ""
              }`}
            onClick={() => setCompact("on")}
          >
            <p className="font-bold ps-10">On</p>
            <input
              type="radio"
              name="comapct"
              value="on"
              checked={compact === "on"}
              onChange={() => setDarkMode("on")}
              className="h-[20px] w-[20px]"
            />
          </div>
        </div>
        <div
          onClick={() => setKeyboard(!keyboard)}
          className="flex items-center justify-between w-full py-2 hover:bg-gray-200/50 rounded-md cursor-pointer "
        >
          <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
            <MdKeyboardAlt size={22} className="text-gray-700" />
          </div>
          <p className="font-bold me-auto ms-2  ">Keyboard</p>
          <IoIosArrowForward size={25} color="gray" />
        </div>
      </div>

      {/* keyboard */}

      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white p-2 shadow-2xl shadow-gray-700 w-[350px]  rounded-lg translate-y-4 absolute translate-x-full top-10 right-100 ${keyboard ? "block" : "hidden"
          } `}
      >
        <div className="flex items-center justify-start gap-4 mx-auto my-3 w-full ">
          <div
            onClick={() => setKeyboard(false)}
            className="hover:bg-gray-200 flex items-center justify-center rounded-full h-[30px] w-[30px] cursor-pointer "
          >
            <MdArrowBack size={20} className="text-gray-700" />
          </div>

          <p className="font-bold text-2xl whitespace-nowrap">Keyboard</p>
        </div>
        <div className="flex items-center justify-between w-full hover:bg-gray-200/50 rounded-md p-2 ">
          <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
            <MdKeyboardAlt l size={20} className="text-gray-700" />
          </div>
          <p className="font-bold me-auto ms-2 ">See all keyboard shortcuts</p>
        </div>
        <div className="flex items-start gap-2 p-2 w-full">
          <div className="bg-gray-200 flex items-center justify-center rounded-full h-[35px] w-[35px] ">
            <SiGocd size={20} className="text-gray-700" />
          </div>
          <div className="flex flex-col items-center w-[90%]">
            <p className="font-bold me-auto  ">
              Use single-character keyboard shortcuts
            </p>
            <p className="text-gray-500 text-[13px]">
              Use single-character shortcuts to perform common actions.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center w-full py-2 rounded-md">
          {/* Option Off */}
          <div
            className={`flex items-center justify-between w-full py-2 rounded-md cursor-pointer ${shortcut === "off" ? "bg-gray-200" : ""
              }`}
            onClick={() => setShortcut("off")}
          >
            <p className="font-bold ps-10">Off</p>
            <input
              type="radio"
              name="shortcut"
              value="off"
              checked={shortcut === "off"}
              onChange={() => setShortcut("off")}
              className="h-[20px] w-[20px]"
            />
          </div>

          {/* Option On */}
          <div
            className={`flex items-center justify-between w-full py-2 rounded-md cursor-pointer ${shortcut === "on" ? "bg-gray-200" : ""
              }`}
            onClick={() => setShortcut("on")}
          >
            <p className="font-bold ps-10">On</p>
            <input
              type="radio"
              name="shortcut"
              value="on"
              checked={shortcut === "on"}
              onChange={() => setShortcut("on")}
              className="h-[20px] w-[20px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSetting;
