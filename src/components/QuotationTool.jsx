import { HomeIcon, PlusIcon, RefreshIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

function QuotationTool() {
  return (
    <div className=" h-screen w-full bg-gray-100">
      <nav className="flex flex-wrap items-center justify-start gap-5 w-full py-4 md:py-0 px-4 text-lg bg-gray-100">
        <div className="flex-shrink-0 flex items-center">
          <img
            className="  h-12 w-12 rounded-full"
            src="/images/logo.jpeg"
            alt="semper-blinds"
          />
        </div>
        <div className="flex items-center gap-2 justify-between">
          <p className="text-xl font-bold text-blue-900">SEMPER</p>
          <p className="text-2xl font-bold text-lime-400">BLINDS</p>
        </div>
      </nav>

      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-center mb-5 ">
          <div className=" max-w-xl  mb-4 mx-2">
            <div className="flex items-center  bg-white">
              <Link to={"/"} className="w-max py-2">
                <button className="px-6 w-max flex mx-auto  text-gray-500 rounded-lg text-base  font-semibold  text-center">
                  <HomeIcon className=" text-gray-600 h-6 w-6 " />
                </button>
              </Link>
              <div className="w-full grow grid grid-cols-2 items-center justify-center">
                <button className="px-4 py-2 w-full justify-center flex mx-auto h-full border-b-2 border-b-blue-800 text-blue-800  text-base  font-semibold  text-center">
                  BLIND 1
                </button>
                <button className="px-4 py-2 w-full justify-center flex mx-auto h-full border-b-2  text-gray-800  text-base  font-semibold  text-center">
                  BLIND 2
                </button>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-center bg-lime-100 ">
              <Link to={"/asdf"}>
                <button className=" w-max flex mx-auto  text-gray-500 bg-white px-3 py-2 rounded-3xl text-base  font-semibold  text-center">
                  <RefreshIcon className=" text-gray-600 h-6 w-6" />
                  &nbsp;&nbsp; Refresh
                </button>
              </Link>
            </div>
            <input
              type="text"
              name="blind_type"
              id="blind_type"
              placeholder="---Select Blind Type---"
              className="placeholder-black mt-2 w-full border-2 rounded-3xl p-1 pl-4 outline-none   border-gray-400"
            />
            <textarea
              type="text"
              name="blank"
              id="blank"
              className="mt-2 w-full border-2  rounded-3xl p-1 pl-4 outline-none border-gray-400 placeholder-black"
            ></textarea>

            <input
              type="number"
              name="width"
              id="width"
              placeholder="WIDTH"
              className="mt-1 w-full border-2 rounded-3xl placeholder-black p-1 pl-4 outline-none border-gray-400"
            />

            <input
              type="number"
              name="drop"
              id="drop"
              placeholder="DROP"
              className="mt-2 w-full border-2 rounded-3xl placeholder-black p-1 pl-4 outline-none border-gray-400"
            />

            <div className=" flex items-center justify-center bg-lime-100 py-2">
              <button className=" w-max flex mx-auto   text-gray-500 bg-white px-3 py-2 rounded-3xl text-base  font-semibold  text-center">
                <PlusIcon className=" text-gray-600 h-6 w-6" />
                &nbsp;&nbsp; Add Motorisation
              </button>
            </div>
            <button className="w-full py-1.5 text-2xl my-1 bg-black text-white rounded-full  font-semibold">
              C A L C U L A T E
            </button>
            <div className="flex flex-col justify-center mt-2 text-center bg-white">
              <h1 className="p-2 font-semibold text-lg border-b-2  border-black">
                BLINDS
              </h1>
              <div className="flex px-2 justify-between text-center">
                <h1 className="p-2 font-semibold text-base">TOTAL</h1>
                <h1>£ 0.00</h1>
              </div>
            </div>
            <div className="flex flex-col justify-center mt-2 text-center bg-white">
              <div className="flex px-2 justify-between text-center">
                <h1 className="p-2 font-semibold text-base">GRAND TOTAL</h1>
                <h1 className="py-2 pr-2  text-base">(Excluding VAT) £ 0.00</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuotationTool;
