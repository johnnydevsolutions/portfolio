import React from 'react';

// import img
import Image from '../assets/img/profile1.jpg';

import { Link } from 'react-scroll';
import { BriefcaseIcon } from '@heroicons/react/outline';
import { HandIcon } from '@heroicons/react/solid';
import { UsersIcon } from '@heroicons/react/solid';
import { PencilAltIcon } from '@heroicons/react/solid';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Johnny A.
              </h2>
              <p className='mb-4 text-accent'>
                Full Stack Angular .NET Core developer. <br></br> AWS Certified Cloud Practitioner!
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              With over 2 years as a full-stack engineer, I've honed my skills in Angular, React.js, .NET Core, TypeScript, and SQL Server. 
              As an AWS Certified Cloud Practitioner, I demonstrate a strong understanding of cloud principles, with a focus on AWS environments. 
              I am currently in the process of pursuing certifications as an AWS Solutions Architect Associate and AWS Developer Associate,
              further underscoring my commitment to advancing my cloud expertise. Beyond my certifications, my practical experience with Azure adds another layer of cloud
              knowledge to my toolkit. Leveraging these skills, 
              I aspire to drive impactful results and elevate your team's capabilities in delivering impactful solutions across various technological domains.
                  <br />
                <br />
            
              </p>
            </div>
            <a 
            
            href="mailto:johnnydev.solutions@gmail.com?subject=Let's Work Together: Interview Invitation.&body=Write your message here"
            className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all cursor-pointer flex items-center'
            >
              <PencilAltIcon   className='w-5 h-5 mr-2' />
            Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
