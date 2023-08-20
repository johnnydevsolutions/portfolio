import React from 'react';
import './skills.css';

// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div
          className='grid grid-cols-8 md:grid-flow-col'
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='lg:h-20 zoom-on-hover zoom-on-hover:hover' src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
