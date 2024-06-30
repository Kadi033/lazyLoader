import React from "react";
import { logo } from "../../assets";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between mt-5 max-w-[1280px] mx-auto p-5">
      <img className="object-contain" src={logo} alt="logo" />
      <div className="flex gap-12 items-center">
        <div className="flex gap-10 text-dark">
          <p className="cursor-pointer hover:text-red">FEATURES</p>
          <p className="cursor-pointer hover:text-red">PRICING</p>
          <p className="cursor-pointer hover:text-red">CONTACT</p>
        </div>
        <div className="rounded-md w-36 h-10 flex items-center justify-center shadow-md cursor-pointer bg-red text-white hov">
          <p className="text-base font-normal">LOGIN</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
