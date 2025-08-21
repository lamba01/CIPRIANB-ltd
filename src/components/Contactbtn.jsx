import React from "react";
const Button = ({ text }) => {
  return (
    <a
      href="#contact"
      className="inline-flex items-center px-6 py-3 rounded-md font-semibold text-white bg-[#D2153D] shadow-md transition-all duration-300 hover:bg-[#b01033] hover:shadow-lg hover:scale-105"
    >
      {text}
      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
};

export default Button;
