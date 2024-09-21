import React from 'react'

const Skills = () => {

  const config = {
    skills : [
      'REACT',
      'JAVASCRIPT',
      'HTML',
      'CSS',
      'BOOTSTRAP',
      'TAILWIND CSS',
      'GIT & GITHUB'
    ]
  }

  return (
    <section className='flex flex-col py-10 px-4
    justify-center bg-primary text-white' id='skillsec'>
      <div className='flex px-6 flex-col'>
        <h1 className=' text-4xl border-b-4 w-[90px] border-primary cursor-pointer mb-5'>Skills
        </h1>
        <div className='p-4 flex justify-around'>
          <ul className='flex flex-col md:flex-row gap-4'>
            {config.skills.map((skill, index) => (
              <li key={index} className='skill-list animate-beat'>
                {skill}
              </li>
            ))}
          </ul>
        </div> 
      </div>
    </section>
  )
}

export default Skills