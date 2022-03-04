import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div class=" absolute left-0 right-0 top-0 bottom-0 m-0 overflow-hiden">
    <Navbar></Navbar>
    <div class="mid-text absolute z-50 top-1/2 left-1/2 ">
        <h2 class="text-white font-bold text-5xl">Wavy Animation</h2>
    </div>
    <div class="line line-1 z-30 opacity-50 absolute w-screen overflow-hidden h-full bg-emerald-400">
        <div class="wave wave1 absolute left-0  h-full  "></div>
    </div>
    <div class="line line-2 z-20 opacity-70 absolute w-screen overflow-hidden h-full bg-emerald-400">
        <div class="wave wave2 absolute left-0  h-full "></div>
    </div>
    <div class="line line-3 z-10  absolute w-screen overflow-hidden h-full bg-emerald-400">
        <div class="wave wave3 absolute left-0  h-full "></div>
    </div>
</div> 
  )}

export default Header