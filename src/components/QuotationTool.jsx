import { HomeIcon, PlusIcon, RefreshIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

function QuotationTool() {
  return (
    <div className=" h-screen w-full bg-gray-100">
      <nav className="flex flex-wrap items-center justify-start gap-5 w-full py-4  md:py-0 px-4 text-lg bg-gray-100">
        <div className="flex-shrink-0 flex items-center my-2">
          <img
            className="  h-12 w-12 rounded-full"
            src="/images/logo.jpeg"
            alt="semper-blinds"
          />
        </div>
        <div className="flex items-center gap-2 justify-between">
          <p className="text-xl font-bold text-indigo-900">SEMPER</p>
          <p className="text-2xl font-bold text-lime-600">BLINDS</p>
        </div>
      </nav>

      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-center mb-5 ">
          <div className=" max-w-xl  mb-4 mx-2">
            <div className="flex items-center  bg-white">
              <Link to={"/"} className="w-max py-2">
                <button className="px-6 w-max flex mx-auto  text-gray-500 rounded-lg text-base  font-semibold  text-center">
                  <HomeIcon className=" text-gray-500 h-6 w-6 " />
                </button>
              </Link>
              <div className="w-full grow grid grid-cols-5 items-center justify-center">
                <button className="px-4 py-2 w-full justify-center flex mx-auto h-full text-xs sm:text-base text-gray-500 font-semibold  text-center">
                  BLIND 1
                </button>
                <button className="px-4 py-2 w-full justify-center flex mx-auto h-full border-b-2 border-b-indigo-900 text-indigo-900 text-xs sm:text-base font-semibold text-center">
                  BLIND 2
                </button>
                <button className="px-4 py-2 w-full justify-center flex mx-auto h-full text-gray-500  text-xs sm:text-base  font-semibold  text-center">
                  BLIND 3
                </button>
                <button className="px-4 py-2 w-full justify-center flex mx-auto h-full  text-gray-500 text-xs sm:text-base  font-semibold  text-center">
                  BLIND 4
                </button>
                <button className="px-4 py-2 w-full justify-center flex mx-auto h-full text-gray-500 text-xs sm:text-base font-semibold  text-center">
                  BLIND 5
                </button>
              </div>
            </div>
            {/* <div className="mt-2 flex items-center justify-center bg-lime-100 "> */}
            <Link to={"/asdf"}>
              <button className="mt-2 w-full flex mx-auto  text-gray-500 bg-lime-200 px-3 py-2 rounded-lg text-base justify-center font-semibold text-center">
                <RefreshIcon className=" text-lime-700 h-6 w-6" />
                &nbsp;&nbsp; <p className="text-lime-700">Refresh</p>
              </button>
            </Link>
            {/* </div> */}
            <input
              type="text"
              name="blind_type"
              id="blind_type"
              placeholder="---Select Blind Type---"
              className="placeholder-gray-700 mt-2 w-full rounded-md p-1 pl-4 "
            />
            <textarea
              type="text"
              name="blank"
              id="blank"
              className="mt-2 w-full rounded-md p-1 pl-4  placeholder-gray-700"
            ></textarea>

            <div className="flex flex-col-2 gap-2 h">
              <input
                type="number"
                name="width"
                id="width"
                placeholder="WIDTH"
                className="mt-1 w-full h-14 rounded-md placeholder-lime-700 p-1 pl-4 font-medium"
              />

              <input
                type="number"
                name="drop"
                id="drop"
                placeholder="DROP"
                className="mt-1 w-full h-14 rounded-md placeholder-lime-700 p-1 pl-4 font-medium"
              />
            </div>

            <button className="mt-2 w-full flex mx-auto  text-gray-500 bg-lime-200 px-3 py-2 rounded-lg text-base justify-center font-semibold text-center">
              <PlusIcon className=" text-lime-700 h-6 w-6" />
              &nbsp;&nbsp; <p className="text-lime-700">Add Motorisation</p>
            </button>

            <button className="w-full my-2 text-xl py-2  bg-indigo-900 text-white rounded-lg  font-normal">
              C A L C U L A T E
            </button>
            <div className="flex flex-col justify-center rounded-sm mt-2 text-center bg-indigo-100">
              <h1 className="p-2 font-semibold text-xl text-indigo-900 border-b-2  border-indigo-900">
                BLINDS
              </h1>
              <div className="flex px-2 justify-between text-center">
                <h1 className="p-2 font-semibold text-base sm:text-lg text-indigo-900">
                  TOTAL
                </h1>
                <h1 className="p-2 font-semibold text-base sm:text-lg text-indigo-900">
                  £ 0.00
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center mt-2 text-center bg-lime-100">
              <div className="flex px-2 justify-between text-center">
                <h1 className="p-2 font-semibold text-base sm:text-lg text-lime-700">
                  GRAND TOTAL
                </h1>
                <h1 className="p-2 font-semibold text-base sm:text-lg text-lime-700">
                (Excluding VAT) £ 0.00
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuotationTool;
