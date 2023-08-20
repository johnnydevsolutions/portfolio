import React from 'react';
import { certifications } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';
import { Autoplay, Pagination } from 'swiper';

import './Certification.css'

const CertificationsSlider = () => {
  return (
    <section id='certifications' className='section bg-tertiary'>
      <div className='container mx-auto '>
        
        <div className='flex flex-col items-center text-center mb-10'>
          <h2 className='section-title before:content-certifications relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-32 before:hidden before:lg:block'>
            My Certifications
          </h2>
          <p className='subtitle cert-subtitle'>
            These are some of the certifications I've earned over the year.
          </p>
        </div>

        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className='mySwiper w-full h-full'
          style={{ height: '600px' }}
        >
          {certifications.map((item, index) => {
            const { certiImage, certiTitle, certiOrg } = item;
            return (
              <SwiperSlide key={index} className='flex flex-col items-center justify-center '>
                
                <div className='flex flex-col max-w-3xl mb-6'>
                  <h5 className='font-body text-2xl mb-8 font-normal text-white'>
                    {certiTitle}
                  </h5>
                  <p className='text-lg text-accent'>{certiOrg}</p>
                </div>

                <div className='w-48 h-48 lg:w-[328px] lg:h-[398px]'>
                  <img className='rounded-2xl' src={certiImage} alt={certiTitle} />
                </div>

              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default CertificationsSlider;
