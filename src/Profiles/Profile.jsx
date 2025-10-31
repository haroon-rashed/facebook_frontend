// import Navbar from "../component/home/Navbar";
import React, { useEffect, useState } from "react";
import { IoCameraSharp, IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import {
  MdEdit,
  MdKeyboardArrowDown,
  MdOutlineArrowDropDown,
} from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { PiLineSegmentsThin } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import Navbar from "../components/home/Navbar";
import { BsChat, BsChatDots, BsGridFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getMyData } from "../features/users/userSlice";
import MessagePanel from "../components/home/chat/MessagePanel";
import { Toast } from "../video_call/ToastVideo";
const socket = io.connect('http://localhost:5174');
import io from 'socket.io-client'

const Profile = ({ show, setShow }) => {

  const { myInfo } = useSelector((state) => state.auth)
  const { id } = useParams()
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMyData(id))
  }, [])

  const [call, setCall] = useState(false)
  const [caller, setCaller] = useState(null)





  useEffect(() => {
    socket.on('received_call', (data) => {
      console.log(data)
      if (data.receiver_id == user?._id) {
        setCall(true)
        setCaller(data?.sender_name)
        let audio = new Audio('/ringing.mp3')
        audio.play()
      }
    })
  }, [])



  return (
    <>
      <div className="bg-white">
        {call && <Toast callerName={caller} />}
        {/* <Navbar /> */}
        <div
          style={{
            backgroundImage: `linear-gradient(to top, darkgray 0%, #3B82F6 60%, #3C82F5 60%, #3C82F5 100%)`,
          }}
          className="w-[100%] xl:w-[70%] p-4 rounded-b-md  mx-auto flex flex-row-reverse items-end h-[50vh]"
        >
          <div className="flex gap-1 bg-gray-50 rounded-md p-2 items-center">
            <IoCameraSharp size={20} />
            <p className="hidden lg:block">Add Cover Photo</p>
          </div>
        </div>

        <div className="justify-center items-center flex-col xl:flex items-center justify-center  lg:justify-between w-[100%] xl:w-[70%]  xl:mx-auto px-10  ">
          <div className="lg:flex items-center  w-full lg:translate-x-0 gap-1 lg:gap-5">
            <div className="-translate-y-20 translate-x-[50% ,50%] lg:translate-x-[0%] ">
              <div className="h-[180px] w-[180px] border border-gray-300 bg-gray-200 rounded-full flex items-end justify-center outline-4 outline-white overflow-hidden">
                <FaUser size={130} color="gray" />
              </div>
              <div className="-translate-y-12 translate-x-35 right-0 bottom-5 h-[30px] w-[30px] rounded-full bg-gray-300 flex items-center justify-center">
                <IoCameraSharp size={20} />
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div className="flex-col -translate-y-10">
                <p className="text-4xl font-bold">
                  {myInfo?.f_name} {myInfo?.l_name}
                </p>
                <p>7 friends</p>
              </div>
              <div className="flex -translate-y-10 items-center justify-center gap-2 ">
                <button className="bg-blue-500 rounded-md px-4 py-2 text-white font-semibold whitespace-nowrap">
                  {" "}
                  + Add to story
                </button>

                <MessagePanel setShow={setShow} show={show} receiver_id={myInfo?._id} username={`${myInfo?.f_name} ${myInfo?.l_name}`} />
                <button className="bg-gray-200  rounded-md px-4 py-2 whitespace-nowrap ">
                  <MdEdit className="inline" /> Edit profile
                </button>
                <button className="bg-gray-200  rounded-md p-3 ">
                  <MdKeyboardArrowDown size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul className="flex items-center w-[100%] overflow-x-scroll lg:w-[70%] mx-auto gap-7 text-gray-600 font-semibold pt-1 border-t-2 border-t-gray-200">
          <li className=" p-2 py-3 cursor-pointer text-blue-500 border-b-4 border-b-blue-500 ">
            Posts
          </li>
          <li className="p-2 py-3 hover:bg-gray-100 hover:rounded-md cursor-pointer">
            About
          </li>
          <li className="p-2 py-3 hover:bg-gray-100 hover:rounded-md cursor-pointer">
            Friends
          </li>
          <li className="p-2 py-3 hover:bg-gray-100 hover:rounded-md cursor-pointer">
            Photos
          </li>
          <li className="p-2 py-3 hover:bg-gray-100 hover:rounded-md cursor-pointer ">
            Videos
          </li>
          <li className="p-2 py-3 hover:bg-gray-100 hover:rounded-md cursor-pointer whitespace-nowrap lg:hidden block">
            Check-ins
          </li>
          <li className="p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer whitespace-nowrap md:hidden block">
            More <MdOutlineArrowDropDown className="inline" />
          </li>
          <li className="cursor-pointer flex items-center justify-center px-3 py-2 rounded-md bg-gray-200 ms-auto">
            <BiDotsHorizontalRounded />
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-12 p-4 gap-4 w-full lg:w-[70%] mx-auto">
        <div className="lg:col-span-5 col-span-12 flex flex-col gap-4  ">
          <div className="rounded-md p-5 shadow bg-white">
            <p className="font-bold text-xl  mb-4">Intro</p>
            <div className="flex flex-col gap-4">
              {['Add Bio', 'Edit Details', 'Add Features'].map((item, index) => {
                return <button className="w-full rounded-md bg-gray-200 py-2 ">
                  {item}
                </button>
              })}


            </div>
          </div>
          <div className="rounded-md p-5 shadow bg-white flex items-center justify-between">
            <p className="font-bold text-xl">Photos</p>
            <p className="text-blue-500 cursor-pointer text-md ">
              See all photos
            </p>
          </div>
          <div className="rounded-md p-5 shadow bg-white ">
            <div className="flex items-center justify-between">
              <p className="font-bold text-xl">Photos</p>
              <p className="text-blue-500 cursor-pointer text-md ">
                See all photos
              </p>
            </div>
            <p className="text-gray-600">7 friends</p>
            <div className="grid grid-cols-9 py-4">
              <div className="col-span-3">
                <img
                  src="https://scontent.fisb17-1.fna.fbcdn.net/v/t39.30808-1/457670442_3605828999634739_3108621455535417210_n.jpg?stp=c0.0.1462.1462a_cp6_dst-jpg_s100x100_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_ohc=t2_UdBCLF7UQ7kNvwFInYNp&_nc_oc=AdmrxNHRubRCQF9uVxUenquUQOLA1P3nWEDnNt2d87_0DP9WCQc-O8t5GlbarS35JlIKDSHDnE1KFMKMjjRe13TC&_nc_zt=24&_nc_ht=scontent.fisb17-1.fna&_nc_gid=2ECWiXNGVxayg7pHK2pc8A&oh=00_AfJUCGgYJPn1sfA693RgFt-iNrKclLQroQf4tdxJenMRZw&oe=682E6B1D"
                  alt=""
                  className="h-[120px] w-[120px] rounded-lg"
                />
                <p className="font-semibold text-md">Muhammad Shahzaib</p>
              </div>
              <div className="col-span-3">
                {" "}
                <img
                  src="https://scontent.fisb17-1.fna.fbcdn.net/v/t39.30808-1/465969032_589120683457204_5501389201014455811_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=KpnywFnk2IQQ7kNvwGtxjt6&_nc_oc=AdmLWM6Uf2HewwUTSHUlQbUPSspMLxusNGdA0JGspgl4OUfOrFQFz_GoioPIf-fwOZbz_-dSsX-62p3avtUtq-NO&_nc_zt=24&_nc_ht=scontent.fisb17-1.fna&_nc_gid=T08g2cgUdSUJhDUsO_lyog&oh=00_AfJgEBdIz7EwcYRojRD6yWoseuHZdzobKtgAdCcmTbMjfQ&oe=682E7882"
                  alt=""
                  className="h-[120px] w-[120px] rounded-lg"
                />
                <p className="font-semibold text-md">Muhammad Usman ptcl</p>
              </div>
              <div className="col-span-3">
                {" "}
                <img
                  src="https://scontent.fisb17-1.fna.fbcdn.net/v/t39.30808-1/460601890_122097616736538854_6380405638775777164_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ZDpHpbp58V8Q7kNvwF1EXX_&_nc_oc=AdlRnuM0N3ecNpDGwd4TMJbGzAhSHYPgxDEMuSZb_7ydbpz-c8WaSzdQtQKHMmg8ztrcfYR2ae9E9tl-AyV3pseP&_nc_zt=24&_nc_ht=scontent.fisb17-1.fna&_nc_gid=u1KxSrO1x9RqO2PcuRqwLg&oh=00_AfLEmiD0yXPvBlDuFc0CLFYMxa60VvmWn2dMXHQ9-7zICA&oe=682EC439"
                  alt=""
                  className="h-[120px] w-[120px] rounded-lg"
                />
                <p className="font-semibold text-md">Hamza Tariq</p>
              </div>
            </div>
          </div>
          <p className="p-0 m-0">
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
        <div className="lg:col-span-7 col-span-12 flex flex-col gap-4 me-1 ">
          <div className="rounded-md p-2 shadow bg-white">
            <div className="flex items-center gap-2">
              <div className="h-[40px] w-[40px] border border-gray-400 bg-gray-200 rounded-full flex items-end justify-center outline-4 outline-white overflow-hidden">
                <FaUser size={30} color="gray" />
              </div>
              <div className="rounded-full bg-gray-200 w-full p-2">
                What's in your Mind? {myInfo?.f_name}
              </div>
            </div>
            <hr className="my-3 border-0 bg-gray-300 h-[1px]" />
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center hover:bg-gray-100 px-3 w-full gap-3 py-2 rounded-lg">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png"
                  alt=""
                />
                <p className="text-gray-600 font-semibold">Live video </p>
              </div>
              <div className="flex items-center justify-center  hover:bg-gray-100 px-3 w-full gap-3 py-2 rounded-lg">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png"
                  alt=""
                />
                <p className="text-gray-600 font-semibold">Photo/video</p>
              </div>
              <div className="flex items-center justify-center  hover:bg-gray-100 px-3 w-full gap-3 py-2 rounded-lg">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/pkbalDbTOVI.png"
                  alt=""
                />
                <p className="text-gray-600 font-semibold">Life event</p>
              </div>
            </div>
          </div>
          <div className="rounded-md  shadow bg-white">
            <div className="flex items-center justify-between pt-2 px-3 ">
              <p className="font-bold text-xl">Posts</p>
              <div className="flex items-center gap-2">
                <button className="w-full rounded-md bg-gray-200 p-2 font-semibold whitespace-nowrap">
                  <PiLineSegmentsThin className="inline" /> Filters
                </button>
                <button className="w-full rounded-md bg-gray-200 p-2 font-semibold whitespace-nowrap ">
                  <IoIosSettings className="inline" /> Manage Posts
                </button>
              </div>
            </div>
            <hr className="hr" />
            <div className="flex items-center justify-center ">
              <button className=" flex items-center justify-center gap-1 w-full rounded-t-md hover:bg-gray-100 p-2 text-blue-500 border-0 border-b-4 border-blue-500">
                <IoMenu size={20} className="inline" /> List View
              </button>
              <button className=" flex items-center justify-center gap-1 w-full rounded-md hover:bg-gray-100 p-2 ">
                <BsGridFill size={20} color="gray" className="inline" /> Grid
                view
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
