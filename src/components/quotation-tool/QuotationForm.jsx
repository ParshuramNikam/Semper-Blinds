
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
import WidthAndDepthInputWrapper from "../common/WidthAndDepthInputWrapper";

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


    const useStateReturnValueFromSessionStrorage = (valueOf) => {
        return sessionStorage.getItem(valueOf + blindNumber) || sessionStorage.getItem(valueOf + blindNumber) !== null
            ? sessionStorage.getItem(valueOf + blindNumber)
            : ""
    }

    const setItemValueInSessionStorageKey = (key, value) => {
        return sessionStorage.setItem(key + blindNumber, value);
    }
    const getItemFromSessionStorage = (key) => {
        return sessionStorage.getItem(key + blindNumber);
    }
    const removeItemFromSessionStorage = (key) => {
        return sessionStorage.removeItem(key + blindNumber);

    }

    // ----- --------- -------- ------- --------- ---------

    const [motorisationToggle, setMotorisationToggle] = useState(
        sessionStorage.getItem("motorization-toggle-" + blindNumber) || sessionStorage.getItem("motorization-toggle-") !== null
            ? sessionStorage.getItem("motorization-toggle-" + blindNumber)
            : false
    );

    // blind values are always static so no need to create a array of blind types becuase they are stored in array
    const [currentBlindType, setCurrentBlindType] = useState(useStateReturnValueFromSessionStrorage("blind-type-"));

    const [currentFabricType, setcurrentFabricType] = useState(useStateReturnValueFromSessionStrorage("fabric-type-"));
    const [currentFabricTypes, setCurrentFabricTypes] = useState([]);

    const [blindTypeWidths, setBlindTypeWidths] = useState([]); // for WIDTH array
    const [blindTypeDepths, setBlindTypeDepths] = useState([]); // for DEPTH array

    const [currentBlindWidth, setcurrentBlindWidth] = useState(useStateReturnValueFromSessionStrorage("width-")); // for selet WIDTH onchange value
    const [currentBlindDepth, setcurrentBlindDepth] = useState(useStateReturnValueFromSessionStrorage("depth-")); // for selet DEPTH onchange value

    // usestate repeat from 2nd blind width and depth : 
    const [currentBlindWidth2, setcurrentBlindWidth2] = useState(useStateReturnValueFromSessionStrorage("width-2-")); // for selet WIDTH onchange value
    const [currentBlindDepth2, setcurrentBlindDepth2] = useState(useStateReturnValueFromSessionStrorage("depth-2-")); // for selet DEPTH onchange value

    const [currentBlindWidth3, setcurrentBlindWidth3] = useState(useStateReturnValueFromSessionStrorage("width-3-")); // for selet WIDTH onchange value
    const [currentBlindDepth3, setcurrentBlindDepth3] = useState(useStateReturnValueFromSessionStrorage("depth-3-")); // for selet DEPTH onchange value

    const [currentBlindWidth4, setcurrentBlindWidth4] = useState(useStateReturnValueFromSessionStrorage("width-4-")); // for selet WIDTH onchange value
    const [currentBlindDepth4, setcurrentBlindDepth4] = useState(useStateReturnValueFromSessionStrorage("depth-4-")); // for selet DEPTH onchange value

    const [currentBlindWidth5, setcurrentBlindWidth5] = useState(useStateReturnValueFromSessionStrorage("width-5-"));
    const [currentBlindDepth5, setcurrentBlindDepth5] = useState(useStateReturnValueFromSessionStrorage("depth-5-"));

    const [currentBlindWidth6, setcurrentBlindWidth6] = useState(useStateReturnValueFromSessionStrorage("width-6-"));
    const [currentBlindDepth6, setcurrentBlindDepth6] = useState(useStateReturnValueFromSessionStrorage("depth-6-"));
    const [currentBlindWidth7, setcurrentBlindWidth7] = useState(useStateReturnValueFromSessionStrorage("width-7-"));
    const [currentBlindDepth7, setcurrentBlindDepth7] = useState(useStateReturnValueFromSessionStrorage("depth-7-"));
    const [currentBlindWidth8, setcurrentBlindWidth8] = useState(useStateReturnValueFromSessionStrorage("width-8-"));
    const [currentBlindDepth8, setcurrentBlindDepth8] = useState(useStateReturnValueFromSessionStrorage("depth-8-"));
    const [currentBlindWidth9, setcurrentBlindWidth9] = useState(useStateReturnValueFromSessionStrorage("width-9-"));
    const [currentBlindDepth9, setcurrentBlindDepth9] = useState(useStateReturnValueFromSessionStrorage("depth-9-"));
    const [currentBlindWidth10, setcurrentBlindWidth10] = useState(useStateReturnValueFromSessionStrorage("width-10-"));
    const [currentBlindDepth10, setcurrentBlindDepth10] = useState(useStateReturnValueFromSessionStrorage("depth-10-"));
    const [currentBlindWidth11, setcurrentBlindWidth11] = useState(useStateReturnValueFromSessionStrorage("width-11-"));
    const [currentBlindDepth11, setcurrentBlindDepth11] = useState(useStateReturnValueFromSessionStrorage("depth-11-"));
    const [currentBlindWidth12, setcurrentBlindWidth12] = useState(useStateReturnValueFromSessionStrorage("width-12-"));
    const [currentBlindDepth12, setcurrentBlindDepth12] = useState(useStateReturnValueFromSessionStrorage("depth-12-"));
    const [currentBlindWidth13, setcurrentBlindWidth13] = useState(useStateReturnValueFromSessionStrorage("width-13-"));
    const [currentBlindDepth13, setcurrentBlindDepth13] = useState(useStateReturnValueFromSessionStrorage("depth-13-"));
    const [currentBlindWidth14, setcurrentBlindWidth14] = useState(useStateReturnValueFromSessionStrorage("width-14-"));
    const [currentBlindDepth14, setcurrentBlindDepth14] = useState(useStateReturnValueFromSessionStrorage("depth-14-"));
    const [currentBlindWidth15, setcurrentBlindWidth15] = useState(useStateReturnValueFromSessionStrorage("width-15-"));
    const [currentBlindDepth15, setcurrentBlindDepth15] = useState(useStateReturnValueFromSessionStrorage("depth-15-"));
    const [currentBlindWidth16, setcurrentBlindWidth16] = useState(useStateReturnValueFromSessionStrorage("width-16-"));
    const [currentBlindDepth16, setcurrentBlindDepth16] = useState(useStateReturnValueFromSessionStrorage("depth-16-"));
    const [currentBlindWidth17, setcurrentBlindWidth17] = useState(useStateReturnValueFromSessionStrorage("width-17-"));
    const [currentBlindDepth17, setcurrentBlindDepth17] = useState(useStateReturnValueFromSessionStrorage("depth-17-"));
    const [currentBlindWidth18, setcurrentBlindWidth18] = useState(useStateReturnValueFromSessionStrorage("width-18-"));
    const [currentBlindDepth18, setcurrentBlindDepth18] = useState(useStateReturnValueFromSessionStrorage("depth-18-"));
    const [currentBlindWidth19, setcurrentBlindWidth19] = useState(useStateReturnValueFromSessionStrorage("width-19-"));
    const [currentBlindDepth19, setcurrentBlindDepth19] = useState(useStateReturnValueFromSessionStrorage("depth-19-"));
    const [currentBlindWidth20, setcurrentBlindWidth20] = useState(useStateReturnValueFromSessionStrorage("width-20-"));
    const [currentBlindDepth20, setcurrentBlindDepth20] = useState(useStateReturnValueFromSessionStrorage("depth-20-"));
    const [currentBlindWidth21, setcurrentBlindWidth21] = useState(useStateReturnValueFromSessionStrorage("width-21-"));
    const [currentBlindDepth21, setcurrentBlindDepth21] = useState(useStateReturnValueFromSessionStrorage("depth-21-"));
    const [currentBlindWidth22, setcurrentBlindWidth22] = useState(useStateReturnValueFromSessionStrorage("width-22-"));
    const [currentBlindDepth22, setcurrentBlindDepth22] = useState(useStateReturnValueFromSessionStrorage("depth-22-"));
    const [currentBlindWidth23, setcurrentBlindWidth23] = useState(useStateReturnValueFromSessionStrorage("width-23-"));
    const [currentBlindDepth23, setcurrentBlindDepth23] = useState(useStateReturnValueFromSessionStrorage("depth-23-"));
    const [currentBlindWidth24, setcurrentBlindWidth24] = useState(useStateReturnValueFromSessionStrorage("width-24-"));
    const [currentBlindDepth24, setcurrentBlindDepth24] = useState(useStateReturnValueFromSessionStrorage("depth-24-"));
    const [currentBlindWidth25, setcurrentBlindWidth25] = useState(useStateReturnValueFromSessionStrorage("width-25-"));
    const [currentBlindDepth25, setcurrentBlindDepth25] = useState(useStateReturnValueFromSessionStrorage("depth-25-"));
    const [currentBlindWidth26, setcurrentBlindWidth26] = useState(useStateReturnValueFromSessionStrorage("width-26-"));
    const [currentBlindDepth26, setcurrentBlindDepth26] = useState(useStateReturnValueFromSessionStrorage("depth-26-"));
    const [currentBlindWidth27, setcurrentBlindWidth27] = useState(useStateReturnValueFromSessionStrorage("width-27-"));
    const [currentBlindDepth27, setcurrentBlindDepth27] = useState(useStateReturnValueFromSessionStrorage("depth-27-"));
    const [currentBlindWidth28, setcurrentBlindWidth28] = useState(useStateReturnValueFromSessionStrorage("width-28-"));
    const [currentBlindDepth28, setcurrentBlindDepth28] = useState(useStateReturnValueFromSessionStrorage("depth-28-"));
    const [currentBlindWidth29, setcurrentBlindWidth29] = useState(useStateReturnValueFromSessionStrorage("width-29-"));
    const [currentBlindDepth29, setcurrentBlindDepth29] = useState(useStateReturnValueFromSessionStrorage("depth-29-"));
    const [currentBlindWidth30, setcurrentBlindWidth30] = useState(useStateReturnValueFromSessionStrorage("width-30-"));
    const [currentBlindDepth30, setcurrentBlindDepth30] = useState(useStateReturnValueFromSessionStrorage("depth-30-"));



    const [currentMotorType, setCurrentMotorType] = useState(useStateReturnValueFromSessionStrorage("motor-type-"));
    const [currentPowerType, setCurrentPowerType] = useState(useStateReturnValueFromSessionStrorage("power-type-"));
    const [currentReceiverType, setCurrentReceiverType] = useState(useStateReturnValueFromSessionStrorage("receiver-type-"));
    const [currentRemoteType, setCurrentRemoteType] = useState(useStateReturnValueFromSessionStrorage("remote-type-"));
    const [currentOtherType, setCurrentOtherType] = useState(useStateReturnValueFromSessionStrorage("other-type-"));

    const [excelData, setExcelData] = useState([]);

    const [bandType, setBandType] = useState(null); //A,B,C,D.... bands

    const [widthxDepthRowIndex, setWidthxDepthRowIndex] = useState(null);
    // widthxDepthRowIndex repeat from 2nd : 
    const [widthxDepthRowIndex2, setWidthxDepthRowIndex2] = useState(null);
    const [widthxDepthRowIndex3, setWidthxDepthRowIndex3] = useState(null);
    const [widthxDepthRowIndex4, setWidthxDepthRowIndex4] = useState(null);
    const [widthxDepthRowIndex5, setWidthxDepthRowIndex5] = useState(null);
    const [widthxDepthRowIndex6, setWidthxDepthRowIndex6] = useState(null);
    const [widthxDepthRowIndex7, setWidthxDepthRowIndex7] = useState(null);
    const [widthxDepthRowIndex8, setWidthxDepthRowIndex8] = useState(null);
    const [widthxDepthRowIndex9, setWidthxDepthRowIndex9] = useState(null);
    const [widthxDepthRowIndex10, setWidthxDepthRowIndex10] = useState(null);
    const [widthxDepthRowIndex11, setWidthxDepthRowIndex11] = useState(null);
    const [widthxDepthRowIndex12, setWidthxDepthRowIndex12] = useState(null);
    const [widthxDepthRowIndex13, setWidthxDepthRowIndex13] = useState(null);
    const [widthxDepthRowIndex14, setWidthxDepthRowIndex14] = useState(null);
    const [widthxDepthRowIndex15, setWidthxDepthRowIndex15] = useState(null);
    const [widthxDepthRowIndex16, setWidthxDepthRowIndex16] = useState(null);
    const [widthxDepthRowIndex17, setWidthxDepthRowIndex17] = useState(null);
    const [widthxDepthRowIndex18, setWidthxDepthRowIndex18] = useState(null);
    const [widthxDepthRowIndex19, setWidthxDepthRowIndex19] = useState(null);
    const [widthxDepthRowIndex20, setWidthxDepthRowIndex20] = useState(null);
    const [widthxDepthRowIndex21, setWidthxDepthRowIndex21] = useState(null);
    const [widthxDepthRowIndex22, setWidthxDepthRowIndex22] = useState(null);
    const [widthxDepthRowIndex23, setWidthxDepthRowIndex23] = useState(null);
    const [widthxDepthRowIndex24, setWidthxDepthRowIndex24] = useState(null);
    const [widthxDepthRowIndex25, setWidthxDepthRowIndex25] = useState(null);
    const [widthxDepthRowIndex26, setWidthxDepthRowIndex26] = useState(null);
    const [widthxDepthRowIndex27, setWidthxDepthRowIndex27] = useState(null);
    const [widthxDepthRowIndex28, setWidthxDepthRowIndex28] = useState(null);
    const [widthxDepthRowIndex29, setWidthxDepthRowIndex29] = useState(null);
    const [widthxDepthRowIndex30, setWidthxDepthRowIndex30] = useState(null);


    const [withoutMotorisationTotal, setWithoutMotorisationTotal] = useState(0);
    // withoutMotorisationTotal repeat from 2nd : 
    const [withoutMotorisationTotal2, setWithoutMotorisationTotal2] = useState(0);
    const [withoutMotorisationTotal3, setWithoutMotorisationTotal3] = useState(0);
    const [withoutMotorisationTotal4, setWithoutMotorisationTotal4] = useState(0);


    const [withMoterisationTotal, setWithMoterisationTotal] = useState(0);

    const [isCalculating, setIsCalculating] = useState(false);

    const [selectedMotorTypeExcelValue, setSelectedMotorTypeExcelValue] = useState(0);
    const [selectedPowerTypeExcelValue, setSelectedPowerTypeExcelValue] = useState(0);
    const [selectedReceiverTypeExcelValue, setSelectedReceiverTypeExcelValue] = useState(0);
    const [selectedRemoteTypeExcelValue, setSelectedRemoteTypeExcelValue] = useState(0);
    const [selectedOtherTypeExcelValue, setSelectedOtherTypeExcelValue] = useState(0);

    const [skipInitialValues, setSkipInitialValues] = useState(true);
    const [skipFetchDataFromExcel, setSkipFetchDataFromExcel] = useState(false);

    const [addMotorisationValues, setAddMoterisationValues] = useState();

    const [waitToGetdataFromExcelSheet, setWaitToGetdataFromExcelSheet] = useState(true);

    const [widthDepthMappingInJsx, setWidthDepthMappingInJsx] = useState([]);

    const setInitialValuesToFormData = async () => {
        // set the values in session storage
        console.log("Applying initial values");
        if (getItemFromSessionStorage("blind-type-"))
            setCurrentBlindType(getItemFromSessionStorage("blind-type-"));

        if (getItemFromSessionStorage("fabric-type-"))
            setcurrentFabricType(getItemFromSessionStorage("fabric-type-"));

        if (getItemFromSessionStorage("width-"))
            setcurrentBlindWidth(getItemFromSessionStorage("width-"));

        if (getItemFromSessionStorage("depth-"))
            setcurrentBlindDepth(getItemFromSessionStorage("depth-"));

        // set initial values of depth & width repeat from 2nd : 
        if (getItemFromSessionStorage("width-2-")) { setcurrentBlindWidth2(getItemFromSessionStorage("width-2-")); }
        if (getItemFromSessionStorage("depth-2-")) { setcurrentBlindDepth2(getItemFromSessionStorage("depth-2-")); }

        if (getItemFromSessionStorage("width-3-")) { setcurrentBlindWidth2(getItemFromSessionStorage("width-3-")); }
        if (getItemFromSessionStorage("width-3-")) { setcurrentBlindWidth2(getItemFromSessionStorage("width-3-")); }

        if (getItemFromSessionStorage("width-4-")) { setcurrentBlindWidth2(getItemFromSessionStorage("width-4-")); }
        if (getItemFromSessionStorage("width-4-")) { setcurrentBlindWidth2(getItemFromSessionStorage("width-4-")); }


        if (getItemFromSessionStorage("motor-type-"))
            setCurrentMotorType(getItemFromSessionStorage("motor-type-"));

        if (getItemFromSessionStorage("power-type-"))
            setCurrentPowerType(getItemFromSessionStorage("power-type-"));

        if (getItemFromSessionStorage("receiver-type-"))
            setCurrentReceiverType(getItemFromSessionStorage("receiver-type-"));

        if (getItemFromSessionStorage("remote-type-"))
            setCurrentRemoteType(getItemFromSessionStorage("remote-type-"));

        if (getItemFromSessionStorage("other-type-"))
            setCurrentOtherType(getItemFromSessionStorage("other-type-"));

        if (getItemFromSessionStorage("motorization-toggle-"))
            setMotorisationToggle(getItemFromSessionStorage("motorization-toggle-"))

        if (getItemFromSessionStorage("motor-price-"))
            setSelectedMotorTypeExcelValue(parseFloat(getItemFromSessionStorage("motor-price-")))

        if (getItemFromSessionStorage("power-price-")) {
            setSelectedPowerTypeExcelValue(parseFloat(getItemFromSessionStorage("power-price-")))
        }

        if (getItemFromSessionStorage("receiver-price-"))
            setSelectedReceiverTypeExcelValue(parseFloat(getItemFromSessionStorage("receiver-price-")))

        if (getItemFromSessionStorage("remote-price-"))
            setSelectedRemoteTypeExcelValue(parseFloat(getItemFromSessionStorage("remote-price-")))

        if (getItemFromSessionStorage("other-price-"))
            setSelectedOtherTypeExcelValue(parseFloat(getItemFromSessionStorage("other-price-")))

        if (getItemFromSessionStorage('band-type-'))
            setBandType(getItemFromSessionStorage('band-type-'));


        if (getItemFromSessionStorage('widthxdepth-'))
            setWidthxDepthRowIndex(getItemFromSessionStorage('widthxdepth-'))

        // set initial values of WidthxDepthRowIndex repeat from 2nd : 
        if (getItemFromSessionStorage('widthxdepth-2-')) { setWidthxDepthRowIndex(getItemFromSessionStorage('widthxdepth-2-')) }
        if (getItemFromSessionStorage('widthxdepth-3-')) { setWidthxDepthRowIndex(getItemFromSessionStorage('widthxdepth-3-')) }
        if (getItemFromSessionStorage('widthxdepth-4-')) { setWidthxDepthRowIndex(getItemFromSessionStorage('widthxdepth-4-')) }


        // setWidthxDepthRowIndex(
        //     freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
        // );

        // if(getItemFromSessionStorage('band-type-') && getItemFromSessionStorage("width-") && getItemFromSessionStorage("depth-")){
        //     widthxDepthRowNumber(getItemFromSessionStorage('band-type-'),getItemFromSessionStorage("width-"), getItemFromSessionStorage("depth-") )
        // }

        if (getItemFromSessionStorage('total-')) {
            setWithoutMotorisationTotal(parseFloat(getItemFromSessionStorage('total-')));
        }
        // set initial values of WithoutMotorisationTotal repeat from 2nd : 
        if (getItemFromSessionStorage('total-2-')) { setWithoutMotorisationTotal2(parseFloat(getItemFromSessionStorage('total-2-'))); }
        if (getItemFromSessionStorage('total-3-')) { setWithoutMotorisationTotal3(parseFloat(getItemFromSessionStorage('total-3-'))); }
        if (getItemFromSessionStorage('total-4-')) { setWithoutMotorisationTotal4(parseFloat(getItemFromSessionStorage('total-4-'))); }


        if (sessionStorage.getItem("blind-type-" + blindNumber) === "" || sessionStorage.getItem("blind-type-" + blindNumber) === null) {
            setCurrentFabricTypes([]);
            console.log("a");
        } else if (sessionStorage.getItem("blind-type-" + blindNumber) === "Perfect Fit Venetian") {
            setCurrentFabricTypes(perfectFitVenetianFabricTypes);
            console.log("b");
        } else {
            console.log("c");
            setCurrentFabricTypes(commonFabricTypes);
        }


        if (getItemFromSessionStorage('blind-type') || getItemFromSessionStorage('fabric-type') || currentFabricTypes) {
            blindBandChooser(getItemFromSessionStorage('blind-type'), getItemFromSessionStorage('fabric-type'), currentFabricTypes)
        }


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
                setWaitToGetdataFromExcelSheet(false);
                console.log('%c Excel Data fetch sucefully! ', 'background: #dcfce7; color: #14532d; font: 1.3em "Fira Sans", sans-serif;');
            }).catch(() => {
                setWaitToGetdataFromExcelSheet(false);
                console.log('%c Excel Data fetching *Failed*! ', 'background: #fecaca; color: #991b1b; font: 1.5em "Fira Sans", sans-serif;');
            })
    }

    useEffect(() => {
        fetchExcelSheetData();
        setInitialValuesToFormData();

        setTimeout(() => {
            setWidthDepthMappingInJsx([
                { elementNo: 1, width: currentBlindWidth, depth: currentBlindDepth },
                { elementNo: 2, width: currentBlindWidth2, depth: currentBlindDepth2 },
                { elementNo: 3, width: currentBlindWidth3, depth: currentBlindDepth3 },
                { elementNo: 4, width: currentBlindWidth4, depth: currentBlindDepth4 },
            ])
        }, 500);

    }, [])

    useEffect(() => {

        // To get the fabric array for selected blind
        if (sessionStorage.getItem("blind-type-" + blindNumber) === "" || sessionStorage.getItem("blind-type-" + blindNumber) === null) {
            setCurrentFabricTypes([]);
            console.log("a");
        } else if (sessionStorage.getItem("blind-type-" + blindNumber) === "Perfect Fit Venetian") {
            setCurrentFabricTypes(perfectFitVenetianFabricTypes);
            console.log("b");
        } else {
            console.log("c");
            setCurrentFabricTypes(commonFabricTypes);
        }

        // if you want to these width depth array after fabric type selection then shift this into handleFabricChangeInput 
        // replace sessionStorage.getItem("blind-type-" + blindNumber) with "currentBlindType"

        // To get the width array for selected blind
        if (sessionStorage.getItem("blind-type-" + blindNumber) === "" || sessionStorage.getItem("blind-type-" + blindNumber) === null) {
            setBlindTypeWidths([]);
        } else if (sessionStorage.getItem("blind-type-" + blindNumber) === "Perfect Fit") {
            setBlindTypeWidths(perfectFitWidth);
        } else if (sessionStorage.getItem("blind-type-" + blindNumber) === "Perfect Fit Venetian") {
            setBlindTypeWidths(perfectFitVenetian);
        } else if (sessionStorage.getItem("blind-type-" + blindNumber) === "Conservatory Roofs") {
            setBlindTypeWidths(conservatoryRoofsWidth);
        } else {
            setBlindTypeWidths(commonWidths);
        }

        // To get the depth array for selected blind
        if (sessionStorage.getItem("blind-type-" + blindNumber) === "" || sessionStorage.getItem("blind-type-" + blindNumber) === null) {
            setBlindTypeDepths([]);
        } else if (sessionStorage.getItem("blind-type-" + blindNumber) === "Perfect Fit") {
            setBlindTypeDepths(perfectFit);
        } else if (sessionStorage.getItem("blind-type-" + blindNumber) === "Perfect Fit Venetian") {
            setBlindTypeDepths(perfectFitVenetianDepth);
        } else if (sessionStorage.getItem("blind-type-" + blindNumber) === "Conservatory Roofs") {
            setBlindTypeDepths(conservatoryRoofs);
        } else {
            setBlindTypeDepths(commonDepths);
        }

    }, [currentBlindType]);

    async function handleBlindChangeInput(e) {
        setcurrentFabricType("");
        sessionStorage.removeItem("fabric-type-" + blindNumber);

        setcurrentBlindWidth("");
        sessionStorage.removeItem("width-" + blindNumber);
        // set width to unselected repeat from 2nd : 
        setcurrentBlindWidth2(""); sessionStorage.removeItem("width-2-" + blindNumber);
        setcurrentBlindWidth3(""); sessionStorage.removeItem("width-3-" + blindNumber);
        setcurrentBlindWidth4(""); sessionStorage.removeItem("width-4-" + blindNumber);

        setcurrentBlindDepth("");
        sessionStorage.removeItem("depth-" + blindNumber);
        // set width to unselected repeat from 2nd : 
        setcurrentBlindDepth2(""); sessionStorage.removeItem("depth-2-" + blindNumber);
        setcurrentBlindDepth3(""); sessionStorage.removeItem("depth-3-" + blindNumber);
        setcurrentBlindDepth4(""); sessionStorage.removeItem("depth-4-" + blindNumber);


        setCurrentBlindType(e.target.value);
        console.log(e.target.value);
        sessionStorage.setItem("blind-type-" + blindNumber, e.target.value);

        // set width and depth to unselected;
        setcurrentBlindWidth("");

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

        setcurrentBlindWidth("");
        sessionStorage.removeItem("width-" + blindNumber);
        // set width to unselected repeat from 2nd : 
        setcurrentBlindWidth2(""); sessionStorage.removeItem("width-2-" + blindNumber);
        setcurrentBlindWidth3(""); sessionStorage.removeItem("width-3-" + blindNumber);
        setcurrentBlindWidth4(""); sessionStorage.removeItem("width-4-" + blindNumber);

        setcurrentBlindDepth("");
        sessionStorage.removeItem("depth-" + blindNumber);
        // set width to unselected repeat from 2nd : 
        setcurrentBlindDepth2(""); sessionStorage.removeItem("depth-2-" + blindNumber);
        setcurrentBlindDepth3(""); sessionStorage.removeItem("depth-3-" + blindNumber);
        setcurrentBlindDepth4(""); sessionStorage.removeItem("depth-4-" + blindNumber);

        // Get blind band 
        if (e.target.value) {
            await blindBandChooser(
                currentBlindType,
                e.target.value,
                currentFabricTypes
            );

            setItemValueInSessionStorageKey('band-type-', blindBandChooser(
                currentBlindType,
                e.target.value,
                currentFabricTypes
            ))
        } else {
            removeItemFromSessionStorage('band-type-')
        }

    }

    async function handleWidthChangeInput(e, elementNo) {

        if (elementNo === 1) {
            setcurrentBlindWidth(e.target.value);
            sessionStorage.setItem("width-" + blindNumber, e.target.value);

            if (currentBlindDepth || currentBlindDepth !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth, 1)
                setItemValueInSessionStorageKey('widthxdepth-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth, 1))
            }
        }
        // repeat condition from 2nd : 
        else if (elementNo === 2) {
            setcurrentBlindWidth2(e.target.value);
            sessionStorage.setItem("width-2-" + blindNumber, e.target.value);

            if (currentBlindDepth2 || currentBlindDepth2 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth2, 2)
                setItemValueInSessionStorageKey('widthxdepth-2-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth2, 2))
            }
        }
        else if (elementNo === 3) {
            setcurrentBlindWidth3(e.target.value);
            sessionStorage.setItem("width-3-" + blindNumber, e.target.value);

            if (currentBlindDepth3 || currentBlindDepth3 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth3, 3)
                setItemValueInSessionStorageKey('widthxdepth-2-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth3, 3))
            }
        }
        else if (elementNo === 4) {
            setcurrentBlindWidth4(e.target.value);
            sessionStorage.setItem("width-4-" + blindNumber, e.target.value);

            if (currentBlindDepth4 || currentBlindDepth4 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth4, 4)
                setItemValueInSessionStorageKey('widthxdepth-2-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth4, 4))
            }
        }
    }

    async function handleDepthChangeInput(e, elementNo) {
        if (elementNo === 1) {
            setcurrentBlindDepth(e.target.value);
            sessionStorage.setItem("depth-" + blindNumber, e.target.value);

            if (currentBlindWidth || currentBlindWidth !== "NA" || currentBlindWidth !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth, e.target.value, 1)
                setItemValueInSessionStorageKey('widthxdepth-', widthxDepthRowNumber(currentBlindType, currentBlindWidth, e.target.value, 1))
            }
        }
        // repeat condition from 2nd : 
        else if (elementNo === 2) {
            setcurrentBlindDepth2(e.target.value);
            sessionStorage.setItem("depth-2-" + blindNumber, e.target.value);

            if (currentBlindWidth2 || currentBlindWidth2 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth2, e.target.value, 2)
                setItemValueInSessionStorageKey('widthxdepth-2-', widthxDepthRowNumber(currentBlindType, currentBlindWidth2, e.target.value, 2))
            }
        }
        else if (elementNo === 3) {
            setcurrentBlindDepth3(e.target.value);
            sessionStorage.setItem("depth-3-" + blindNumber, e.target.value);

            if (currentBlindWidth3 || currentBlindWidth3 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth3, e.target.value, 3)
                setItemValueInSessionStorageKey('widthxdepth-3-', widthxDepthRowNumber(currentBlindType, currentBlindWidth3, e.target.value, 3))
            }
        }
        else if (elementNo === 4) {
            setcurrentBlindDepth4(e.target.value);
            sessionStorage.setItem("depth-4-" + blindNumber, e.target.value);

            if (currentBlindWidth4 || currentBlindWidth4 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth4, e.target.value, 4)
                setItemValueInSessionStorageKey('widthxdepth-4-', widthxDepthRowNumber(currentBlindType, currentBlindWidth4, e.target.value, 4))
            }
        }

    }

    async function handleMotorTypeChangeInput(e) {
        console.log(e.target.value);
        setCurrentMotorType(e.target.value);
        sessionStorage.setItem("motor-type-" + blindNumber, e.target.value);

        if (e.target.value === "") {
            setSelectedMotorTypeExcelValue(0);
            removeItemFromSessionStorage("motor-price-")
        }
        else if (e.target.value) {
            console.log(excelData[motorTypes.indexOf(e.target.value)].Motor);

            setSelectedMotorTypeExcelValue(excelData[motorTypes.indexOf(e.target.value)].Motor);
            setItemValueInSessionStorageKey("motor-price-", parseFloat(excelData[motorTypes.indexOf(e.target.value)].Motor))
        }
    }

    async function handlePowerTypeChangeInput(e) {
        setCurrentPowerType(e.target.value);
        sessionStorage.setItem("power-type-" + blindNumber, e.target.value);

        if (e.target.value === "") {
            setSelectedPowerTypeExcelValue(0);
            removeItemFromSessionStorage("power-price-");
        }
        else if (e.target.value) {
            console.log(excelData[powerOptions.indexOf(e.target.value)].Power);

            setItemValueInSessionStorageKey("power-price-", parseFloat(excelData[powerOptions.indexOf(e.target.value)].Power))
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
            removeItemFromSessionStorage("receiver-price-");
            setSelectedReceiverTypeExcelValue(0);
        }
        else if (e.target.value) {
            console.log(excelData[receiverOptions.indexOf(e.target.value)].Receiver);

            setItemValueInSessionStorageKey("receiver-price-", parseFloat(excelData[receiverOptions.indexOf(e.target.value)].Receiver));
            setSelectedReceiverTypeExcelValue(excelData[receiverOptions.indexOf(e.target.value)].Receiver);
        }


    }

    // pppp
    async function handleRemoteTypeChangeInput(e) {
        setCurrentRemoteType(e.target.value);
        sessionStorage.setItem("remote-type-" + blindNumber, e.target.value);

        if (e.target.value === "") {
            setSelectedRemoteTypeExcelValue(0);
            removeItemFromSessionStorage("remote-price-");

        }
        else if (e.target.value) {
            console.log(excelData[remoteOptions.indexOf(e.target.value)].Remote);
            setItemValueInSessionStorageKey("remote-price-", parseFloat(excelData[remoteOptions.indexOf(e.target.value)].Remote));
            setSelectedRemoteTypeExcelValue(excelData[remoteOptions.indexOf(e.target.value)].Remote);
        }
    }

    async function handleOtherTypeChangeInput(e) {
        setCurrentOtherType(e.target.value);
        sessionStorage.setItem("other-type-" + blindNumber, e.target.value);

        if (e.target.value === "") {
            setSelectedOtherTypeExcelValue(0);
            removeItemFromSessionStorage("other-price-");

        }
        else if (e.target.value) {
            console.log(excelData[otherOptions.indexOf(e.target.value)].Other);

            setItemValueInSessionStorageKey("other-price-", parseFloat(excelData[otherOptions.indexOf(e.target.value)].Other));
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
            setItemValueInSessionStorageKey("motorization-toggle-", false);
            setAddMoterisationValues(true)
        } else {
            setMotorisationToggle(true);
            setItemValueInSessionStorageKey("motorization-toggle-", true);
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

        // repeat for width and depths from 2nd
        setcurrentBlindWidth2("");
        sessionStorage.removeItem("width-2-" + blindNumber);
        setcurrentBlindDepth2("");
        sessionStorage.removeItem("depth-2-" + blindNumber);

        setcurrentBlindWidth3("");
        sessionStorage.removeItem("width-3-" + blindNumber);
        setcurrentBlindDepth3("");
        sessionStorage.removeItem("depth-3-" + blindNumber);

        setcurrentBlindWidth4("");
        sessionStorage.removeItem("width-4-" + blindNumber);
        setcurrentBlindDepth4("");
        sessionStorage.removeItem("depth-4-" + blindNumber);


        setWithoutMotorisationTotal(0)
        removeItemFromSessionStorage('total-')

        // clear setWithoutMotorisationTotal repeat from 2nd
        setWithoutMotorisationTotal2(0); removeItemFromSessionStorage('total-2-');
        setWithoutMotorisationTotal3(0); removeItemFromSessionStorage('total-3-');
        setWithoutMotorisationTotal4(0); removeItemFromSessionStorage('total-4-');


        setWidthxDepthRowIndex(null);
        // setWidthxDepthRowIndex=null repeat from 2nd
        setWidthxDepthRowIndex2(null);
        setWidthxDepthRowIndex3(null);
        setWidthxDepthRowIndex4(null);


        removeItemFromSessionStorage('widthxdepth-')
        // widthxdepth remove from session storage repeat from 2nd
        removeItemFromSessionStorage('widthxdepth-2-')
        removeItemFromSessionStorage('widthxdepth-3-')
        removeItemFromSessionStorage('widthxdepth-4-')


        setSelectedMotorTypeExcelValue(0)
        setSelectedPowerTypeExcelValue(0);
        setSelectedReceiverTypeExcelValue(0);
        setSelectedRemoteTypeExcelValue(0);
        setSelectedOtherTypeExcelValue(0);

        removeItemFromSessionStorage('motor-price-')
        removeItemFromSessionStorage('power-price-')
        removeItemFromSessionStorage('receiver-price-');
        removeItemFromSessionStorage('remote-price-')
        removeItemFromSessionStorage('other-price-')

        setBandType("");
        setMotorisationToggle(false);

        removeItemFromSessionStorage('band-type-')
        removeItemFromSessionStorage('motorization-toggle-')

        clearMotorisationValues();
    }

    const blindBandChooser = (blindType, fabricType, fabricArr) => {
        console.log(blindType);
        console.log(fabricType);

        if (blindType === "Freehang") {
            setBandType(freehangBandChooser(fabricArr.indexOf(fabricType) + 1));
            setItemValueInSessionStorageKey('band-type-', freehangBandChooser(fabricArr.indexOf(fabricType) + 1))
            return freehangBandChooser(fabricArr.indexOf(fabricType) + 1)
        }
        else if (blindType === "Motorized Freehang") {
            setBandType(
                motorizedFreehangBandChooser(fabricArr.indexOf(fabricType) + 1)
            );
            setItemValueInSessionStorageKey('band-type-', motorizedFreehangBandChooser(fabricArr.indexOf(fabricType) + 1))
            return motorizedFreehangBandChooser(fabricArr.indexOf(fabricType) + 1);
        }
        else if (blindType === "Three Bars") {
            setBandType(threeBarsBandChooser(fabricArr.indexOf(fabricType) + 1));
            setItemValueInSessionStorageKey('band-type-', threeBarsBandChooser(fabricArr.indexOf(fabricType) + 1))
            return threeBarsBandChooser(fabricArr.indexOf(fabricType) + 1)
        }
        else if (blindType === "Motorized Three Bars") {
            setBandType(
                motorizedThreeBarsBandChooser(fabricArr.indexOf(fabricType) + 1)
            );
            setItemValueInSessionStorageKey('band-type-', motorizedThreeBarsBandChooser(fabricArr.indexOf(fabricType) + 1))
            return motorizedThreeBarsBandChooser(fabricArr.indexOf(fabricType) + 1)
        }
        else if (blindType === "Perfect Fit") {
            setBandType(perfectFitBandChooser(fabricArr.indexOf(fabricType) + 1));
            setItemValueInSessionStorageKey('band-type-', perfectFitBandChooser(fabricArr.indexOf(fabricType) + 1))
            return perfectFitBandChooser(fabricArr.indexOf(fabricType) + 1)
        }
        else if (blindType === "Perfect Fit Venetian") {
            setBandType(
                perfectFitVenetianBandChooser(fabricArr.indexOf(fabricType) + 1)
            );
            setItemValueInSessionStorageKey('band-type-', perfectFitVenetianBandChooser(fabricArr.indexOf(fabricType) + 1))
            return perfectFitVenetianBandChooser(fabricArr.indexOf(fabricType) + 1)
        }
        else if (blindType === "Lantern") {
            setBandType(lanternBandChooser(fabricArr.indexOf(fabricType) + 1));
            setItemValueInSessionStorageKey('band-type-', lanternBandChooser(fabricArr.indexOf(fabricType) + 1))
            return lanternBandChooser(fabricArr.indexOf(fabricType) + 1)
        }
        else if (blindType === "Conservatory Roofs") {
            setBandType(conservatoryBandChooser(fabricArr.indexOf(fabricType) + 1));
            setItemValueInSessionStorageKey('band-type-', conservatoryBandChooser(fabricArr.indexOf(fabricType) + 1))
            conservatoryBandChooser(fabricArr.indexOf(fabricType) + 1)
        }
    };

    function widthxDepthRowNumber(
        blindType,
        width,
        depth,
        elementNo
    ) {

        // NOTE: implete this as per element no -> this function called in handleWidthChangeInput

        if (elementNo === 1) {
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
        // repeat for elementNo from 2nd
        else if (elementNo === 2) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex2(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex2(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex2(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex2(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex2(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex2(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex2(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex2(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 3) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex3(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex3(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex3(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex3(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex3(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex3(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex3(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex3(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 4) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex4(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex4(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex4(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex4(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex4(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex4(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex4(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex4(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }


    }

    const calculate = async () => {

        if (!currentBlindType || !currentFabricType) {
            alert("BlindType and FabricType fields are required")
            return
        }

        setIsCalculating(true);


        // to calculate values above the calculate button
        let myPromise = new Promise(function (myResolve, myReject) {

            if (currentBlindWidth && currentBlindDepth) { widthxDepthRowNumber(currentBlindType, currentBlindWidth, currentBlindDepth, 1) }
            // repeat to calculate  widthxDepthRowNumber from 2nd
            if (currentBlindWidth2 && currentBlindDepth2) { widthxDepthRowNumber(currentBlindType, currentBlindWidth2, currentBlindDepth2, 2) }
            if (currentBlindWidth3 && currentBlindDepth3) { widthxDepthRowNumber(currentBlindType, currentBlindWidth3, currentBlindDepth3, 3) }
            if (currentBlindWidth4 && currentBlindDepth4) { widthxDepthRowNumber(currentBlindType, currentBlindWidth4, currentBlindDepth4, 4) }


            myResolve(); // when successful
            myReject();  // when error
        });

        // "Consuming Code" (Must wait for a fulfilled Promise)
        myPromise.then(
            function () {
                // console.log("full targeted object: " + widthxDepthRowIndex);
                // console.log("Without Motorisation Total : " + excelData[widthxDepthRowIndex][bandType]);

                console.log(widthxDepthRowIndex, " ", widthxDepthRowIndex2, " ", widthxDepthRowIndex3, " ", widthxDepthRowIndex4);

                if (widthxDepthRowIndex) {
                    setWithoutMotorisationTotal(excelData[widthxDepthRowIndex][bandType])
                    setItemValueInSessionStorageKey('total-', parseFloat(excelData[widthxDepthRowIndex][bandType]))
                }
                // repeat to calculate setWithoutMotorisationTotal from 2nd 
                if (widthxDepthRowIndex2) {
                    setWithoutMotorisationTotal2(excelData[widthxDepthRowIndex2][bandType])
                    setItemValueInSessionStorageKey('total-2-', parseFloat(excelData[widthxDepthRowIndex2][bandType]))
                }
                if (widthxDepthRowIndex3) {
                    setWithoutMotorisationTotal3(excelData[widthxDepthRowIndex3][bandType])
                    setItemValueInSessionStorageKey('total-3-', parseFloat(excelData[widthxDepthRowIndex3][bandType]))
                }
                if (widthxDepthRowIndex4) {
                    setWithoutMotorisationTotal4(excelData[widthxDepthRowIndex4][bandType])
                    setItemValueInSessionStorageKey('total-4-', parseFloat(excelData[widthxDepthRowIndex4][bandType]))
                }

                setTimeout(() => {
                    setIsCalculating(false);
                }, 200);
            },
            function (error) {
                setIsCalculating(false)
                console.log("proise error : " + error)
            }
        );
        setTimeout(() => {
            setIsCalculating(false);
        }, 500);
    }




    return (
        !waitToGetdataFromExcelSheet
            ? <>
                {/* <h1>Blind no : {blindNumber}</h1> */}
                <button
                    onClick={() => {

                        refreshBtnListner();
                    }}
                    className="mt-2 w-full flex mx-auto  text-gray-500 bg-lime-100 px-3 py-2 rounded-lg text-base justify-center font-semibold text-center"
                >
                    <RefreshIcon className=" text-lime-700 h-6 w-6" />
                    &nbsp;&nbsp; <p className="text-lime-700">Refresh</p>
                </button>

                {/* For blind type input */}
                <select
                    className="h-12 placeholder-gray-700 mt-2 w-full rounded-md p-1 pl-2 border-r-8 border-white"
                    onChange={handleBlindChangeInput}
                    value={currentBlindType}
                >
                    <option value={""}> ---Select Blind Type---</option>
                    {blindTypes.map((blind, index) => (
                        <option value={blind} key={index}>

                            {blind}
                        </option>
                    ))}
                </select>

                {/* For fabric type input */}
                <select
                    className="h-12 mt-2 w-full rounded-md p-1 pl-2 border-r-8 border-white  placeholder-gray-700"
                    onChange={handleFabricChangeInput}
                    value={currentFabricType}
                >
                    <option value={""}> ---Select Fabric Type---</option>
                    {currentFabricTypes.map((fabric, index) => (
                        <option value={fabric} key={index}>

                            {fabric}
                        </option>
                    ))}
                </select>

                {/* For width and depth input -> div wrapper of both */}

                <WidthAndDepthInputWrapper
                    elementNo={1}
                    handleWidthChangeInput={handleWidthChangeInput}
                    handleDepthChangeInput={handleDepthChangeInput}
                    blindTypeWidths={blindTypeWidths}
                    blindTypeDepths={blindTypeDepths}
                    currentBlindWidth={currentBlindWidth}
                    currentBlindDepth={currentBlindDepth}
                />
                {/* repeat replicate from 2nd */}
                <WidthAndDepthInputWrapper
                    elementNo={2}
                    handleWidthChangeInput={handleWidthChangeInput}
                    handleDepthChangeInput={handleDepthChangeInput}
                    blindTypeWidths={blindTypeWidths}
                    blindTypeDepths={blindTypeDepths}
                    currentBlindWidth={currentBlindWidth2}
                    currentBlindDepth={currentBlindDepth2}
                />
                <WidthAndDepthInputWrapper
                    elementNo={3}
                    handleWidthChangeInput={handleWidthChangeInput}
                    handleDepthChangeInput={handleDepthChangeInput}
                    blindTypeWidths={blindTypeWidths}
                    blindTypeDepths={blindTypeDepths}
                    currentBlindWidth={currentBlindWidth3}
                    currentBlindDepth={currentBlindDepth3}
                />
                <WidthAndDepthInputWrapper
                    elementNo={4}
                    handleWidthChangeInput={handleWidthChangeInput}
                    handleDepthChangeInput={handleDepthChangeInput}
                    blindTypeWidths={blindTypeWidths}
                    blindTypeDepths={blindTypeDepths}
                    currentBlindWidth={currentBlindWidth4}
                    currentBlindDepth={currentBlindDepth4}
                />

                {/* End of width and depth input -> div wrapper */}

                <button
                    className="mt-2 w-full flex mx-auto  text-gray-500 bg-lime-100 px-3 py-2 rounded-lg text-base justify-center font-semibold text-center"
                    onClick={motorisationAddRemoveHandler}
                >
                    {!motorisationToggle ? (
                        <PlusIcon className=" text-lime-700 h-6 w-6" />
                    ) : (
                        <MinusIcon className=" text-lime-700 h-6 w-6" />
                    )}
                    &nbsp;&nbsp;
                    <p className="text-lime-700 ">
                        {motorisationToggle ? "Remove" : "Add"} Motorisation
                    </p>
                </button>

                {motorisationToggle && (
                    <div className="w-fit max-w-xl">
                        <select
                            onChange={handleMotorTypeChangeInput}
                            value={currentMotorType}
                            className="h-10 mt-2 w-full rounded-md p-1 pl-2 border-r-8 border-white placeholder-gray-700"
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
                            className="h-10 mt-2 w-full rounded-md p-1 pl-2 border-r-8 border-white placeholder-gray-700"
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
                            className="h-10 mt-2 w-full rounded-md p-1 pl-2 border-r-8 border-white placeholder-gray-700"
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
                            className="h-10 mt-2 w-full rounded-md p-1 pl-2 border-r-8 border-white placeholder-gray-700"
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
                            className="h-10 mt-2 w-full rounded-md p-1 pl-2 border-r-8 border-white placeholder-gray-700"
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
                    onClick={() => { calculate(); }}
                    className="w-full my-2  py-2  bg-sky-900 text-white rounded-lg  font-normal"
                >
                    <div className="flex justify-center items-center text-sm sm:text-base  gap-4">
                        {isCalculating && (
                            <svg
                                role="status"
                                className="w-6 h-6  text-gray-200 animate-spin dark:text-white fill-sky-900"
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
                <div className="px-2 flex flex-col justify-center rounded shadow-sm mt-1 text-center bg-sky-100">
                    <h1 className="p-2 font-semibold text-xs sm:text-sm text-sky-900 border-b-2  border-sky-900">
                        BLINDS
                    </h1>
                    <div className="flex px-2 justify-between text-center">
                        <h1 className="p-2 font-semibold text-xs sm:text-sm text-sky-900">
                            TOTAL
                        </h1>
                        <h1 className="p-2 font-semibold text-xs sm:text-sm text-sky-900">
                            £ {withoutMotorisationTotal ? parseFloat(withoutMotorisationTotal).toFixed(2) : "0.00"}
                        </h1>
                    </div>
                </div>
                {
                    motorisationToggle &&
                    <div className="px-2 flex flex-col justify-center rounded shadow-sm mt-2.5 text-center bg-sky-100">
                        <h1 className="p-2 font-semibold text-lg text-sky-900 border-b-2  border-sky-900">
                            MOTORISATION
                        </h1>

                        <div className="flex px-2 justify-between text-center">
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                Motor
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                £ {parseFloat(selectedMotorTypeExcelValue).toFixed(2)}
                            </h1>
                        </div>
                        <div className="flex px-2 justify-between text-center">
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                Power
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                £ {parseFloat(selectedPowerTypeExcelValue).toFixed(2)}
                            </h1>
                        </div>
                        <div className="flex px-2 justify-between text-center">
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                Receiver
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                £ {parseFloat(selectedReceiverTypeExcelValue).toFixed(2)}
                            </h1>
                        </div>
                        <div className="flex px-2 justify-between text-center">
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                Remote
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                £ {parseFloat(selectedRemoteTypeExcelValue).toFixed(2)}
                            </h1>
                        </div>
                        <div className="flex px-2 justify-between text-center">
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                Other
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                £ {parseFloat(selectedOtherTypeExcelValue).toFixed(2)}
                            </h1>
                        </div>

                        <div className="flex px-2 justify-between text-center">
                            <h1 className="p-2 font-bold text-xs sm:text-sm text-sky-900">
                                TOTAL
                            </h1>
                            <h1 className="p-2 font-semibold text-xs sm:text-sm text-sky-900">
                                £ {
                                    parseFloat(
                                        selectedMotorTypeExcelValue +
                                        selectedPowerTypeExcelValue +
                                        selectedReceiverTypeExcelValue +
                                        selectedRemoteTypeExcelValue +
                                        selectedOtherTypeExcelValue
                                    ).toFixed(2)
                                }
                            </h1>
                        </div>
                    </div>
                }
                <div className="flex flex-col justify-center shadow-sm rounded mt-2.5 text-center bg-lime-100">
                    <div className="flex px-2 justify-between text-center">
                        <h1 className="p-2 font-semibold text-xs sm:text-sm text-lime-700">
                            GRAND TOTAL
                        </h1>
                        <h1 className="p-2 font-semibold text-xs sm:text-sm text-lime-700">
                            (Excluding VAT) £
                            {
                                motorisationToggle
                                    ? parseFloat(
                                        withoutMotorisationTotal +
                                        selectedMotorTypeExcelValue +
                                        selectedPowerTypeExcelValue +
                                        selectedReceiverTypeExcelValue +
                                        selectedRemoteTypeExcelValue +
                                        selectedOtherTypeExcelValue
                                    ).toFixed(2)
                                    : parseFloat(withoutMotorisationTotal).toFixed(2)
                            }
                        </h1>
                    </div>
                </div>
            </>
            : <div className="m-5 flex flex-col justify-center items-center">
                <svg
                    role="status"
                    className="w-10 md:w-12 md:h-12  text-gray-200 animate-spin dark:text-white fill-sky-900"
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
                <div className="mt-3 text-xl font-semibold text-gray-800">
                    Loading...
                </div>
            </div>
    );
};

export default QuotationForm;
