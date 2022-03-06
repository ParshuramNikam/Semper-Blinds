import React from 'react'

const SectionHeading = ({ heading, id }) => {
    return (
        <h1 className="text-4xl md:text-5xl text-center font-semibold mt-5 mb-5 text-blue">
            <span className='heading border-b-4 border-b-blue px-2.5 w-max'>{heading}</span>
        </h1>
    )
}

export default SectionHeading