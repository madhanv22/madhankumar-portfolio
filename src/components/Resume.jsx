import React from 'react'
import ResumeImg from '../assets/Resume.png'

const Resume = () => {

  const config = {
    resume : '',
  }

  return (
    <section className='flex flex-col md:flex-row  bg-primary px-5' id='resume'>
      <div className='flex md:w-1/2 py-5 justify-center'>
        <img src={ResumeImg} />
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
          <h1 className='text-4xl border-b-4 border-primary w-[140px] mb-5 cursor-pointer'>Resume</h1>
          <p className='p-2'>You can view my resume  
          <a href='' type='button'>
            <button className='btn'>Download</button></a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Resume