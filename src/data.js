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
import Project1 from './assets/img/projects/filmes4.png';
import Project2 from './assets/img/projects/estoque1.png';
import Project3 from './assets/img/projects/gamedbb.png';
import Project4 from './assets/img/projects/portalnews.jpeg';
import Project5 from './assets/img/projects/guide.png';
import Project6 from './assets/img/projects/vr.png';

// skills images
import SkillImg1 from './assets/img/skills/sqll.webp';
import SkillImg2 from './assets/img/skills/dotnetcore.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/git.png';
import SkillImg6 from './assets/img/skills/docker.png';
import SkillImg7 from './assets/img/skills/angular1.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

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
    category: 'UI/UX design',
    description1: 'Aplication that allows users to search for movies, description, ratings, and add to a list. Click here.',
  },
  {
    id: '2',
    image: Project2,
    name: 'Merchandise System',
    category: 'web development',
    description2: 'Built an internal system of stores to register a product, input and modify products price and add more products. Click here.',
  },
  {
    id: '3',
    image: Project3,
    name: 'Games Database',
    category: 'UI/UX design',
    description3: 'Aplication that allows users to search for games, description, ratings, and add them to a list. Click here.',
  },
  {
    id: '4',
    image: Project4,
    name: 'News Portal',
    category: 'branding',
    description4: 'Designed and developed a worldwide news headlines portal with the option to search or choose based on countries and categories. Click here.',
  },
  {
    id: '5',
    image: Project5,
    name: 'Travel guide',
    category: 'web development',
    description5:'Travel guide project that allows users to read a blog with the most modern css effects and animations. This application with effects and animations makes the user experience much better.  Click here.',
  },
  {
    id: '6',
    image: Project6,
    name: 'VR experience',
    category: 'web development',
    description6: 'A landing page about metaverse VR technology, created with best practices, modern design, and fully immersive effects, will make users want VR products.  Click here.',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
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
      'With the latest design technology, we will provide the highest performance design for your business. .',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'We will develop your website with the latest technologies and best practices.',
  },
  
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'We will create a brand that will be unique and memorable for your business.',
  }, 

  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'We will optimize your website for search engines to get the best results.',
  },
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
