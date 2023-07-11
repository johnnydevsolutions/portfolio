import React, { useState }  from 'react';

// import contact data
import { contact } from '../data';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';


const Contact = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  const onSubmit = (data, e) => {
    emailjs
      .sendForm('service_5d0pbp4', 'template_cqvij7q', e.target, 'imzIzAFAbL_JdyfLs')
      .then((response) => {
        setIsSuccessMessageVisible(true);
        console.log('E-mail enviado com sucesso!', response.text);
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao enviar o e-mail:', error);
      });
    e.target.reset();
  };


  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact me
          </h2>
          <p className='subtitle'>
            Looking for a creative and knowledgeable Web developer? <br /> Search no further, because I am ready for the job. <br />
            I will step in and make an immediate contribution to your project.
          </p>
        </div>
        <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
          <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form className='space-y-8 w-full max-w-[780px]' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex gap-8'>
              <input className='input' type='text' name="user_name" {...register('name', { required: true })} placeholder='Your name' />
              {errors.name && <p className='error-message' style={{ color: 'rgb(200 27 61)' }}>Name is required</p>}
              <input className='input' type='email' name="user_email" {...register('email', { required: true })} placeholder='Your email' />
              {errors.email && <p className='error-message' style={{ color: 'rgb(200 27 61)' }}>Email is required</p>}
            </div>
            <input className='input' type='text' name="user_subject" {...register('subject', { required: true })} placeholder='Subject' />
            {errors.subject && <p className='error-message' style={{ color: 'rgb(200 27 61)' }}>Subject is required</p>}
            <textarea className='textarea' {...register('message', { required: true })} placeholder='Your message' name="message" />
            {errors.message && <p className='error-message'  style={{ color: 'rgb(200 27 61)' }}>Message is required</p>}
            <button className='btn btn-lg bg-accent hover:bg-secondary-hover' type='submit'>
              Send message
            </button>
            {isSuccessMessageVisible && (
              <p className='success-message' style={{ color: 'lightgoldenrodyellow' }}>
                Your message has been sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}; 

export default Contact;
