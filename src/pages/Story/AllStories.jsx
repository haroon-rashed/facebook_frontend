import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import {
  FaThumbsUp,
  FaHeart,
  FaGrinStars,
  FaGrinSquint,
  FaSurprise,
  FaSadTear,
  FaAngry,
  FaBell,
  FaFacebookMessenger,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { useState, useRef, useEffect } from 'react'
import { TbGridDots } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import AccountSettings from '../../components/home/AccountSettings'
import Menu from '../../components/home/rightside/Menu'

const reactions = [
  { icon: <FaThumbsUp className="text-blue-500" />, label: "Like" },
  { icon: <FaHeart className="text-pink-600" />, label: "Love" },
  { icon: <FaGrinStars className="text-yellow-500" />, label: "Care" },
  { icon: <FaGrinSquint className="text-yellow-400" />, label: "Haha" },
  { icon: <FaSurprise className="text-yellow-300" />, label: "Wow" },
  { icon: <FaSadTear className="text-blue-300" />, label: "Sad" },
  { icon: <FaAngry className="text-red-500" />, label: "Angry" },
];

const AllStories = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openAcount, setOpenAcount] = useState(false);
  const { user } = useSelector((state) => state.auth);
  
  // Video controls state
  const progressRef = useRef(null)
  
  
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
   useEffect(() => {
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        width: `${progress}%`,
        duration: 0.3,
        ease: "ease.in"
      });
    }
  }, [progress]);

  const handleTimeUpdate = () => {
    const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(currentProgress);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', () => setIsPlaying(false));

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, []);

  return (
    <>
      <div className='min-h-screen w-full relative bg-black'>
        {/* Parent-Div */}
        <div className='grid grid-cols-1 md:grid-cols-12 h-full'>
          {/* Left-Section */}
          <div className='col-span-3 min-h-screen bg-white'>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { type: "spring", damping: 10, stiffness: 100 }
              }}
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transition: { duration: 0.2 }
              }}
              className='flex items-center gap-4 p-3 border-b border-gray-200 bg-white/80 backdrop-blur-sm'
            >
              <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
                <Link to="/home" className='flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors'>
                  <RxCross1 size={20} className="text-la" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  width={45}
                  src='https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png'
                  alt='Logo'
                  className='drop-shadow-sm'
                />
              </motion.div>
            </motion.div>

            <div className='p-2 mt-2'>
              <h3 className='font-bold text-2xl text-black'>Stories</h3>
              <div className='flex items-center gap-3 mt-3'>
                <a href='' className='text-blue-600'>Setting</a>
                <a href='' className='text-blue-600'>Archive</a>
              </div>

              <div className='mt-6'>
                <h3 className='text-1xl font-semibold text-black'>Your Stories</h3>
                <Link to="" className='flex mt-5 gap-2 py-3 px-1 rounded'>
                  <span className='flex items-center bg-blue-100 justify-center w-[55px] h-[55px] rounded-full'>
                    <IoMdAdd className='text-blue-500' size={35} />
                  </span>
                  <div className='flex flex-col'>
                    <h2 className='text-1xl font-semibold text-black'>Create Story</h2>
                    <p className='text-neutral-600'>Share a photo or write something</p>
                  </div>
                </Link>
              </div>

              <div className='mt-6'>
                <h3 className='text-xl font-semibold text-black'>All Stories</h3>
                <Link to="" className='flex mt-5 gap-4 bg-gray-200 hover:bg-gray-300 transition-all py-3 px-4 rounded-lg items-center'>
                  <div className='relative'>
                    <div className='w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500'>
                      <img
                        src='https://images.deepai.org/machine-learning-models/b6dcce965af54c26918924813f3cd288/cyborg.jpg'
                        alt='User'
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <h2 className='text-lg font-semibold text-black'>Fashion</h2>
                    <p className='text-neutral-600 text-sm'>14h ago</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right-Sections */}
          <div className='col-span-9 min-h-screen flex justify-center'>
            <div className='flex flex-col items-center'>
              {/* Video Story Component */}
              <motion.div
                initial={{ width: '0px', opacity: 0 }}
                animate={{ width: '400px', opacity: 1 }}
                transition={{ delay: 0.3, type: 'tween', damping: 5, stiffness: 100 }}
                className='relative bg-black h-[600px] rounded-md mt-5 overflow-hidden'
              >
                {/* Video element */}
               <video
  ref={videoRef}
  src="https://www.w3schools.com/html/mov_bbb.mp4" // Public video link
  className="w-full h-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  onClick={togglePlayPause}
