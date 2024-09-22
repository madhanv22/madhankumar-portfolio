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
    <section className='skills-section' id='skills'>
      <div className='flex px-6 flex-col'>
        <h1 className='text-4xl border-b-4 w-[90px] border-primary cursor-pointer mb-5'>Skills</h1>
        <div className='p-4 flex justify-around'>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
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

export default Skills;
