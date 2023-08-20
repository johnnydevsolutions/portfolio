import React from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi'; // Import necessary icons
import AWSLogo from './assets/img/skills/aws-certified-cloud-practitioner.png'; // Import your AWS certification logo

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import BackTopBtn from './components/BackTopBtn';
import CertificationsSlider from './components/CertificationsSlider'; // Import the CertificationsSlider component

const App = () => {
  return (
    <div className='bg-white relative'>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      {/* <Services /> */}
      <CertificationsSlider />
     <Testimonials />
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
