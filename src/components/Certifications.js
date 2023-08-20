// Certifications.js
import React from 'react';
import { certifications } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';
import { Autoplay, Pagination } from 'swiper';

import './Certification.css'

const Certification = () => {
    return (
        <section id='certifications' className='section bg-secondary'>
          <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center certification-bg'>
              <h2 className='section-title before:content-certifications relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
                My Certifications
              </h2>
              <p className='subtitle'>
                These are some of the certifications I've earned over the years.
              </p>
            </div>
            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className='mySwiper'
            >
              {certifications.map((item, index) => {
                const { certiImage, certiTitle, certiOrg } = item;
                return (
                    <SwiperSlide key={index}>
                    <div className='flex flex-col items-center justify-center gap-4 h-full w-full'>
                        <div className='w-48 h-48 lg:w-[328px] lg:h-[328px] mx-auto'>
                            <img className='rounded-2xl' src={certiImage} alt={certiTitle} />
                        </div>
                        <div className='text-center'>
                            <h5 className='font-body text-2xl mb-2 font-normal'>
                                {certiTitle}
                            </h5>
                            <p className='text-lg text-accent'>{certiOrg}</p>
                        </div>
                    </div>
                </SwiperSlide>
                
                );
              })}
            </Swiper>
          </div>
        </section>
      );
};

export default Certification;
