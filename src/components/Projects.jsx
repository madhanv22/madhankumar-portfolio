import React from 'react'
import projectImg1 from '../assets/project1.png'
import projectImg2 from '../assets/project2.png'
import projectImg3 from '../assets/project3.png'

const Projects = () => {
  return (
    <section className='flex flex-col py-20 px-4 justify-center bg-secondary text-white'>
      <div className='w-full'>
        <div className='flex px-6 flex-col'>
          <h1 className='text-4xl border-b-4 border-primary w-[140px] mb-5'>Projects</h1>
          <p className='pb-4'>These are one of my best projects, I have built These with React, Tailwind css, Vanila Css. Check them out</p>
        </div>
      </div>

      <div className='w-full flex flex-wrap justify-center px-5 '>
        <div className='w-full md:w-1/3 relative p-3'>
          <img className='w-full h-auto object-cover' src={projectImg1} alt='Project Image 1' />
          <div className='project-desc'>
            <p className='text-center px-4 py-4'>
            I developed a responsive Personal Portfolio website using React.js, Tailwind CSS, and JavaScript.
            </p>
          </div>
        </div>
        <div className='w-full md:w-1/3 relative p-3'>
          <img className='w-full h-auto object-cover' src={projectImg2} alt='Project Image 2' />
            <div className='project-desc'>
              <p className='text-center px-4 py-4'>
              I developed a responsive Income and Expenses Management website using HTML, CSS, and JavaScript.
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/3 relative p-3'>
            <img className='w-full h-auto object-cover' src={projectImg3} alt='Project Image 3' />
              <div className='project-desc'>
                <p className='text-center px-4 py-4'>
                I created a responsive To-Do List application using React.js, JavaScript, and CSS.
                </p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Projects