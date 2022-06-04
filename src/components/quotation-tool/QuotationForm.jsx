import {
  HomeIcon,
  MinusIcon,
  PlusIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { commonDepths } from "../../constants/Depths/commonDepths";
import { conservatoryRoofs } from "../../constants/Depths/conservatoryRoofs";
import { perfectFit } from "../../constants/Depths/perfectFit";
import { perfectFitVenetianDepth } from "../../constants/Depths/perfectFitVenetianDepth";
import { commonFabricTypes } from "../../constants/FabricTypes/commonFabricTypes";
import { perfectFitVenetianFabricTypes } from "../../constants/FabricTypes/perfectFitVenetianFabricTypes";
import { motorTypes } from "../../constants/Motorisation/motorTypes";
import { otherOptions } from "../../constants/Motorisation/otherOptions";
import { powerOptions } from "../../constants/Motorisation/powerOption";
import { receiverOptions } from "../../constants/Motorisation/receiveroptions";
import { remoteOptions } from "../../constants/Motorisation/remoteOptions";
import { conservatoryWidthxDepthColumnData } from "../../constants/SheetColumnsWithHeight/conservatory";
import { freeHangWidthxDepthColumnData } from "../../constants/SheetColumnsWithHeight/freeHang";
import { lanternWidthxDepthColumnData } from "../../constants/SheetColumnsWithHeight/lantern";
import { motorizedFreeHangWidthxDepthColumnData } from "../../constants/SheetColumnsWithHeight/motorizedFreeHang";
import { motorizedThreeBarsWidthxDepthColumnData } from "../../constants/SheetColumnsWithHeight/motorizedThreeBars";
import { perfectFitWidthxDepthColumnData } from "../../constants/SheetColumnsWithHeight/perfectFit";
import { perfectFitVenetianWidthxDepthColumnData } from "../../constants/SheetColumnsWithHeight/perfectFitVenetian";
import { threeBarWidthxDepthColumnData } from "../../constants/SheetColumnsWithHeight/threeBar";
import { commonWidths } from "../../constants/Widths/commonWidths";
import { conservatoryRoofsWidth } from "../../constants/Widths/conservatoryRoofs";
import { perfectFitVenetian } from "../../constants/Widths/perfectFitVenetianWidth";
import { perfectFitWidth } from "../../constants/Widths/perfectFitWidth";
import { conservatoryBandChooser } from "../../utils/QuotationToolHelper/conservatoryBandChooser";
import { freehangBandChooser } from "../../utils/QuotationToolHelper/freehangBandChooser";
import { lanternBandChooser } from "../../utils/QuotationToolHelper/lanternBandChooser";
import { motorizedFreehangBandChooser } from "../../utils/QuotationToolHelper/motorizedFreehangBandChooser";
import { motorizedThreeBarsBandChooser } from "../../utils/QuotationToolHelper/motorizedThreeBarsBandChooser";
import { perfectFitBandChooser } from "../../utils/QuotationToolHelper/perfectFitBandChooser";
import { perfectFitVenetianBandChooser } from "../../utils/QuotationToolHelper/perfectFitVenetianBandChooser";
import { threeBarsBandChooser } from "../../utils/QuotationToolHelper/threeBarsBandChooser";

const QuotationForm = ({ blindNumber }) => {
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

  const [motorisationToggle, setMotorisationToggle] = useState(true);

  // blind values are always static so no need to create a array of blind types becuase they are stored in array
  const [currentBlindType, setCurrentBlindType] = useState(
      // sessionStorage.getItem("blind-type-" + blindNumber)
      //   ? sessionStorage.getItem("blind-type-" + blindNumber)
      ""
  );

  const [currentFabricType, setcurrentFabricType] = useState(
      // sessionStorage.getItem("fabric-type-" + blindNumber)
      //   ? sessionStorage.getItem("fabric-type-" + blindNumber)
      ""
  );
  const [currentFabricTypes, setCurrentFabricTypes] = useState([]);

  const [blindTypeWidths, setBlindTypeWidths] = useState([]); // for WIDTH array
  const [currentBlindWidth, setcurrentBlindWidth] = useState(
      // sessionStorage.getItem("width-" + blindNumber)
      //   ? sessionStorage.getItem("width-" + blindNumber)
      ""
  ); // for selet WIDTH onchange value

  const [blindTypeDepths, setBlindTypeDepths] = useState([]); // for DEPTH array
  const [currentBlindDepth, setcurrentBlindDepth] = useState(
      // sessionStorage.getItem("depth-" + blindNumber)
      //   ? sessionStorage.getItem("depth-" + blindNumber)
      ""
  ); // for selet DEPTH onchange value

  const [currentMotorType, setCurrentMotorType] = useState(
      // sessionStorage.getItem("motor-type-" + blindNumber) !== undefined
      // ? sessionStorage.getItem("motor-type-" + blindNumber)
      // : ""
      ""
  );
  const [currentPowerType, setCurrentPowerType] = useState(
      // sessionStorage.getItem("power-type-" + blindNumber)
      //   ? sessionStorage.getItem("power-type-" + blindNumber)
      ""
  );
  const [currentReceiverType, setCurrentReceiverType] = useState(
      // sessionStorage.getItem("receiver-type-" + blindNumber)
      //   ? sessionStorage.getItem("receiver-type-" + blindNumber)
      ""
  );
  const [currentRemoteType, setCurrentRemoteType] = useState(
      // sessionStorage.getItem("remote-type-" + blindNumber)
      //   ? sessionStorage.getItem("remote-type-" + blindNumber)
      ""
  );
  const [currentOtherType, setCurrentOtherType] = useState(
      // sessionStorage.getItem("other-type-" + blindNumber)
      //   ? sessionStorage.getItem("other-type-" + blindNumber)
      ""
  );
  const [excelData, setExcelData] = useState([]);

  const [bandType, setBandType] = useState(null); //A,B,C,D.... bands

  const [widthxDepthRowIndex, setWidthxDepthRowIndex] = useState(null);

  const [withoutMotorisationTotal, setWithoutMotorisationTotal] = useState(0);
  const [withMoterisationTotal, setWithMoterisationTotal] = useState(0);

  const [isCalculating, setIsCalculating] = useState(false);

  const [selectedMotorTypeExcelValue, setSelectedMotorTypeExcelValue] = useState(0);
  const [selectedPowerTypeExcelValue, setSelectedPowerTypeExcelValue] = useState(0);
  const [selectedReceiverTypeExcelValue, setSelectedReceiverTypeExcelValue] = useState(0);
  const [selectedRemoteTypeExcelValue, setSelectedRemoteTypeExcelValue] = useState(0);
  const [selectedOtherTypeExcelValue, setSelectedOtherTypeExcelValue] = useState(0);

  const [skipInitialValues, setSkipInitialValues] = useState(true);
  const [skipFetchDataFromExcel, setSkipFetchDataFromExcel] = useState(false);

  const [addMotorisationValues, setAddMoterisationValues] = useState(false);

  const setInitialValuesToFormData = async () => {
      // set the values in session storage
      if (sessionStorage.getItem("blind-type-" + blindNumber))
          setCurrentBlindType(sessionStorage.getItem("blind-type-" + blindNumber));

      if (sessionStorage.getItem("fabric-type-" + blindNumber))
          setcurrentFabricType(
              sessionStorage.getItem("fabric-type-" + blindNumber)
          );

      if (sessionStorage.getItem("width-" + blindNumber))
          setcurrentBlindWidth(sessionStorage.getItem("width-" + blindNumber));

      if (sessionStorage.getItem("depth-" + blindNumber))
          setcurrentBlindDepth(sessionStorage.getItem("depth-" + blindNumber));

      if (sessionStorage.getItem("motor-type-" + blindNumber))
          setCurrentMotorType(sessionStorage.getItem("motor-type-" + blindNumber));

      if (sessionStorage.getItem("power-type-" + blindNumber))
          setCurrentPowerType(sessionStorage.getItem("power-type-" + blindNumber));

      if (sessionStorage.getItem("receiver-type-" + blindNumber))
          setCurrentReceiverType(
              sessionStorage.getItem("receiver-type-" + blindNumber)
          );

      if (sessionStorage.getItem("remote-type-" + blindNumber))
          setCurrentRemoteType(
              sessionStorage.getItem("remote-type-" + blindNumber)
          );

      if (sessionStorage.getItem("other-type-" + blindNumber))
          setCurrentOtherType(sessionStorage.getItem("other-type-" + blindNumber));

      return true;
  };

  const fetchExcelSheetData = async () => {
      await fetch(
          "https://script.googleusercontent.com/macros/echo?user_content_key=1hrZNGclS_h1HLAbhNxg0fZTWOtfjTgA2Qz1ttNw561gMJ6dG_ZGTd3ii_MPtjMq-NBYznnIb865N04sMocX99HSDl6BUtkzOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa-ThZIH8CGShpnEURYAZTLqzB5GqKund-AF5Xjvv8fF4DpKKE10sxN1e3_6uwxHHQ94qDw0P2YtuZdA9hqRHDLJ7WgsB0X29pwXIuFltvcj9tVcuvx4Me2XwuuAgclIqbg&lib=MFutGGpLdYi_IxT2czSizu8UfCpfIk1XD"
      )
          .then((response) => response.json())
          .then((data) => {
              setExcelData(data.items);
              console.log(data.items);
              alert("Excel Data fetch sucefully!")
          }).catch(() => {
              alert("Excel Data fetching *Failed*!");
          })
  }

  useEffect(() => {
      fetchExcelSheetData();
      if (sessionStorage.getItem("blind-type-" + blindNumber)) {
          setCurrentBlindType(sessionStorage.getItem("blind-type-" + blindNumber))
      }
      if (sessionStorage.getItem("fabric-type-" + blindNumber)) {
          setCurrentBlindType(sessionStorage.getItem("fabric-type-" + blindNumber))
      }
  }, []);

  async function handleBlindChangeInput(e) {
      setCurrentBlindType(e.target.value);
      sessionStorage.setItem("blind-type-" + blindNumber, e.target.value);

      // To get the fabric array for selected blind
      if (e.target.value === "" || e.target.value === null) {
          setCurrentFabricTypes([]);
          console.log("akakakk");
      } else if (e.target.value === "Perfect Fit Venetian") {
          setCurrentFabricTypes(perfectFitVenetianFabricTypes);
      } else {
          setCurrentFabricTypes(commonFabricTypes);
      }

      // if you want to these width depth array after fabric type selection then shift this into handleFabricChangeInput 
      // replace e.target.value with "currentBlindType"

      // To get the width array for selected blind
      if (e.target.value === "" || e.target.value === null) {
          setBlindTypeWidths([]);
      } else if (e.target.value === "Perfect Fit") {
          setBlindTypeWidths(perfectFitWidth);
      } else if (e.target.value === "Perfect Fit Venetian") {
          setBlindTypeWidths(perfectFitVenetian);
      } else if (e.target.value === "Conservatory Roofs") {
          setBlindTypeWidths(conservatoryRoofsWidth);
      } else {
          setBlindTypeWidths(commonWidths);
      }

      // To get the depth array for selected blind
      if (e.target.value === "" || e.target.value === null) {
          setBlindTypeDepths([]);
      } else if (e.target.value === "Perfect Fit") {
          setBlindTypeDepths(perfectFit);
      } else if (e.target.value === "Perfect Fit Venetian") {
          setBlindTypeDepths(perfectFitVenetianDepth);
      } else if (e.target.value === "Conservatory Roofs") {
          setBlindTypeDepths(conservatoryRoofs);
      } else {
          setBlindTypeDepths(commonDepths);
      }
  }

  async function handleFabricChangeInput(e) {
      setcurrentFabricType(e.target.value);
      sessionStorage.setItem("fabric-type-" + blindNumber, e.target.value);

      // Get blind band 
      if (e.target.value) {
          await blindBandChooser(
              currentBlindType,
              e.target.value,
              currentFabricTypes
          );
      }

  }

  async function handleWidthChangeInput(e) {
      setcurrentBlindWidth(e.target.value);
      sessionStorage.setItem("width-" + blindNumber, e.target.value);

      if (currentBlindDepth || currentBlindDepth !== "") {
          widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth)
          // setTimeout(() => {
          // setWithoutMotorisationTotal(excelData[widthxDepthRowIndex][bandType])
          // }, 500);
      }

      // if (currentBlindDepth || currentBlindDepth !== "") {
      //     let myPromise = new Promise(function (myResolve, myReject) {
      //         widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth)

      //         myResolve(); // when successful
      //         myReject();  // when error
      //     });

      //     // "Consuming Code" (Must wait for a fulfilled Promise)
      //     myPromise.then(
      //         function (value) {
      //             setWithoutMotorisationTotal(excelData[widthxDepthRowIndex][bandType])
      //         },
      //         function (error) {
      //             console.log("proise error : " + error)
      //         }
      //     );
      // }
  }

  async function handleDepthChangeInput(e) {
      setcurrentBlindDepth(e.target.value);
      sessionStorage.setItem("depth-" + blindNumber, e.target.value);

      if (currentBlindWidth || currentBlindWidth !== "NA" || currentBlindWidth !== "") {
          widthxDepthRowNumber(currentBlindType, currentBlindWidth, e.target.value)
          // setTimeout(() => {
          //     setWithoutMotorisationTotal(excelData[widthxDepthRowIndex][bandType])
          // }, 500);
      }
  }

  async function handleMotorTypeChangeInput(e) {
      console.log(e.target.value);
      setCurrentMotorType(e.target.value);
      sessionStorage.setItem("motor-type-" + blindNumber, e.target.value);

      if (e.target.value === "") {
          setSelectedMotorTypeExcelValue(0);
      }
      else if (e.target.value) {
          console.log(excelData[motorTypes.indexOf(e.target.value)].Motor);

          setSelectedMotorTypeExcelValue(excelData[motorTypes.indexOf(e.target.value)].Motor);
      }
  }

  async function handlePowerTypeChangeInput(e) {
      setCurrentPowerType(e.target.value);
      sessionStorage.setItem("power-type-" + blindNumber, e.target.value);

      if (e.target.value === "") {
          setSelectedPowerTypeExcelValue(0);
      }
      else if (e.target.value) {
          console.log(excelData[powerOptions.indexOf(e.target.value)].Power);

          setSelectedPowerTypeExcelValue(excelData[powerOptions.indexOf(e.target.value)].Power);
      }
  }

  async function handleReceiverTypeChangeInput(e) {
      if (e.target.value === "") {
          sessionStorage.removeItem("receiver-type-" + blindNumber);
      } else {
          sessionStorage.setItem("receiver-type-" + blindNumber, e.target.value);
      }

      setCurrentReceiverType(e.target.value);

      if (e.target.value === "") {
          setSelectedReceiverTypeExcelValue(0);
      }
      else if (e.target.value) {
          console.log(excelData[receiverOptions.indexOf(e.target.value)].Receiver);

          setSelectedReceiverTypeExcelValue(excelData[receiverOptions.indexOf(e.target.value)].Receiver);
      }


  }

  async function handleRemoteTypeChangeInput(e) {
      setCurrentRemoteType(e.target.value);
      sessionStorage.setItem("remote-type-" + blindNumber, e.target.value);

      if (e.target.value === "") {
          setSelectedRemoteTypeExcelValue(0);
      }
      else if (e.target.value) {
          console.log(excelData[remoteOptions.indexOf(e.target.value)].Remote);

          setSelectedRemoteTypeExcelValue(excelData[remoteOptions.indexOf(e.target.value)].Remote);
      }
  }

  async function handleOtherTypeChangeInput(e) {
      setCurrentOtherType(e.target.value);
      sessionStorage.setItem("other-type-" + blindNumber, e.target.value);

      if (e.target.value === "") {
          setSelectedOtherTypeExcelValue(0);
      }
      else if (e.target.value) {
          console.log(excelData[otherOptions.indexOf(e.target.value)].Other);

          setSelectedOtherTypeExcelValue(excelData[otherOptions.indexOf(e.target.value)].Other);
      }
  }

  function clearMotorisationValues() {
      setCurrentMotorType("");
      sessionStorage.removeItem("motor-type-" + blindNumber);
      setSelectedMotorTypeExcelValue(0);

      setCurrentPowerType("");
      sessionStorage.removeItem("power-type-" + blindNumber);
      setSelectedPowerTypeExcelValue(0);

      setCurrentReceiverType("");
      sessionStorage.removeItem("receiver-type-" + blindNumber);
      setSelectedReceiverTypeExcelValue(0);

      setCurrentRemoteType("");
      sessionStorage.removeItem("remote-type-" + blindNumber);
      setSelectedRemoteTypeExcelValue(0);

      setCurrentOtherType("");
      sessionStorage.removeItem("other-type-" + blindNumber);
      setSelectedOtherTypeExcelValue(0);

      setWithMoterisationTotal(0);
  }

  function motorisationAddRemoveHandler() {
      if (motorisationToggle) {
          setMotorisationToggle(false);
          setAddMoterisationValues(true)
      } else {
          setMotorisationToggle(true);
          setAddMoterisationValues(false);

          clearMotorisationValues();
      }
  }

  function refreshBtnListner() {
      setCurrentBlindType("");
      sessionStorage.removeItem("blind-type-" + blindNumber);

      setcurrentFabricType("");
      sessionStorage.removeItem("fabric-type-" + blindNumber);

      setcurrentBlindWidth("");
      sessionStorage.removeItem("width-" + blindNumber);

      setcurrentBlindDepth("");
      sessionStorage.removeItem("depth-" + blindNumber);

      setWithoutMotorisationTotal(0)

      clearMotorisationValues();
  }

  const blindBandChooser = (blindType, fabricType, fabricArr) => {
      console.log(blindType);
      console.log(fabricType);

      if (blindType === "Freehang") {
          setBandType(freehangBandChooser(fabricArr.indexOf(fabricType) + 1));
          return fabricArr.indexOf(fabricType) + 1;
      } else if (blindType === "Motorized Freehang") {
          setBandType(
              motorizedFreehangBandChooser(fabricArr.indexOf(fabricType) + 1)
          );
          return fabricArr.indexOf(fabricType) + 1;
      } else if (blindType === "Three Bars") {
          setBandType(threeBarsBandChooser(fabricArr.indexOf(fabricType) + 1));
          return fabricArr.indexOf(fabricType) + 1;
      } else if (blindType === "Motorized Three Bars") {
          setBandType(
              motorizedThreeBarsBandChooser(fabricArr.indexOf(fabricType) + 1)
          );
      } else if (blindType === "Perfect Fit") {
          setBandType(perfectFitBandChooser(fabricArr.indexOf(fabricType) + 1));
      } else if (blindType === "Perfect Fit Venetian") {
          setBandType(
              perfectFitVenetianBandChooser(fabricArr.indexOf(fabricType) + 1)
          );
      } else if (blindType === "Lantern") {
          setBandType(lanternBandChooser(fabricArr.indexOf(fabricType) + 1));
      } else if (blindType === "Conservatory Roofs") {
          setBandType(conservatoryBandChooser(fabricArr.indexOf(fabricType) + 1));
      }
  };

  function widthxDepthRowNumber(
      blindType,
      width,
      depth
  ) {
      if (blindType === "Freehang") {
          setWidthxDepthRowIndex(
              freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
          );
          return freeHangWidthxDepthColumnData.indexOf(width + "x" + depth);
      } else if (blindType === "Motorized Freehang") {
          setWidthxDepthRowIndex(
              motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
          );
          return motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth);
      } else if (blindType === "Three Bars") {
          setWidthxDepthRowIndex(
              threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
          );
      } else if (blindType === "Motorized Three Bars") {
          setWidthxDepthRowIndex(
              motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
          );
      } else if (blindType === "Perfect Fit") {
          setWidthxDepthRowIndex(
              perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
          );
      } else if (blindType === "Perfect Fit Venetian") {
          setWidthxDepthRowIndex(
              perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
          );
      } else if (blindType === "Lantern") {
          setWidthxDepthRowIndex(
              lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
          );
      } else if (blindType === "Conservatory Roofs") {
          setWidthxDepthRowIndex(
              conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
          );
      }
  }

  const calculate = async () => {


      if (!currentBlindType || !currentFabricType || !currentBlindWidth || !currentBlindDepth) {
          alert("* fields are required")
          return
      }


      // to calculate values above the calculate button
      let myPromise = new Promise(function (myResolve, myReject) {
          widthxDepthRowNumber(currentBlindType, currentBlindWidth, currentBlindDepth)

          myResolve(); // when successful
          myReject();  // when error
      });

      // "Consuming Code" (Must wait for a fulfilled Promise)
      myPromise.then(
          function () {
              console.log("full targeted object: " + widthxDepthRowIndex);
              console.log("Without Motorisation Total : " + excelData[widthxDepthRowIndex][bandType]);

              setWithoutMotorisationTotal(excelData[widthxDepthRowIndex][bandType])
          },
          function (error) {
              console.log("proise error : " + error)
          }
      );
  }



  return (
      <>
          {/* <h1>Blind no : {blindNumber}</h1> */}
          <button
              onClick={() => {

                  refreshBtnListner();
              }}
              className="mt-2 w-full flex mx-auto  text-gray-500 bg-lime-200 px-3 py-2 rounded-lg text-base justify-center font-semibold text-center"
          >
              <RefreshIcon className=" text-lime-700 h-6 w-6" />
              &nbsp;&nbsp; <p className="text-lime-700">Refresh</p>
          </button>
          <select
              className="h-12 placeholder-gray-700 mt-2 w-full rounded-md p-1 pl-4 "
              onChange={handleBlindChangeInput}
              value={currentBlindType}
          >
              <option value={""}> ---Select Blind Type---</option>
              {blindTypes.map((blind, index) => (
                  <option value={blind} key={index}>
                      {" "}
                      {blind}{" "}
                  </option>
              ))}
          </select>

          <select
              className="h-12 mt-2 w-full rounded-md p-1 pl-4  placeholder-gray-700"
              onChange={handleFabricChangeInput}
              value={currentFabricType}
          >
              <option value={""}> ---Select Fabric Type---</option>
              {currentFabricTypes.map((fabric, index) => (
                  <option value={fabric} key={index}>
                      {" "}
                      {fabric}{" "}
                  </option>
              ))}
          </select>

          <div className="grid grid-cols-2 mt-2 gap-2 ">
              <div>
                  <p className=" pt-1 bg-white text-lime-700 rounded-t-md text-center font-semibold text-base">
                      WIDTH
                  </p>
                  <select
                      onChange={handleWidthChangeInput}
                      value={currentBlindWidth}
                      className=" w-full h-10 rounded-b-md  placeholder-lime-700 p-1 pl-4  font-medium"
                  >
                      <option className="" value={""}>
                          --Select Width--
                      </option>
                      {blindTypeWidths.map((width, index) => (
                          <option value={width} key={index}>
                              {" "}
                              {width}{" "}
                          </option>
                      ))}
                  </select>
              </div>

              <div>
                  <p className=" pt-1 bg-white text-lime-700 rounded-t-md text-center font-semibold text-base">
                      DEPTH
                  </p>
                  <select
                      onChange={handleDepthChangeInput}
                      value={currentBlindDepth}
                      className=" w-full h-10 rounded-b-md  placeholder-lime-700 p-1 pl-4  font-medium"
                  >
                      <option className="text-lime-700" value={""}>
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
          </div>

          <button
              className="mt-2 w-full flex mx-auto  text-gray-500 bg-lime-200 px-3 py-2 rounded-lg text-base justify-center font-semibold text-center"
              onClick={motorisationAddRemoveHandler}
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
                  <select
                      onChange={handleMotorTypeChangeInput}
                      value={currentMotorType}
                      className="h-10 mt-2 w-full rounded-md p-1 pl-4  placeholder-gray-700"
                  >
                      <option value={""}> ---Select Motor Type---</option>
                      {motorTypes.map((motor, index) => (
                          <option value={motor} key={index}>
                              {motor}
                          </option>
                      ))}
                  </select>

                  <select
                      onChange={handlePowerTypeChangeInput}
                      value={currentPowerType}
                      className="h-10 mt-2 w-full rounded-md p-1 pl-4  placeholder-gray-700"
                  >
                      <option value={""}> ---Select Power Type---</option>
                      {powerOptions.map((power, index) => (
                          <option value={power} key={index}>
                              {power}
                          </option>
                      ))}
                  </select>

                  <select
                      onChange={handleReceiverTypeChangeInput}
                      value={currentReceiverType}
                      className="h-10 mt-2 w-full rounded-md p-1 pl-4  placeholder-gray-700"
                  >
                      <option value={""}> ---Select Receiver Type---</option>
                      {receiverOptions.map((receiver, index) => (
                          <option value={receiver} key={index}>
                              {receiver}
                          </option>
                      ))}
                  </select>

                  <select
                      onChange={handleRemoteTypeChangeInput}
                      value={currentRemoteType}
                      className="h-10 mt-2 w-full rounded-md p-1 pl-4  placeholder-gray-700"
                  >
                      <option value={""}> ---Select Remote Type---</option>
                      {remoteOptions.map((remote, index) => (
                          <option value={remote} key={index}>
                              {remote}
                          </option>
                      ))}
                  </select>

                  <select
                      onChange={handleOtherTypeChangeInput}
                      value={currentOtherType}
                      className="h-10 mt-2 w-full rounded-md p-1 pl-4  placeholder-gray-700"
                  >
                      <option value={""}> ---Select Other Type---</option>
                      {otherOptions.map((option, index) => (
                          <option value={option} key={index}>
                              {option}
                          </option>
                      ))}
                  </select>
              </div>
          )}

          <button
              onClick={() => {
                  alert("Add calculate func");

                  calculate();
                  //   calculate();
              }}
              className="w-full my-2 text-xl py-2  bg-indigo-900 text-white rounded-lg  font-normal"
          >
              <div className="flex justify-center items-center  gap-4">
                  {isCalculating && (
                      <svg
                          role="status"
                          class="w-6 h-6  text-gray-200 animate-spin dark:text-white fill-indigo-900"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                          />
                          <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                          />
                      </svg>
                  )}
                  {isCalculating ? "C A L C U L A T I N G" : "C A L C U L A T E"}
              </div>
          </button>
          <div className="px-2 flex flex-col justify-center rounded shadow-sm mt-1 text-center bg-indigo-100">
              <h1 className="p-2 font-semibold text-xl text-indigo-900 border-b-2  border-indigo-900">
                  BLINDS
              </h1>
              <div className="flex px-2 justify-between text-center">
                  <h1 className="p-2 font-semibold text-base sm:text-lg text-indigo-900">
                      TOTAL
                  </h1>
                  <h1 className="p-2 font-semibold text-base sm:text-lg text-indigo-900">
                      £ {withoutMotorisationTotal ? parseFloat(withoutMotorisationTotal).toFixed(2) : "0.00"}
                  </h1>
              </div>
          </div>
          {
              !motorisationToggle &&
              <div className="px-2 flex flex-col justify-center rounded shadow-sm mt-2.5 text-center bg-indigo-100">
                  <h1 className="p-2 font-semibold text-xl text-indigo-900 border-b-2  border-indigo-900">
                      MOTORISATION
                  </h1>

                  <div className="flex px-2 justify-between text-center">
                      <h1 className="p-2 font-semibold text-base sm:text-md text-indigo-900">
                          Motor
                      </h1>
                      <h1 className="p-2 font-semibold text-base sm:text-md text-indigo-900">
                          £ {parseFloat(selectedMotorTypeExcelValue).toFixed(2)}
                      </h1>
                  </div>
                  <div className="flex px-2 justify-between text-center">
                      <h1 className="p-2 font-semibold text-base sm:text-md text-indigo-900">
                          Power
                      </h1>
                      <h1 className="p-2 font-semibold text-base sm:text-md text-indigo-900">
                          £ {parseFloat(selectedPowerTypeExcelValue).toFixed(2)}
                      </h1>
                  </div>
                  <div className="flex px-2 justify-between text-center">
                      <h1 className="p-2 font-semibold text-base sm:text-md text-indigo-900">
                          Receiver
                      </h1>
                      <h1 className="p-2 font-semibold text-base sm:text-md text-indigo-900">
                          £ {parseFloat(selectedReceiverTypeExcelValue).toFixed(2)}
                      </h1>
                  </div>
                  <div className="flex px-2 justify-between text-center">
                      <h1 className="p-2 font-semibold text-base sm:text-md text-indigo-900">
                          Remote
                      </h1>
                      <h1 className="p-2 font-semibold text-base sm:text-md text-indigo-900">
                          £ {parseFloat(selectedRemoteTypeExcelValue).toFixed(2)}
                      </h1>
                  </div>
                  <div className="flex px-2 justify-between text-center">
                      <h1 className="p-2 font-semibold text-base sm:text-md text-indigo-900">
                          Other
                      </h1>
                      <h1 className="p-2 font-semibold text-base sm:text-md text-indigo-900">
                          £ {parseFloat(selectedOtherTypeExcelValue).toFixed(2)}
                      </h1>
                  </div>

                  <div className="flex px-2 justify-between text-center">
                      <h1 className="p-2 font-bold text-base sm:text-md text-indigo-900">
                          TOTAL
                      </h1>
                      <h1 className="p-2 font-semibold text-base sm:text-md text-indigo-900">
                          £ {
                              parseFloat(
                                  selectedMotorTypeExcelValue +
                                  selectedPowerTypeExcelValue +
                                  selectedReceiverTypeExcelValue +
                                  selectedReceiverTypeExcelValue +
                                  selectedOtherTypeExcelValue
                              ).toFixed(2)
                          }
                      </h1>
                  </div>
              </div>
          }
          <div className="flex flex-col justify-center shadow-sm rounded mt-2.5 text-center bg-lime-100">
              <div className="flex px-2 justify-between text-center">
                  <h1 className="p-2 font-semibold text-base sm:text-lg text-lime-700">
                      GRAND TOTAL
                  </h1>
                  <h1 className="p-2 font-semibold text-base sm:text-lg text-lime-700">
                      (Excluding VAT) £{" "}
                      {
                          addMotorisationValues
                              ? parseFloat(
                                  withoutMotorisationTotal +
                                  selectedMotorTypeExcelValue +
                                  selectedPowerTypeExcelValue +
                                  selectedReceiverTypeExcelValue +
                                  selectedReceiverTypeExcelValue +
                                  selectedOtherTypeExcelValue
                              ).toFixed(2)
                              : parseFloat(withoutMotorisationTotal).toFixed(2)
                      }
                  </h1>
              </div>
          </div>
      </>
  );
};

export default QuotationForm;
