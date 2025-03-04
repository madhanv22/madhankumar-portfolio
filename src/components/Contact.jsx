import React from 'react';
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineLinkedin } from 'react-icons/ai';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useState, useEffect } from 'react';

const Contact = () => {
  const config = {
    email: 'mailto:madhanv263@gmail.com?subject=Hello&body=Hi%20there,%0A%0AHow%20are%20you?',
    whatsapp: 'https://wa.me/919894356749',
    linkedIn: 'https://www.linkedin.com/in/madhankumarv24/'
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
    <section className='contact-section' id='contact'>
      {isConfettiVisible && <Confetti width={width} height={height} numberOfPieces={400} />}
      <div className='flex flex-col items-center text-white p-10'>
        <h1 className='text-4xl border-b-4 border-primary w-[140px] mb-5 cursor-pointer'>Contact</h1>
        <p className='pb-5'>You want to discuss more in detail, please contact me.</p>
        <div className='flex flex-col md:flex-row gap-2'>
          <div className='hover:text-black flex items-center'>
            <a href={config.email} className='flex items-center'>
              <AiOutlineMail size={40} className='mr-2' />Email
            </a>
          </div>
          <div className='hover:text-black flex items-center'>
            <a href={config.whatsapp} className='flex items-center'>
              <AiOutlineWhatsApp size={40} className='mr-2' />Whatsapp
            </a>
          </div>
          <div className='hover:text-black flex items-center'>
            <a href={config.linkedIn} className='flex items-center'>
              <AiOutlineLinkedin size={40} className='mr-2' />LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
