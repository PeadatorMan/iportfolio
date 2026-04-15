import React from 'react';
import { Home, User, FileText, BookOpen, Server, Mail, Twitter, Facebook, Instagram, Linkedin, Github, Cloud, Database, MonitorCog } from 'lucide-react';
import { MenuItem, ResumeItem, PortfolioItem, ServiceItem, Testimonial, Skill } from './types';

// Re-export data from separate files
export { PORTFOLIO_ITEMS } from './portfolioData';
export { PORTFOLIO_ITEMS as PORTFOLIO_VDO_ITEMS } from './portfolioVDOdata';
export { RESUME_EXPERIENCE } from './experienceData';

export const SOCIAL_LINKS = [
  { icon: <Twitter size={18} />, href: "#" },
  { icon: <Facebook size={18} />, href: "#" },
  { icon: <Instagram size={18} />, href: "#" },
  { icon: <Github size={18} />, href: "#" },
  { icon: <Linkedin size={18} />, href: "#" },
];

export const MENU_ITEMS: MenuItem[] = [
  { id: 'hero', label: 'Home', icon: <Home size={20} /> },
  { id: 'about', label: 'About', icon: <User size={20} /> },
  { id: 'resume', label: 'Resume', icon: <FileText size={20} /> },
  { id: 'portfolio', label: 'Portfolio', icon: <BookOpen size={20} /> },
  { id: 'services', label: 'Services', icon: <Server size={20} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
];

export const SKILLS: Skill[] = [
  { name: 'HTML', level: 100 },
  { name: 'CSS [Tailwind CSS, Bootstrap, Material UI, Daisy UI, Animate.css]', level: 90 },
  { name: 'GSAP, Animation', level: 85 },
  { name: 'PHP, Laravel, CodeIgniter', level: 95 },
  { name: 'Angular', level: 85 },
  { name: 'React, Node.js', level: 95 },
  { name: 'Next.js, Nest.js, Vue.js, Vite', level: 95 },
  { name: 'TypeScript, JavaScript', level: 80 },
  { name: 'Tailwind CSS, Bootstrap', level: 95 },
  { name: 'Wordpress, Shopify, Magento', level: 95 },
  { name: 'SQL, NoSQL, Firebase', level: 90 },
  { name: 'MongoDB, MySQL, PostgreSQL', level: 90 },
  { name: 'Photoshop, Illustrator', level: 75 },
  { name: 'Windows, macOS', level: 95 },
];

export const RESUME_EDUCATION: ResumeItem[] = [
  {
    title: 'B.Eng (Computer Engineering)',
    subtitle: 'Mahanakorn University of Technology, Bangkok, Thailand',
    duration: '1999 - 2001',
    description: ['A Bachelor of Engineering (B.Eng.) in Electrical and Computer Engineering (ECE) is a 2.5 - year undergraduate program combining, typically, 150 credits of coursework in power systems, electronics, and computer science.', 'It prepares graduates for roles in AI, robotics, embedded systems, and telecommunications, often featuring capstone projects and specialized tracks']
  },
  {
    title: 'Electrical Power, Diploma Certificate',
    subtitle: 'Phitsanulok Technical College, Phitsanulok, Thailand',
    duration: '1994 - 1997',
    description: ['A Diploma in Electrical Power Engineering (typically 1–5 years) provides technical training in the design, installation, operation, and maintenance of power systems, covering areas like generation, transmission, distribution, and renewable energy.', 'Programs focus on practical skills, including troubleshooting, electrical machinery, safety compliance, and power system analysis for roles in utility, manufacturing, and engineering firms']
  }
];

export const RESUME_CERTIFICATES: ResumeItem[] = [
  {
    title: 'Certificate of Basic Baking/Pastry Course',
    subtitle: 'KlongToei Vocational School',
    duration: '200 Hours', // No year period as requested
    description: ['Learn the basics of baking, from the types of baked goods and cakes, to combining different ingredients to create greater variety, and techniques for assembling a wide range of baked goods, desserts, and cakes.']
  },
  {
    title: 'Certificate of Professional Barista',
    subtitle: 'KlongToei Vocational School',
    duration: '90 Hours', // No year period as requested
    description: ['The practical training and activities are designed to prepare students for the fundamental duties of a barista. The instruction is detailed, covering every aspect and emphasizing key information to ensure students understand and can effectively teach the skills they have learned..']
  },
  {
    title: 'Certificate of Basic Barista Course',
    subtitle: 'KlongToei Vocational School',
    duration: '90 Hours', // No year period as requested
    description: ['For beginners with no prior experience, the focus is on coffee theory, perfect espresso extraction, milk steaming techniques, making hot and cold beverages, coffee machine maintenance, and preparing various coffee, tea, milk tea, and other drinks.']
  },
  {
    title: 'Certificate of IOS Application development',
    subtitle: 'International College King Mongkuts Institute of Technology Ladkrabang',
    duration: '200 hours', // No year period as requested
    description: ['To create an Apple distribution certificate, open Keychain Access, request a certificate from a certificate authority, and upload the CSR file.']
  },
  {
    title: 'Introduction to Microsoft ASP.Net',
    subtitle: 'Microsoft Approved Course',
    duration: '15 hours',
    description: ['Part of the .NET Platform: ASP.NET extends the .NET platform with tools and libraries specifically for web development. This means developers can leverage the vast .NET ecosystem and use languages like C#, F#, and Visual Basic to write both client-side and server-side code.']
  },
  {
    title: 'Certificate of Teacher Assistance',
    subtitle: 'Teacher assistance of C Langguage',
    duration: '1 academic year',
    description: ['Department of Computer Engineering, Mahanakorn University of Technology']
  }
];

export const SERVICES: ServiceItem[] = [
  { icon: <BookOpen />, title: 'End-to-End Application Development', description: 'Designing and building both client-side and server-side components from scratch.' },
  { icon: <FileText />, title: 'Web & API Development', description: 'Creating RESTful APIs, microservices, and server-side logic using Node.js, PHP (Laravel), Java (Spring Boot), and Type Script' },
  { icon: <Server />, title: 'Front-End Development', description: 'Building responsive, interactive, and user-friendly interfaces using React, Vue.js, Angular, and Next.js.' },
  { icon: <MonitorCog />, title: 'System Integration & Architecture', description: 'Designing complex system architectures and connecting third-party services.' },
  { icon: <Database />, title: 'Database Design & Management', description: 'Managing relational and non-relational databases, including MySQL, PostgreSQL, MongoDB, and Firebase.' },
  { icon: <Cloud />, title: 'DevOps & Cloud Deployment', description: 'Managing CI/CD pipelines, Docker, Kubernetes, and cloud services (AWS, Google Cloud, Azure).' },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Saul Goodman', role: 'Ceo & Founder', quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.', image: 'https://picsum.photos/id/1005/100/100' },
  { name: 'Sara Wilsson', role: 'Designer', quote: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.', image: 'https://picsum.photos/id/1011/100/100' },
];

export const PROFILE_DATA = {
  name: "Ratchapon Nuch-Opas",
  role: ["Fullstack Developer", "UI/UX Designer", "WebDeveloper", "Freelancer"],
  aboutShort: "I am a passionate UX/UI designer and web developer based in Bangkok, Thailand.",
  aboutLong: "A strong foundational knowledge in Full Stack Development," +
    "specializing in Angular, Node.js and modern JavaScript frameworks. Demonstrated ability to quickly design, " +
    "develop, and debug robust web applications and mobile prototypes (Flutter)." +
    "Eager to apply problem-solving skills and continuous learning aptitude to contribute " +
    "immediately to challenging development projects. " +
    "Unit Testing, Integration Testing, " +
    "UAT",
  //"E2E Testing, Performance Testing, Security Testing, Accessibility Testing, Usability Testing, A/B Testing, Cross-Browser Testing, Mobile Testing, API Testing, Database Testing, Performance Testing, Security Testing, Accessibility Testing, Usability Testing, A/B Testing, UAT",
  email: "looklikelove@me.com",
  phone: "+66 61-524-6858",
  city: "Bangkok, Thailand",
  degree: "Bachelor of Engineering (B.Eng.) ",
  freelance: "Available",
  website: "https://cv.365liveitup.space",
  age: "N/A",
  birthday: "14 June"
};