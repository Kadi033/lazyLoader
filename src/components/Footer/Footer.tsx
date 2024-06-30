import React from "react";
import { facebook, logo, twitter } from "../../assets";
const Footer: React.FC = () => {
  return (
    <div>
      <div className="text-white">
        <div className="flex flex-col justify-center h-72 bg-blue">
          <div className="flex flex-col justify-center w-[408px] m-auto text-center">
            <p className="pb-3 tracking-widest">35,000+ ALREADY JOINED</p>
            <h1 className="text-3xl font-bold">
              Stay up-to-date with what we’re doing
            </h1>
          </div>
          <div className="flex items-center justify-center gap-4 pb-12">
            <input
              type="text"
              className="w-[300px] h-12 rounded-md pl-3 outline-none text-black"
              placeholder="Enter your email address"
            />
            <div className="rounded-md w-40 h-12 flex items-center justify-center shadow-md cursor-pointer bg-red text-white hove0">
              <p className="text-base font-normal">Contact Us</p>
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-44  mx-auto p-5 bg-gray ">
          <img className="object-contain w-56 ml-9" src={logo} alt="logo" />
          <div className="flex gap-96 items-center">
            <div className="flex gap-10 text-dark">
              <p className="cursor-pointer text-white hover:text-red">
                FEATURES
              </p>
              <p className="cursor-pointer text-white hover:text-red">
                PRICING
              </p>
              <p className="cursor-pointer text-white hover:text-red">
                CONTACT
              </p>
            </div>
            <div className="flex gap-8 w-20 justify-center">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
