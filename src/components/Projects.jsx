import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';
import projectImg4 from '../assets/project4.png';
import projectImg5 from '../assets/project5.png';
import projectImg6 from '../assets/project6.png';
import projectImg7 from '../assets/project7.png';
import projectImg8 from '../assets/project8.png';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useState, useEffect } from 'react';

const Projects = () => {
  const config = {
    projects: [
      {
        image: projectImg1,
        description: 'I developed a responsive Personal Portfolio website using React.js, Tailwind CSS, and JavaScript.',
        link: 'https://madhanv22.github.io/madhankumar-protfolio/',
        SourceLink: 'https://github.com/madhanv22/madhankumar-protfolio'
      },
      {
        image: projectImg2,
        description: 'I developed a responsive Income and Expenses Management website using HTML, CSS, and JavaScript.',
        link: 'https://madhanv22.github.io/Income-expense-management/',
        SourceLink: 'https://github.com/madhanv22/Income-expense-management'
      },
      {
        image: projectImg3,
        description: 'I created a responsive To-Do List application using React.js, JavaScript, and CSS.',
        link: 'https://madhanv22.github.io/react-todo-list/',
        SourceLink: 'https://github.com/madhanv22/react-todo-list'
      },
      {
        image: projectImg4,
        description: 'I created a Github Dashboard application using React.js',
        link: 'https://madhanv22.github.io/github-dashboard/',
        SourceLink: 'https://github.com/madhanv22/github-dashboard'
      },
      {
        image: projectImg5,
        description: 'I created a Youtube Clone using HTML and CSS',
        link: 'https://madhanv22.github.io/youtube-clone/',
        SourceLink: 'https://github.com/madhanv22/youtube-clone'
      },
      {
        image: projectImg6,
        description: 'I created a User SignUp & Login Page using HTML and CSS and Javascript',
        link: 'https://madhanv22.github.io/signup-login/',
        SourceLink: 'https://github.com/madhanv22/signup-login'
      },
      {
        image: projectImg7,
        description: 'I created a Dashboard using React',
        link: 'https://madhanv22.github.io/dashboard-frontend/',
        SourceLink: 'https://github.com/madhanv22/dashboard-frontend'
      },
      {
        image: projectImg8,
        description: 'I created a Single Page Ecommerce Website using React',
        link: 'https://madhanv22.github.io/single-page-ecommerce/',
        SourceLink: 'https://github.com/madhanv22/single-page-ecommerce'
      },
    ]
  };

  
  const [isConfettiVisible, setIsConfettiVisible] = useState(true);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConfettiVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='projects-section' id='projects'>
      {isConfettiVisible && <Confetti width={width} height={height} numberOfPieces={400} />}
      <div className='w-full'>
        <div className='flex px-6 flex-col'>
          <h1 className='text-4xl border-b-4 border-primary w-[140px] mb-5 cursor-pointer'>Projects</h1>
          <p className='pb-4'>These are one of my best projects, I have built these with React, Tailwind CSS, Vanilla CSS. Check them out</p>
        </div>
      </div>

      <div className='w-full flex flex-col md:flex-row md:flex-wrap justify-center md:justify-between px-5 z-0'>
        {config.projects.map((project, index) => (
          <div key={index} className='w-full md:w-[30%] lg:w-[30%] relative p-3'>
            <img className='w-full h-auto object-cover' src={project.image} alt={`Project Image ${index + 1}`} />
            <div className='project-desc'>
              <p className='text-center px-4 py-4'>
                {project.description}
              </p>
              <div className='flex justify-center gap-2'>
                {project.SourceLink && (
                  <a className='btn' target='_blank' rel='noopener noreferrer' href={project.SourceLink}>Source Code</a>
                )}
                {project.link && (
                  <a className='btn' target='_blank' rel='noopener noreferrer' href={project.link}>Live Demo</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
