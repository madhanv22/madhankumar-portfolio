import React from 'react'
import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {
  const config = {
    subtitle: 'Frontend Developer',
    github: 'https://github.com/madhanv22',
    instagram: 'https://www.instagram.com/madhan_kumar.__/?igsh=M3ZrN3ltMjJmemRt',
    linkedIn: 'https://www.linkedin.com/in/madhankumarv24/',
  }

  return (
    <section className='flex flex-col md:flex-row px-5 py-10 bg-secondary min-h-screen pt-20 pb-16 justify-center z-0'>
      <div className='w-full md:w-1/2 flex flex-col justify-center'>
        <div className='text-4xl border-b-4 text-white cursor-pointer border-primary w-[160px] ms-0 mb-5'>
          <h1 className=''>Home</h1>
        </div>
        <h1 className='text-white text-4xl md:text-6xl font-hero-font cursor-pointer'>
          Hi, <br />
          I'm 
          <span className='text-emerald-400'> Madhankumar.v</span>
          <p className='text-4xl text-yellow-500'>
            {config.subtitle}
            <span className='text-white'></span>
          </p>
          <p className='text-2xl'>View my 
            <span className='text-black'> Projects </span> & 
            <span className='text-black'> Resume </span>
            contact me or send me an email at <span className='text-black'> madhanv263@gmail.com</span>
          </p>
        </h1>
        <div className='flex py-6'>
          <a href={config.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
          <a href={config.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40} /></a>
          <a href={config.linkedIn} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
        </div>
      </div>
      <img className='md:w-1/3 w-1/2 hero-img' src={HeroImg} />
    </section>
  )
}

export default Hero;
