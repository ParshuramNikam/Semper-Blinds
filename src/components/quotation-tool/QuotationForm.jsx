
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
import ShowBothTotalBelowButton from "../common/ShowBothTotalBelowButton";
import ShowGrandTotalRightSideColumnBox from "../common/ShowGrandTotalRightSideColumnBox";
import ShowTotalRightSideColumnBox from "../common/ShowTotalRightSideColumnBox";
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
    const [withoutMotorisationTotal5, setWithoutMotorisationTotal5] = useState(0);
    const [withoutMotorisationTotal6, setWithoutMotorisationTotal6] = useState(0);
    const [withoutMotorisationTotal7, setWithoutMotorisationTotal7] = useState(0);
    const [withoutMotorisationTotal8, setWithoutMotorisationTotal8] = useState(0);
    const [withoutMotorisationTotal9, setWithoutMotorisationTotal9] = useState(0);
    const [withoutMotorisationTotal10, setWithoutMotorisationTotal10] = useState(0);
    const [withoutMotorisationTotal11, setWithoutMotorisationTotal11] = useState(0);
    const [withoutMotorisationTotal12, setWithoutMotorisationTotal12] = useState(0);
    const [withoutMotorisationTotal13, setWithoutMotorisationTotal13] = useState(0);
    const [withoutMotorisationTotal14, setWithoutMotorisationTotal14] = useState(0);
    const [withoutMotorisationTotal15, setWithoutMotorisationTotal15] = useState(0);
    const [withoutMotorisationTotal16, setWithoutMotorisationTotal16] = useState(0);
    const [withoutMotorisationTotal17, setWithoutMotorisationTotal17] = useState(0);
    const [withoutMotorisationTotal18, setWithoutMotorisationTotal18] = useState(0);
    const [withoutMotorisationTotal19, setWithoutMotorisationTotal19] = useState(0);
    const [withoutMotorisationTotal20, setWithoutMotorisationTotal20] = useState(0);
    const [withoutMotorisationTotal21, setWithoutMotorisationTotal21] = useState(0);
    const [withoutMotorisationTotal22, setWithoutMotorisationTotal22] = useState(0);
    const [withoutMotorisationTotal23, setWithoutMotorisationTotal23] = useState(0);
    const [withoutMotorisationTotal24, setWithoutMotorisationTotal24] = useState(0);
    const [withoutMotorisationTotal25, setWithoutMotorisationTotal25] = useState(0);
    const [withoutMotorisationTotal26, setWithoutMotorisationTotal26] = useState(0);
    const [withoutMotorisationTotal27, setWithoutMotorisationTotal27] = useState(0);
    const [withoutMotorisationTotal28, setWithoutMotorisationTotal28] = useState(0);
    const [withoutMotorisationTotal29, setWithoutMotorisationTotal29] = useState(0);
    const [withoutMotorisationTotal30, setWithoutMotorisationTotal30] = useState(0);

    const [withMoterisationTotal, setWithMoterisationTotal] = useState(0);

    const [isCalculating, setIsCalculating] = useState(false);

    const [selectedMotorTypeExcelValue, setSelectedMotorTypeExcelValue] = useState(0);
    const [selectedPowerTypeExcelValue, setSelectedPowerTypeExcelValue] = useState(0);
    const [selectedReceiverTypeExcelValue, setSelectedReceiverTypeExcelValue] = useState(0);
    const [selectedRemoteTypeExcelValue, setSelectedRemoteTypeExcelValue] = useState(0);
    const [selectedOtherTypeExcelValue, setSelectedOtherTypeExcelValue] = useState(0);

    const [selectedMotorTypeMultiplier, setSelectedMotorTypeMultiplier] = useState(1)
    const [selectedPowerTypeMultiplier, setSelectedPowerTypeMultiplier] = useState(1)
    const [selectedReceiverTypeMultiplier, setSelectedReceiverTypeMultiplier] = useState(1)
    const [selectedRemoteTypeMultiplier, setSelectedRemoteTypeMultiplier] = useState(1)
    const [selectedOtherTypeMultiplier, setSelectedOtherTypeMultiplier] = useState(1)


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

        if (getItemFromSessionStorage("width-3-")) { setcurrentBlindWidth3(getItemFromSessionStorage("width-3-")); }
        if (getItemFromSessionStorage("depth-3-")) { setcurrentBlindDepth3(getItemFromSessionStorage("depth-3-")); }

        if (getItemFromSessionStorage("width-4-")) { setcurrentBlindWidth4(getItemFromSessionStorage("width-4-")); }
        if (getItemFromSessionStorage("depth-4-")) { setcurrentBlindDepth4(getItemFromSessionStorage("depth-4-")); }

        if (getItemFromSessionStorage("width-5-")) { setcurrentBlindWidth5(getItemFromSessionStorage("width-5-")); }
        if (getItemFromSessionStorage("depth-5-")) { setcurrentBlindDepth5(getItemFromSessionStorage("depth-5-")); }

        if (getItemFromSessionStorage("width-6-")) { setcurrentBlindWidth6(getItemFromSessionStorage("width-6-")); }
        if (getItemFromSessionStorage("depth-6-")) { setcurrentBlindDepth6(getItemFromSessionStorage("depth-6-")); }

        if (getItemFromSessionStorage("width-7-")) { setcurrentBlindWidth7(getItemFromSessionStorage("width-7-")); }
        if (getItemFromSessionStorage("depth-7-")) { setcurrentBlindDepth7(getItemFromSessionStorage("depth-7-")); }

        if (getItemFromSessionStorage("width-8-")) { setcurrentBlindWidth8(getItemFromSessionStorage("width-8-")); }
        if (getItemFromSessionStorage("depth-8-")) { setcurrentBlindDepth8(getItemFromSessionStorage("depth-8-")); }

        if (getItemFromSessionStorage("width-9-")) { setcurrentBlindWidth9(getItemFromSessionStorage("width-9-")); }
        if (getItemFromSessionStorage("depth-9-")) { setcurrentBlindDepth9(getItemFromSessionStorage("depth-9-")); }

        if (getItemFromSessionStorage("width-10-")) { setcurrentBlindWidth10(getItemFromSessionStorage("width-10-")); }
        if (getItemFromSessionStorage("depth-10-")) { setcurrentBlindDepth10(getItemFromSessionStorage("depth-10-")); }

        if (getItemFromSessionStorage("width-11-")) { setcurrentBlindWidth11(getItemFromSessionStorage("width-11-")); }
        if (getItemFromSessionStorage("depth-11-")) { setcurrentBlindDepth11(getItemFromSessionStorage("depth-11-")); }

        if (getItemFromSessionStorage("width-12-")) { setcurrentBlindWidth12(getItemFromSessionStorage("width-12-")); }
        if (getItemFromSessionStorage("depth-12-")) { setcurrentBlindDepth12(getItemFromSessionStorage("depth-12-")); }

        if (getItemFromSessionStorage("width-13-")) { setcurrentBlindWidth13(getItemFromSessionStorage("width-13-")); }
        if (getItemFromSessionStorage("depth-13-")) { setcurrentBlindDepth13(getItemFromSessionStorage("depth-13-")); }

        if (getItemFromSessionStorage("width-14-")) { setcurrentBlindWidth14(getItemFromSessionStorage("width-14-")); }
        if (getItemFromSessionStorage("depth-14-")) { setcurrentBlindDepth14(getItemFromSessionStorage("depth-14-")); }

        if (getItemFromSessionStorage("width-15-")) { setcurrentBlindWidth15(getItemFromSessionStorage("width-15-")); }
        if (getItemFromSessionStorage("depth-15-")) { setcurrentBlindDepth15(getItemFromSessionStorage("depth-15-")); }

        if (getItemFromSessionStorage("width-16-")) { setcurrentBlindWidth16(getItemFromSessionStorage("width-16-")); }
        if (getItemFromSessionStorage("depth-16-")) { setcurrentBlindDepth16(getItemFromSessionStorage("depth-16-")); }

        if (getItemFromSessionStorage("width-17-")) { setcurrentBlindWidth17(getItemFromSessionStorage("width-17-")); }
        if (getItemFromSessionStorage("depth-17-")) { setcurrentBlindDepth17(getItemFromSessionStorage("depth-17-")); }

        if (getItemFromSessionStorage("width-18-")) { setcurrentBlindWidth18(getItemFromSessionStorage("width-18-")); }
        if (getItemFromSessionStorage("depth-18-")) { setcurrentBlindDepth18(getItemFromSessionStorage("depth-18-")); }

        if (getItemFromSessionStorage("width-19-")) { setcurrentBlindWidth19(getItemFromSessionStorage("width-19-")); }
        if (getItemFromSessionStorage("depth-19-")) { setcurrentBlindDepth19(getItemFromSessionStorage("depth-19-")); }

        if (getItemFromSessionStorage("width-20-")) { setcurrentBlindWidth20(getItemFromSessionStorage("width-20-")); }
        if (getItemFromSessionStorage("depth-20-")) { setcurrentBlindDepth20(getItemFromSessionStorage("depth-20-")); }

        if (getItemFromSessionStorage("width-21-")) { setcurrentBlindWidth21(getItemFromSessionStorage("width-21-")); }
        if (getItemFromSessionStorage("depth-21-")) { setcurrentBlindDepth21(getItemFromSessionStorage("depth-21-")); }

        if (getItemFromSessionStorage("width-22-")) { setcurrentBlindWidth22(getItemFromSessionStorage("width-22-")); }
        if (getItemFromSessionStorage("depth-22-")) { setcurrentBlindDepth22(getItemFromSessionStorage("depth-22-")); }

        if (getItemFromSessionStorage("width-23-")) { setcurrentBlindWidth23(getItemFromSessionStorage("width-23-")); }
        if (getItemFromSessionStorage("depth-23-")) { setcurrentBlindDepth23(getItemFromSessionStorage("depth-23-")); }

        if (getItemFromSessionStorage("width-24-")) { setcurrentBlindWidth24(getItemFromSessionStorage("width-24-")); }
        if (getItemFromSessionStorage("depth-24-")) { setcurrentBlindDepth24(getItemFromSessionStorage("depth-24-")); }

        if (getItemFromSessionStorage("width-25-")) { setcurrentBlindWidth25(getItemFromSessionStorage("width-25-")); }
        if (getItemFromSessionStorage("depth-25-")) { setcurrentBlindDepth25(getItemFromSessionStorage("depth-25-")); }

        if (getItemFromSessionStorage("width-26-")) { setcurrentBlindWidth26(getItemFromSessionStorage("width-26-")); }
        if (getItemFromSessionStorage("depth-26-")) { setcurrentBlindDepth26(getItemFromSessionStorage("depth-26-")); }

        if (getItemFromSessionStorage("width-27-")) { setcurrentBlindWidth27(getItemFromSessionStorage("width-27-")); }
        if (getItemFromSessionStorage("depth-27-")) { setcurrentBlindDepth27(getItemFromSessionStorage("depth-27-")); }

        if (getItemFromSessionStorage("width-28-")) { setcurrentBlindWidth28(getItemFromSessionStorage("width-28-")); }
        if (getItemFromSessionStorage("depth-28-")) { setcurrentBlindDepth28(getItemFromSessionStorage("depth-28-")); }

        if (getItemFromSessionStorage("width-29-")) { setcurrentBlindWidth29(getItemFromSessionStorage("width-29-")); }
        if (getItemFromSessionStorage("depth-29-")) { setcurrentBlindDepth29(getItemFromSessionStorage("depth-29-")); }

        if (getItemFromSessionStorage("width-30-")) { setcurrentBlindWidth30(getItemFromSessionStorage("width-30-")); }
        if (getItemFromSessionStorage("depth-30-")) { setcurrentBlindDepth30(getItemFromSessionStorage("depth-30-")); }


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


        if (getItemFromSessionStorage("motor-type-multiplier-"))
            setSelectedMotorTypeMultiplier(getItemFromSessionStorage("motor-type-multiplier-"));

        if (getItemFromSessionStorage("power-type-multiplier-"))
            setSelectedPowerTypeMultiplier(getItemFromSessionStorage("power-type-multiplier-"));

        if (getItemFromSessionStorage("receiver-type-multiplier-"))
            setSelectedReceiverTypeMultiplier(getItemFromSessionStorage("receiver-type-multiplier-"));

        if (getItemFromSessionStorage("remote-type-multiplier-"))
            setSelectedRemoteTypeMultiplier(getItemFromSessionStorage("remote-type-multiplier-"));

        if (getItemFromSessionStorage("other-type-multiplier-"))
            setSelectedOtherTypeMultiplier(getItemFromSessionStorage("other-type-multiplier-"));


        if (getItemFromSessionStorage("motor-price-"))
            setSelectedMotorTypeExcelValue(parseFloat(getItemFromSessionStorage("motor-price-")))

        if (getItemFromSessionStorage("power-price-"))
            setSelectedPowerTypeExcelValue(parseFloat(getItemFromSessionStorage("power-price-")))

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
        if (getItemFromSessionStorage('widthxdepth-2-')) { setWidthxDepthRowIndex2(getItemFromSessionStorage('widthxdepth-2-')) }
        if (getItemFromSessionStorage('widthxdepth-3-')) { setWidthxDepthRowIndex3(getItemFromSessionStorage('widthxdepth-3-')) }
        if (getItemFromSessionStorage('widthxdepth-4-')) { setWidthxDepthRowIndex4(getItemFromSessionStorage('widthxdepth-4-')) }
        if (getItemFromSessionStorage('widthxdepth-5-')) { setWidthxDepthRowIndex5(getItemFromSessionStorage('widthxdepth-5-')) }
        if (getItemFromSessionStorage('widthxdepth-6-')) { setWidthxDepthRowIndex6(getItemFromSessionStorage('widthxdepth-6-')) }
        if (getItemFromSessionStorage('widthxdepth-7-')) { setWidthxDepthRowIndex7(getItemFromSessionStorage('widthxdepth-7-')) }
        if (getItemFromSessionStorage('widthxdepth-8-')) { setWidthxDepthRowIndex8(getItemFromSessionStorage('widthxdepth-8-')) }
        if (getItemFromSessionStorage('widthxdepth-9-')) { setWidthxDepthRowIndex9(getItemFromSessionStorage('widthxdepth-9-')) }
        if (getItemFromSessionStorage('widthxdepth-10-')) { setWidthxDepthRowIndex10(getItemFromSessionStorage('widthxdepth-10-')) }
        if (getItemFromSessionStorage('widthxdepth-11-')) { setWidthxDepthRowIndex11(getItemFromSessionStorage('widthxdepth-11-')) }
        if (getItemFromSessionStorage('widthxdepth-12-')) { setWidthxDepthRowIndex12(getItemFromSessionStorage('widthxdepth-12-')) }
        if (getItemFromSessionStorage('widthxdepth-13-')) { setWidthxDepthRowIndex13(getItemFromSessionStorage('widthxdepth-13-')) }
        if (getItemFromSessionStorage('widthxdepth-14-')) { setWidthxDepthRowIndex14(getItemFromSessionStorage('widthxdepth-14-')) }
        if (getItemFromSessionStorage('widthxdepth-15-')) { setWidthxDepthRowIndex15(getItemFromSessionStorage('widthxdepth-15-')) }
        if (getItemFromSessionStorage('widthxdepth-16-')) { setWidthxDepthRowIndex16(getItemFromSessionStorage('widthxdepth-16-')) }
        if (getItemFromSessionStorage('widthxdepth-17-')) { setWidthxDepthRowIndex17(getItemFromSessionStorage('widthxdepth-17-')) }
        if (getItemFromSessionStorage('widthxdepth-18-')) { setWidthxDepthRowIndex18(getItemFromSessionStorage('widthxdepth-18-')) }
        if (getItemFromSessionStorage('widthxdepth-19-')) { setWidthxDepthRowIndex19(getItemFromSessionStorage('widthxdepth-19-')) }
        if (getItemFromSessionStorage('widthxdepth-20-')) { setWidthxDepthRowIndex20(getItemFromSessionStorage('widthxdepth-20-')) }
        if (getItemFromSessionStorage('widthxdepth-21-')) { setWidthxDepthRowIndex21(getItemFromSessionStorage('widthxdepth-21-')) }
        if (getItemFromSessionStorage('widthxdepth-22-')) { setWidthxDepthRowIndex22(getItemFromSessionStorage('widthxdepth-22-')) }
        if (getItemFromSessionStorage('widthxdepth-23-')) { setWidthxDepthRowIndex23(getItemFromSessionStorage('widthxdepth-23-')) }
        if (getItemFromSessionStorage('widthxdepth-24-')) { setWidthxDepthRowIndex24(getItemFromSessionStorage('widthxdepth-24-')) }
        if (getItemFromSessionStorage('widthxdepth-25-')) { setWidthxDepthRowIndex25(getItemFromSessionStorage('widthxdepth-25-')) }
        if (getItemFromSessionStorage('widthxdepth-26-')) { setWidthxDepthRowIndex26(getItemFromSessionStorage('widthxdepth-26-')) }
        if (getItemFromSessionStorage('widthxdepth-27-')) { setWidthxDepthRowIndex27(getItemFromSessionStorage('widthxdepth-27-')) }
        if (getItemFromSessionStorage('widthxdepth-28-')) { setWidthxDepthRowIndex28(getItemFromSessionStorage('widthxdepth-28-')) }
        if (getItemFromSessionStorage('widthxdepth-29-')) { setWidthxDepthRowIndex29(getItemFromSessionStorage('widthxdepth-29-')) }
        if (getItemFromSessionStorage('widthxdepth-30-')) { setWidthxDepthRowIndex30(getItemFromSessionStorage('widthxdepth-30-')) }


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
        if (getItemFromSessionStorage('total-5-')) { setWithoutMotorisationTotal5(parseFloat(getItemFromSessionStorage('total-5-'))); }
        if (getItemFromSessionStorage('total-6-')) { setWithoutMotorisationTotal6(parseFloat(getItemFromSessionStorage('total-6-'))); }
        if (getItemFromSessionStorage('total-7-')) { setWithoutMotorisationTotal7(parseFloat(getItemFromSessionStorage('total-7-'))); }
        if (getItemFromSessionStorage('total-8-')) { setWithoutMotorisationTotal8(parseFloat(getItemFromSessionStorage('total-8-'))); }
        if (getItemFromSessionStorage('total-9-')) { setWithoutMotorisationTotal9(parseFloat(getItemFromSessionStorage('total-9-'))); }
        if (getItemFromSessionStorage('total-10-')) { setWithoutMotorisationTotal10(parseFloat(getItemFromSessionStorage('total-10-'))); }
        if (getItemFromSessionStorage('total-11-')) { setWithoutMotorisationTotal11(parseFloat(getItemFromSessionStorage('total-11-'))); }
        if (getItemFromSessionStorage('total-12-')) { setWithoutMotorisationTotal12(parseFloat(getItemFromSessionStorage('total-12-'))); }
        if (getItemFromSessionStorage('total-13-')) { setWithoutMotorisationTotal13(parseFloat(getItemFromSessionStorage('total-13-'))); }
        if (getItemFromSessionStorage('total-14-')) { setWithoutMotorisationTotal14(parseFloat(getItemFromSessionStorage('total-14-'))); }
        if (getItemFromSessionStorage('total-15-')) { setWithoutMotorisationTotal15(parseFloat(getItemFromSessionStorage('total-15-'))); }
        if (getItemFromSessionStorage('total-16-')) { setWithoutMotorisationTotal16(parseFloat(getItemFromSessionStorage('total-16-'))); }
        if (getItemFromSessionStorage('total-17-')) { setWithoutMotorisationTotal17(parseFloat(getItemFromSessionStorage('total-17-'))); }
        if (getItemFromSessionStorage('total-18-')) { setWithoutMotorisationTotal18(parseFloat(getItemFromSessionStorage('total-18-'))); }
        if (getItemFromSessionStorage('total-19-')) { setWithoutMotorisationTotal19(parseFloat(getItemFromSessionStorage('total-19-'))); }
        if (getItemFromSessionStorage('total-20-')) { setWithoutMotorisationTotal20(parseFloat(getItemFromSessionStorage('total-20-'))); }
        if (getItemFromSessionStorage('total-21-')) { setWithoutMotorisationTotal21(parseFloat(getItemFromSessionStorage('total-21-'))); }
        if (getItemFromSessionStorage('total-22-')) { setWithoutMotorisationTotal22(parseFloat(getItemFromSessionStorage('total-22-'))); }
        if (getItemFromSessionStorage('total-23-')) { setWithoutMotorisationTotal23(parseFloat(getItemFromSessionStorage('total-23-'))); }
        if (getItemFromSessionStorage('total-24-')) { setWithoutMotorisationTotal24(parseFloat(getItemFromSessionStorage('total-24-'))); }
        if (getItemFromSessionStorage('total-25-')) { setWithoutMotorisationTotal25(parseFloat(getItemFromSessionStorage('total-25-'))); }
        if (getItemFromSessionStorage('total-26-')) { setWithoutMotorisationTotal26(parseFloat(getItemFromSessionStorage('total-26-'))); }
        if (getItemFromSessionStorage('total-27-')) { setWithoutMotorisationTotal27(parseFloat(getItemFromSessionStorage('total-27-'))); }
        if (getItemFromSessionStorage('total-28-')) { setWithoutMotorisationTotal28(parseFloat(getItemFromSessionStorage('total-28-'))); }
        if (getItemFromSessionStorage('total-29-')) { setWithoutMotorisationTotal29(parseFloat(getItemFromSessionStorage('total-29-'))); }
        if (getItemFromSessionStorage('total-30-')) { setWithoutMotorisationTotal30(parseFloat(getItemFromSessionStorage('total-30-'))); }

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
        setcurrentBlindWidth5(""); sessionStorage.removeItem("width-5-" + blindNumber);
        setcurrentBlindWidth6(""); sessionStorage.removeItem("width-6-" + blindNumber);
        setcurrentBlindWidth7(""); sessionStorage.removeItem("width-7-" + blindNumber);
        setcurrentBlindWidth8(""); sessionStorage.removeItem("width-8-" + blindNumber);
        setcurrentBlindWidth9(""); sessionStorage.removeItem("width-9-" + blindNumber);
        setcurrentBlindWidth10(""); sessionStorage.removeItem("width-10-" + blindNumber);
        setcurrentBlindWidth11(""); sessionStorage.removeItem("width-11-" + blindNumber);
        setcurrentBlindWidth12(""); sessionStorage.removeItem("width-12-" + blindNumber);
        setcurrentBlindWidth13(""); sessionStorage.removeItem("width-13-" + blindNumber);
        setcurrentBlindWidth14(""); sessionStorage.removeItem("width-14-" + blindNumber);
        setcurrentBlindWidth15(""); sessionStorage.removeItem("width-15-" + blindNumber);
        setcurrentBlindWidth16(""); sessionStorage.removeItem("width-16-" + blindNumber);
        setcurrentBlindWidth17(""); sessionStorage.removeItem("width-17-" + blindNumber);
        setcurrentBlindWidth18(""); sessionStorage.removeItem("width-18-" + blindNumber);
        setcurrentBlindWidth19(""); sessionStorage.removeItem("width-19-" + blindNumber);
        setcurrentBlindWidth20(""); sessionStorage.removeItem("width-20-" + blindNumber);
        setcurrentBlindWidth21(""); sessionStorage.removeItem("width-21-" + blindNumber);
        setcurrentBlindWidth22(""); sessionStorage.removeItem("width-22-" + blindNumber);
        setcurrentBlindWidth23(""); sessionStorage.removeItem("width-23-" + blindNumber);
        setcurrentBlindWidth24(""); sessionStorage.removeItem("width-24-" + blindNumber);
        setcurrentBlindWidth25(""); sessionStorage.removeItem("width-25-" + blindNumber);
        setcurrentBlindWidth26(""); sessionStorage.removeItem("width-26-" + blindNumber);
        setcurrentBlindWidth27(""); sessionStorage.removeItem("width-27-" + blindNumber);
        setcurrentBlindWidth28(""); sessionStorage.removeItem("width-28-" + blindNumber);
        setcurrentBlindWidth29(""); sessionStorage.removeItem("width-29-" + blindNumber);
        setcurrentBlindWidth30(""); sessionStorage.removeItem("width-30-" + blindNumber);


        setcurrentBlindDepth("");
        sessionStorage.removeItem("depth-" + blindNumber);
        // set width to unselected repeat from 2nd : 
        setcurrentBlindDepth2(""); sessionStorage.removeItem("depth-2-" + blindNumber);
        setcurrentBlindDepth3(""); sessionStorage.removeItem("depth-3-" + blindNumber);
        setcurrentBlindDepth4(""); sessionStorage.removeItem("depth-4-" + blindNumber);
        setcurrentBlindDepth5(""); sessionStorage.removeItem("depth-5-" + blindNumber);
        setcurrentBlindDepth6(""); sessionStorage.removeItem("depth-6-" + blindNumber);
        setcurrentBlindDepth7(""); sessionStorage.removeItem("depth-7-" + blindNumber);
        setcurrentBlindDepth8(""); sessionStorage.removeItem("depth-8-" + blindNumber);
        setcurrentBlindDepth9(""); sessionStorage.removeItem("depth-9-" + blindNumber);
        setcurrentBlindDepth10(""); sessionStorage.removeItem("depth-10-" + blindNumber);
        setcurrentBlindDepth11(""); sessionStorage.removeItem("depth-11-" + blindNumber);
        setcurrentBlindDepth12(""); sessionStorage.removeItem("depth-12-" + blindNumber);
        setcurrentBlindDepth13(""); sessionStorage.removeItem("depth-13-" + blindNumber);
        setcurrentBlindDepth14(""); sessionStorage.removeItem("depth-14-" + blindNumber);
        setcurrentBlindDepth15(""); sessionStorage.removeItem("depth-15-" + blindNumber);
        setcurrentBlindDepth16(""); sessionStorage.removeItem("depth-16-" + blindNumber);
        setcurrentBlindDepth17(""); sessionStorage.removeItem("depth-17-" + blindNumber);
        setcurrentBlindDepth18(""); sessionStorage.removeItem("depth-18-" + blindNumber);
        setcurrentBlindDepth19(""); sessionStorage.removeItem("depth-19-" + blindNumber);
        setcurrentBlindDepth20(""); sessionStorage.removeItem("depth-20-" + blindNumber);
        setcurrentBlindDepth21(""); sessionStorage.removeItem("depth-21-" + blindNumber);
        setcurrentBlindDepth22(""); sessionStorage.removeItem("depth-22-" + blindNumber);
        setcurrentBlindDepth23(""); sessionStorage.removeItem("depth-23-" + blindNumber);
        setcurrentBlindDepth24(""); sessionStorage.removeItem("depth-24-" + blindNumber);
        setcurrentBlindDepth25(""); sessionStorage.removeItem("depth-25-" + blindNumber);
        setcurrentBlindDepth26(""); sessionStorage.removeItem("depth-26-" + blindNumber);
        setcurrentBlindDepth27(""); sessionStorage.removeItem("depth-27-" + blindNumber);
        setcurrentBlindDepth28(""); sessionStorage.removeItem("depth-28-" + blindNumber);
        setcurrentBlindDepth29(""); sessionStorage.removeItem("depth-29-" + blindNumber);
        setcurrentBlindDepth30(""); sessionStorage.removeItem("depth-30-" + blindNumber);


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
        setcurrentBlindWidth5(""); sessionStorage.removeItem("width-5-" + blindNumber);
        setcurrentBlindWidth6(""); sessionStorage.removeItem("width-6-" + blindNumber);
        setcurrentBlindWidth7(""); sessionStorage.removeItem("width-7-" + blindNumber);
        setcurrentBlindWidth8(""); sessionStorage.removeItem("width-8-" + blindNumber);
        setcurrentBlindWidth9(""); sessionStorage.removeItem("width-9-" + blindNumber);
        setcurrentBlindWidth10(""); sessionStorage.removeItem("width-10-" + blindNumber);
        setcurrentBlindWidth11(""); sessionStorage.removeItem("width-11-" + blindNumber);
        setcurrentBlindWidth12(""); sessionStorage.removeItem("width-12-" + blindNumber);
        setcurrentBlindWidth13(""); sessionStorage.removeItem("width-13-" + blindNumber);
        setcurrentBlindWidth14(""); sessionStorage.removeItem("width-14-" + blindNumber);
        setcurrentBlindWidth15(""); sessionStorage.removeItem("width-15-" + blindNumber);
        setcurrentBlindWidth16(""); sessionStorage.removeItem("width-16-" + blindNumber);
        setcurrentBlindWidth17(""); sessionStorage.removeItem("width-17-" + blindNumber);
        setcurrentBlindWidth18(""); sessionStorage.removeItem("width-18-" + blindNumber);
        setcurrentBlindWidth19(""); sessionStorage.removeItem("width-19-" + blindNumber);
        setcurrentBlindWidth20(""); sessionStorage.removeItem("width-20-" + blindNumber);
        setcurrentBlindWidth21(""); sessionStorage.removeItem("width-21-" + blindNumber);
        setcurrentBlindWidth22(""); sessionStorage.removeItem("width-22-" + blindNumber);
        setcurrentBlindWidth23(""); sessionStorage.removeItem("width-23-" + blindNumber);
        setcurrentBlindWidth24(""); sessionStorage.removeItem("width-24-" + blindNumber);
        setcurrentBlindWidth25(""); sessionStorage.removeItem("width-25-" + blindNumber);
        setcurrentBlindWidth26(""); sessionStorage.removeItem("width-26-" + blindNumber);
        setcurrentBlindWidth27(""); sessionStorage.removeItem("width-27-" + blindNumber);
        setcurrentBlindWidth28(""); sessionStorage.removeItem("width-28-" + blindNumber);
        setcurrentBlindWidth29(""); sessionStorage.removeItem("width-29-" + blindNumber);
        setcurrentBlindWidth30(""); sessionStorage.removeItem("width-30-" + blindNumber);

        setcurrentBlindDepth("");
        sessionStorage.removeItem("depth-" + blindNumber);
        // set width to unselected repeat from 2nd : 
        setcurrentBlindDepth2(""); sessionStorage.removeItem("depth-2-" + blindNumber);
        setcurrentBlindDepth3(""); sessionStorage.removeItem("depth-3-" + blindNumber);
        setcurrentBlindDepth4(""); sessionStorage.removeItem("depth-4-" + blindNumber);
        setcurrentBlindDepth5(""); sessionStorage.removeItem("depth-5-" + blindNumber);
        setcurrentBlindDepth6(""); sessionStorage.removeItem("depth-6-" + blindNumber);
        setcurrentBlindDepth7(""); sessionStorage.removeItem("depth-7-" + blindNumber);
        setcurrentBlindDepth8(""); sessionStorage.removeItem("depth-8-" + blindNumber);
        setcurrentBlindDepth9(""); sessionStorage.removeItem("depth-9-" + blindNumber);
        setcurrentBlindDepth10(""); sessionStorage.removeItem("depth-10-" + blindNumber);
        setcurrentBlindDepth11(""); sessionStorage.removeItem("depth-11-" + blindNumber);
        setcurrentBlindDepth12(""); sessionStorage.removeItem("depth-12-" + blindNumber);
        setcurrentBlindDepth13(""); sessionStorage.removeItem("depth-13-" + blindNumber);
        setcurrentBlindDepth14(""); sessionStorage.removeItem("depth-14-" + blindNumber);
        setcurrentBlindDepth15(""); sessionStorage.removeItem("depth-15-" + blindNumber);
        setcurrentBlindDepth16(""); sessionStorage.removeItem("depth-16-" + blindNumber);
        setcurrentBlindDepth17(""); sessionStorage.removeItem("depth-17-" + blindNumber);
        setcurrentBlindDepth18(""); sessionStorage.removeItem("depth-18-" + blindNumber);
        setcurrentBlindDepth19(""); sessionStorage.removeItem("depth-19-" + blindNumber);
        setcurrentBlindDepth20(""); sessionStorage.removeItem("depth-20-" + blindNumber);
        setcurrentBlindDepth21(""); sessionStorage.removeItem("depth-21-" + blindNumber);
        setcurrentBlindDepth22(""); sessionStorage.removeItem("depth-22-" + blindNumber);
        setcurrentBlindDepth23(""); sessionStorage.removeItem("depth-23-" + blindNumber);
        setcurrentBlindDepth24(""); sessionStorage.removeItem("depth-24-" + blindNumber);
        setcurrentBlindDepth25(""); sessionStorage.removeItem("depth-25-" + blindNumber);
        setcurrentBlindDepth26(""); sessionStorage.removeItem("depth-26-" + blindNumber);
        setcurrentBlindDepth27(""); sessionStorage.removeItem("depth-27-" + blindNumber);
        setcurrentBlindDepth28(""); sessionStorage.removeItem("depth-28-" + blindNumber);
        setcurrentBlindDepth29(""); sessionStorage.removeItem("depth-29-" + blindNumber);
        setcurrentBlindDepth30(""); sessionStorage.removeItem("depth-30-" + blindNumber);


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
        else if (elementNo === 5) {
            setcurrentBlindWidth5(e.target.value);
            sessionStorage.setItem("width-5-" + blindNumber, e.target.value);
            if (currentBlindDepth5 || currentBlindDepth5 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth5, 5)
                setItemValueInSessionStorageKey('widthxdepth-5-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth5, 5))
            }
        }
        else if (elementNo === 6) {
            setcurrentBlindWidth6(e.target.value);
            sessionStorage.setItem("width-6-" + blindNumber, e.target.value);
            if (currentBlindDepth6 || currentBlindDepth6 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth6, 6)
                setItemValueInSessionStorageKey('widthxdepth-6-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth6, 6))
            }
        }
        else if (elementNo === 7) {
            setcurrentBlindWidth7(e.target.value);
            sessionStorage.setItem("width-7-" + blindNumber, e.target.value);
            if (currentBlindDepth7 || currentBlindDepth7 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth7, 7)
                setItemValueInSessionStorageKey('widthxdepth-7-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth7, 7))
            }
        }
        else if (elementNo === 8) {
            setcurrentBlindWidth8(e.target.value);
            sessionStorage.setItem("width-8-" + blindNumber, e.target.value);
            if (currentBlindDepth8 || currentBlindDepth8 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth8, 8)
                setItemValueInSessionStorageKey('widthxdepth-8-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth8, 8))
            }
        }
        else if (elementNo === 9) {
            setcurrentBlindWidth9(e.target.value);
            sessionStorage.setItem("width-9-" + blindNumber, e.target.value);
            if (currentBlindDepth9 || currentBlindDepth9 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth9, 9)
                setItemValueInSessionStorageKey('widthxdepth-9-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth9, 9))
            }
        }
        else if (elementNo === 10) {
            setcurrentBlindWidth10(e.target.value);
            sessionStorage.setItem("width-10-" + blindNumber, e.target.value);
            if (currentBlindDepth10 || currentBlindDepth10 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth10, 10)
                setItemValueInSessionStorageKey('widthxdepth-10-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth10, 10))
            }
        }
        else if (elementNo === 11) {
            setcurrentBlindWidth11(e.target.value);
            sessionStorage.setItem("width-11-" + blindNumber, e.target.value);
            if (currentBlindDepth11 || currentBlindDepth11 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth11, 11)
                setItemValueInSessionStorageKey('widthxdepth-11-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth11, 11))
            }
        }
        else if (elementNo === 12) {
            setcurrentBlindWidth12(e.target.value);
            sessionStorage.setItem("width-12-" + blindNumber, e.target.value);
            if (currentBlindDepth12 || currentBlindDepth12 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth12, 12)
                setItemValueInSessionStorageKey('widthxdepth-12-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth12, 12))
            }
        }
        else if (elementNo === 13) {
            setcurrentBlindWidth13(e.target.value);
            sessionStorage.setItem("width-13-" + blindNumber, e.target.value);
            if (currentBlindDepth13 || currentBlindDepth13 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth13, 13)
                setItemValueInSessionStorageKey('widthxdepth-13-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth13, 13))
            }
        }
        else if (elementNo === 14) {
            setcurrentBlindWidth14(e.target.value);
            sessionStorage.setItem("width-14-" + blindNumber, e.target.value);
            if (currentBlindDepth14 || currentBlindDepth14 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth14, 14)
                setItemValueInSessionStorageKey('widthxdepth-14-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth14, 14))
            }
        }
        else if (elementNo === 15) {
            setcurrentBlindWidth15(e.target.value);
            sessionStorage.setItem("width-15-" + blindNumber, e.target.value);
            if (currentBlindDepth15 || currentBlindDepth15 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth15, 15)
                setItemValueInSessionStorageKey('widthxdepth-15-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth15, 15))
            }
        }
        else if (elementNo === 16) {
            setcurrentBlindWidth16(e.target.value);
            sessionStorage.setItem("width-16-" + blindNumber, e.target.value);
            if (currentBlindDepth16 || currentBlindDepth16 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth16, 16)
                setItemValueInSessionStorageKey('widthxdepth-16-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth16, 16))
            }
        }
        else if (elementNo === 17) {
            setcurrentBlindWidth17(e.target.value);
            sessionStorage.setItem("width-17-" + blindNumber, e.target.value);
            if (currentBlindDepth17 || currentBlindDepth17 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth17, 17)
                setItemValueInSessionStorageKey('widthxdepth-17-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth17, 17))
            }
        }
        else if (elementNo === 18) {
            setcurrentBlindWidth18(e.target.value);
            sessionStorage.setItem("width-18-" + blindNumber, e.target.value);
            if (currentBlindDepth18 || currentBlindDepth18 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth18, 18)
                setItemValueInSessionStorageKey('widthxdepth-18-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth18, 18))
            }
        }
        else if (elementNo === 19) {
            setcurrentBlindWidth19(e.target.value);
            sessionStorage.setItem("width-19-" + blindNumber, e.target.value);
            if (currentBlindDepth19 || currentBlindDepth19 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth19, 19)
                setItemValueInSessionStorageKey('widthxdepth-19-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth19, 19))
            }
        }
        else if (elementNo === 20) {
            setcurrentBlindWidth20(e.target.value);
            sessionStorage.setItem("width-20-" + blindNumber, e.target.value);
            if (currentBlindDepth20 || currentBlindDepth20 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth20, 20)
                setItemValueInSessionStorageKey('widthxdepth-20-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth20, 20))
            }
        }
        else if (elementNo === 21) {
            setcurrentBlindWidth21(e.target.value);
            sessionStorage.setItem("width-21-" + blindNumber, e.target.value);
            if (currentBlindDepth21 || currentBlindDepth21 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth21, 21)
                setItemValueInSessionStorageKey('widthxdepth-21-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth21, 21))
            }
        }
        else if (elementNo === 22) {
            setcurrentBlindWidth22(e.target.value);
            sessionStorage.setItem("width-22-" + blindNumber, e.target.value);
            if (currentBlindDepth22 || currentBlindDepth22 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth22, 22)
                setItemValueInSessionStorageKey('widthxdepth-22-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth22, 22))
            }
        }
        else if (elementNo === 23) {
            setcurrentBlindWidth23(e.target.value);
            sessionStorage.setItem("width-23-" + blindNumber, e.target.value);
            if (currentBlindDepth23 || currentBlindDepth23 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth23, 23)
                setItemValueInSessionStorageKey('widthxdepth-23-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth23, 23))
            }
        }
        else if (elementNo === 24) {
            setcurrentBlindWidth24(e.target.value);
            sessionStorage.setItem("width-24-" + blindNumber, e.target.value);
            if (currentBlindDepth24 || currentBlindDepth24 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth24, 24)
                setItemValueInSessionStorageKey('widthxdepth-24-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth24, 24))
            }
        }
        else if (elementNo === 25) {
            setcurrentBlindWidth25(e.target.value);
            sessionStorage.setItem("width-25-" + blindNumber, e.target.value);
            if (currentBlindDepth25 || currentBlindDepth25 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth25, 25)
                setItemValueInSessionStorageKey('widthxdepth-25-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth25, 25))
            }
        }
        else if (elementNo === 26) {
            setcurrentBlindWidth26(e.target.value);
            sessionStorage.setItem("width-26-" + blindNumber, e.target.value);
            if (currentBlindDepth26 || currentBlindDepth26 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth26, 26)
                setItemValueInSessionStorageKey('widthxdepth-26-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth26, 26))
            }
        }
        else if (elementNo === 27) {
            setcurrentBlindWidth27(e.target.value);
            sessionStorage.setItem("width-27-" + blindNumber, e.target.value);
            if (currentBlindDepth27 || currentBlindDepth27 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth27, 27)
                setItemValueInSessionStorageKey('widthxdepth-27-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth27, 27))
            }
        }
        else if (elementNo === 28) {
            setcurrentBlindWidth28(e.target.value);
            sessionStorage.setItem("width-28-" + blindNumber, e.target.value);
            if (currentBlindDepth28 || currentBlindDepth28 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth28, 28)
                setItemValueInSessionStorageKey('widthxdepth-28-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth28, 28))
            }
        }
        else if (elementNo === 29) {
            setcurrentBlindWidth29(e.target.value);
            sessionStorage.setItem("width-29-" + blindNumber, e.target.value);
            if (currentBlindDepth29 || currentBlindDepth29 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth29, 29)
                setItemValueInSessionStorageKey('widthxdepth-29-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth29, 29))
            }
        }
        else if (elementNo === 30) {
            setcurrentBlindWidth30(e.target.value);
            sessionStorage.setItem("width-30-" + blindNumber, e.target.value);
            if (currentBlindDepth30 || currentBlindDepth30 !== "") {
                widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth30, 30)
                setItemValueInSessionStorageKey('widthxdepth-30-', widthxDepthRowNumber(currentBlindType, e.target.value, currentBlindDepth30, 30))
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
        else if (elementNo === 5) {
            setcurrentBlindDepth5(e.target.value);
            sessionStorage.setItem("depth-5-" + blindNumber, e.target.value);
            if (currentBlindWidth5 || currentBlindWidth5 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth5, e.target.value, 5)
                setItemValueInSessionStorageKey('widthxdepth-5-', widthxDepthRowNumber(currentBlindType, currentBlindWidth5, e.target.value, 5))
            }
        }
        else if (elementNo === 6) {
            setcurrentBlindDepth6(e.target.value);
            sessionStorage.setItem("depth-6-" + blindNumber, e.target.value);
            if (currentBlindWidth6 || currentBlindWidth6 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth6, e.target.value, 6)
                setItemValueInSessionStorageKey('widthxdepth-6-', widthxDepthRowNumber(currentBlindType, currentBlindWidth6, e.target.value, 6))
            }
        }
        else if (elementNo === 7) {
            setcurrentBlindDepth7(e.target.value);
            sessionStorage.setItem("depth-7-" + blindNumber, e.target.value);
            if (currentBlindWidth7 || currentBlindWidth7 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth7, e.target.value, 7)
                setItemValueInSessionStorageKey('widthxdepth-7-', widthxDepthRowNumber(currentBlindType, currentBlindWidth7, e.target.value, 7))
            }
        }
        else if (elementNo === 8) {
            setcurrentBlindDepth8(e.target.value);
            sessionStorage.setItem("depth-8-" + blindNumber, e.target.value);
            if (currentBlindWidth8 || currentBlindWidth8 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth8, e.target.value, 8)
                setItemValueInSessionStorageKey('widthxdepth-8-', widthxDepthRowNumber(currentBlindType, currentBlindWidth8, e.target.value, 8))
            }
        }
        else if (elementNo === 9) {
            setcurrentBlindDepth9(e.target.value);
            sessionStorage.setItem("depth-9-" + blindNumber, e.target.value);
            if (currentBlindWidth9 || currentBlindWidth9 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth9, e.target.value, 9)
                setItemValueInSessionStorageKey('widthxdepth-9-', widthxDepthRowNumber(currentBlindType, currentBlindWidth9, e.target.value, 9))
            }
        }
        else if (elementNo === 10) {
            setcurrentBlindDepth10(e.target.value);
            sessionStorage.setItem("depth-10-" + blindNumber, e.target.value);
            if (currentBlindWidth10 || currentBlindWidth10 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth10, e.target.value, 10)
                setItemValueInSessionStorageKey('widthxdepth-10-', widthxDepthRowNumber(currentBlindType, currentBlindWidth10, e.target.value, 10))
            }
        }
        else if (elementNo === 11) {
            setcurrentBlindDepth11(e.target.value);
            sessionStorage.setItem("depth-11-" + blindNumber, e.target.value);
            if (currentBlindWidth11 || currentBlindWidth11 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth11, e.target.value, 11)
                setItemValueInSessionStorageKey('widthxdepth-11-', widthxDepthRowNumber(currentBlindType, currentBlindWidth11, e.target.value, 11))
            }
        }
        else if (elementNo === 12) {
            setcurrentBlindDepth12(e.target.value);
            sessionStorage.setItem("depth-12-" + blindNumber, e.target.value);
            if (currentBlindWidth12 || currentBlindWidth12 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth12, e.target.value, 12)
                setItemValueInSessionStorageKey('widthxdepth-12-', widthxDepthRowNumber(currentBlindType, currentBlindWidth12, e.target.value, 12))
            }
        }
        else if (elementNo === 13) {
            setcurrentBlindDepth13(e.target.value);
            sessionStorage.setItem("depth-13-" + blindNumber, e.target.value);
            if (currentBlindWidth13 || currentBlindWidth13 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth13, e.target.value, 13)
                setItemValueInSessionStorageKey('widthxdepth-13-', widthxDepthRowNumber(currentBlindType, currentBlindWidth13, e.target.value, 13))
            }
        }
        else if (elementNo === 14) {
            setcurrentBlindDepth14(e.target.value);
            sessionStorage.setItem("depth-14-" + blindNumber, e.target.value);
            if (currentBlindWidth14 || currentBlindWidth14 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth14, e.target.value, 14)
                setItemValueInSessionStorageKey('widthxdepth-14-', widthxDepthRowNumber(currentBlindType, currentBlindWidth14, e.target.value, 14))
            }
        }
        else if (elementNo === 15) {
            setcurrentBlindDepth15(e.target.value);
            sessionStorage.setItem("depth-15-" + blindNumber, e.target.value);
            if (currentBlindWidth15 || currentBlindWidth15 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth15, e.target.value, 15)
                setItemValueInSessionStorageKey('widthxdepth-15-', widthxDepthRowNumber(currentBlindType, currentBlindWidth15, e.target.value, 15))
            }
        }
        else if (elementNo === 16) {
            setcurrentBlindDepth16(e.target.value);
            sessionStorage.setItem("depth-16-" + blindNumber, e.target.value);
            if (currentBlindWidth16 || currentBlindWidth16 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth16, e.target.value, 16)
                setItemValueInSessionStorageKey('widthxdepth-16-', widthxDepthRowNumber(currentBlindType, currentBlindWidth16, e.target.value, 16))
            }
        }
        else if (elementNo === 17) {
            setcurrentBlindDepth17(e.target.value);
            sessionStorage.setItem("depth-17-" + blindNumber, e.target.value);
            if (currentBlindWidth17 || currentBlindWidth17 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth17, e.target.value, 17)
                setItemValueInSessionStorageKey('widthxdepth-17-', widthxDepthRowNumber(currentBlindType, currentBlindWidth17, e.target.value, 17))
            }
        }
        else if (elementNo === 18) {
            setcurrentBlindDepth18(e.target.value);
            sessionStorage.setItem("depth-18-" + blindNumber, e.target.value);
            if (currentBlindWidth18 || currentBlindWidth18 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth18, e.target.value, 18)
                setItemValueInSessionStorageKey('widthxdepth-18-', widthxDepthRowNumber(currentBlindType, currentBlindWidth18, e.target.value, 18))
            }
        }
        else if (elementNo === 19) {
            setcurrentBlindDepth19(e.target.value);
            sessionStorage.setItem("depth-19-" + blindNumber, e.target.value);
            if (currentBlindWidth19 || currentBlindWidth19 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth19, e.target.value, 19)
                setItemValueInSessionStorageKey('widthxdepth-19-', widthxDepthRowNumber(currentBlindType, currentBlindWidth19, e.target.value, 19))
            }
        }
        else if (elementNo === 20) {
            setcurrentBlindDepth20(e.target.value);
            sessionStorage.setItem("depth-20-" + blindNumber, e.target.value);
            if (currentBlindWidth20 || currentBlindWidth20 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth20, e.target.value, 20)
                setItemValueInSessionStorageKey('widthxdepth-20-', widthxDepthRowNumber(currentBlindType, currentBlindWidth20, e.target.value, 20))
            }
        }
        else if (elementNo === 21) {
            setcurrentBlindDepth21(e.target.value);
            sessionStorage.setItem("depth-21-" + blindNumber, e.target.value);
            if (currentBlindWidth21 || currentBlindWidth21 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth21, e.target.value, 21)
                setItemValueInSessionStorageKey('widthxdepth-21-', widthxDepthRowNumber(currentBlindType, currentBlindWidth21, e.target.value, 21))
            }
        }
        else if (elementNo === 22) {
            setcurrentBlindDepth22(e.target.value);
            sessionStorage.setItem("depth-22-" + blindNumber, e.target.value);
            if (currentBlindWidth22 || currentBlindWidth22 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth22, e.target.value, 22)
                setItemValueInSessionStorageKey('widthxdepth-22-', widthxDepthRowNumber(currentBlindType, currentBlindWidth22, e.target.value, 22))
            }
        }
        else if (elementNo === 23) {
            setcurrentBlindDepth23(e.target.value);
            sessionStorage.setItem("depth-23-" + blindNumber, e.target.value);
            if (currentBlindWidth23 || currentBlindWidth23 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth23, e.target.value, 23)
                setItemValueInSessionStorageKey('widthxdepth-23-', widthxDepthRowNumber(currentBlindType, currentBlindWidth23, e.target.value, 23))
            }
        }
        else if (elementNo === 24) {
            setcurrentBlindDepth24(e.target.value);
            sessionStorage.setItem("depth-24-" + blindNumber, e.target.value);
            if (currentBlindWidth24 || currentBlindWidth24 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth24, e.target.value, 24)
                setItemValueInSessionStorageKey('widthxdepth-24-', widthxDepthRowNumber(currentBlindType, currentBlindWidth24, e.target.value, 24))
            }
        }
        else if (elementNo === 25) {
            setcurrentBlindDepth25(e.target.value);
            sessionStorage.setItem("depth-25-" + blindNumber, e.target.value);
            if (currentBlindWidth25 || currentBlindWidth25 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth25, e.target.value, 25)
                setItemValueInSessionStorageKey('widthxdepth-25-', widthxDepthRowNumber(currentBlindType, currentBlindWidth25, e.target.value, 25))
            }
        }
        else if (elementNo === 26) {
            setcurrentBlindDepth26(e.target.value);
            sessionStorage.setItem("depth-26-" + blindNumber, e.target.value);
            if (currentBlindWidth26 || currentBlindWidth26 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth26, e.target.value, 26)
                setItemValueInSessionStorageKey('widthxdepth-26-', widthxDepthRowNumber(currentBlindType, currentBlindWidth26, e.target.value, 26))
            }
        }
        else if (elementNo === 27) {
            setcurrentBlindDepth27(e.target.value);
            sessionStorage.setItem("depth-27-" + blindNumber, e.target.value);
            if (currentBlindWidth27 || currentBlindWidth27 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth27, e.target.value, 27)
                setItemValueInSessionStorageKey('widthxdepth-27-', widthxDepthRowNumber(currentBlindType, currentBlindWidth27, e.target.value, 27))
            }
        }
        else if (elementNo === 28) {
            setcurrentBlindDepth28(e.target.value);
            sessionStorage.setItem("depth-28-" + blindNumber, e.target.value);
            if (currentBlindWidth28 || currentBlindWidth28 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth28, e.target.value, 28)
                setItemValueInSessionStorageKey('widthxdepth-28-', widthxDepthRowNumber(currentBlindType, currentBlindWidth28, e.target.value, 28))
            }
        }
        else if (elementNo === 29) {
            setcurrentBlindDepth29(e.target.value);
            sessionStorage.setItem("depth-29-" + blindNumber, e.target.value);
            if (currentBlindWidth29 || currentBlindWidth29 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth29, e.target.value, 29)
                setItemValueInSessionStorageKey('widthxdepth-29-', widthxDepthRowNumber(currentBlindType, currentBlindWidth29, e.target.value, 29))
            }
        }
        else if (elementNo === 30) {
            setcurrentBlindDepth30(e.target.value);
            sessionStorage.setItem("depth-30-" + blindNumber, e.target.value);
            if (currentBlindWidth30 || currentBlindWidth30 !== "") {
                widthxDepthRowNumber(currentBlindType, currentBlindWidth30, e.target.value, 30)
                setItemValueInSessionStorageKey('widthxdepth-30-', widthxDepthRowNumber(currentBlindType, currentBlindWidth30, e.target.value, 30))
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

    const checkNumberShouldApply = (inputNum) => {
        let outputNum = 1;
        if (isNaN(inputNum) || inputNum < 0) {
            outputNum = 1;
        } else {
            outputNum = inputNum;
        }
        return parseInt(outputNum);
    }

    const selectedMotorTypeMultiplierHandler = (e) => {

        setSelectedMotorTypeMultiplier(checkNumberShouldApply(e.target.value));
        sessionStorage.setItem('motor-type-multiplier-' + blindNumber, checkNumberShouldApply(e.target.value));

        // if (e.target.value) setSelectedMotorTypeExcelValue(selectedMotorTypeExcelValue * parseInt(e.target.value));
    }

    const selectedPowerTypeMultiplierHandler = (e) => {
        setSelectedPowerTypeMultiplier(checkNumberShouldApply(e.target.value));
        sessionStorage.setItem('power-type-multiplier-' + blindNumber, checkNumberShouldApply(e.target.value));

        // if (e.target.value) setSelectedPowerTypeExcelValue(selectedPowerTypeExcelValue * parseInt(e.target.value));
    }

    const selectedReceiverTypeMultiplierHandler = (e) => {
        setSelectedReceiverTypeMultiplier(checkNumberShouldApply(e.target.value));
        sessionStorage.setItem('receiver-type-multiplier-' + blindNumber, checkNumberShouldApply(e.target.value));

        // if (e.target.value) setSelectedReceiverTypeExcelValue(selectedReceiverTypeExcelValue * parseInt(e.target.value));
    }
    const selectedRemoteTypeMultiplierHandler = (e) => {
        setSelectedRemoteTypeMultiplier(checkNumberShouldApply(e.target.value));
        sessionStorage.setItem('remote-type-multiplier-' + blindNumber, checkNumberShouldApply(e.target.value));

        // if (e.target.value) setSelectedRemoteTypeExcelValue(selectedRemoteTypeExcelValue * parseInt(e.target.value));
    }
    const selectedOtherTypeMultiplierHandler = (e) => {
        setSelectedOtherTypeMultiplier(checkNumberShouldApply(e.target.value));
        sessionStorage.setItem('other-type-multiplier-' + blindNumber, checkNumberShouldApply(e.target.value));

        // if (e.target.value) setSelectedOtherTypeExcelValue(selectedOtherTypeExcelValue * parseInt(e.target.value));
    }



    function clearMotorisationValues() {
        setCurrentMotorType("");
        sessionStorage.removeItem("motor-type-" + blindNumber);
        sessionStorage.removeItem("motor-price-" + blindNumber);
        setSelectedMotorTypeExcelValue(0);

        setCurrentPowerType("");
        sessionStorage.removeItem("power-type-" + blindNumber);
        sessionStorage.removeItem("power-price-" + blindNumber);
        setSelectedPowerTypeExcelValue(0);

        setCurrentReceiverType("");
        sessionStorage.removeItem("receiver-type-" + blindNumber);
        sessionStorage.removeItem("receiver-price-" + blindNumber);
        setSelectedReceiverTypeExcelValue(0);

        setCurrentRemoteType("");
        sessionStorage.removeItem("remote-type-" + blindNumber);
        sessionStorage.removeItem("remote-price-" + blindNumber);
        setSelectedRemoteTypeExcelValue(0);

        setCurrentOtherType("");
        sessionStorage.removeItem("other-type-" + blindNumber);
        sessionStorage.removeItem("other-price-" + blindNumber);
        setSelectedOtherTypeExcelValue(0);

        setWithMoterisationTotal(0);
    }

    function motorisationAddRemoveHandler() {
        if (motorisationToggle) {
            setMotorisationToggle(false);
            setItemValueInSessionStorageKey("motorization-toggle-", false);
            setAddMoterisationValues(true)

            clearMotorisationValues();
        } else {
            setMotorisationToggle(true);
            setItemValueInSessionStorageKey("motorization-toggle-", true);
            setAddMoterisationValues(false);

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
        setcurrentBlindWidth2(""); sessionStorage.removeItem("width-2-" + blindNumber);
        setcurrentBlindDepth2(""); sessionStorage.removeItem("depth-2-" + blindNumber);

        setcurrentBlindWidth3(""); sessionStorage.removeItem("width-3-" + blindNumber);
        setcurrentBlindDepth3(""); sessionStorage.removeItem("depth-3-" + blindNumber);

        setcurrentBlindWidth4(""); sessionStorage.removeItem("width-4-" + blindNumber);
        setcurrentBlindDepth4(""); sessionStorage.removeItem("depth-4-" + blindNumber);

        setcurrentBlindWidth5(""); sessionStorage.removeItem("width-5-" + blindNumber);
        setcurrentBlindDepth5(""); sessionStorage.removeItem("depth-5-" + blindNumber);

        setcurrentBlindWidth6(""); sessionStorage.removeItem("width-6-" + blindNumber);
        setcurrentBlindDepth6(""); sessionStorage.removeItem("depth-6-" + blindNumber);
        setcurrentBlindWidth7(""); sessionStorage.removeItem("width-7-" + blindNumber);
        setcurrentBlindDepth7(""); sessionStorage.removeItem("depth-7-" + blindNumber);
        setcurrentBlindWidth8(""); sessionStorage.removeItem("width-8-" + blindNumber);
        setcurrentBlindDepth8(""); sessionStorage.removeItem("depth-8-" + blindNumber);
        setcurrentBlindWidth9(""); sessionStorage.removeItem("width-9-" + blindNumber);
        setcurrentBlindDepth9(""); sessionStorage.removeItem("depth-9-" + blindNumber);
        setcurrentBlindWidth10(""); sessionStorage.removeItem("width-10-" + blindNumber);
        setcurrentBlindDepth10(""); sessionStorage.removeItem("depth-10-" + blindNumber);
        setcurrentBlindWidth11(""); sessionStorage.removeItem("width-11-" + blindNumber);
        setcurrentBlindDepth11(""); sessionStorage.removeItem("depth-11-" + blindNumber);
        setcurrentBlindWidth12(""); sessionStorage.removeItem("width-12-" + blindNumber);
        setcurrentBlindDepth12(""); sessionStorage.removeItem("depth-12-" + blindNumber);
        setcurrentBlindWidth13(""); sessionStorage.removeItem("width-13-" + blindNumber);
        setcurrentBlindDepth13(""); sessionStorage.removeItem("depth-13-" + blindNumber);
        setcurrentBlindWidth14(""); sessionStorage.removeItem("width-14-" + blindNumber);
        setcurrentBlindDepth14(""); sessionStorage.removeItem("depth-14-" + blindNumber);
        setcurrentBlindWidth15(""); sessionStorage.removeItem("width-15-" + blindNumber);
        setcurrentBlindDepth15(""); sessionStorage.removeItem("depth-15-" + blindNumber);
        setcurrentBlindWidth16(""); sessionStorage.removeItem("width-16-" + blindNumber);
        setcurrentBlindDepth16(""); sessionStorage.removeItem("depth-16-" + blindNumber);
        setcurrentBlindWidth17(""); sessionStorage.removeItem("width-17-" + blindNumber);
        setcurrentBlindDepth17(""); sessionStorage.removeItem("depth-17-" + blindNumber);
        setcurrentBlindWidth18(""); sessionStorage.removeItem("width-18-" + blindNumber);
        setcurrentBlindDepth18(""); sessionStorage.removeItem("depth-18-" + blindNumber);
        setcurrentBlindWidth19(""); sessionStorage.removeItem("width-19-" + blindNumber);
        setcurrentBlindDepth19(""); sessionStorage.removeItem("depth-19-" + blindNumber);
        setcurrentBlindWidth20(""); sessionStorage.removeItem("width-20-" + blindNumber);
        setcurrentBlindDepth20(""); sessionStorage.removeItem("depth-20-" + blindNumber);
        setcurrentBlindWidth21(""); sessionStorage.removeItem("width-21-" + blindNumber);
        setcurrentBlindDepth21(""); sessionStorage.removeItem("depth-21-" + blindNumber);
        setcurrentBlindWidth22(""); sessionStorage.removeItem("width-22-" + blindNumber);
        setcurrentBlindDepth22(""); sessionStorage.removeItem("depth-22-" + blindNumber);
        setcurrentBlindWidth23(""); sessionStorage.removeItem("width-23-" + blindNumber);
        setcurrentBlindDepth23(""); sessionStorage.removeItem("depth-23-" + blindNumber);
        setcurrentBlindWidth24(""); sessionStorage.removeItem("width-24-" + blindNumber);
        setcurrentBlindDepth24(""); sessionStorage.removeItem("depth-24-" + blindNumber);
        setcurrentBlindWidth25(""); sessionStorage.removeItem("width-25-" + blindNumber);
        setcurrentBlindDepth25(""); sessionStorage.removeItem("depth-25-" + blindNumber);
        setcurrentBlindWidth26(""); sessionStorage.removeItem("width-26-" + blindNumber);
        setcurrentBlindDepth26(""); sessionStorage.removeItem("depth-26-" + blindNumber);
        setcurrentBlindWidth27(""); sessionStorage.removeItem("width-27-" + blindNumber);
        setcurrentBlindDepth27(""); sessionStorage.removeItem("depth-27-" + blindNumber);
        setcurrentBlindWidth28(""); sessionStorage.removeItem("width-28-" + blindNumber);
        setcurrentBlindDepth28(""); sessionStorage.removeItem("depth-28-" + blindNumber);
        setcurrentBlindWidth29(""); sessionStorage.removeItem("width-29-" + blindNumber);
        setcurrentBlindDepth29(""); sessionStorage.removeItem("depth-29-" + blindNumber);
        setcurrentBlindWidth30(""); sessionStorage.removeItem("width-30-" + blindNumber);
        setcurrentBlindDepth30(""); sessionStorage.removeItem("depth-30-" + blindNumber);



        setWithoutMotorisationTotal(0)
        removeItemFromSessionStorage('total-')

        // clear setWithoutMotorisationTotal repeat from 2nd
        setWithoutMotorisationTotal2(0); removeItemFromSessionStorage('total-2-');
        setWithoutMotorisationTotal3(0); removeItemFromSessionStorage('total-3-');
        setWithoutMotorisationTotal4(0); removeItemFromSessionStorage('total-4-');
        setWithoutMotorisationTotal5(0); removeItemFromSessionStorage('total-5-');
        setWithoutMotorisationTotal6(0); removeItemFromSessionStorage('total-6-');
        setWithoutMotorisationTotal7(0); removeItemFromSessionStorage('total-7-');
        setWithoutMotorisationTotal8(0); removeItemFromSessionStorage('total-8-');
        setWithoutMotorisationTotal9(0); removeItemFromSessionStorage('total-9-');
        setWithoutMotorisationTotal10(0); removeItemFromSessionStorage('total-10-');
        setWithoutMotorisationTotal11(0); removeItemFromSessionStorage('total-11-');
        setWithoutMotorisationTotal12(0); removeItemFromSessionStorage('total-12-');
        setWithoutMotorisationTotal13(0); removeItemFromSessionStorage('total-13-');
        setWithoutMotorisationTotal14(0); removeItemFromSessionStorage('total-14-');
        setWithoutMotorisationTotal15(0); removeItemFromSessionStorage('total-15-');
        setWithoutMotorisationTotal16(0); removeItemFromSessionStorage('total-16-');
        setWithoutMotorisationTotal17(0); removeItemFromSessionStorage('total-17-');
        setWithoutMotorisationTotal18(0); removeItemFromSessionStorage('total-18-');
        setWithoutMotorisationTotal19(0); removeItemFromSessionStorage('total-19-');
        setWithoutMotorisationTotal20(0); removeItemFromSessionStorage('total-20-');
        setWithoutMotorisationTotal21(0); removeItemFromSessionStorage('total-21-');
        setWithoutMotorisationTotal22(0); removeItemFromSessionStorage('total-22-');
        setWithoutMotorisationTotal23(0); removeItemFromSessionStorage('total-23-');
        setWithoutMotorisationTotal24(0); removeItemFromSessionStorage('total-24-');
        setWithoutMotorisationTotal25(0); removeItemFromSessionStorage('total-25-');
        setWithoutMotorisationTotal26(0); removeItemFromSessionStorage('total-26-');
        setWithoutMotorisationTotal27(0); removeItemFromSessionStorage('total-27-');
        setWithoutMotorisationTotal28(0); removeItemFromSessionStorage('total-28-');
        setWithoutMotorisationTotal29(0); removeItemFromSessionStorage('total-29-');
        setWithoutMotorisationTotal30(0); removeItemFromSessionStorage('total-30-');


        setWidthxDepthRowIndex(null);
        // setWidthxDepthRowIndex=null repeat from 2nd
        setWidthxDepthRowIndex2(null);
        setWidthxDepthRowIndex3(null);
        setWidthxDepthRowIndex4(null);
        setWidthxDepthRowIndex5(null);
        setWidthxDepthRowIndex6(null);
        setWidthxDepthRowIndex7(null);
        setWidthxDepthRowIndex8(null);
        setWidthxDepthRowIndex9(null);
        setWidthxDepthRowIndex10(null);
        setWidthxDepthRowIndex11(null);
        setWidthxDepthRowIndex12(null);
        setWidthxDepthRowIndex13(null);
        setWidthxDepthRowIndex14(null);
        setWidthxDepthRowIndex15(null);
        setWidthxDepthRowIndex16(null);
        setWidthxDepthRowIndex17(null);
        setWidthxDepthRowIndex18(null);
        setWidthxDepthRowIndex19(null);
        setWidthxDepthRowIndex20(null);
        setWidthxDepthRowIndex21(null);
        setWidthxDepthRowIndex22(null);
        setWidthxDepthRowIndex23(null);
        setWidthxDepthRowIndex24(null);
        setWidthxDepthRowIndex25(null);
        setWidthxDepthRowIndex26(null);
        setWidthxDepthRowIndex27(null);
        setWidthxDepthRowIndex28(null);
        setWidthxDepthRowIndex29(null);
        setWidthxDepthRowIndex30(null);



        removeItemFromSessionStorage('widthxdepth-')
        // widthxdepth remove from session storage repeat from 2nd
        removeItemFromSessionStorage('widthxdepth-2-')
        removeItemFromSessionStorage('widthxdepth-3-')
        removeItemFromSessionStorage('widthxdepth-4-')
        removeItemFromSessionStorage('widthxdepth-5-')
        removeItemFromSessionStorage('widthxdepth-6-')
        removeItemFromSessionStorage('widthxdepth-7-')
        removeItemFromSessionStorage('widthxdepth-8-')
        removeItemFromSessionStorage('widthxdepth-9-')
        removeItemFromSessionStorage('widthxdepth-10-')
        removeItemFromSessionStorage('widthxdepth-11-')
        removeItemFromSessionStorage('widthxdepth-12-')
        removeItemFromSessionStorage('widthxdepth-13-')
        removeItemFromSessionStorage('widthxdepth-14-')
        removeItemFromSessionStorage('widthxdepth-15-')
        removeItemFromSessionStorage('widthxdepth-16-')
        removeItemFromSessionStorage('widthxdepth-17-')
        removeItemFromSessionStorage('widthxdepth-18-')
        removeItemFromSessionStorage('widthxdepth-19-')
        removeItemFromSessionStorage('widthxdepth-20-')
        removeItemFromSessionStorage('widthxdepth-21-')
        removeItemFromSessionStorage('widthxdepth-22-')
        removeItemFromSessionStorage('widthxdepth-23-')
        removeItemFromSessionStorage('widthxdepth-24-')
        removeItemFromSessionStorage('widthxdepth-25-')
        removeItemFromSessionStorage('widthxdepth-26-')
        removeItemFromSessionStorage('widthxdepth-27-')
        removeItemFromSessionStorage('widthxdepth-28-')
        removeItemFromSessionStorage('widthxdepth-29-')
        removeItemFromSessionStorage('widthxdepth-30-')


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

        removeItemFromSessionStorage('motor-type-multiplier-');
        removeItemFromSessionStorage('power-type-multiplier-');
        removeItemFromSessionStorage('receiver-type-multiplier-');
        removeItemFromSessionStorage('remote-type-multiplier-');
        removeItemFromSessionStorage('other-type-multiplier-');

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
        else if (elementNo === 5) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex5(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex5(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex5(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex5(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex5(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex5(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex5(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex5(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 6) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex6(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex6(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex6(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex6(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex6(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex6(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex6(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex6(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 7) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex7(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex7(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex7(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex7(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex7(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex7(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex7(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex7(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 8) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex8(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex8(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex8(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex8(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex8(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex8(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex8(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex8(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 9) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex9(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex9(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex9(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex9(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex9(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex9(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex9(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex9(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 10) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex10(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex10(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex10(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex10(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex10(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex10(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex10(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex10(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 11) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex11(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex11(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex11(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex11(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex11(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex11(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex11(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex11(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 12) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex12(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex12(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex12(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex12(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex12(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex12(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex12(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex12(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 13) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex13(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex13(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex13(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex13(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex13(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex13(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex13(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex13(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 14) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex14(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex14(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex14(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex14(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex14(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex14(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex14(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex14(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 15) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex15(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex15(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex15(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex15(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex15(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex15(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex15(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex15(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 16) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex16(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex16(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex16(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex16(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex16(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex16(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex16(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex16(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 17) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex17(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex17(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex17(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex17(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex17(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex17(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex17(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex17(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 18) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex18(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex18(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex18(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex18(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex18(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex18(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex18(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex18(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 19) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex19(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex19(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex19(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex19(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex19(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex19(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex19(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex19(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 20) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex20(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex20(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex20(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex20(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex20(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex20(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex20(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex20(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 21) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex21(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex21(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex21(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex21(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex21(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex21(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex21(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex21(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 22) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex22(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex22(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex22(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex22(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex22(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex22(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex22(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex22(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 23) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex23(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex23(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex23(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex23(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex23(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex23(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex23(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex23(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 24) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex24(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex24(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex24(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex24(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex24(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex24(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex24(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex24(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 25) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex25(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex25(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex25(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex25(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex25(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex25(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex25(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex25(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 26) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex26(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex26(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex26(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex26(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex26(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex26(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex26(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex26(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 27) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex27(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex27(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex27(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex27(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex27(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex27(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex27(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex27(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 28) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex28(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex28(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex28(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex28(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex28(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex28(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex28(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex28(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 29) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex29(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex29(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex29(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex29(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex29(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex29(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex29(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex29(
                    conservatoryWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            }
        }
        else if (elementNo === 30) {
            if (blindType === "Freehang") {
                setWidthxDepthRowIndex30(
                    freeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Freehang") {
                setWidthxDepthRowIndex30(
                    motorizedFreeHangWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Three Bars") {
                setWidthxDepthRowIndex30(
                    threeBarWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Motorized Three Bars") {
                setWidthxDepthRowIndex30(
                    motorizedThreeBarsWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit") {
                setWidthxDepthRowIndex30(
                    perfectFitWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Perfect Fit Venetian") {
                setWidthxDepthRowIndex30(
                    perfectFitVenetianWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Lantern") {
                setWidthxDepthRowIndex30(
                    lanternWidthxDepthColumnData.indexOf(width + "x" + depth)
                );
            } else if (blindType === "Conservatory Roofs") {
                setWidthxDepthRowIndex30(
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
            if (currentBlindWidth5 && currentBlindDepth5) { widthxDepthRowNumber(currentBlindType, currentBlindWidth5, currentBlindDepth5, 5) }
            if (currentBlindWidth6 && currentBlindDepth6) { widthxDepthRowNumber(currentBlindType, currentBlindWidth6, currentBlindDepth6, 6) }
            if (currentBlindWidth7 && currentBlindDepth7) { widthxDepthRowNumber(currentBlindType, currentBlindWidth7, currentBlindDepth7, 7) }
            if (currentBlindWidth8 && currentBlindDepth8) { widthxDepthRowNumber(currentBlindType, currentBlindWidth8, currentBlindDepth8, 8) }
            if (currentBlindWidth9 && currentBlindDepth9) { widthxDepthRowNumber(currentBlindType, currentBlindWidth9, currentBlindDepth9, 9) }
            if (currentBlindWidth10 && currentBlindDepth10) { widthxDepthRowNumber(currentBlindType, currentBlindWidth10, currentBlindDepth10, 10) }
            if (currentBlindWidth11 && currentBlindDepth11) { widthxDepthRowNumber(currentBlindType, currentBlindWidth11, currentBlindDepth11, 11) }
            if (currentBlindWidth12 && currentBlindDepth12) { widthxDepthRowNumber(currentBlindType, currentBlindWidth12, currentBlindDepth12, 12) }
            if (currentBlindWidth13 && currentBlindDepth13) { widthxDepthRowNumber(currentBlindType, currentBlindWidth13, currentBlindDepth13, 13) }
            if (currentBlindWidth14 && currentBlindDepth14) { widthxDepthRowNumber(currentBlindType, currentBlindWidth14, currentBlindDepth14, 14) }
            if (currentBlindWidth15 && currentBlindDepth15) { widthxDepthRowNumber(currentBlindType, currentBlindWidth15, currentBlindDepth15, 15) }
            if (currentBlindWidth16 && currentBlindDepth16) { widthxDepthRowNumber(currentBlindType, currentBlindWidth16, currentBlindDepth16, 16) }
            if (currentBlindWidth17 && currentBlindDepth17) { widthxDepthRowNumber(currentBlindType, currentBlindWidth17, currentBlindDepth17, 17) }
            if (currentBlindWidth18 && currentBlindDepth18) { widthxDepthRowNumber(currentBlindType, currentBlindWidth18, currentBlindDepth18, 18) }
            if (currentBlindWidth19 && currentBlindDepth19) { widthxDepthRowNumber(currentBlindType, currentBlindWidth19, currentBlindDepth19, 19) }
            if (currentBlindWidth20 && currentBlindDepth20) { widthxDepthRowNumber(currentBlindType, currentBlindWidth20, currentBlindDepth20, 20) }
            if (currentBlindWidth21 && currentBlindDepth21) { widthxDepthRowNumber(currentBlindType, currentBlindWidth21, currentBlindDepth21, 21) }
            if (currentBlindWidth22 && currentBlindDepth22) { widthxDepthRowNumber(currentBlindType, currentBlindWidth22, currentBlindDepth22, 22) }
            if (currentBlindWidth23 && currentBlindDepth23) { widthxDepthRowNumber(currentBlindType, currentBlindWidth23, currentBlindDepth23, 23) }
            if (currentBlindWidth24 && currentBlindDepth24) { widthxDepthRowNumber(currentBlindType, currentBlindWidth24, currentBlindDepth24, 24) }
            if (currentBlindWidth25 && currentBlindDepth25) { widthxDepthRowNumber(currentBlindType, currentBlindWidth25, currentBlindDepth25, 25) }
            if (currentBlindWidth26 && currentBlindDepth26) { widthxDepthRowNumber(currentBlindType, currentBlindWidth26, currentBlindDepth26, 26) }
            if (currentBlindWidth27 && currentBlindDepth27) { widthxDepthRowNumber(currentBlindType, currentBlindWidth27, currentBlindDepth27, 27) }
            if (currentBlindWidth28 && currentBlindDepth28) { widthxDepthRowNumber(currentBlindType, currentBlindWidth28, currentBlindDepth28, 28) }
            if (currentBlindWidth29 && currentBlindDepth29) { widthxDepthRowNumber(currentBlindType, currentBlindWidth29, currentBlindDepth29, 29) }
            if (currentBlindWidth30 && currentBlindDepth30) { widthxDepthRowNumber(currentBlindType, currentBlindWidth30, currentBlindDepth30, 30) }

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
                if (widthxDepthRowIndex5) {
                    setWithoutMotorisationTotal5(excelData[widthxDepthRowIndex5][bandType])
                    setItemValueInSessionStorageKey('total-5-', parseFloat(excelData[widthxDepthRowIndex5][bandType]))
                }
                if (widthxDepthRowIndex6) {
                    setWithoutMotorisationTotal6(excelData[widthxDepthRowIndex6][bandType])
                    setItemValueInSessionStorageKey('total-6-', parseFloat(excelData[widthxDepthRowIndex6][bandType]))
                }
                if (widthxDepthRowIndex7) {
                    setWithoutMotorisationTotal7(excelData[widthxDepthRowIndex7][bandType])
                    setItemValueInSessionStorageKey('total-7-', parseFloat(excelData[widthxDepthRowIndex7][bandType]))
                }
                if (widthxDepthRowIndex8) {
                    setWithoutMotorisationTotal8(excelData[widthxDepthRowIndex8][bandType])
                    setItemValueInSessionStorageKey('total-8-', parseFloat(excelData[widthxDepthRowIndex8][bandType]))
                }
                if (widthxDepthRowIndex9) {
                    setWithoutMotorisationTotal9(excelData[widthxDepthRowIndex9][bandType])
                    setItemValueInSessionStorageKey('total-9-', parseFloat(excelData[widthxDepthRowIndex9][bandType]))
                }
                if (widthxDepthRowIndex10) {
                    setWithoutMotorisationTotal10(excelData[widthxDepthRowIndex10][bandType])
                    setItemValueInSessionStorageKey('total-10-', parseFloat(excelData[widthxDepthRowIndex10][bandType]))
                }
                if (widthxDepthRowIndex11) {
                    setWithoutMotorisationTotal11(excelData[widthxDepthRowIndex11][bandType])
                    setItemValueInSessionStorageKey('total-11-', parseFloat(excelData[widthxDepthRowIndex11][bandType]))
                }
                if (widthxDepthRowIndex12) {
                    setWithoutMotorisationTotal12(excelData[widthxDepthRowIndex12][bandType])
                    setItemValueInSessionStorageKey('total-12-', parseFloat(excelData[widthxDepthRowIndex12][bandType]))
                }
                if (widthxDepthRowIndex13) {
                    setWithoutMotorisationTotal13(excelData[widthxDepthRowIndex13][bandType])
                    setItemValueInSessionStorageKey('total-13-', parseFloat(excelData[widthxDepthRowIndex13][bandType]))
                }
                if (widthxDepthRowIndex14) {
                    setWithoutMotorisationTotal14(excelData[widthxDepthRowIndex14][bandType])
                    setItemValueInSessionStorageKey('total-14-', parseFloat(excelData[widthxDepthRowIndex14][bandType]))
                }
                if (widthxDepthRowIndex15) {
                    setWithoutMotorisationTotal15(excelData[widthxDepthRowIndex15][bandType])
                    setItemValueInSessionStorageKey('total-15-', parseFloat(excelData[widthxDepthRowIndex15][bandType]))
                }
                if (widthxDepthRowIndex16) {
                    setWithoutMotorisationTotal16(excelData[widthxDepthRowIndex16][bandType])
                    setItemValueInSessionStorageKey('total-16-', parseFloat(excelData[widthxDepthRowIndex16][bandType]))
                }
                if (widthxDepthRowIndex17) {
                    setWithoutMotorisationTotal17(excelData[widthxDepthRowIndex17][bandType])
                    setItemValueInSessionStorageKey('total-17-', parseFloat(excelData[widthxDepthRowIndex17][bandType]))
                }
                if (widthxDepthRowIndex18) {
                    setWithoutMotorisationTotal18(excelData[widthxDepthRowIndex18][bandType])
                    setItemValueInSessionStorageKey('total-18-', parseFloat(excelData[widthxDepthRowIndex18][bandType]))
                }
                if (widthxDepthRowIndex19) {
                    setWithoutMotorisationTotal19(excelData[widthxDepthRowIndex19][bandType])
                    setItemValueInSessionStorageKey('total-19-', parseFloat(excelData[widthxDepthRowIndex19][bandType]))
                }
                if (widthxDepthRowIndex20) {
                    setWithoutMotorisationTotal20(excelData[widthxDepthRowIndex20][bandType])
                    setItemValueInSessionStorageKey('total-20-', parseFloat(excelData[widthxDepthRowIndex20][bandType]))
                }
                if (widthxDepthRowIndex21) {
                    setWithoutMotorisationTotal21(excelData[widthxDepthRowIndex21][bandType])
                    setItemValueInSessionStorageKey('total-21-', parseFloat(excelData[widthxDepthRowIndex21][bandType]))
                }
                if (widthxDepthRowIndex22) {
                    setWithoutMotorisationTotal22(excelData[widthxDepthRowIndex22][bandType])
                    setItemValueInSessionStorageKey('total-22-', parseFloat(excelData[widthxDepthRowIndex22][bandType]))
                }
                if (widthxDepthRowIndex23) {
                    setWithoutMotorisationTotal23(excelData[widthxDepthRowIndex23][bandType])
                    setItemValueInSessionStorageKey('total-23-', parseFloat(excelData[widthxDepthRowIndex23][bandType]))
                }
                if (widthxDepthRowIndex24) {
                    setWithoutMotorisationTotal24(excelData[widthxDepthRowIndex24][bandType])
                    setItemValueInSessionStorageKey('total-24-', parseFloat(excelData[widthxDepthRowIndex24][bandType]))
                }
                if (widthxDepthRowIndex25) {
                    setWithoutMotorisationTotal25(excelData[widthxDepthRowIndex25][bandType])
                    setItemValueInSessionStorageKey('total-25-', parseFloat(excelData[widthxDepthRowIndex25][bandType]))
                }
                if (widthxDepthRowIndex26) {
                    setWithoutMotorisationTotal26(excelData[widthxDepthRowIndex26][bandType])
                    setItemValueInSessionStorageKey('total-26-', parseFloat(excelData[widthxDepthRowIndex26][bandType]))
                }
                if (widthxDepthRowIndex27) {
                    setWithoutMotorisationTotal27(excelData[widthxDepthRowIndex27][bandType])
                    setItemValueInSessionStorageKey('total-27-', parseFloat(excelData[widthxDepthRowIndex27][bandType]))
                }
                if (widthxDepthRowIndex28) {
                    setWithoutMotorisationTotal28(excelData[widthxDepthRowIndex28][bandType])
                    setItemValueInSessionStorageKey('total-28-', parseFloat(excelData[widthxDepthRowIndex28][bandType]))
                }
                if (widthxDepthRowIndex29) {
                    setWithoutMotorisationTotal29(excelData[widthxDepthRowIndex29][bandType])
                    setItemValueInSessionStorageKey('total-29-', parseFloat(excelData[widthxDepthRowIndex29][bandType]))
                }
                if (widthxDepthRowIndex30) {
                    setWithoutMotorisationTotal30(excelData[widthxDepthRowIndex30][bandType])
                    setItemValueInSessionStorageKey('total-30-', parseFloat(excelData[widthxDepthRowIndex30][bandType]))
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

                <div className="flex gap-2">
                    <div className="w-full" >
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
                        <WidthAndDepthInputWrapper
                            elementNo={5}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth5}
                            currentBlindDepth={currentBlindDepth5}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={6}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth6}
                            currentBlindDepth={currentBlindDepth6}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={7}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth7}
                            currentBlindDepth={currentBlindDepth7}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={8}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth8}
                            currentBlindDepth={currentBlindDepth8}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={9}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth9}
                            currentBlindDepth={currentBlindDepth9}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={10}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth10}
                            currentBlindDepth={currentBlindDepth10}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={11}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth11}
                            currentBlindDepth={currentBlindDepth11}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={12}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth12}
                            currentBlindDepth={currentBlindDepth12}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={13}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth13}
                            currentBlindDepth={currentBlindDepth13}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={14}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth14}
                            currentBlindDepth={currentBlindDepth14}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={15}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth15}
                            currentBlindDepth={currentBlindDepth15}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={16}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth16}
                            currentBlindDepth={currentBlindDepth16}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={17}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth17}
                            currentBlindDepth={currentBlindDepth17}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={18}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth18}
                            currentBlindDepth={currentBlindDepth18}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={19}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth19}
                            currentBlindDepth={currentBlindDepth19}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={20}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth20}
                            currentBlindDepth={currentBlindDepth20}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={21}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth21}
                            currentBlindDepth={currentBlindDepth21}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={22}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth22}
                            currentBlindDepth={currentBlindDepth22}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={23}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth23}
                            currentBlindDepth={currentBlindDepth23}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={24}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth24}
                            currentBlindDepth={currentBlindDepth24}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={25}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth25}
                            currentBlindDepth={currentBlindDepth25}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={26}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth26}
                            currentBlindDepth={currentBlindDepth26}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={27}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth27}
                            currentBlindDepth={currentBlindDepth27}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={28}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth28}
                            currentBlindDepth={currentBlindDepth28}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={29}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth29}
                            currentBlindDepth={currentBlindDepth29}
                        />
                        <WidthAndDepthInputWrapper
                            elementNo={30}
                            handleWidthChangeInput={handleWidthChangeInput}
                            handleDepthChangeInput={handleDepthChangeInput}
                            blindTypeWidths={blindTypeWidths}
                            blindTypeDepths={blindTypeDepths}
                            currentBlindWidth={currentBlindWidth30}
                            currentBlindDepth={currentBlindDepth30}
                        />
                    </div>

                    {/* <button
                        onClick={calculate}
                        className="hidden sm:block shadow-xl w-12 mt-3 my-3 text-lg font-semibold p-2.5 break-words bg-sky-900 hover:bg-sky-800 text-white rounded-lg "
                    >
                        {isCalculating && (<>
                            <svg role="status" className="w-4 h-4  text-gray-200 animate-spin dark:text-white fill-sky-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </>
                        )}
                        <br />
                        C<br />A<br />L<br />C<br />U<br />L<br />A<br />T<br />E
                        <br /><br />—<br /><br />

                        C<br />A<br />L<br />C<br />U<br />L<br />A<br />T<br />E
                        <br /><br />—<br /><br />

                        {isCalculating && (<>
                            <svg role="status" className="w-4 h-4  text-gray-200 animate-spin dark:text-white fill-sky-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </>
                        )}

                        C<br />A<br />L<br />C<br />U<br />L<br />A<br />T<br />E

                        {isCalculating && (<>
                            <svg role="status" className="w-4 h-4  text-gray-200 animate-spin dark:text-white fill-sky-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </>
                        )}
                        <br /><br />—<br /><br />

                        C<br />A<br />L<br />C<br />U<br />L<br />A<br />T<br />E
                        <br /><br />—<br /><br />

                        C<br />A<br />L<br />C<br />U<br />L<br />A<br />T<br />E
                        <br /><br />—<br /><br />

                        C<br />A<br />L<br />C<br />U<br />L<br />A<br />T<br />E<br />
                        {isCalculating && (<>
                            <svg role="status" className="w-4 h-4  text-gray-200 animate-spin dark:text-white fill-sky-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </>
                        )}
                        <br />
                    </button> */}

                    {/* <div className="hidden sm:grid grid-cols-2 gap-2 mt-2 w-4/5">
                        <div className="">
                            <ShowTotalRightSideColumnBox elementNo={1} total={parseFloat(withoutMotorisationTotal).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={2} total={parseFloat(withoutMotorisationTotal2).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={3} total={parseFloat(withoutMotorisationTotal3).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={4} total={parseFloat(withoutMotorisationTotal4).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={5} total={parseFloat(withoutMotorisationTotal5).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={6} total={parseFloat(withoutMotorisationTotal6).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={7} total={parseFloat(withoutMotorisationTotal7).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={8} total={parseFloat(withoutMotorisationTotal8).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={9} total={parseFloat(withoutMotorisationTotal9).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={10} total={parseFloat(withoutMotorisationTotal10).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={11} total={parseFloat(withoutMotorisationTotal11).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={12} total={parseFloat(withoutMotorisationTotal12).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={13} total={parseFloat(withoutMotorisationTotal13).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={14} total={parseFloat(withoutMotorisationTotal14).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={15} total={parseFloat(withoutMotorisationTotal15).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={16} total={parseFloat(withoutMotorisationTotal16).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={17} total={parseFloat(withoutMotorisationTotal17).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={18} total={parseFloat(withoutMotorisationTotal18).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={19} total={parseFloat(withoutMotorisationTotal19).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={20} total={parseFloat(withoutMotorisationTotal20).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={21} total={parseFloat(withoutMotorisationTotal21).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={22} total={parseFloat(withoutMotorisationTotal22).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={23} total={parseFloat(withoutMotorisationTotal23).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={24} total={parseFloat(withoutMotorisationTotal24).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={25} total={parseFloat(withoutMotorisationTotal25).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={26} total={parseFloat(withoutMotorisationTotal26).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={27} total={parseFloat(withoutMotorisationTotal27).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={28} total={parseFloat(withoutMotorisationTotal28).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={29} total={parseFloat(withoutMotorisationTotal29).toFixed(2)} />
                            <ShowTotalRightSideColumnBox elementNo={30} total={parseFloat(withoutMotorisationTotal30).toFixed(2)} />
                        </div>
                        <div>
                            <ShowGrandTotalRightSideColumnBox elementNo={1} grandTotal={currentBlindWidth && currentBlindDepth ? parseFloat(
                                withoutMotorisationTotal
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={2} grandTotal={currentBlindWidth2 && currentBlindDepth2 ? parseFloat(
                                withoutMotorisationTotal2
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={3} grandTotal={currentBlindWidth3 && currentBlindDepth3 ? parseFloat(
                                withoutMotorisationTotal3
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={4} grandTotal={currentBlindWidth4 && currentBlindDepth4 ? parseFloat(
                                withoutMotorisationTotal4
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={5} grandTotal={currentBlindWidth5 && currentBlindDepth5 ? parseFloat(
                                withoutMotorisationTotal5
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={6} grandTotal={currentBlindWidth6 && currentBlindDepth6 ? parseFloat(
                                withoutMotorisationTotal6
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={7} grandTotal={currentBlindWidth7 && currentBlindDepth7 ? parseFloat(
                                withoutMotorisationTotal7
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={8} grandTotal={currentBlindWidth8 && currentBlindDepth8 ? parseFloat(
                                withoutMotorisationTotal8
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={9} grandTotal={currentBlindWidth9 && currentBlindDepth9 ? parseFloat(
                                withoutMotorisationTotal9
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={10} grandTotal={currentBlindWidth10 && currentBlindDepth10 ? parseFloat(
                                withoutMotorisationTotal10
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={11} grandTotal={currentBlindWidth11 && currentBlindDepth11 ? parseFloat(
                                withoutMotorisationTotal11
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={12} grandTotal={currentBlindWidth12 && currentBlindDepth12 ? parseFloat(
                                withoutMotorisationTotal12
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={13} grandTotal={currentBlindWidth13 && currentBlindDepth13 ? parseFloat(
                                withoutMotorisationTotal13
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={14} grandTotal={currentBlindWidth14 && currentBlindDepth14 ? parseFloat(
                                withoutMotorisationTotal14
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={15} grandTotal={currentBlindWidth15 && currentBlindDepth15 ? parseFloat(
                                withoutMotorisationTotal15
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={16} grandTotal={currentBlindWidth16 && currentBlindDepth16 ? parseFloat(
                                withoutMotorisationTotal16
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={17} grandTotal={currentBlindWidth17 && currentBlindDepth17 ? parseFloat(
                                withoutMotorisationTotal17
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={18} grandTotal={currentBlindWidth18 && currentBlindDepth18 ? parseFloat(
                                withoutMotorisationTotal18
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={19} grandTotal={currentBlindWidth19 && currentBlindDepth19 ? parseFloat(
                                withoutMotorisationTotal19
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={20} grandTotal={currentBlindWidth20 && currentBlindDepth20 ? parseFloat(
                                withoutMotorisationTotal20
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={21} grandTotal={currentBlindWidth21 && currentBlindDepth21 ? parseFloat(
                                withoutMotorisationTotal21
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={22} grandTotal={currentBlindWidth22 && currentBlindDepth22 ? parseFloat(
                                withoutMotorisationTotal22
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={23} grandTotal={currentBlindWidth23 && currentBlindDepth23 ? parseFloat(
                                withoutMotorisationTotal23
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={24} grandTotal={currentBlindWidth24 && currentBlindDepth24 ? parseFloat(
                                withoutMotorisationTotal24
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={25} grandTotal={currentBlindWidth25 && currentBlindDepth25 ? parseFloat(
                                withoutMotorisationTotal25
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={26} grandTotal={currentBlindWidth26 && currentBlindDepth26 ? parseFloat(
                                withoutMotorisationTotal26
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={27} grandTotal={currentBlindWidth27 && currentBlindDepth27 ? parseFloat(
                                withoutMotorisationTotal27
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={28} grandTotal={currentBlindWidth28 && currentBlindDepth28 ? parseFloat(
                                withoutMotorisationTotal28
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={29} grandTotal={currentBlindWidth29 && currentBlindDepth29 ? parseFloat(
                                withoutMotorisationTotal29
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />
                            <ShowGrandTotalRightSideColumnBox elementNo={30} grandTotal={currentBlindWidth30 && currentBlindDepth30 ? parseFloat(
                                withoutMotorisationTotal30
                                + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                            ).toFixed(2) : '0.00'} />

                        </div>
                    </div> */}

                </div>

                {/* End of width and depth input -> div wrapper */}

                <button
                    className="mt-3 w-full flex mx-auto  text-gray-500 bg-lime-100 px-3 py-2 rounded-lg text-base justify-center font-semibold text-center"
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
                    <div className="max-w-3xl">
                        <div className="mt-2 flex items-center gap-3 w-full">
                            <select
                                onChange={handleMotorTypeChangeInput}
                                value={currentMotorType}
                                className="grow h-10 w-full rounded-md p-1 pl-2 border-r-8 border-white placeholder-gray-700"
                            >
                                <option value={""}> ---Select Motor Type---</option>
                                {motorTypes.map((motor, index) => (
                                    <option value={motor} key={index}>
                                        {motor}
                                    </option>
                                ))}
                            </select>

                            {
                                currentMotorType &&
                                <div className="flex items-center mt-">
                                    <div class="flex my-1 ">
                                        <span class="inline-flex items-center px-3 text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 ">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg> */}
                                            Qty
                                        </span>
                                        <input type="number" id="power_multiple"
                                            class="w-16 sm:w-20 rounded-none rounded-r bg-gray-50 border text-gray-900 focus:outline-none block flex-1 min-w-0 text-sm border-gray-300 p-2.5 "
                                            placeholder="1" min="1"
                                            value={selectedMotorTypeMultiplier}
                                            onChange={selectedMotorTypeMultiplierHandler}
                                        />
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="mt-2 flex items-center gap-3 w-full">
                            <select
                                onChange={handlePowerTypeChangeInput}
                                value={currentPowerType}
                                className="grow h-10 mt-2 w-full rounded-md p-1 pl-2 border-r-8 border-white placeholder-gray-700"
                            >
                                <option value={""}> ---Select Power Type---</option>
                                {powerOptions.map((power, index) => (
                                    <option value={power} key={index}>
                                        {power}
                                    </option>
                                ))}
                            </select>
                            {
                                currentPowerType &&
                                <div className="flex items-center mt-2">
                                    <div class="flex my-1 ">
                                        <span class="inline-flex items-center px-3 text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 ">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg> */}
                                            Qty
                                        </span>
                                        <input type="number" id="power_multiple"
                                            class="w-16 sm:w-20 rounded-none rounded-r bg-gray-50 border text-gray-900 focus:outline-none block flex-1 min-w-0 text-sm border-gray-300 p-2.5 "
                                            placeholder="1" min="1"
                                            value={selectedPowerTypeMultiplier}
                                            onChange={selectedPowerTypeMultiplierHandler}
                                        />
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="mt-2 flex items-center gap-3 w-full">
                            <select
                                onChange={handleReceiverTypeChangeInput}
                                value={currentReceiverType}
                                className="grow h-10 mt-2 w-full rounded-md p-1 pl-2 border-r-8 border-white placeholder-gray-700"
                            >
                                <option value={""}> ---Select Receiver Type---</option>
                                {receiverOptions.map((receiver, index) => (
                                    <option value={receiver} key={index}>
                                        {receiver}
                                    </option>
                                ))}
                            </select>
                            {
                                currentReceiverType &&
                                <div className="flex items-center mt-2">
                                    <div class="flex my-1 ">
                                        <span class="inline-flex items-center px-3 text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 ">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg> */}
                                            Qty
                                        </span>
                                        <input type="number" id="receiver_multiple"
                                            class="w-16 sm:w-20 rounded-none rounded-r bg-gray-50 border text-gray-900 focus:outline-none block flex-1 min-w-0 text-sm border-gray-300 p-2.5 "
                                            placeholder="1" min="1"
                                            value={selectedReceiverTypeMultiplier}
                                            onChange={selectedReceiverTypeMultiplierHandler}
                                        />
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="mt-2 flex items-center gap-3 w-full">
                            <select
                                onChange={handleRemoteTypeChangeInput}
                                value={currentRemoteType}
                                className="grow h-10 mt-2 w-full rounded-md p-1 pl-2 border-r-8 border-white placeholder-gray-700"
                            >
                                <option value={""}> ---Select Remote Type---</option>
                                {remoteOptions.map((remote, index) => (
                                    <option value={remote} key={index}>
                                        {remote}
                                    </option>
                                ))}
                            </select>
                            {
                                currentRemoteType &&
                                <div className="flex items-center mt-2">
                                    <div class="flex my-1 ">
                                        <span class="inline-flex items-center px-3 text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 ">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg> */}
                                            Qty
                                        </span>
                                        <input type="number" id="remote_multiple"
                                            class="w-16 sm:w-20 rounded-none rounded-r bg-gray-50 border text-gray-900 focus:outline-none block flex-1 min-w-0 text-sm border-gray-300 p-2.5 "
                                            placeholder="1" min="1"
                                            value={selectedRemoteTypeMultiplier}
                                            onChange={selectedRemoteTypeMultiplierHandler}
                                        />
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="mt-2 flex items-center gap-3 w-full">
                            <select
                                onChange={handleOtherTypeChangeInput}
                                value={currentOtherType}
                                className="grow h-10 mt-2 w-full rounded-md p-1 pl-2 border-r-8 border-white placeholder-gray-700"
                            >
                                <option value={""}> ---Select Other Type---</option>
                                {otherOptions.map((option, index) => (
                                    <option value={option} key={index}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            {
                                currentOtherType &&
                                <div className="flex items-center mt-2">
                                    <div class="flex my-1 ">
                                        <span class="inline-flex items-center px-3 text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 ">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg> */}
                                            Qty
                                        </span>
                                        <input type="number" id="other_multiple"
                                            class="w-16 sm:w-20 rounded-none rounded-r bg-gray-50 border text-gray-900 focus:outline-none block flex-1 min-w-0 text-sm border-gray-300 p-2.5 "
                                            placeholder="1" min="1"
                                            value={selectedOtherTypeMultiplier}
                                            onChange={selectedOtherTypeMultiplierHandler}
                                        />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                )}

                {/*  sm:hidden  */}
                <button
                    onClick={() => { calculate(); }}
                    className="block w-full my-2 py-2  bg-sky-900 text-white rounded-lg  font-normal"
                >
                    <div className="flex justify-center items-center text-sm sm:text-base  gap-4">
                        {isCalculating && (
                            <svg role="status" className="w-5 h-5  text-gray-200 animate-spin dark:text-white fill-sky-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        )}
                        {isCalculating ? "C A L C U L A T I N G" : "C A L C U L A T E"}
                    </div>
                </button>

                {
                    motorisationToggle &&
                    <div className="px-2 flex flex-col justify-center rounded shadow-sm mt-2.5 text-center bg-sky-100">
                        <h1 className="p-2 font-semibold text-lg text-sky-900 border-b-2  border-sky-900">
                            MOTORISATION
                        </h1>


                        <div className="grid grid-cols-3 px-2 justify-between text-center">
                            <h1 className="grow p-2 font-semibold text-base sm:text-md text-sky-900">
                                Motor
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                £ {parseFloat(selectedMotorTypeExcelValue).toFixed(2)}
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                {
                                    selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ?
                                        <>
                                            £ {parseFloat(selectedMotorTypeExcelValue * selectedMotorTypeMultiplier).toFixed(2)}
                                        </>
                                        :
                                        <>
                                            £ {parseFloat(selectedMotorTypeExcelValue).toFixed(2)}
                                        </>
                                }
                            </h1>
                        </div>
                        <div className="grid grid-cols-3 px-2 justify-between text-center">
                            <h1 className="grow p-2 font-semibold text-base sm:text-md text-sky-900">
                                Power
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                £ {parseFloat(selectedPowerTypeExcelValue).toFixed(2)}
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                {
                                    selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ?
                                        <>
                                            £ {parseFloat(selectedPowerTypeExcelValue * selectedPowerTypeMultiplier).toFixed(2)}
                                        </>
                                        :
                                        <>
                                            £ {parseFloat(selectedPowerTypeExcelValue).toFixed(2)}
                                        </>
                                }
                            </h1>
                        </div>
                        <div className="grid grid-cols-3 px-2 justify-between text-center">
                            <h1 className="grow p-2 font-semibold text-base sm:text-md text-sky-900">
                                Receiver
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                £ {parseFloat(selectedReceiverTypeExcelValue).toFixed(2)}
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                {
                                    selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ?
                                        <>
                                            £ {parseFloat(selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier).toFixed(2)}
                                        </>
                                        :
                                        <>
                                            £ {parseFloat(selectedReceiverTypeExcelValue).toFixed(2)}
                                        </>
                                }
                            </h1>
                        </div>
                        <div className="grid grid-cols-3 px-2 justify-between text-center">
                            <h1 className="grow p-2 font-semibold text-base sm:text-md text-sky-900">
                                Remote
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                £ {parseFloat(selectedRemoteTypeExcelValue).toFixed(2)}
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                {
                                    selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ?
                                        <>
                                            £ {parseFloat(selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier).toFixed(2)}
                                        </>
                                        :
                                        <>
                                            £ {parseFloat(selectedRemoteTypeExcelValue).toFixed(2)}
                                        </>
                                }
                            </h1>
                        </div>
                        <div className="grid grid-cols-3 px-2 justify-between text-center">
                            <h1 className="grow p-2 font-semibold text-base sm:text-md text-sky-900">
                                Other
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                £ {parseFloat(selectedOtherTypeExcelValue).toFixed(2)}
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                {
                                    selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ?
                                        <>
                                            £ {parseFloat(selectedOtherTypeExcelValue * selectedOtherTypeMultiplier).toFixed(2)}
                                        </>
                                        :
                                        <>
                                            £ {parseFloat(selectedOtherTypeExcelValue).toFixed(2)}
                                        </>
                                }
                            </h1>
                        </div>

                        <div className="grid grid-cols-3 px-2 mb-2 justify-between text-center border-t-2  border-sky-900">
                            <h1 className="grow break-words p-2 font-semibold text-xs sm:text-md text-sky-900">
                                MOTORISATION TOTAL
                            </h1>
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
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
                            <h1 className="p-2 font-semibold text-base sm:text-md text-sky-900">
                                £ {
                                    parseFloat(
                                        (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                        +
                                        (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                        +
                                        (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                        +
                                        (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                        +
                                        (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                                    ).toFixed(2)
                                }
                            </h1>
                        </div>
                    </div>
                }

                <div className=" flex flex-col px-2  justify-center rounded shadow-sm mt-2.5 text-center bg-sky-100">
                    <h1 className="p-2 pt-3 font-semibold text-sky-900 border-b-2  border-sky-900">
                        B L I N D S
                    </h1>
                    <div className="">

                        <ShowBothTotalBelowButton elementNo={1} hideBottomBorder={false} total={withoutMotorisationTotal} grandTotal={currentBlindWidth && currentBlindDepth ? parseFloat(
                            withoutMotorisationTotal
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={2} total={withoutMotorisationTotal2} grandTotal={currentBlindWidth2 && currentBlindDepth2 ? parseFloat(
                            withoutMotorisationTotal2
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={3} total={withoutMotorisationTotal3} grandTotal={currentBlindWidth3 && currentBlindDepth3 ? parseFloat(
                            withoutMotorisationTotal3
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={4} total={withoutMotorisationTotal4} grandTotal={currentBlindWidth4 && currentBlindDepth4 ? parseFloat(
                            withoutMotorisationTotal4
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={5} total={withoutMotorisationTotal5} grandTotal={currentBlindWidth5 && currentBlindDepth5 ? parseFloat(
                            withoutMotorisationTotal5
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={6} total={withoutMotorisationTotal6} grandTotal={currentBlindWidth6 && currentBlindDepth6 ? parseFloat(
                            withoutMotorisationTotal6
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={7} total={withoutMotorisationTotal7} grandTotal={currentBlindWidth7 && currentBlindDepth7 ? parseFloat(
                            withoutMotorisationTotal7
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={8} total={withoutMotorisationTotal8} grandTotal={currentBlindWidth8 && currentBlindDepth8 ? parseFloat(
                            withoutMotorisationTotal8
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={9} total={withoutMotorisationTotal9} grandTotal={currentBlindWidth9 && currentBlindDepth9 ? parseFloat(
                            withoutMotorisationTotal9
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={10} total={withoutMotorisationTotal10} grandTotal={currentBlindWidth10 && currentBlindDepth10 ? parseFloat(
                            withoutMotorisationTotal10
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={11} total={withoutMotorisationTotal11} grandTotal={currentBlindWidth11 && currentBlindDepth11 ? parseFloat(
                            withoutMotorisationTotal11
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={12} total={withoutMotorisationTotal12} grandTotal={currentBlindWidth12 && currentBlindDepth12 ? parseFloat(
                            withoutMotorisationTotal12
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={13} total={withoutMotorisationTotal13} grandTotal={currentBlindWidth13 && currentBlindDepth13 ? parseFloat(
                            withoutMotorisationTotal13
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={14} total={withoutMotorisationTotal14} grandTotal={currentBlindWidth14 && currentBlindDepth14 ? parseFloat(
                            withoutMotorisationTotal14
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={15} total={withoutMotorisationTotal15} grandTotal={currentBlindWidth15 && currentBlindDepth15 ? parseFloat(
                            withoutMotorisationTotal15
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={16} total={withoutMotorisationTotal16} grandTotal={currentBlindWidth16 && currentBlindDepth16 ? parseFloat(
                            withoutMotorisationTotal16
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={17} total={withoutMotorisationTotal17} grandTotal={currentBlindWidth17 && currentBlindDepth17 ? parseFloat(
                            withoutMotorisationTotal17
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={18} total={withoutMotorisationTotal18} grandTotal={currentBlindWidth18 && currentBlindDepth18 ? parseFloat(
                            withoutMotorisationTotal18
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={19} total={withoutMotorisationTotal19} grandTotal={currentBlindWidth19 && currentBlindDepth19 ? parseFloat(
                            withoutMotorisationTotal19
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={20} total={withoutMotorisationTotal20} grandTotal={currentBlindWidth20 && currentBlindDepth20 ? parseFloat(
                            withoutMotorisationTotal20
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={21} total={withoutMotorisationTotal21} grandTotal={currentBlindWidth21 && currentBlindDepth21 ? parseFloat(
                            withoutMotorisationTotal21
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={22} total={withoutMotorisationTotal22} grandTotal={currentBlindWidth22 && currentBlindDepth22 ? parseFloat(
                            withoutMotorisationTotal22
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={23} total={withoutMotorisationTotal23} grandTotal={currentBlindWidth23 && currentBlindDepth23 ? parseFloat(
                            withoutMotorisationTotal23
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={24} total={withoutMotorisationTotal24} grandTotal={currentBlindWidth24 && currentBlindDepth24 ? parseFloat(
                            withoutMotorisationTotal24
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={25} total={withoutMotorisationTotal25} grandTotal={currentBlindWidth25 && currentBlindDepth25 ? parseFloat(
                            withoutMotorisationTotal25
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={26} total={withoutMotorisationTotal26} grandTotal={currentBlindWidth26 && currentBlindDepth26 ? parseFloat(
                            withoutMotorisationTotal26
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={27} total={withoutMotorisationTotal27} grandTotal={currentBlindWidth27 && currentBlindDepth27 ? parseFloat(
                            withoutMotorisationTotal27
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={28} total={withoutMotorisationTotal28} grandTotal={currentBlindWidth28 && currentBlindDepth28 ? parseFloat(
                            withoutMotorisationTotal28
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                        <ShowBothTotalBelowButton elementNo={29} total={withoutMotorisationTotal29} grandTotal={currentBlindWidth29 && currentBlindDepth29 ? parseFloat(
                            withoutMotorisationTotal29
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />


                        <ShowBothTotalBelowButton hideBottomBorder={true} elementNo={30} total={withoutMotorisationTotal30} grandTotal={currentBlindWidth30 && currentBlindDepth30 ? parseFloat(
                            withoutMotorisationTotal30
                            + (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                            + (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                            + (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                            + (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                            + (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                        ).toFixed(2) : '0.00'} />

                    </div>
                </div>

                <div className=" px-2  justify-center rounded shadow-sm mt-2.5 text-center bg-sky-100">
                    <h1 className="p-2 pt-3 font-semibold text-sky-900 ">
                        F I N A L &nbsp; P R I C E
                    </h1>
                    <div className="">
                        {/* <div className={`grid grid-cols-2 px-2 p-1 m-1 border-b-2 border-b-sky-900`}> */}
                        <div className="flex items-center justify-between ">
                            <h1 className="p-2 font- text-xs sm:text-sm text-sky-900">
                                All Total
                            </h1>
                            <h1 className="p-2 font-medium text-xs sm:text-sm text-sky-900">
                                £ {parseFloat(withoutMotorisationTotal + withoutMotorisationTotal2 + withoutMotorisationTotal3 + withoutMotorisationTotal4 + withoutMotorisationTotal5 + withoutMotorisationTotal6 + withoutMotorisationTotal7 + withoutMotorisationTotal8 + withoutMotorisationTotal9 + withoutMotorisationTotal10
                                    + withoutMotorisationTotal11 + withoutMotorisationTotal12 + withoutMotorisationTotal13 + withoutMotorisationTotal14 + withoutMotorisationTotal15 + withoutMotorisationTotal16 + withoutMotorisationTotal17 + withoutMotorisationTotal18 + withoutMotorisationTotal19 + withoutMotorisationTotal20
                                    + withoutMotorisationTotal21 + withoutMotorisationTotal22 + withoutMotorisationTotal23 + withoutMotorisationTotal24 + withoutMotorisationTotal25 + withoutMotorisationTotal26 + withoutMotorisationTotal27 + withoutMotorisationTotal28 + withoutMotorisationTotal29 + withoutMotorisationTotal30
                                ).toFixed(2)
                                }
                            </h1>
                        </div>
                        <div className="flex items-center justify-between ">
                            <h1 className="p-2 font-medium text-xs sm:text-sm text-sky-900">
                                Motorization TOTAL
                            </h1>
                            <h1 className="p-2 font-medium text-xs sm:text-sm text-sky-900">
                                {/* motorization total */}
                                £ {
                                    parseFloat(
                                        (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                        +
                                        (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                        +
                                        (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                        +
                                        (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                        +
                                        (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                                    ).toFixed(2)
                                }
                            </h1>
                        </div>
                        {/* </div> */}
                        {/* <div className={`grid grid-cols-2 px-2 p-1 m-1`}> */}
                        <div className="flex items-center justify-between border-b-2 border-b-sky-900">
                            <h1 className="p-2 font-medium text-xs sm:text-sm text-sky-900">
                                Final Price
                            </h1>
                            <h1 className="p-2 font-medium text-xs sm:text-sm text-sky-900">
                                £{
                                    parseFloat(
                                        (withoutMotorisationTotal + withoutMotorisationTotal2 + withoutMotorisationTotal3 + withoutMotorisationTotal4 + withoutMotorisationTotal5 + withoutMotorisationTotal6 + withoutMotorisationTotal7 + withoutMotorisationTotal8 + withoutMotorisationTotal9 + withoutMotorisationTotal10
                                            + withoutMotorisationTotal11 + withoutMotorisationTotal12 + withoutMotorisationTotal13 + withoutMotorisationTotal14 + withoutMotorisationTotal15 + withoutMotorisationTotal16 + withoutMotorisationTotal17 + withoutMotorisationTotal18 + withoutMotorisationTotal19 + withoutMotorisationTotal20
                                            + withoutMotorisationTotal21 + withoutMotorisationTotal22 + withoutMotorisationTotal23 + withoutMotorisationTotal24 + withoutMotorisationTotal25 + withoutMotorisationTotal26 + withoutMotorisationTotal27 + withoutMotorisationTotal28 + withoutMotorisationTotal29 + withoutMotorisationTotal30
                                            +
                                            (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                            +
                                            (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                            +
                                            (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                            +
                                            (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                            +
                                            (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                                        )
                                    ).toFixed(2)
                                }
                            </h1>
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="p-2 font-extrabold text-xs sm:text-sm text-sky-900">
                                Final Price with TAX
                            </h1>
                            <h1 className="p-2 font-extrabold text-xs sm:text-sm text-sky-900">
                                £{
                                    parseFloat(
                                        (withoutMotorisationTotal + withoutMotorisationTotal2 + withoutMotorisationTotal3 + withoutMotorisationTotal4 + withoutMotorisationTotal5 + withoutMotorisationTotal6 + withoutMotorisationTotal7 + withoutMotorisationTotal8 + withoutMotorisationTotal9 + withoutMotorisationTotal10
                                            + withoutMotorisationTotal11 + withoutMotorisationTotal12 + withoutMotorisationTotal13 + withoutMotorisationTotal14 + withoutMotorisationTotal15 + withoutMotorisationTotal16 + withoutMotorisationTotal17 + withoutMotorisationTotal18 + withoutMotorisationTotal19 + withoutMotorisationTotal20
                                            + withoutMotorisationTotal21 + withoutMotorisationTotal22 + withoutMotorisationTotal23 + withoutMotorisationTotal24 + withoutMotorisationTotal25 + withoutMotorisationTotal26 + withoutMotorisationTotal27 + withoutMotorisationTotal28 + withoutMotorisationTotal29 + withoutMotorisationTotal30
                                            +
                                            (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                            +
                                            (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                            +
                                            (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                            +
                                            (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                            +
                                            (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                                        )
                                        +
                                        ((
                                            (withoutMotorisationTotal + withoutMotorisationTotal2 + withoutMotorisationTotal3 + withoutMotorisationTotal4 + withoutMotorisationTotal5 + withoutMotorisationTotal6 + withoutMotorisationTotal7 + withoutMotorisationTotal8 + withoutMotorisationTotal9 + withoutMotorisationTotal10
                                                + withoutMotorisationTotal11 + withoutMotorisationTotal12 + withoutMotorisationTotal13 + withoutMotorisationTotal14 + withoutMotorisationTotal15 + withoutMotorisationTotal16 + withoutMotorisationTotal17 + withoutMotorisationTotal18 + withoutMotorisationTotal19 + withoutMotorisationTotal20
                                                + withoutMotorisationTotal21 + withoutMotorisationTotal22 + withoutMotorisationTotal23 + withoutMotorisationTotal24 + withoutMotorisationTotal25 + withoutMotorisationTotal26 + withoutMotorisationTotal27 + withoutMotorisationTotal28 + withoutMotorisationTotal29 + withoutMotorisationTotal30
                                                +
                                                (selectedMotorTypeMultiplier && selectedMotorTypeExcelValue >= 0 ? (selectedMotorTypeExcelValue * selectedMotorTypeMultiplier) : selectedMotorTypeExcelValue)
                                                +
                                                (selectedPowerTypeMultiplier && selectedPowerTypeExcelValue >= 0 ? (selectedPowerTypeExcelValue * selectedPowerTypeMultiplier) : selectedPowerTypeExcelValue)
                                                +
                                                (selectedReceiverTypeMultiplier && selectedReceiverTypeExcelValue >= 0 ? (selectedReceiverTypeExcelValue * selectedReceiverTypeMultiplier) : selectedReceiverTypeExcelValue)
                                                +
                                                (selectedRemoteTypeMultiplier && selectedRemoteTypeExcelValue >= 0 ? (selectedRemoteTypeExcelValue * selectedRemoteTypeMultiplier) : selectedRemoteTypeExcelValue)
                                                +
                                                (selectedOtherTypeMultiplier && selectedOtherTypeExcelValue >= 0 ? (selectedOtherTypeExcelValue * selectedOtherTypeMultiplier) : selectedOtherTypeExcelValue)
                                            ) * 20
                                        ) / 100)
                                    ).toFixed(2)
                                }
                            </h1>
                        </div>
                        {/* </div> */}
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
