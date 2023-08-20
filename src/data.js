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
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/filme.png';
import Project2 from './assets/img/projects/dice.png';
import Project3 from './assets/img/projects/gamedbb.png';
import Project4 from './assets/img/projects/news.png';
import Project5 from './assets/img/projects/guide.png';
import Project6 from './assets/img/projects/vr.png';

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
    name: 'services',
    href: 'services',
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
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/johnnydevsolutions',
  },
  {
    icon: <FiDribbble />,
    href: '',
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
    image: Project1,
    name: 'Movies Database',
    category: 'Angular',
    moreInfoLink: 'https://buscador-filme.vercel.app/',
    description1: 'Dive into a vast collection of films from various genres, eras, and countries. Check it out!',
  },
  {
    id: '2',
    image: Project2,
    name: 'Dice Game',
    category: 'JavaScript',
    moreInfoLink: 'https://johnnydevsolutions.github.io/DiceGame/', // add link do vídeo do projeto de experiência
    description2: 'Introducing "Roll It Out," a thrilling dice game that will keep you on the edge of your seat! Test your luck. Check it out!',
  },
  {
    id: '3',
    image: Project3,
    name: 'Games Database',
    category: 'Angular',
    moreInfoLink: 'https://game-3wihi3b6p-devj-andrade.vercel.app/',
    description3: 'Aplication that allows users to search for games, description, ratings, and add them to a list. Check it out!',
  },
  {
    id: '4',
    image: Project4,
    name: 'News Portal',
    category: 'Angular',
    moreInfoLink: 'https://portal-news.vercel.app/', // add link do vídeo do projeto de experiência
    description4: 'Stay informed with "Portal News," your gateway to breaking news and insightful journalism. Explore a diverse range of topics. ',
    //Detalhar no description sobre ter que pedir acesso no google cloud para poder ver o vídeo do projeto por ser projeto de empresa
  },
  {
    id: '5',
    image: Project5,
    name: 'Travel guide',
    category: 'React',
    moreInfoLink: 'https://johnnydevsolutions.github.io/wanderlust-explorer/',
    description5:'Embark on an unforgettable journey with "Wanderlust Explorer," your ultimate travel guide companion.',
  },
  {
    id: '6',
    image: Project6,
    name: 'VR experience',
    category: 'React',
    moreInfoLink: 'https://vr-world-five.vercel.app/',
    description6: 'Step into a new reality with "VRXperience," an immersive virtual reality adventure.',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Angular',
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
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Jane Smith',
    authorPosition: 'Project Manager, Tech Corp',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'The quality of work and attention to detail provided by Johnny is exceptional. They consistently deliver beyond our expectations.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'I have had the pleasure of working with Johnny on multiple projects. His technical expertise and professionalism are unmatched.',
    authorName: 'Isabella Thompson',
    authorPosition: 'Software Engineer, CodeTech',
  },
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
