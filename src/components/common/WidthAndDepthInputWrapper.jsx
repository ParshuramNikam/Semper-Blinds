import React from 'react'

const WidthAndDepthInputWrapper = ({elementNo, handleWidthChangeInput, handleDepthChangeInput, blindTypeWidths, blindTypeDepths, currentBlindWidth, currentBlindDepth }) => {
    return (
        <div className="grid grid-cols-2 mt-2 gap-2 ">
            <div>
                <p className=" pt-1 bg-white text-lime-700 rounded-t-md text-center font-semibold text-base">
                    WIDTH {elementNo}
                </p>
                <select
                    onChange={(e) => handleWidthChangeInput(e, elementNo)}
                    value={currentBlindWidth}
                    className=" w-full h-10 rounded-b-md  placeholder-lime-700 p-1 pl-2 border-r-8 border-white font-medium"
                >
                    <option className="" value={""}>
                        --Select Width--
                    </option>
                    {blindTypeWidths.map((width, index) => (
                        <option value={width} key={index}>
                            {width}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <p className=" pt-1 bg-white text-lime-700 rounded-t-md text-center font-semibold text-base">
                    DEPTH {elementNo}
                </p>
                <select
                    onChange={(e) => handleDepthChangeInput(e, elementNo)}
                    value={currentBlindDepth}
                    className=" w-full h-10 rounded-b-md  placeholder-lime-700 p-1 pl-2 border-r-8 border-white font-medium"
                >
                    <option className="text-lime-700" value={""}>
                        --Select Depth--
                    </option>
                    {blindTypeDepths.map((depth, index) => (
                        <option value={depth} key={index}>
                            {depth}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default WidthAndDepthInputWrapper