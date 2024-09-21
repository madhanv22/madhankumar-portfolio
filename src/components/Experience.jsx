import React from 'react'

const Experience = () => {

  const config = {
    learned: ' As a self-taught developer, I learned how to build products from scratch, troubleshooting issues to ensure smooth functionality. I gained a strong understanding of front-end technologies like React and JavaScript, which helped me create dynamic websites. I also improved my time management by setting goals and meeting self-imposed deadlines. Through these experiences, I enhanced my ability to design user interfaces, implement key features, and ensure that the applications run efficiently.',
    whatIdid: ' As a self-taught developer, I created two dynamic websites. One is my personal portfolio built using React, and the other is an income and expense management application developed in JavaScript. I designed the user interfaces, implemented features, and ensured the overall functionality and performance of these projects.'
  }

  const highlightText = (text, highlights) => {
    const parts = text.split(new RegExp(`(${highlights.join('|')})`, 'gi'))
    return parts.map((part, index) =>
      highlights.includes(part) ? (
        <span key={index} className="font-bold text-yellow-500">
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  const highlights = ['React', 'JavaScript', 'personal portfolio', 'income and expense management application']

  return (
    <section className='flex flex-col text-white bg-secondary px-10 py-5 space-y-5'>
      <div>
        <h1 className='experience-heading'>Experience</h1>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0'>
        <div className='md:w-1/2'>
          <h1 className='text-3xl text-emerald-400'>What I Learned</h1>
          <p className='text-xl'>
            {highlightText(config.learned, highlights)}
          </p>
        </div>
        <div className='md:w-1/2'>
          <h1 className='text-3xl text-emerald-400'>What I Did</h1>
          <p className='text-xl'>
            {highlightText(config.whatIdid, highlights)}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience
