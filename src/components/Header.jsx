import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="header-section z-50 fixed top-0 left-0 right-0 bg-black text-white">
      <a className="font-bold text-black mb-2 sm:mb-0 font-hero-font text-2xl" href="#">Madhan</a>
      <nav className='hidden md:block'>
        <ul className="flex flex-wrap justify-center sm:justify-end text-white space-x-4 w-full sm:w-auto">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className='md:hidden z-50'>
          <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
