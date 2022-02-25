import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className='h-screen bg-emerald-400 relative overflow-hidden '>

            <Navbar />

            <img className='header_wave' src="images/header/wave-1.svg" alt="" />
            <img className='header_wave' src="images/header/wave-2.svg" alt="" />
            <img className='header_wave' src="images/header/wave-3.svg" alt="" />
            {/* <img className='header_wave' src="images/header/wave-3.svg" alt="" /> */}
            <img className='header_wave absolute left-0 bottom-0 ' src="wave-5.svg" alt="" />
        </header>
    )
}

export default Header