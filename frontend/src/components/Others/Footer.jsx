import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 text-center flex justify-center items-center gap-1 ">
      <p className="text-sm">
        © {new Date().getFullYear()} LabCare | Developed with
      </p>
      <FaHeart className="text-red-500" />
      <p className="text-sm">by Pankaj Bamniya</p>
    </footer>
  );
};

export default Footer;
