// components/OtpInput.jsx
import React, { useRef } from "react";

const OtpInput = ({ length = 6, onChangeOTP }) => {
  const inputs = Array(length).fill(0);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const otp = inputRefs.current.map((input) => input.value).join("");
    onChangeOTP(otp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center space-x-3">
      {inputs.map((_, index) => (
        <input
          key={index}
          maxLength={1}
          className="w-12 h-12 text-center border rounded text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
