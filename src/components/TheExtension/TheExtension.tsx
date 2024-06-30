import React from "react";
import { chrome, dots, firefox, opera } from "../../assets";

const TheExtension: React.FC = () => {
  return (
    <div className="mt-36">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-dark">Download the extension</h1>
        <p className="mt-4 text-lg text-gray w-[540px] m-auto py-8">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="flex h-[450px] w-[911px] gap-9 m-auto">
        <div className="flex h-[450px] items-start ">
          <div className="w-[280px] h-[371px] bg-white shadow-lg rounded-lg text-center">
            <div className="flex justify-center my-6">
              <img src={chrome} alt="" />
            </div>

            <h1 className="text-dark text-2xl text-center font-bold pb-4">
              Add to Chrome
            </h1>
            <p className="text-gray text-center text-lg pb-4">
              Minimum version 62
            </p>
            <div className="my-6">
              <img src={dots} alt="" />
            </div>

            <div className="rounded-md w-48 h-12 flex items-center justify-center m-auto shadow-md cursor-pointer bg-blue text-white hove0">
              <p className="text-base font-normal">Add & Install Extension</p>
            </div>
          </div>
        </div>
        <div className="flex h-[450px] items-center">
          <div className="w-[280px] h-[371px] bg-white shadow-lg rounded-lg">
            <div className="flex justify-center my-6">
              <img src={firefox} alt="" />
            </div>
            <h1 className="text-dark text-2xl text-center font-bold pb-4">
              Add to Firefox
            </h1>
            <p className="text-gray text-center text-lg pb-4">
              Minimum version 55
            </p>
            <div className="my-6">
              <img src={dots} alt="" />
            </div>

            <div className="rounded-md w-48 h-12 flex items-center justify-center m-auto shadow-md cursor-pointer bg-blue text-white hove0">
              <p className="text-base font-normal">Add & Install Extension</p>
            </div>
          </div>
        </div>
        <div className="flex h-[450px] items-end">
          <div className="w-[280px] h-[371px] bg-white shadow-lg rounded-lg">
            <div className="flex justify-center my-6">
              <img src={opera} alt="" />
            </div>
            <h1 className="text-dark text-2xl text-center font-bold pb-4">
              Add to Opera
            </h1>
            <p className="text-gray text-center text-lg pb-4">
              Minimum version 46
            </p>
            <div className="my-6">
              <img src={dots} alt="" />
            </div>

            <div className="rounded-md w-48 h-12 flex items-center justify-center m-auto shadow-md cursor-pointer bg-blue text-white hove0">
              <p className="text-base font-normal">Add & Install Extension</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheExtension;
