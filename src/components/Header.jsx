import React from 'react'

const Header = () => {
  return (
    <header className='h-screen bg-emerald-400 relative overflow-hidden '>
    <img src="images/header/wave-1.svg" alt="" />
    <img src="images/header/wave-2.svg" alt="" />
    <img src="images/header/wave-3.svg" alt="" />
    <img src="images/header/wave-4.svg" alt="" />
    <img className='absolute left-0 bottom-0 ' src="wave-5.svg" alt="" />
  </header>
  )
}

export default Header