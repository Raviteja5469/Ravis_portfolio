import leadmastersLogo from '../assets/companies/leadmasters.png';
import motionCutLogo from '../assets/companies/motioncut.png';
import edunetLogo from '../assets/companies/edunet.svg';
import bluePlanetLogo from '../assets/companies/blueplanet.png';
import workelateLogo from '../assets/companies/workelate.svg';
import { Accessibility, Code2, Gavel, PawPrint, Recycle, Send, ShoppingBasket, Trophy, type LucideIcon } from 'lucide-react';

import haulbasketShot from '../assets/projects/haulbasket-storefront.webp';
import pigeonShot from '../assets/projects/pigeon-feed.webp';
import lifeeaseArt from '../assets/projects/lifeease-app.webp';
import animalArt from '../assets/projects/animal-preview-v2.webp';
import auctionArt from '../assets/projects/auction-preview.webp';
import jobQuestShot from '../assets/projects/job-quest.webp';
import wasteShot from '../assets/projects/waste.webp';

export type Link = string | undefined;

export const profile = {
  name: 'Raviteja Seguri',
  role: 'Full Stack Developer',
  company: 'Workelate',
  location: 'Hyderabad, India',
  phone: '+91 99496 93415',
  phoneHref: 'tel:+919949693415',
  email: 'ravitejaseguri@gmail.com',
  emailHref: 'mailto:ravitejaseguri@gmail.com',
  linkedinLabel: 'in/seguri-raviteja',
  linkedinHref: 'https://www.linkedin.com/in/seguri-raviteja',
  githubLabel: 'Raviteja5469',
  githubHref: 'https://github.com/Raviteja5469',
  headline: 'Full stack developer building product features for Citysense.',
  intro:
    'I build web and mobile products with React, Node.js and MongoDB, with AI coding tools in my workflow. Currently shipping Citysense features at Workelate in Hyderabad.',
  availability: 'Open to full stack and React Native roles',
  languages: ['English', 'Hindi', 'Telugu'],
};

export const aiTools = ['Claude', 'Codex', 'Muse', 'OpenCode', 'Alis'];

export const about = [
  'I build web and mobile products end to end: React interfaces, Node.js and Express APIs, MongoDB data models, and the authentication and role-based access that tie them together.',
  'AI coding tools are part of my development toolkit, alongside the frontend, backend and database skills I use to build products.',
  'At Workelate I ship features and fix complex bugs on Citysense, working directly with the client to turn their feedback into product changes. Before that I built React Native features for a patient relationship platform at Leadmasters.ai. On my own time I build accessibility tools and Python automation, and I watch what I ship through Grafana dashboards.',
];

