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

const QuotationWrapper = () => {

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
    <>
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
          <PlusIcon className=" text-lime-700 h-6 w-6" />
        ) : (
          <MinusIcon className=" text-lime-700 h-6 w-6" />
        )}
        &nbsp;&nbsp;{" "}
        <p className="text-lime-700 ">
          {!motorisationToggle ? "Remove" : "Add"} Motorisation
        </p>
      </button>

      {!motorisationToggle && (
        <div className="w-fit max-w-xl">
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
    </>
  );
};

export default QuotationWrapper;
