import React, { useEffect, useState } from 'react';

// import components
import TestiSlider from './TestiSlider';

const Testimonials = () => {

  return (
    <section id='testimonials' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
            What other people say
          </h2>
          <p className='subtitle'>
            Absolutely impressed with his professionalism and expertise. <br />
            Exceptional service, always exceeding expectations.
          </p>
        </div>
        <TestiSlider />
      </div>
    </section>
  );
};

export default Testimonials;
