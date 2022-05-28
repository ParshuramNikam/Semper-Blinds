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

function QuotationTool() {
  const [blindTypes, setBlindTypes] = useState([
    "Freehang",
    "Motorized Freehang",
    "Three Bars",
    "Motorized Three Bars",
    "Perfect Fit",
    "Perfect Fit Venetian",
    "Lantern",
    "Conservatory Roofs",
  ]);

  const [motorisationToggle, setMotorisationToggle] = useState(false);

  const [currentBlindType, setCurrentBlindType] = useState("");
  const [currentFabricTypes, setCurrentFabricTypes] = useState([]);

  const [blindTypeWidths, setBlindTypeWidths] = useState([]); // for WIDTH array
  const [currentBlindWidth, setcurrentBlindWidth] = useState(""); // for selet WIDTH onchange value

  const [blindTypeDepths, setBlindTypeDepths] = useState([]); // for DEPTH array
  const [currentBlindDepth, setcurrentBlindDepth] = useState(""); // for selet DEPTH onchange value

  useEffect(() => {
    //  for FABRIC TYPE TOGGLE
    if (currentBlindType === "") {
      setCurrentFabricTypes([]);
    } else if (currentBlindType === "Perfect Fit Venetian") {
      setCurrentFabricTypes(perfectFitVenetianFabricTypes);
    } else {
      setCurrentFabricTypes(commonFabricTypes);
    }

    //  for WIDTH TOGGLE
    if (currentBlindType === "") {
      setBlindTypeWidths([]);
    } else if (currentBlindType === "Perfect Fit") {
      setBlindTypeWidths(perfectFitWidth);
    } else if (currentBlindType === "Perfect Fit Venetian") {
      setBlindTypeWidths(perfectFitVenetian);
    } else if (currentBlindType === "Conservatory Roofs") {
      setBlindTypeWidths(conservatoryRoofsWidth);
    } else {
      setBlindTypeWidths(commonWidths);
    }

    //  for Depth TOGGLE
    if (currentBlindType === "") {
      setBlindTypeDepths([]);
    } else if (currentBlindType === "Perfect Fit") {
      setBlindTypeDepths(perfectFit);
    } else if (currentBlindType === "Perfect Fit Venetian") {
      setBlindTypeDepths(perfectFitVenetianDepth);
    } else if (currentBlindType === "Conservatory Roofs") {
      setBlindTypeDepths(conservatoryRoofs);
    } else {
      setBlindTypeDepths(commonDepths);
    }
  }, [currentBlindType]);

  async function handleBlindChangeInput(e) {
    await setCurrentBlindType(e.target.value);
  }

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
            {/* <input
              type=""
              name="blind_type"
              id="blind_type"
              placeholder="---Select Blind Type---"
              className="placeholder-gray-700 mt-2 w-full rounded-md p-1 pl-4 "
            /> */}
            <select
              className="placeholder-gray-700 mt-2 w-full rounded-md p-1 pl-4 "
              onChange={handleBlindChangeInput}
            >
              <option value={"NA"}>---Select Blind Type---</option>
              {blindTypes.map((blind, index) => (
                <option value={blind} key={index}>
                  {" "}
                  {blind}{" "}
                </option>
              ))}
            </select>

            <select className="mt-2 w-full rounded-md p-1 pl-4  placeholder-gray-700">
              <option value={"NA"}>---Select Fabric Type---</option>
              {currentFabricTypes.map((fabric, index) => (
                <option value={fabric} key={index}>
                  {" "}
                  {fabric}{" "}
                </option>
              ))}
            </select>

            <div className="flex flex-col-2 gap-2 h">
              <select
                onChange={(e) => setcurrentBlindWidth(e.target.value)}
                className="mt-1 w-full h-14 rounded-md placeholder-lime-700 p-1 pl-4 font-medium"
              >
                <option className="text-lime-700" value={"NA"}>
                  --Select Width--
                </option>
                {blindTypeWidths.map((width, index) => (
                  <option value={width} key={index}>
                    {" "}
                    {width}{" "}
                  </option>
                ))}
              </select>

              <select
                onChange={(e) => setcurrentBlindDepth(e.target.value)}
                className="mt-1 w-full h-14 rounded-md placeholder-lime-700 p-1 pl-4 font-medium"
              >
                <option className="text-lime-700" value={"NA"}>
                  --Select Depth--
                </option>
                {blindTypeDepths.map((depth, index) => (
                  <option value={depth} key={index}>
                    {" "}
                    {depth}{" "}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="mt-2 w-full flex mx-auto  text-gray-500 bg-lime-200 px-3 py-2 rounded-lg text-base justify-center font-semibold text-center"
              onClick={(e) => setMotorisationToggle(!motorisationToggle)}
            >
              {motorisationToggle ? (
                <MinusIcon className=" text-lime-700 h-6 w-6" />
              ) : (
                <PlusIcon className=" text-lime-700 h-6 w-6" />
              )}
              &nbsp;&nbsp;{" "}
              <p className="text-lime-700 ">
                {motorisationToggle ? "Remove" : "Add"} Motorisation
              </p>
            </button>

            {!motorisationToggle && (
              <div className="w-fit">
                <select className="mt-2 w-full rounded-md p-1 pl-4  placeholder-gray-700">
                  <option value={"NA"}>---Select Motor Type---</option>
                  {motorTypes.map((motor, index) => (
                    <option value={motor} key={index}>
                      {motor}
                    </option>
                  ))}
                </select>

                <select className="mt-2 w-full rounded-md p-1 pl-4  placeholder-gray-700">
                  <option value={"NA"}>---Select Power Type---</option>
                  {powerOptions.map((power, index) => (
                    <option value={power} key={index}>
                      {power}
                    </option>
                  ))}
                </select>
                
                <select className="mt-2 w-full rounded-md p-1 pl-4  placeholder-gray-700">
                  <option value={"NA"}>---Select Receiver Type---</option>
                  {receiverOptions.map((receiver, index) => (
                    <option value={receiver} key={index}>
                      {receiver}
                    </option>
                  ))}
                </select>

                <select className="mt-2 w-full rounded-md p-1 pl-4  placeholder-gray-700">
                  <option value={"NA"}>---Select Remote Type---</option>
                  {remoteOptions.map((remote, index) => (
                    <option value={remote} key={index}>
                      {remote}
                    </option>
                  ))}
                </select>

                <select className="mt-2 w-full rounded-md p-1 pl-4  placeholder-gray-700">
                  <option value={"NA"}>---Select Other Type---</option>
                  {otherOptions.map((option, index) => (
                    <option value={option} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}

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
