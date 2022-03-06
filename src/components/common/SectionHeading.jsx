import React from 'react'

const SectionHeading = ({ heading, id }) => {
    return (
        <h1 className="text-4xl md:text-5xl text-center font-semibold mt-10 mb-5 text-blue">
            <span className='heading border-b-4 border-b-green-500 text-green-500 py-1 px-3 w-max'>{heading}</span>
        </h1>
    )
}

export default SectionHeading