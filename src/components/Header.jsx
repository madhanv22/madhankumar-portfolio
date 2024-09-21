import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="flex sm:flex-row justify-between px-5 py-3 header-bg-secondary w-full fixed top-0 left-0 z-50">
    <a className="font-bold text-black mb-2 sm:mb-0 font-hero-font text-2xl" href="#">Madhan</a>
    
    {/* header */}
    <nav className='hidden md:block'>
      <ul className="flex flex-wrap justify-center sm:justify-end text-white space-x-4 w-full sm:w-auto">
        <li><a href="/">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#skillsec">Skills</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#resume">Resume</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>

    {/* Navbar */}
    {toggleMenu && (
      <nav className='md:hidden'>
        <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#experience">Experience</a></li>
          <li><a href="/#skillsec">Skills</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#resume">Resume</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>
    )}
    <button 
      onClick={() => setToggleMenu(!toggleMenu)} className='md:hidden'>
        <Bars3Icon className='text-white size-6' />
    </button>
  </header>
  )
}

export default Header