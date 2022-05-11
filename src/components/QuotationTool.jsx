import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

function QuotationTool() {
  return (
      <div class="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center bg-gradient-to-r from-green-100 to-green-400">
        <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

        <div class="z-50 flex flex-col justify-center items-center text-white w-full h-screen">
          <h1 class="text-5xl">
            We are <b>Almost</b> there!
          </h1>
          <h2>Stay tuned for something amazing!!!</h2>
          <br></br>
          <h1 class="text-3xl">Coming Soon...</h1>
          <Link to={'/'} >
            <button className="w-max button-box-shadow flex mx-auto mt-4  text-white bg-green-500  hover:bg-green-600 rounded-lg text-base px-4 py-2 font-semibold  text-center">
            <ArrowCircleLeftIcon className=" top-4 text-gray-600 h-6 w-6 mr-1 stroke-2 stroke-white k" />

            </button>
          </Link>
        </div>
      </div>
  );
}

export default QuotationTool;
