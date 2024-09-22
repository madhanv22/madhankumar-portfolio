import React from 'react';
import AboutImg from '../assets/about.png';

const About = () => {

  const config = {
    line1: 'I am a dynamic React.js frontend developer with a passion for creating functional user interfaces.',
    line2: 'With nine months of hands-on experience in JavaScript and React.js development, I have mastered the art of building dynamic and responsive web applications.',
    line3: 'My journey as a self-taught developer, filled with numerous challenges and obstacles, has sharpened my skills and abilities,',
    line4: 'allowing me to manage front-end development projects from start to finish.'
  }

  return (
    <section className='about-section' id='about'>
      <div className='flex md:w-1/2 w-full py-5'>
        <img className='about-img' src={AboutImg} />
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
          <h1 className='text-4xl border-b-4 border-primary w-[160px] mb-5'>About Me</h1>
          <p className='pb-2'>{config.line1}</p>
          <p className='pb-2'>{config.line2}</p>
          <p className='pb-2'>{config.line3}</p>
          <p className='pb-2'>{config.line4}</p>
        </div>
      </div>
    </section>
  )
}

export default About;
