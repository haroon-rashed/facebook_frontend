import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-[#F2F4F7]">
        <div className="grid gap-5 w-[90%] md:w-[70%] lg:w-[60%] mx-auto xl:w-[45%] grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col">
            <img
              src="https://cdn.pixabay.com/photo/2021/11/11/12/41/facebook-6786210_1280.png"
              alt="logo"
              width={200}
            />
            <h2 className="text-3xl text-gray-800">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>

          <LoginForm/>
        </div>
      </div>
    </>
  );
};

export default Login;
