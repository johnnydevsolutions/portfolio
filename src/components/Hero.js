import React from 'react';

// import woman image
import me from '../assets/img/Profileimg.jpg';

import { Link } from 'react-scroll';
import { BriefcaseIcon } from '@heroicons/react/outline';
import { HandIcon } from '@heroicons/react/solid';
import { UsersIcon } from '@heroicons/react/solid';
import { PencilAltIcon } from '@heroicons/react/solid';


const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Johnny! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build & Design <br /> Web Application.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
            With 2+ years of experience in Angular and .NET Core, I'm dedicated to crafting robust web applications. 
            I'm also proficient in Azure DevOps, focusing on creating solutions for enterprises. Committed to continuous growth and making a meaningful impact on companies' success.
            </p>
            
            <a 
            
            href="mailto:johnnydev.solutions@gmail.com?subject=Let's Work Together: Interview Invitation.&body=Write your message here"
            className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all cursor-pointer flex items-center'
            >
              <UsersIcon   className='w-5 h-5 mr-2' />
            Work with me
            </a>
            
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-auto '>
           <img src={me} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
