//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from 'react-icons/fi';

import { FaWhatsapp, FaEnvelope  } from 'react-icons/fa'; 

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
/* import Project1 from './assets/img/projects/filme.png'; */
import Project2 from './assets/img/projects/loveconnect_print.jpeg';
import Project3 from './assets/img/projects/gamedbb.png';
import Project4 from './assets/img/projects/news.png';
import Project5 from './assets/img/projects/places.jpg';
import Project6 from './assets/img/projects/game.jpg';

// skills images
import SkillImg1 from './assets/img/skills/sqll.webp';
import SkillImg2 from './assets/img/skills/dotnetcore.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/aws-certified-cloud-practitioner.png';
import SkillImg6 from './assets/img/skills/docker.png';
import SkillImg7 from './assets/img/skills/angular1.png';
import SkillImg8 from './assets/img/skills/Azure-logo.png.webp';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// certification images
import AWSCertification from './assets/img/skills/aws-certified-cloud-practitioner.png'; // Import your AWS certification logo
import AWSSaa from './assets/img/certifications/associate-architect.png';
import AWSDevAssociate from './assets/img/certifications/developer-associate.png';
import AZDevAssociate from './assets/img/certifications/az-dev-associate.png';

// import videos
import Video1 from '../src/assets/videos/metrics-report.mp4';
import Video2 from '../src/assets/videos/love-connect.mp4';
import Video3 from '../src/assets/videos/extreme-weather.mp4';
import Video4 from '../src/assets/videos/gestao.mp4';
import Video5 from '../src/assets/videos/weather-forecast.mp4';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'Certifications',
    href: 'certifications',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FaWhatsapp  />,
    href: 'https://api.whatsapp.com/send?phone=5521974477493&text=Hi%20Johnny!%20I%20would%20like%20to%20talk%20to%20you%20about%20a%20project.',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/johnnyassuncao/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/johnnydevsolutions',
  },
  {
    icon: <FaEnvelope />,
    href: 'mailto:johnnydev.solutions@gmail.com?subject=Lets Work Together: Interview Invitation.&body=Write your message here',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    /* image: Project2, */
    videoSrc: Video1,
    name: 'Metrics Report',
    category: 'Angular .NET Core',
    moreInfoLink: '', 
    private: true,
    description2: 'The "Metrics Report System" is a sophisticated project designed to streamline project management, contractor engagement, and financial tracking. This comprehensive system allows seamless contractor contracting, linking their activities to detailed measurement reports.',
  },
  {
    id: '2',
    /* image: Project1, */
    videoSrc: Video2,
    name: 'Dating Website',
    category: 'Angular .NET Core',
    moreInfoLink: '',
    private: true,
    description1: 'A full-stack project to create a dating website from scratch, featuring a messaging system, real-time user presence using SignalR, matching system, see who is online in real-time, upload photos, and build meaningful connections',
  },
  {
    id: '3',
    // image: Project3,
    videoSrc: Video3,
    name: 'Extreme weather events',
    category: 'React',
    moreInfoLink: '',
    private: true,
    description3: ' Earth Extreme Events Visualization, provides a captivating exploration of natural phenomena such as volcanoes, storms, wildfires, and icebergs. This innovative application offers a captivating avenue for discovery.',
  },
  {
    id: '1',
    /* image: Project2, */
    videoSrc: Video4,
    name: 'Management Software',
    category: 'Angular .NET Core',
    moreInfoLink: '', 
    private: true,
    description2: 'A comprehensive Full-Stack Application was developed for creating a proposal management system, assigning tasks to responsible users within a company, and facilitating the distribution of proposals to streamline essential organizational processes.',
  },
  {
    id: '1',
    videoSrc: Video5,
    name: 'Weather Forecast',
    category: 'Vue.js .NET Core',
    moreInfoLink: '', 
    private: true,
    description5:'A modern and responsive weather forecast application displaying real-time climate data with dynamic icons, filters and temperature indicators. The back-end is built with .NET, Clean Architecture, and Hangfire for automatic updates.',
  },
  {
    id: '6',
    image: Project6,
    name: 'Game Database',
    category: 'Angular .NET Core',
    moreInfoLink: 'https://game-3wihi3b6p-devj-andrade.vercel.app/',
    description6: 'This dynamic platform provides an immersive gateway into the expansive universe of games. Explore a vast library, delving into comprehensive game descriptions, checking ratings, and crafting a personalized gaming list to your unique preferences.',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Angular .NET Core',
  },
  {
    name: 'React',
  },
  {
    name: 'JavaScript',
  }, 
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'With the latest design technology, I will provide the highest performance design for your business. .',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'I will develop your website with the latest technologies and best practices.',
  },
  
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'I will create a brand that will be unique and memorable for your business.',
  }, 

  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'I will optimize your website for search engines to get the best results.',
  },
];


export const certifications = [
  {
    certiImage: AWSCertification,
    certiTitle: 'Certified AWS Cloud Practitioner',
    certiOrg: 'Amazon Web Services(AWS)',
  },
  {
    certiImage: AWSSaa,
    certiTitle: 'AWS Certified Solutions Architect - Associate - In progress',
    certiOrg: 'Amazon Web Services(AWS)',
  },
  {
    certiImage: AWSDevAssociate,
    certiTitle: 'AWS Certified Developer - Associate - In Progress',
    certiOrg: 'Amazon Web Services(AWS)',
  },
  /* {
    certiImage: AZDevAssociate,
    certiTitle: 'Studying for - Microsoft Certified: Azure Developer Associate',
    certiOrg: 'Microsoft Azure',
  }, */

];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:'Johnny has been a great colleague from the start. We have worked on several projects together, learning and sharing knowledge. He is always been supportive and ready to help when needed.',
    authorName: 'Natália Spindola',
    authorPosition: 'FullStack Developer, Loja Interativa',
  }/* ,
  {
    authorImg: TestiImage2,
    authorText:
      'The quality of work and attention to detail provided by Johnny is exceptional. They consistently deliver beyond our expectations.',
    authorName: 'Olivia Doe',
    authorPosition: 'Tech Lead, InnoTech Solutions',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'I have had the pleasure of working with Johnny on multiple projects. His technical expertise and professionalism are unmatched.',
    authorName: 'Isabella Thompson',
    authorPosition: 'Software Engineer, CodeTech',
  }, */
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at johnnydev.solutions@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Rio de Janeiro, Brazil',
    description: 'Serving clients worldwide',
  },
];
