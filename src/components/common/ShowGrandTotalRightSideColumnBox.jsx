import React from 'react'

const ShowGrandTotalRightSideColumnBox = ({elementNo, grandTotal}) => {
    return (
        <div className="h-16 pt-1 mb-2 space-x-2 bg-white text-lime-700 rounded-md text-center font-semibold text-base">
            GRAND TOTAL{/*  {elementNo}  */}<br />
            £ {grandTotal}
        </div>
    )
}

export default ShowGrandTotalRightSideColumnBox