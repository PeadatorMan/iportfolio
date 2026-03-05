import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, MapPin, Mail, Phone, Smile, Briefcase, Headset, Users, ChevronDown, Download, Globe, GraduationCap, ExternalLink, CheckCircle } from 'lucide-react';
import { SOCIAL_LINKS, MENU_ITEMS, PROFILE_DATA, SKILLS, RESUME_EDUCATION, RESUME_EXPERIENCE, PORTFOLIO_ITEMS, PORTFOLIO_VDO_ITEMS, SERVICES, TESTIMONIALS, RESUME_CERTIFICATES } from './constants';
import GeminiChat from './components/GeminiChat';
import { generatePDF } from './services/pdfService';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

// --- Components defined in App.tsx for single-file XML requirement simplicity per instructions ---

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const bgImages = [
    './img/bg/bg-new1.jpg',
    './img/bg/bg-new2.jpg',
    './img/bg/bg-new3.jpg',
    './img/bg/bg-new4.jpg'
  ];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 60000); // 1 minutes

    return () => clearInterval(interval);
  }, []);

  const roles = PROFILE_DATA.role;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <section
      id="hero"
      className="w-full h-screen bg-cover bg-[-75%_0px] md:bg-center relative flex flex-col justify-center text-white px-4 md:pl-[350px] transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url('${bgImages[currentBgIndex]}')` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative z-10" data-aos="fade-in">
        <h1 className="text-5xl md:text-6xl font-bold font-heading mb-4 tracking-tighter"><span className="text-[5rem] md:text-[6rem] tracking-[-0.08em] text-black drop-shadow-[1px_0px_0px_#ffffff]">Black</span> BUNNY</h1>
        <p className="text-xl md:text-3xl font-display">
          I'm <span className="border-b-2 border-primary pb-1 typing-cursor">{text}</span>
        </p>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, description, action }: { title: string, description: string, action?: React.ReactNode }) => (
  <div className="pb-10">
    <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-5">
      <h2 className="text-3xl font-bold text-secondary font-heading relative pb-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-[50px] after:bg-primary">
        {title}
      </h2>
      {action && <div className="mt-4 md:mt-0">{action}</div>}
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-10 bg-white">
      <SectionHeader title="About" description={PROFILE_DATA.aboutShort} />
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <img src="./img/avatar.jpg" alt="Profile" className="w-full rounded" />
        </div>
        <div className="md:col-span-8">
          <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">UI/UX Designer & Fullstack Developer.</h3>
          <p className="italic mb-4 text-gray-600">
            To leverage my knowledge & expertise in Programming Web Development, Design, Database Development Information Architecture, and Team Management to work in a creative team environment.
          </p>
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-8 mb-6">
            <ul className="space-y-4">
              <li className="flex items-center"><ChevronRight className="text-primary mr-2" size={16} /> <strong>Birthday:</strong> <span className="ml-2">{PROFILE_DATA.birthday}</span></li>
              <li className="flex items-center"><ChevronRight className="text-primary mr-2" size={16} /> <strong>Website:</strong> <span className="ml-2">{PROFILE_DATA.website}</span></li>
              <li className="flex items-center"><ChevronRight className="text-primary mr-2" size={16} /> <strong>Phone:</strong> <span className="ml-2">{PROFILE_DATA.phone}</span></li>
              <li className="flex items-center"><ChevronRight className="text-primary mr-2" size={16} /> <strong>City:</strong> <span className="ml-2">{PROFILE_DATA.city}</span></li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center"><ChevronRight className="text-primary mr-2" size={16} /> <strong>Age:</strong> <span className="ml-2">{PROFILE_DATA.age}</span></li>
              <li className="flex items-center"><ChevronRight className="text-primary mr-2" size={16} /> <strong>Degree:</strong> <span className="ml-2">{PROFILE_DATA.degree}</span></li>
              <li className="flex items-center"><ChevronRight className="text-primary mr-2" size={16} /> <strong>Email:</strong> <span className="ml-2">{PROFILE_DATA.email}</span></li>
              <li className="flex items-center"><ChevronRight className="text-primary mr-2" size={16} /> <strong>Freelance:</strong> <span className="ml-2">{PROFILE_DATA.freelance}</span></li>
            </ul>
          </div>
          <p className="text-gray-600">
            {PROFILE_DATA.aboutLong}
          </p>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-10 bg-light">
      <SectionHeader title="Skills" description="My technical level." />
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="relative group">
            <div className="flex justify-between font-semibold text-secondary mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-300 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
              {skill.name}: {skill.level}%
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Resume = () => {
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const visibleExperiences = RESUME_EXPERIENCE.slice(0, 2);
  const hiddenExperiences = RESUME_EXPERIENCE.slice(2);
  const hasHidden = hiddenExperiences.length > 0;

  const handleDownloadCV = async () => {
    setIsGenerating(true);
    try {
      await generatePDF({
        elementId: 'cv-template',
        filename: `${PROFILE_DATA.name.replace(' ', '_')}_CV.pdf`
      });
    } catch (err) {
      console.error("Error generating PDF:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const ExperienceItem = ({ item }: { item: typeof RESUME_EXPERIENCE[0] }) => (
    <>
      <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-primary -left-[9px] top-0"></div>
      <h4 className="text-lg font-bold text-secondary uppercase mb-2">{item.title}</h4>
      <div className="bg-gray-100 inline-block px-3 py-1 font-semibold text-sm mb-4">{item.duration}</div>
      <p className="italic mb-4 text-gray-700">{item.subtitle}</p>
      <ul className="list-disc pl-4 text-gray-600 space-y-2 mb-4">
        {item.description.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
      {item.projects && item.projects.length > 0 && (
        <div className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-100">
          <h5 className="font-bold text-gray-700 text-xs mb-3 uppercase tracking-wide flex items-center gap-2">
            <Briefcase size={14} className="text-primary" /> Key Projects
          </h5>
          <div className="space-y-4">
            {item.projects.map((proj, idx) => (
              <div key={idx} className="border-l-2 border-primary/30 pl-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <span className="font-semibold text-sm text-secondary">
                    {proj.projectName}
                  </span>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full inline-block mt-1 sm:mt-0 w-fit">{proj.client}</span>
                </div>
                <div className="text-xs text-primary mb-1 font-mono">{proj.framework}</div>
                <ul className="list-disc list-inside text-sm text-gray-600 leading-snug">
                  {proj.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
                {proj.link && (
                  <div className="mt-1 text-xs text-primary truncate pl-3">
                    <span className="font-semibold text-gray-500">URL : </span>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{proj.link}</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );

  return (
    <section id="resume" className="py-16 px-4 md:px-10 bg-white">
      <SectionHeader
        title="Resume"
        description="Full Stack Developer adept in working in both front-end and back-end development processes. Highly skilled in programming design, development, and implementation of functional specifications."
        action={
          <button
            onClick={handleDownloadCV}
            disabled={isGenerating}
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-md active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Download size={18} />
            )}
            <span>{isGenerating ? 'Generating...' : 'Download CV'}</span>
          </button>
        }
      />

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-secondary mb-6 font-heading">Summary</h3>
          <div className="relative pl-5 border-l-2 border-primary pb-10 last:pb-0">
            <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-primary -left-[9px] top-0"></div>
            <h4 className="text-lg font-bold text-secondary uppercase mb-2">{PROFILE_DATA.name}</h4>
            <p className="italic mb-4 text-gray-600">{PROFILE_DATA.aboutShort}</p>
            <ul className="list-disc pl-4 text-gray-600 space-y-2">
              <li>{PROFILE_DATA.city}</li>
              <li>{PROFILE_DATA.phone}</li>
              <li>{PROFILE_DATA.email}</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-secondary my-6 font-heading">Education</h3>
          {RESUME_EDUCATION.map((item, index) => (
            <div key={index} className="relative pl-5 border-l-2 border-primary pb-10 last:pb-0">
              <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-primary -left-[9px] top-0"></div>
              <h4 className="text-lg font-bold text-secondary uppercase mb-2">{item.title}</h4>
              <div className="bg-gray-100 inline-block px-3 py-1 font-semibold text-sm mb-4">{item.duration}</div>
              <p className="italic mb-4 text-gray-700">{item.subtitle}</p>
              <div className="text-gray-600">{item.description.map((d, i) => <p key={i}>{d}</p>)}</div>
            </div>
          ))}

          <h3 className="text-2xl font-bold text-secondary my-6 font-heading">Certificate Training and Course</h3>
          {RESUME_CERTIFICATES.map((item, index) => (
            <div key={index} className="relative pl-5 border-l-2 border-primary pb-10 last:pb-0">
              <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-primary -left-[9px] top-0"></div>
              <h4 className="text-lg font-bold text-secondary uppercase mb-2">{item.title}</h4>
              {item.duration && <div className="bg-gray-100 inline-block px-3 py-1 font-semibold text-sm mb-4">{item.duration}</div>}
              <p className="italic mb-4 text-gray-700">{item.subtitle}</p>
              <div className="text-gray-600">{item.description.map((d, i) => <p key={i}>{d}</p>)}</div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-secondary mb-6 font-heading">Professional Experience</h3>
          {visibleExperiences.map((item, index) => (
            <div key={index} className={`relative pl-5 border-l-2 border-primary ${index === visibleExperiences.length - 1 && !isExperienceExpanded && hasHidden ? 'pb-0' : 'pb-10'}`}>
              <ExperienceItem item={item} />
            </div>
          ))}

          {hasHidden && (
            <>
              <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isExperienceExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  {hiddenExperiences.map((item, index) => (
                    <div key={index} className={`relative pl-5 border-l-2 border-primary ${index === hiddenExperiences.length - 1 ? 'pb-0' : 'pb-10'}`}>
                      <ExperienceItem item={item} />
                    </div>
                  ))}
                </div>
              </div>

              <div className={`pl-5 border-l-2 ${isExperienceExpanded ? 'border-primary' : 'border-transparent'} transition-colors duration-300 pt-4 pb-2`}>
                <button
                  onClick={() => setIsExperienceExpanded(!isExperienceExpanded)}
                  className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-secondary transition-colors group -ml-[29px]"
                >
                  <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center bg-white group-hover:bg-primary group-hover:text-white transition-colors">
                    <ChevronDown size={10} className={`transition-transform duration-300 ${isExperienceExpanded ? 'rotate-180' : ''}`} />
                  </div>
                  <span>{isExperienceExpanded ? 'Show Less' : `Show ${hiddenExperiences.length} More Experiences`}</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const ModernCVTemplate = () => (
  <div id="cv-template" className="fixed -left-[9999px] top-0 w-[794px] min-h-[1123px] h-auto bg-white text-gray-800 font-sans grid grid-cols-12">
    {/* Sidebar / Left Column (approx 30%) */}
    <div className="col-span-4 bg-[#173b6c] text-white p-8 flex flex-col">
      <div className="mb-10 text-center">
        <img src="./img/user_photo.jpg" alt="Profile" className="w-32 h-32 rounded-full border-4 border-white mx-auto mb-4 object-cover" />
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold uppercase tracking-wider leading-none mb-2">
            {PROFILE_DATA.name.split(' ')[0]}
          </h2>
          <h2 className="text-3xl font-light uppercase tracking-widest leading-none">
            {PROFILE_DATA.name.split(' ').slice(1).join(' ')}
          </h2>
        </div>
        <p className="text-blue-200 text-sm mt-4 font-medium tracking-wide">{PROFILE_DATA.role[0]}</p>
      </div>

      <div className="mb-10">
        <h3 className="text-base font-bold border-b border-blue-400 pb-2 mb-4 uppercase tracking-widest text-blue-100">Contact</h3>
        <ul className="space-y-4 text-sm text-blue-50 font-light">
          <li className="flex items-center gap-3"><Phone size={16} className="text-blue-300 shrink-0" /> {PROFILE_DATA.phone}</li>
          <li className="flex items-center gap-3"><Mail size={16} className="text-blue-300 shrink-0" /> <span className="break-all">{PROFILE_DATA.email}</span></li>
          <li className="flex items-center gap-3"><MapPin size={16} className="text-blue-300 shrink-0" /> {PROFILE_DATA.city}</li>
          <li className="flex items-center gap-3"><Globe size={16} className="text-blue-300 shrink-0" /> {PROFILE_DATA.website}</li>
        </ul>
      </div>

      <div className="mb-10">
        <h3 className="text-base font-bold border-b border-blue-400 pb-2 mb-4 uppercase tracking-widest text-blue-100">Skills</h3>
        <ul className="space-y-3 text-sm font-light">
          {SKILLS.map(skill => (
            <li key={skill.name}>
              <div className="flex justify-between mb-1 text-blue-50">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-blue-900/50 h-1 rounded-full overflow-hidden">
                <div className="bg-blue-400 h-1 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <h3 className="text-base font-bold border-b border-blue-400 pb-2 mb-4 uppercase tracking-widest text-blue-100">Education</h3>
        <div className="space-y-5">
          {RESUME_EDUCATION.map((edu, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 text-blue-300 text-xs mb-1">
                <GraduationCap size={14} />
                <span className="font-bold">{edu.duration}</span>
              </div>
              <p className="font-semibold text-sm text-white leading-tight mb-1">{edu.title}</p>
              <p className="text-xs text-blue-200 italic">{edu.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-base font-bold border-b border-blue-400 pb-2 mb-4 uppercase tracking-widest text-blue-100">Certificate and Course</h3>
        <div className="space-y-5">
          {RESUME_CERTIFICATES.map((cert, i) => (
            <div key={i}>
              {cert.duration && (
                <div className="flex items-center gap-2 text-blue-300 text-xs mb-1">
                  <GraduationCap size={14} />
                  <span className="font-bold">{cert.duration}</span>
                </div>
              )}
              <p className="font-semibold text-sm text-white leading-tight mb-1">{cert.title}</p>
              <p className="text-xs text-blue-200 italic">{cert.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Main Content / Right Column */}
    <div className="col-span-8 bg-white p-12">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2 uppercase tracking-tight">Profile</h2>
        <div className="w-16 h-1.5 bg-[#149ddd] mb-6"></div>
        <p className="text-gray-600 leading-[17px] text-[15px] text-justify">
          {PROFILE_DATA.aboutLong}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-tight flex items-center gap-3">
          <span className="w-10 h-10 bg-[#149ddd] text-white flex items-center justify-center rounded-full shadow-lg"><Briefcase size={20} /></span>
          Experience
        </h2>

        <div className="border-l-2 border-gray-100 ml-5 space-y-10 pl-8 pb-4">
          {RESUME_EXPERIENCE.map((exp, i) => (
            <div key={i} className="relative group">
              <div className="absolute w-5 h-5 bg-white border-4 border-[#149ddd] rounded-full -left-[38px] top-[10px] transition-transform group-hover:scale-125"></div>
              <h3 className="text-xl font-bold text-gray-800 leading-none">{exp.title}</h3>
              <div className="text-sm font-bold text-[#149ddd] mt-1 mb-3 uppercase tracking-wide">{exp.subtitle} <span className="text-gray-400 mx-2">|</span> {exp.duration}</div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-gray-600 leading-4 marker:text-[#149ddd]">
                {exp.description.map((d, di) => (
                  <li key={di}>{d}</li>
                ))}
              </ul>

              {/* Projects in CV PDF */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="mt-4 grid gap-2">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Projects</div>
                  <div className="grid grid-cols-1 gap-2">
                    {exp.projects.map((proj, pIdx) => (
                      <div key={pIdx} className="bg-gray-50 p-2 rounded text-xs">
                        <div className="font-bold text-gray-700 flex justify-between items-start">
                          <span>{proj.projectName} <span className="font-normal text-gray-500 block">Client: {proj.client}</span></span>
                        </div>
                        <div className="text-[#149ddd] text-[10px] mb-1">{proj.framework}</div>
                        <ul className="list-disc list-inside text-gray-600 leading-none">
                          {proj.details.map((d, di) => (
                            <li key={di}>{d}</li>
                          ))}
                        </ul>
                        {proj.link && (
                          <div className="mt-1 text-[10px] text-[#149ddd] left-[-10px]">
                            <span className="font-semibold text-gray-500">URL : </span>
                            {proj.link}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const VirtualMasonryItem: React.FC<{ item: any; filter: string; onPlay: (url: string) => void }> = ({ item, filter, onPlay }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [savedHeight, setSavedHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        if (containerRef.current) {
          const height = containerRef.current.getBoundingClientRect().height;
          if (height > 0) setSavedHeight(height);
        }
        setIsVisible(false);
      }
    }, { rootMargin: '600px' });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  let imageUrl = item.image;
  let isShorts = false;
  if (item.category === 'VDO' && item.links && item.links.length > 0) {
    const url = item.links[0].url;
    isShorts = url.includes('shorts/');
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|shorts\/|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      imageUrl = `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`;
    }
  }

  const virtualStyle = (!isVisible && savedHeight) ? { height: `${savedHeight}px` } : {};

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden bg-white w-full ${filter !== 'VDO' ? 'rounded-lg shadow-md' : ''}`}
      style={virtualStyle}
    >
      {isVisible && (
        <>
          <img
            src={imageUrl}
            alt={item.title}
            loading="lazy"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${filter === 'VDO' ? (isShorts ? 'aspect-[9/16]' : 'aspect-video') : 'h-[auto]'
              }`}
          />
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
            {item.category !== 'VDO' && (
              <>
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="uppercase text-sm mb-4">{item.category}</p>
              </>
            )}

            <div className="flex gap-3 justify-center text-center flex-wrap">
              {item.links && item.links.map((link: any, i: number) => {
                const isVdo = item.category === 'VDO';
                return (
                  <a
                    key={i}
                    href={isVdo ? "#" : link.url}
                    target={isVdo ? "_self" : "_blank"}
                    rel={isVdo ? "" : "noopener noreferrer"}
                    onClick={(e) => {
                      if (isVdo) {
                        e.preventDefault();
                        onPlay(link.url);
                      }
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-colors text-xs font-medium backdrop-blur-sm"
                    title={link.label}
                  >
                    <ExternalLink size={12} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState<'all' | 'app' | 'card' | 'web' | 'animation' | 'VDO'>('all');
  const [visibleCount, setVisibleCount] = useState(9); // Initial view count, fits 3x3 grid nicely
  const [vdoModalUrl, setVdoModalUrl] = useState<string | null>(null);

  const masonryRef = useRef<HTMLDivElement>(null);
  const masonryInstance = useRef<any>(null);

  useEffect(() => {
    // Reset visible count when filter changes
    setVisibleCount(9);
  }, [filter]);

  useEffect(() => {
    if (filter === 'VDO' && masonryRef.current) {
      const initMasonry = () => {
        if (!masonryInstance.current) {
          masonryInstance.current = new Masonry(masonryRef.current!, {
            itemSelector: '.masonry-item',
            columnWidth: '.masonry-sizer',
            percentPosition: true,
          });
        } else {
          masonryInstance.current.reloadItems();
        }

        imagesLoaded(masonryRef.current!).on('progress', () => {
          masonryInstance.current?.layout();
        });
      };

      const timer = setTimeout(initMasonry, 50);
      return () => clearTimeout(timer);
    }

    return () => {
      if (filter !== 'VDO' && masonryInstance.current) {
        masonryInstance.current.destroy();
        masonryInstance.current = null;
      }
    };
  }, [filter, visibleCount]);

  let filteredItems = PORTFOLIO_ITEMS;
  if (filter === 'all') {
    filteredItems = PORTFOLIO_ITEMS.filter(item => item.category !== 'VDO');
  } else if (filter === 'VDO') {
    filteredItems = PORTFOLIO_VDO_ITEMS;
  } else {
    filteredItems = PORTFOLIO_ITEMS.filter(item => item.category === filter);
  }

  const displayedItems = filteredItems.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  const getEmbedUrl = (url: string) => {
    // Convert regular YouTube URL and Shorts to embed URL with autoplay and loop
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|shorts\/|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      const videoId = match[2];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`;
    }
    return url;
  };

  return (
    <section id="portfolio" className="py-16 px-4 md:px-10 bg-light">
      <SectionHeader title="Portfolio" description="A portfolio that shines from simplicity, setting a great example of what a web developer portfolio can be." />

      <div className="flex justify-center mb-8">
        <ul className="flex flex-wrap gap-4 bg-white px-6 py-2 rounded-full shadow-sm">
          {['all', 'app', 'card', 'web', 'animation', 'VDO'].map((cat) => (
            <li
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`cursor-pointer uppercase text-sm font-semibold tracking-wide transition-colors hover:text-primary ${filter === cat ? 'text-primary' : 'text-gray-600'}`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {filter === 'VDO' ? (
        <div ref={masonryRef} className="w-full relative">
          <div className="masonry-sizer w-1/2 md:w-1/3 lg:w-1/6" style={{ height: 0 }}></div>
          {displayedItems.map((item) => {
            let isShorts = false;
            if (item.category === 'VDO' && item.links && item.links.length > 0) {
              isShorts = item.links[0].url.includes('shorts/');
            }
            const spanClasses = isShorts ? 'w-1/2 md:w-1/3 lg:w-1/6' : 'w-full md:w-2/3 lg:w-1/3';
            return (
              <div key={item.id} className={`masonry-item p-0 ${spanClasses}`}>
                <VirtualMasonryItem item={item} filter={filter} onPlay={setVdoModalUrl} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item) => (
            <VirtualMasonryItem key={item.id} item={item} filter={filter} onPlay={setVdoModalUrl} />
          ))}
        </div>
      )}

      {visibleCount < filteredItems.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="bg-primary text-white py-3 px-10 rounded-full hover:bg-blue-600 transition-colors shadow-md font-semibold text-sm tracking-wide"
          >
            Load More
          </button>
        </div>
      )}

      {/* VDO Modal */}
      {vdoModalUrl && (
        <div className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4">
          <div className={`relative w-full ${vdoModalUrl.includes('shorts/') ? 'max-w-[400px]' : 'max-w-5xl'}`}>
            <button
              onClick={() => setVdoModalUrl(null)}
              className={`absolute right-0 text-white hover:text-gray-300 transition-colors ${vdoModalUrl.includes('shorts/') ? '-top-10 sm:-right-12 sm:top-0' : '-top-10'}`}
            >
              <X size={32} />
            </button>
            <div className={`relative w-full bg-black rounded shadow-2xl overflow-hidden ${vdoModalUrl.includes('shorts/') ? 'pt-[177.78%]' : 'pt-[56.25%]'}`}>
              {/* Unmounting the iframe destroys the VDO automatically when closed */}
              <iframe
                src={getEmbedUrl(vdoModalUrl)}
                title="VDO Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 md:px-10 bg-white">
      <SectionHeader title="Services" description="Full Stack Developer services cover the entire spectrum of application development, from front-end user interfaces to back-end logic, databases, and server configuration. They provide end-to-end solutions for web, mobile, and desktop applications, enhancing efficiency and speed to market." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <div key={index} className="flex gap-4 p-4 hover:shadow-lg transition-shadow rounded-lg">
            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full shadow-md group-hover:bg-white group-hover:text-primary transition-colors">
              <div className="scale-125">{service.icon}</div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-secondary mb-2 hover:text-primary cursor-pointer transition-colors">{service.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Construct email body
    const body = `Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`;

    // Construct mailto link
    // Recipient: looklikelove@me.com
    // Subject: Message from CV contact
    const mailtoLink = `mailto:looklikelove@me.com?subject=Message from CV contact&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // Show success popup and reset form
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-10 bg-light relative">
      <SectionHeader title="Contact" description="I’m currently open to new opportunities, freelance projects, or collaborating on innovative full-stack solutions. Whether you have a specific project in mind or just want to chat about tech, feel free to reach out. Let’s Build Something Together." />
      <div className="grid md:grid-cols-12 gap-8 shadow-lg bg-white p-6 rounded-lg">
        <div className="md:col-span-5 space-y-8">
          <div className="flex group">
            <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
              <MapPin size={20} />
            </div>
            <div className="ml-4">
              <h4 className="text-xl font-semibold text-secondary mb-1">Location:</h4>
              <p className="text-gray-600 text-sm">{PROFILE_DATA.city}</p>
            </div>
          </div>
          <div className="flex group">
            <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
              <Mail size={20} />
            </div>
            <div className="ml-4">
              <h4 className="text-xl font-semibold text-secondary mb-1">Email:</h4>
              <p className="text-gray-600 text-sm">{PROFILE_DATA.email}</p>
            </div>
          </div>
          <div className="flex group">
            <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
              <Phone size={20} />
            </div>
            <div className="ml-4">
              <h4 className="text-xl font-semibold text-secondary mb-1">Call:</h4>
              <p className="text-gray-600 text-sm">{PROFILE_DATA.phone}</p>
            </div>
          </div>
          <div className="h-64 w-full bg-gray-200 rounded-lg overflow-hidden relative">
            <iframe
              src="https://maps.google.com/maps?q=13.763501,100.640096&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>
        <div className="md:col-span-7">
          <form className="space-y-4" onSubmit={handleSendMessage}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 rounded focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Message</label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 rounded focus:outline-none focus:border-primary"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-primary text-white py-3 px-8 rounded-full hover:bg-blue-600 transition-colors shadow-md">Send Message</button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center relative animate-[fade-in_0.3s_ease-out]">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 font-heading">Sent!</h3>
            <p className="text-gray-600 mb-6">Your message has been initiated via email.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-primary text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors shadow-md w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

const Footer = () => (
  <footer className="py-6 bg-white text-center text-sm text-gray-600 md:pl-[300px]">
    <div>
      &copy; Copyright <strong><span>Black BUNNY iPortfolio</span></strong>. All Rights Reserved
    </div>
    <div className="mt-1 text-xs">
      Designed by <span className="text-primary cursor-pointer">Black BUNNY</span> Factor
    </div>
  </footer>
)

const App: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll Spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = MENU_ITEMS.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileNavOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="font-sans text-gray-800 antialiased">
      {/* Mobile Toggle */}
      <div className="fixed top-4 right-4 z-[999] md:hidden">
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="bg-primary text-white p-2 rounded-full shadow-lg"
        >
          {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <header
        className={`fixed top-0 left-0 bottom-0 w-[300px] bg-dark transition-all duration-300 z-50 overflow-y-auto
          ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex flex-col items-center mt-4 mb-4">
            <img
              src="./img/user_photo.jpg"
              alt="Profile"
              className="w-28 h-28 rounded-full border-8 border-[#2c2f3f] mb-4"
            />
            <h1 className="text-2xl font-bold text-white font-heading">{PROFILE_DATA.name}</h1>

            <div className="flex gap-3 mt-4">
              {SOCIAL_LINKS.map((link, idx) => (
                <a key={idx} href={link.href} className="w-9 h-9 bg-[#212431] text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors text-lg">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <nav className="mt-8 flex-1">
            <ul className="space-y-1">
              {MENU_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`flex items-center gap-3 py-3 px-2 text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm group ${activeSection === item.id ? 'text-white' : ''}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    <span className={`transition-colors ${activeSection === item.id ? 'text-primary' : 'group-hover:text-primary'}`}>
                      {item.icon}
                    </span>
                    <span className="font-medium tracking-wide">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-gray-500 text-xs text-center mt-4">
            © 2023 {PROFILE_DATA.name}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="md:ml-[300px] transition-all duration-300">
        <Hero />
        <About />

        {/* Facts Section - Simple Counters */}
        <section className="py-10 px-4 md:px-10 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Smile size={40} />, count: 82, label: 'Happy Clients' },
              { icon: <Briefcase size={40} />, count: 221, label: 'Projects' },
              { icon: <Headset size={40} />, count: 1463, label: 'Hours Of Support' },
              { icon: <Users size={40} />, count: 15, label: 'Hard Workers' },
            ].map((fact, i) => (
              <div key={i} className="flex flex-col items-center md:items-start">
                <div className="text-primary mb-2">{fact.icon}</div>
                <span className="text-3xl font-bold text-secondary font-heading">{fact.count}</span>
                <p className="text-gray-600 text-sm mt-1">{fact.label}</p>
              </div>
            ))}
          </div>
        </section>

        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </main>

      {/* Hidden CV Template for PDF Generation */}
      <ModernCVTemplate />

      <GeminiChat />
    </div>
  );
};

export default App;