export const workExperience = [
  {
    id: 'workelate',
    title: 'Full Stack Developer',
    organization: 'Workelate',
    period: 'Apr 2026 – Present',
    current: true,
    points: [
      'Build major feature updates and platform improvements for Citysense, a digital out-of-home (DOOH) advertising platform.',
      'Fix complex system bugs and make UI/UX improvements that speed up the application and make it easier to use.',
      'Work directly with the client in Mexico to gather requirements, iterate on feedback and turn their needs into scalable features.',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    id: 'leadmasters',
    title: 'Software Engineering Intern',
    organization: 'Leadmasters.ai',
    period: 'Feb 2026 – Mar 2026',
    current: false,
    points: [
      'Developed and optimized the company’s core patient relationship management (PRM) platform.',
      'Built responsive, cross-platform mobile features with React Native CLI.',
      'Troubleshot bugs, took part in code reviews and improved performance with the development team.',
    ],
    technologies: ['React Native CLI', 'JavaScript', 'REST APIs'],
  },
];

export const earlierWork = [
  {
    id: 'blue-planet',
    title: 'Full Stack Developer Intern',
    organization: 'Blue Planet Info Solution',
    period: 'Apr 2025 – Jun 2025',
    detail:
      'Built a college club management system and shipped core features on the live CJN and SmartCookie platforms.',
  },
  {
    id: 'edunet',
    title: 'Full Stack Developer Intern',
    organization: 'Edunet Foundation',
    period: 'Feb 2025 – Mar 2025',
    detail: 'Owned a real-time auction platform end to end and made its backend APIs 30% faster.',
  },
  {
    id: 'motion-cut',
    title: 'Frontend Development Intern',
    organization: 'Motion Cut',
    period: 'Nov 2024 – Dec 2024',
    detail: 'Built frontend components with real-time UI updates.',
  },
];

export type Project = {
  id: string;
  /** When it was built, from the GitHub repo history or the resume */
  date: string;
  /** What this step added to the journey */
  milestone: string;
  title: string;
  kind: string;
  description: string;
  technologies: string[];
  liveUrl?: Link;
  githubUrl?: Link;
  icon: LucideIcon;
  metric?: { value: string; label: string };
  /** Real screenshot of the live project; an illustration is used when absent */
  screenshot?: string;
  presentation?: 'phone' | 'capture';
  artwork?: string;
};

// Oldest first: the projects section reads as a build journey.
export const journey: Project[] = [
  {
    id: 'start',
    date: 'Late 2024',
    milestone: 'Where it started',
    title: 'Learning the web',
    kind: 'HTML, CSS and JavaScript',
    description:
      'My first projects were plain HTML, CSS and JavaScript: a file manager, registration forms, an e-commerce storefront and a food-ordering site. Small builds that taught me how the web fits together.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: Code2,
    githubUrl: 'https://github.com/Raviteja5469?tab=repositories',
  },
  {
    id: 'lifeease',
    artwork: lifeeaseArt,
    presentation: 'phone',
    date: 'Feb 2025',
    milestone: 'Building for real people',
    title: 'Lifeease',
    kind: 'Accessibility app',
    description:
      'A mobile app for blind, deaf and speech-impaired users, with voice, gesture and text modes and an inclusive onboarding flow that adapts to each person.',
    technologies: ['React Native', 'Firebase'],
    icon: Accessibility,
    githubUrl: 'https://github.com/Raviteja5469/Lifease',
  },
  {
    id: 'waste',
    date: 'Feb 2025',
    milestone: 'Into machine learning',
    title: 'Waste Classifier',
    kind: 'Machine learning',
    description:
      'A CNN that sorts waste images into organic and recyclable, deployed as a Streamlit app. It cut misclassification by 15%.',
    technologies: ['Python', 'CNN', 'OpenCV', 'Streamlit'],
    icon: Recycle,
    metric: { value: '90%', label: 'classification accuracy' },
    screenshot: wasteShot,
    liveUrl: 'https://waste-analyzer-novukyc46t6pdd5qrj.streamlit.app/',
    githubUrl: 'https://github.com/Raviteja5469/CNN-model-waste-classification',
  },
  {
    id: 'auction',
    artwork: auctionArt,
    date: 'Mar 2025',
    milestone: 'Real-time full stack',
    title: 'Online Auction Platform',
    kind: 'Real-time web app',
    description:
      'Built during my Edunet internship: live bidding, dynamic product listings, secure sign-in and role-based access, with backend APIs tuned for 30% faster responses.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js'],
    icon: Gavel,
    metric: { value: '+45%', label: 'user engagement in testing' },
  },
  {
    id: 'animal',
    artwork: animalArt,
    date: 'Apr 2025',
    milestone: 'Scaling the model',
    title: 'Animal Classifier',
    kind: 'Machine learning',
    description:
      'Went from two classes to many: a multi-class CNN that identifies animal species, deployed on Streamlit.',
    technologies: ['Python', 'CNN', 'OpenCV', 'Streamlit'],
    icon: PawPrint,
    metric: { value: '89%', label: 'classification accuracy' },
    liveUrl: 'https://multiclassanimalclassification-jhpwpmaea4drz9jgxkkojm.streamlit.app/',
    githubUrl: 'https://github.com/Raviteja5469/Multi_class_animal_classification',
  },
  {
    id: 'job-quest',
    date: 'May 2025',
    milestone: 'Auth and product thinking',
    title: 'Job Quest',
    kind: 'Gamified job portal',
    description:
      'A job portal with Google sign-in and a coin-based rewards system designed to keep candidates engaged and coming back.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Google OAuth'],
    icon: Trophy,
    screenshot: jobQuestShot,
    liveUrl: 'https://gamified-job-portal.vercel.app/',
    githubUrl: 'https://github.com/Raviteja5469/gamified-job-portal',
  },
  {
    id: 'pigeon-feed',
    screenshot: pigeonShot,
    presentation: 'phone',
    liveUrl: 'https://pigeonfeed-web.vercel.app/',
    date: '2026',
    milestone: 'Automation in production',
    title: 'Pigeon Feed',
    kind: 'Python automation',
    description:
      'A Telegram bot that collects job listings and tech news and delivers a curated digest. Structured logs feed Grafana dashboards that track delivery latency, error rates and relevance.',
    technologies: ['Python', 'Telegram API', 'Grafana'],
    icon: Send,
    metric: { value: '< 30 min', label: 'from listing to inbox' },
  },
  {
    id: 'haulbasket',
    date: 'Aug 2026 – now',
    milestone: 'Freelance, for a real client',
    title: 'HaulBasket',
    kind: 'Freelance e-commerce platform',
    description:
      'A grocery and essentials delivery platform for a UK client, built end to end: a customer storefront with delivery-area maps and OTP sign-in, a store dashboard for products and orders, and the API behind both.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Leaflet', 'REST APIs'],
    icon: ShoppingBasket,
    metric: { value: '3', label: 'apps: storefront, dashboard and API' },
    screenshot: haulbasketShot,
    presentation: 'capture',
    liveUrl: 'https://haulbasket.com',
  },
];


