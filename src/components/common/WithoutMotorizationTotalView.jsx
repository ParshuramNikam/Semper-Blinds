import React from 'react'

const WithoutMotorizationTotalView = ({elementNo, total, grandTotal}) => {
    return (
        <div className="flex px-2 justify-between text-center">
            <h1 className="p-2 font-semibold text-xs sm:text-sm text-sky-900">
                TOTAL 
            </h1>
            <h1 className="p-2 font-semibold text-xs sm:text-sm text-sky-900">
                £ {withoutMotorisationTotal ? parseFloat(withoutMotorisationTotal).toFixed(2) : "0.00"}
            </h1>
        </div>
    )
}

export default WithoutMotorizationTotalView