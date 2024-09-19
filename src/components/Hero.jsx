import React from 'react'
import HeroImg from '../assets/hero.avif';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row px-5 py-28 bg-secondary justify-center'>
      <div className='w-full md:w-1/2 flex flex-col justify-center'>
        <h1 className='text-white text-3xl font-hero-font'>
          Hi, <br/> 
          I'm 
          <span className='text-emerald-400'> Madhankumar.v</span>
          <p className='text-3xl'>
            <span className='text-emerald-400'>Frontend </span>Developer
          </p>
          <p className='text-xl'>View my 
            <span className='text-red-400'> Projects </span> & 
            <span className='text-red-400'> Resume </span>
            contact me or send me an email at <span className='text-red-400'> madhanv263@gmail.com</span>
          </p>
        </h1>
        <div className='flex py-6'>
          <a href="#" className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
          <a href="#" className='pr-5 hover:text-white'><AiOutlineInstagram size={40} /></a>
          <a href="#" className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
        </div>
      </div>
      <img className='md:w-1/3 hero-img' src={HeroImg} />
    </section>

  )
}

export default Hero