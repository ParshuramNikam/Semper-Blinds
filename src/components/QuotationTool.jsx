import {
  HomeIcon,
  MinusIcon,
  PlusIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { commonDepths } from "../constants/Depths/commonDepths";
import { conservatoryRoofs } from "../constants/Depths/conservatoryRoofs";
import { perfectFit } from "../constants/Depths/perfectFit";
import { perfectFitVenetianDepth } from "../constants/Depths/perfectFitVenetianDepth";
import { commonFabricTypes } from "../constants/FabricTypes/commonFabricTypes";
import { perfectFitVenetianFabricTypes } from "../constants/FabricTypes/perfectFitVenetianFabricTypes";
import { motorTypes } from "../constants/Motorisation/motorTypes";
import { otherOptions } from "../constants/Motorisation/otherOptions";
import { powerOptions } from "../constants/Motorisation/powerOption";
import { receiverOptions } from "../constants/Motorisation/receiveroptions";
import { remoteOptions } from "../constants/Motorisation/remoteOptions";
import { commonWidths } from "../constants/Widths/commonWidths";
import { conservatoryRoofsWidth } from "../constants/Widths/conservatoryRoofs";
import { perfectFitVenetian } from "../constants/Widths/perfectFitVenetianWidth";
import { perfectFitWidth } from "../constants/Widths/perfectFitWidth";
import QuotationForm from "./quotation-tool/QuotationForm";

function QuotationTool() {

  const [blindNumber, setBlindNumber] = useState(1);

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
          <div className="w-full mx-auto sm:max-w-xl">
            <div className=" max-w-xl mx-auto px-2 mb-4 sm:mx-2">
              <div className="flex items-center  bg-white">
                <Link to={"/"} className="w-max py-2">
                  <button className="px-6 w-max flex mx-auto  text-gray-500 rounded-lg text-base  font-semibold  text-center">
                    <HomeIcon className=" text-gray-500 h-6 w-6 " />
                  </button>
                </Link>
                <div className="w-full grow grid grid-cols-3 sm:grid-cols-5 items-center justify-center">
                  <button className={`${blindNumber === 1 && "border-b-2 border-b-indigo-900 text-indigo-900 "} px-4 py-2 w-full justify-center flex mx-auto h-full text-xs sm:text-base text-gray-500 font-semibold  text-center`}
                    onClick={() => { setBlindNumber(1) }}
                  >
                    BLIND 1
                  </button>
                  <button className={`${blindNumber === 2 && "border-b-2 border-b-indigo-900 text-indigo-900 "} px-4 py-2 w-full justify-center flex mx-auto h-full text-xs sm:text-base text-gray-500 font-semibold  text-center`}
                    onClick={() => { setBlindNumber(2) }}
                  > BLIND 2
                  </button>
                  <button className={`${blindNumber === 3 && "border-b-2 border-b-indigo-900 text-indigo-900 "} px-4 py-2 w-full justify-center flex mx-auto h-full text-xs sm:text-base text-gray-500 font-semibold  text-center`}
                    onClick={() => { setBlindNumber(3) }}
                  >BLIND 3
                  </button>
                  <button className={`${blindNumber === 4 && " border-b-2 border-b-indigo-900 text-indigo-900 "} hidden sm:flex px-4 py-2 w-full justify-center  mx-auto h-full text-xs sm:text-base text-gray-500 font-semibold  text-center`}
                    onClick={() => { setBlindNumber(4) }}
                  >BLIND 4
                  </button>
                  <button className={`${blindNumber === 5 && "border-b-2 border-b-indigo-900 text-indigo-900 "} hidden sm:flex px-4 py-2 w-full justify-center  mx-auto h-full text-xs sm:text-base text-gray-500 font-semibold  text-center`}
                    onClick={() => { setBlindNumber(5) }}
                  >BLIND 5
                  </button>
                </div>
              </div>

              {blindNumber === 1 && <QuotationForm blindNumber={blindNumber} />}
              {blindNumber === 2 && <QuotationForm blindNumber={blindNumber} />}
              {blindNumber === 3 && <QuotationForm blindNumber={blindNumber} />}
              {blindNumber === 4 && <QuotationForm blindNumber={blindNumber} />}
              {blindNumber === 5 && <QuotationForm blindNumber={blindNumber} />}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuotationTool;
