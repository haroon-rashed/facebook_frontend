import React, { useState } from "react";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "react-hot-toast";
import OtpVerificationPage from "./pages/auth/OTP";
import Friends from "./components/home/friends/Friends";
import Feeds from "./components/home/Feeds/Feeds";
import Profile from "./Profiles/Profile";

import ClimateCenter from "./pages/home/ClimateCenter";
import FundraisersPage from "./components/home/SidebarComponents/Fundraisers/FundraisersPage";
import AllStories from "./pages/Story/AllStories";
import VideoPage from "./pages/videos/VideoPage";
import ChatContainer from "./components/home/chat/ChatContainer";
import io from "socket.io-client";
import VideoCallZego from "./video_call/VideoCall";
const socket = io.connect("http://localhost:5174");
const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Router>
        <Toaster />
        {show && <ChatContainer />}

        <Routes>
          {/* auth routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OtpVerificationPage />} />
          {/* home routes */}

          <Route path="/home" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/feeds" element={<Feeds />}></Route>
          <Route path="/climatecenter" element={<ClimateCenter />} />
          <Route
            path="/profile/:id"
            element={<Profile setShow={setShow} show={show} />}
          />
          <Route path="/fundraiser" element={<FundraisersPage />} />
          <Route path="/stories" element={<AllStories />} />

          <Route path="/videos" element={<VideoPage />} />

          <Route
            path="/video-call/:sender_id/:receiver_id"
            element={<VideoCallZego />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