/>

                
               

 <div className="absolute top-[6px] right-1 z-10">
    {!isPlaying ? (
      <button
        onClick={togglePlayPause}
        className="cursor-pointer bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
      >
        <FaPause className="h-4 w-4" />
      </button>
    ) : (
      <button
        onClick={togglePlayPause}
        className="cursor-pointer bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
      >
        <FaPlay className="h-4 w-4" />
      </button>
    )}
  </div>

                
                {/* Progress bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-600 bg-opacity-50">
                  <div
                    ref={progressRef}
            className="absolute top-0 left-0 h-full bg-white"
            style={{ width: '0%' }}
                  />
                </div>
              </motion.div>

              {/* Comment section */}
              <div className="px-4 py-4 rounded-xl w-full mx-auto mt-5">
                <div className="flex items-center gap-4 relative">
                  <input
                    type="text"
                    placeholder="Reply..."
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`bg-transparent border border-white text-white px-4 transition-all py-2 rounded-full ${isFocused ? 'w-[500px]' : 'w-[300px]'} focus:outline-none placeholder-white/50`}
                  />
                  <motion.div
                    initial={{ y: 0, opacity: 1 }}
                    animate={isFocused ? { y: 20, opacity: 0 } : { y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 10 }}
                    className="flex items-center gap-2"
                  >
                    {reactions.map((reaction, index) => (
                      <div
                        key={index}
                        className="text-2xl cursor-pointer hover:scale-125 transition-transform duration-200"
                        title={reaction.label}
                      >
                        {reaction.icon}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top right navigation */}
        <div className={`flex items-center absolute top-5 right-6 gap-2 md:gap-4 ${isFocused ? 'hidden md:flex' : 'flex'}`}>
          <span
            onClick={() => setOpenMenu(!openMenu)}
            className='relative group bg-gray-200 rounded-full p-3 flex items-center justify-center'
          >
            <TbGridDots size={25} className="text-black t cursor-pointer" />
            <span className={`absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1/2 left-1/2 rounded-md text-white bg-black px-2 py-1 text-xs whitespace-nowrap`}>
              Menu 
            </span>
            {openMenu && <Menu />}
          </span>

          <span className='relative group bg-gray-200 rounded-full p-3 hidden md:flex items-center justify-center'>
            <FaFacebookMessenger className="text-black text-xl cursor-pointer" />
            <span className={`absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1/2 left-1/2 rounded-md text-white bg-black px-2 py-1 text-xs whitespace-nowrap`}>
              Messenger
            </span>
          </span>
          
          <span className='relative group bg-gray-200 rounded-full p-3 hidden md:flex items-center justify-center'>
            <FaBell className="text-black text-xl cursor-pointer" />
            <span className={`absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1/2 left-1/2 rounded-md text-white bg-black px-2 py-1 text-xs whitespace-nowrap`}>
              Notifications
            </span>
          </span>
          
          <div
            onClick={() => setOpenAcount(!openAcount)}
            className="avatar avatar-online relative group"
          >
            <div className="w-9 h-9 rounded-full cursor-pointer overflow-hidden">
              <img src={`${user?.profilePic}`} alt="Profile" className="w-full h-full object-cover"/>
              <span className="absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1/2 left-1/2 rounded-md text-white bg-black px-2 py-1 text-xs whitespace-nowrap">
                Account
              </span>
            </div>
            {openAcount && <AccountSettings onClose={() => setOpenAcount(false)} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default AllStories