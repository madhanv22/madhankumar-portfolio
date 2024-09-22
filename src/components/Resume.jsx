import React from 'react';
import ResumeImg from '../assets/Resume.png';
import ResumePDF from '../assets/madhankumar.resume.pdf';

const Resume = () => {
  const config = {
    resume: ResumePDF,
  };

  return (
    <section className='resume-section' id='resume'>
      <div className='flex md:w-1/2 py-5 justify-center items-center'>
        <img className='w-2/3 md:w-1/2 lg:w-1/3 h-auto lg:max-h-100' src={ResumeImg} alt="Resume" />
      </div>
      <div className='md:w-1/2 lg:w-1/3 flex justify-center items-center'>
        <div className='flex flex-col justify-center text-white text-center'>
          <h1 className='text-4xl border-b-4 border-primary w-[140px] mb-5 cursor-pointer'>Resume</h1>
          <p className='p-2'>You can view and download my resume  
            <a href={config.resume} download className='btn m-4'>Download</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
