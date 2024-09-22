import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';

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
      }
    ]
  };

  return (
    <section className='flex flex-col py-10 px-4 bg-secondary text-white cursor-auto min-h-screen pt-20 pb-16' id='projects'>
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
