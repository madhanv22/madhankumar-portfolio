import React from 'react'
import ResumeImg from '../assets/Resume.png'

const Resume = () => {
  return (
    <section className='flex flex-col md:flex-row  bg-primary px-5'>
      <div className='flex md:w-1/2 py-5 justify-center'>
        <img src={ResumeImg} />
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
          <h1 className='text-4xl border-b-4 border-primary w-[160px] mb-5'>Resume</h1>
          <p className='pb-2'>You can view my resume. <a href=''>
          <button className='btn'>Download</button></a></p>
        </div>
      </div>
    </section>
  )
}

export default Resume