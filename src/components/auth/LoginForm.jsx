import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, userReset } from "../../features/users/userSlice";
import toast from "react-hot-toast";
import { ClockLoader } from "react-spinners";
const LoginForm = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const [blocked, setBlocked] = useState(false);

  const [count, setCount] = useState(0);

  const [showEye, setShowEye] = useState(false);
  const [showPass, setShowPass] = useState(false);
  // destructure
  const { email, password } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (password.length > 0) {
      setShowEye(true);
    } else {
      setShowEye(false);
    }
  }, [password]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userMessage, userError, userLoading, userSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
      setCount(count + 1);
    }

    if (userSuccess) {
      navigate("/home");
      setCount(0);
    }

    if (count == 4) {
      setBlocked(true);
      localStorage.setItem("blocked", "true");
      toast.error("You have been blocked, try again after 5 seconds");
    }

    dispatch(userReset());
  }, [userError, userSuccess]);

  useEffect(() => {
    let checkStatus = localStorage.getItem("blocked");
    if (checkStatus == "true") {
      setBlocked(true);
      toast.error("Do not refresh the page and wait for 5 seconds to resume");
      setTimeout(() => {
        setBlocked(false);
        localStorage.removeItem("blocked");
      }, 5000);
    } else {
      setBlocked(false);
    }
  }, []);

  const showTimer = () => {};

  const handleLogin = () => {
    const userData = {
      m_mail: email,
      password,
    };
    dispatch(loginUser(userData));
  };

  return (
    <>
      <form className="p-3 shadow-xl rounded-md bg-white">
        <input
          name="email"
          value={email}
          onChange={handleChange}
          type="text"
          placeholder="Email address or phone number"
          className="w-full mt-3  p-3 outline-0 focus:border-blue-500 border border-gray-200 rounded-md"
        />
        <div className="relative">
          <input
            name="password"
            value={password}
            onChange={handleChange}
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 my-2 outline-0 focus:border-blue-500 border border-gray-200 rounded-md"
          />

          {showPass ? (
            <FaEye
              onClick={() => setShowPass(false)}
              size={20}
              cursor={"pointer"}
              className={`absolute   top-1/2 right-3 -translate-y-1/2 text-gray-800`}
            />
          ) : (
            <FaEyeSlash
              onClick={() => setShowPass(true)}
              size={20}
              cursor={"pointer"}
              className={`absolute  top-1/2 right-3 -translate-y-1/2 text-gray-800`}
            />
          )}

          {/* <FaEyeSlash onClick={()=>setShow(!show)} className={`absolute ${!show && 'hidden'} top-1/2 right-3 -translate-y-1/2 text-gray-800`} cursor={'pointer'} size={20} /> */}
        </div>

        <Button
          disabled={userLoading || blocked}
          variant="contained"
          onClick={handleLogin}
          className={`w-full my-2  `}
          style={{
            padding: "12px",
            fontWeight: "bold",
            background: (userLoading || blocked) && "#6a7282",
            color: (userLoading || blocked) && "white",
          }}
        >
          {userLoading ? (
            <ClockLoader size={20} color="white" />
          ) : blocked ? (
            "blocked"
          ) : (
            "Login"
          )}
        </Button>

        <Link
          to={"/"}
          className="text-blue-700 text-center block my-2 hover:underline"
        >
          Forgotten password ?
        </Link>

        <hr className="border-0 h-[1px] bg-gray-300" />
        <Link className="text-white" to={"/register"}>
          <Button
            variant="contained"
            style={{
              padding: "12px",
              background: "#42B72A",
              margin: "1rem auto",
              display: "block",
            }}
            className="my-2"
          >
            Create New Account
          </Button>
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
