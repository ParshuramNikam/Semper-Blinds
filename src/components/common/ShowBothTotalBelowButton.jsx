import React from "react";

const ShowBothTotalBelowButton = ({
  total,
  elementNo,
  grandTotal,
  hideBottomBorder,
}) => {
  return (
    <div
      className={`grid grid-cols-2 px-2 p-1 m-1 ${
        !hideBottomBorder ? " border-b-2  border-sky-900" : ""
      }`}
    >
      <div className="flex items-start border-r-2 border-r-sky-900 float-left">
        <h1 className="p-2 font-semibold text-xs sm:text-sm text-sky-900">
          TOTAL {elementNo}
        </h1>
        <h1 className="p-2 font-semibold text-xs sm:text-sm text-sky-900">
          £ {total ? parseFloat(total).toFixed(2) : "0.00"}
        </h1>
      </div>
      <div className="flex items-end float-right">
        <h1 className="p-2 font-semibold text-xs sm:text-sm text-sky-900">
          With Motorization
        </h1>
        <h1 className="p-2 font-semibold text-xs sm:text-sm text-sky-900">
          £ {grandTotal ? parseFloat(grandTotal).toFixed(2) : "0.00"}
        </h1>
      </div>
    </div>
  );
};

export default ShowBothTotalBelowButton;