export type JourneyMarker = {
  /** Id of the project chapter this marker follows */
  after: string;
  date: string;
  organization: string;
  role: string;
  learned: string;
  logo?: string;
  logoSymbolOnly?: boolean;
  initials: string;
  focus: string;
  contributions: string[];
};

// Internships and roles shown between chapters: where the skills came from.
export const journeyMarkers: JourneyMarker[] = [
  {
    after: 'start',
    logo: motionCutLogo, initials: 'MC', focus: 'My first frontend role', contributions: ['Built frontend components with real-time UI updates.', 'Applied the HTML, CSS and JavaScript foundations from my first projects.'],
    date: 'Nov – Dec 2024',
    organization: 'Motion Cut',
    role: 'Frontend Development Intern',
    learned: 'Built frontend components with real-time UI updates.',
  },
  {
    after: 'waste',
    logo: edunetLogo, initials: 'EF', focus: 'Owning the full stack', contributions: ['Built a real-time auction platform with React and Express.', 'Implemented secure sign-in and role-based access, and made backend APIs 30% faster.'],
    date: 'Feb – Mar 2025',
    organization: 'Edunet Foundation',
    role: 'Full Stack Developer Intern',
    learned: 'My first full stack role: React and Express, secure authentication, and backend APIs made 30% faster.',
  },
  {
    after: 'animal',
    logo: bluePlanetLogo, logoSymbolOnly: true, initials: 'BP', focus: 'Contributing to live products', contributions: ['Built a college club management system.', 'Shipped core features on the CJN and SmartCookie platforms.'],
    date: 'Apr – Jun 2025',
    organization: 'Blue Planet Info Solution',
    role: 'Full Stack Developer Intern',
    learned: 'Full stack in production: a club management system and features on the live CJN and SmartCookie platforms.',
  },
  {
    after: 'job-quest',
    logo: leadmastersLogo, logoSymbolOnly: true, initials: 'LM', focus: 'From web to mobile', contributions: ['Built React Native CLI features for a patient relationship management platform.', 'Troubleshot bugs and took part in code reviews with the product team.'],
    date: 'Feb – Mar 2026',
    organization: 'Leadmasters.ai',
    role: 'Software Engineering Intern',
    learned: 'React Native CLI features for a patient relationship platform, with code reviews in a product team.',
  },
  {
    after: 'pigeon-feed',
    logo: workelateLogo, initials: 'W', focus: 'Shipping with a client', contributions: ['Build features and improve the UI for Citysense, a digital out-of-home advertising platform.', 'Work directly with the client in Mexico to turn feedback into product updates and resolve complex bugs.'],
    date: 'Apr 2026 – now',
    organization: 'Workelate',
    role: 'Full Stack Developer',
    learned: 'Shipping Citysense features full-time, working directly with the client in Mexico.',
  },
];

export const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'Python', 'Java', 'HTML', 'CSS'] },
  { title: 'Frontend', items: ['React', 'React Native CLI', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Role-based access'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL', 'Firebase'] },
  { title: 'Cloud and DevOps', items: ['Docker', 'CI/CD', 'Nginx', 'Oracle Cloud', 'Vercel', 'Netlify', 'Git'] },
  { title: 'Tools', items: ['Grafana', 'Postman', 'OpenCV', 'Streamlit', 'Jupyter'] },
];

export const education = [
  {
    id: 'biet',
    title: 'B.Tech, Cyber Security',
    organization: 'Bharat Institute of Engineering and Technology',
    period: '2023 – 2026',
  },
  {
    id: 'mahaveer',
    title: 'Diploma, Electrical and Electronics Engineering',
    organization: 'Mahaveer Institute of Engineering and Technology',
    period: '2020 – 2023',
  },
];

export const certifications = [
  'Introduction to Deep Learning, NVIDIA',
  'Geo-Data Sharing and Cyber Security, IIRS',
  'Ethical Hacking',
];

export const navSections = [
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];
