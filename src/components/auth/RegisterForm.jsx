import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ClockLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { regUserSlice, userReset } from "../../features/users/userSlice";
import toast from "react-hot-toast";
const RegisterForm = () => {
  const [months] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    f_name: "",
    l_name: "",
    gender: "",
    date: "",
    month: "",
    year: "",
  });

  const dispatch = useDispatch();
  const [showEye, setShowEye] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [custom, showCustom] = useState(false);
  // destructure
  const {
    email,
    password,
    f_name,
    l_name,
    gender,
    date,
    month,
    year,
    pronouns,
  } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const generateYears = () => {
    let years = [];
    let startYear = 2025;
    let endYear = 1905;
    for (startYear; startYear >= endYear; startYear--) {
      years.push(startYear);
    }
    return years;
  };

  useEffect(() => {
    if (password.length > 0) {
      setShowEye(true);
    } else {
      setShowEye(false);
    }
  }, [password]);

  const [radio, setRadio] = useState("");

  const { user, userLoading, userError, userSuccess, userMessage } =
    useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }

    if (userSuccess) {
      navigate("/otp");
    }

    dispatch(userReset());
  }, [userError, userSuccess]);

  useEffect(() => {
    setFormFields((prevValue) => ({
      ...prevValue,
      gender: radio,
    }));
  }, [radio]);

  const handleSignUp = async () => {
    const userData = {
      m_mail: email,
      password,
      f_name,
      l_name,
      gender,
      date,
      month,
      year,
      pronouns,
    };
    dispatch(regUserSlice(userData));
  };

  return (
    <>
      <form className="p-3 shadow-xl rounded-md bg-white">
        <h2 className="text-2xl text-center">Create a new account</h2>
        <p className="text-center text-gray-600">It's quick and easy.</p>
        <hr className="border-0 h-[1px] bg-gray-300 w-full my-3" />
        <div className="grid mb-1 gap-2 grid-cols-1 md:grid-cols-2">
          <input
            name="f_name"
            value={f_name}
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            className="w-full mt-3  p-3 outline-0 focus:border-blue-500 border border-gray-200 rounded-md"
          />
          <input
            name="l_name"
            value={l_name}
            onChange={handleChange}
            type="text"
            placeholder="Surname"
            className="w-full mt-3  p-3 outline-0 focus:border-blue-500 border border-gray-200 rounded-md"
          />
        </div>

        <label
          htmlFor=""
          className="text-gray-700 flex items-center gap-1 text-sm"
        >
          Date of birth <BsFillPatchQuestionFill />
        </label>

        <div className="grid gap-2   grid-cols-3">
          <select
            name="date"
            onChange={handleChange}
            value={date}
            id=""
            className="p-3 border-gray-300 outline-0 focus:border-blue-600 border rounded-md"
          >
            {Array.from({ length: 30 }).map((_, index) => {
              return (
                <option value={index + 1} key={index}>
                  {index + 1}
                </option>
              );
            })}
          </select>
          <select
            name="month"
            value={month}
            onChange={handleChange}
            id=""
            className="p-3 border-gray-300 outline-0 focus:border-blue-600 border rounded-md"
          >
            {months?.map((item, index) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          <select
            name="year"
            value={year}
            onChange={handleChange}
            id=""
            className="p-3 border-gray-300 outline-0 focus:border-blue-600 border rounded-md"
          >
            {generateYears()?.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <label
          htmlFor=""
          className="text-gray-700 flex items-center gap-1 text-sm"
        >
          Gender <BsFillPatchQuestionFill />
        </label>

        <div className="grid gap-2 grid-cols-3">
          <div
            onClick={() => setRadio("female")}
            className="flex rounded-md justify-between items-center border border-gray-300 p-3"
          >
            <label className="text-gray-700">Female</label>
            <input
              onChange={handleChange}
              type="radio"
              checked={radio == "female"}
              name="gender"
              value={"female"}
              id=""
            />
          </div>
          <div
            onClick={() => setRadio("male")}
            className="flex rounded-md justify-between items-center border border-gray-300 p-3"
          >
            <label className="text-gray-700">Male</label>
            <input
              onChange={handleChange}
              type="radio"
              checked={radio == "male"}
              name="gender"
              value={"male"}
              id=""
            />
          </div>
          <div
            onClick={() => setRadio("custom")}
            className="flex rounded-md justify-between items-center border border-gray-300 p-3"
          >
            <label className="text-gray-700">Custom</label>
            <input
              checked={radio == "custom"}
              onChange={handleChange}
              type="radio"
              id=""
            />
          </div>
        </div>

        {radio == "custom" && (
          <div className="custom">
            <select
              name="pronouns"
              value={pronouns}
              onChange={handleChange}
              type="text"
              placeholder="Email address or phone number"
              className="w-full text-gray-500 mt-3  p-3 outline-0 focus:border-blue-500 border border-gray-200 rounded-md"
            >
              <option disabled selected>
                Select your pronouns
              </option>
              {[
                `She: "Wish her a happy birthday`,
                `He: "Wish him a happy birthday"`,
                `They: "Wish them a happy birthday"`,
              ].map((item, index) => {
                return <option value={item}>{item}</option>;
              })}
            </select>

            <label
              htmlFor=""
              className="text-gray-700 flex items-center gap-1 text-sm"
            >
              Your pronoun is visible to everyone.{" "}
            </label>

            <input
              name="gender"
              value={gender}
              onChange={handleChange}
              type="text"
              placeholder="Gender (opitonal)"
              className="w-full   p-3 outline-0 focus:border-blue-500 border border-gray-200 rounded-md"
            />
          </div>
        )}

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
          disabled={userLoading}
          variant="contained"
          onClick={handleSignUp}
          className={`w-full my-2  `}
          style={{
            padding: "12px",
            fontWeight: "bold",
            background: userLoading && "#6a7282",
          }}
        >
          {userLoading ? <ClockLoader size={20} color="white" /> : "Sign Up"}
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

export default RegisterForm;
