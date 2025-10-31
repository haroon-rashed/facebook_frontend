import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";
import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-[#F2F4F7]">
        <div className=" w-[90%] md:w-[50%] lg:w-[35%] mx-auto xl:w-[25%]">
          <div className="flex flex-col">
            <img
              src="https://cdn.pixabay.com/photo/2021/11/11/12/41/facebook-6786210_1280.png"
              alt="logo"
              width={200}
            />
          </div>

          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default Register;
