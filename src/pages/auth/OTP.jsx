import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReset, verifyUserOTP } from "../../features/users/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";
const OTPVerificationPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(30);
  const [isVerified, setIsVerified] = useState(false);
  const [isError, setIsError] = useState(false);
  const inputRefs = useRef([]);

  // Handle OTP input change
  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setIsError(false);

    // Auto-focus to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace key
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain").slice(0, 6);
    if (isNaN(pasteData)) return;

    const newOtp = [...otp];
    for (let i = 0; i < pasteData.length; i++) {
      newOtp[i] = pasteData[i];
    }
    setOtp(newOtp);

    // Focus the last input with value
    const lastFilledIndex = pasteData.length - 1;
    if (lastFilledIndex < 5) {
      inputRefs.current[lastFilledIndex + 1].focus();
    } else {
      inputRefs.current[5].focus();
    }
  };

  // Resend OTP functionality
  const handleResendOTP = () => {
    setIsResendDisabled(true);
    setCountdown(30);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0].focus();
    // Here you would typically call your API to resend OTP
    console.log("OTP resent!");
  };

  const dispatch = useDispatch();
  const { user, userLoading, userError, userSuccess, userMessage } =
    useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }

    if (userSuccess) {
      navigate("/home");
    }

    dispatch(userReset());
  }, [userError, userSuccess]);

  // Verify OTP
  const handleVerify = () => {
    const enteredOtp = otp.join("");

    const otpData = {
      otp: enteredOtp,
      id: user?._id,
    };

    dispatch(verifyUserOTP(otpData));
  };

  // Countdown timer for resend OTP
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  // Auto-focus first input on mount
  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
        {/* Decorative header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-center">
          <h1 className="text-2xl font-bold text-white">Verify Your Account</h1>
          <p className="text-indigo-100 mt-1">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        <div className="p-8">
          {isVerified ? (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-10 w-10 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Verification Successful!
              </h2>
              <p className="text-gray-600 mb-6">
                Your account has been verified successfully.
              </p>
              <button
                onClick={() => {
                  setIsVerified(false);
                  setOtp(["", "", "", "", "", ""]);
                  inputRefs.current[0].focus();
                }}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                Verify Another
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between space-x-2 mb-8">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className={`w-12 h-14 text-2xl font-bold text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ${
                      userError
                        ? "border-red-500 shake-animation"
                        : "border-gray-300"
                    }`}
                  />
                ))}
              </div>

              {userError && (
                <div className="mb-6 flex items-center justify-center text-red-500">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Invalid OTP. Please try again.</span>
                </div>
              )}

              <button
                onClick={handleVerify}
                disabled={otp.join("").length !== 6 || userLoading}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition duration-200 ${
                  otp.join("").length === 6
                    ? "bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {userLoading ? <DotLoader size={20} color="white" /> : "Verify"}
              </button>

              <div className="mt-6 text-center text-sm text-gray-600">
                <p>
                  Didn't receive code?{" "}
                  {isResendDisabled ? (
                    <span className="text-gray-500">
                      Resend in {countdown}s
                    </span>
                  ) : (
                    <button
                      onClick={handleResendOTP}
                      className="text-indigo-600 hover:text-indigo-800 font-medium focus:outline-none"
                    >
                      Resend OTP
                    </button>
                  )}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Add some floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-purple-200 opacity-20 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-indigo-200 opacity-20 -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-blue-200 opacity-30 -z-10"></div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-5px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(5px);
          }
        }
        .shake-animation {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default OTPVerificationPage;
