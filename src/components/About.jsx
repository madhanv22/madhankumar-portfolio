import React from 'react'
import AboutImg from '../assets/about.avif'

const About = () => {
  return (
    <section className='flex flex-col md:flex-row  bg-primary px-5'>
      <div className='md:w-1/2 py-5'>
        <img className='about-img' src={AboutImg} />
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
          <h1 className='text-4xl border-b-4 border-primary w-[160px] mb-5'>About Me</h1>
          <p className='pb-2'>I am a dynamic React.js frontend developer with a passion for creating functional user interfaces.</p>
          <p className='pb-2'>With nine months of hands-on experience in JavaScript and React.js development, I've mastered the art of building dynamic and responsive web applications.</p>
          <p className='pb-2'>My journey as a self-taught developer, filled with numerous challenges and obstacles, has sharpened my skills and abilities,</p>
          <p className='pb-2'>allowing me to manage front-end development projects from start to finish.</p>
        </div>
      </div>
    </section>
  )
}

export default About