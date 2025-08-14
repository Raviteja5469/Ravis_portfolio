import { useTheme } from '../../contexts/ThemeContext';
import { Calendar, MapPin, ExternalLink, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import React from 'react';

interface TimelineItem {
  id: number;
  type: 'work' | 'education';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
  achievements?: string[];
  logo?: string;
  website?: string;
}

const TimelineCard = React.memo(({ item, index, isDark }: { item: TimelineItem; index: number; isDark: boolean }) => {
  const cardSide = index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12';
  const logoSide = index % 2 === 0 ? 'md:left-1/2 md:translate-x-[30px]' : 'md:right-1/2 md:-translate-x-[126px]'; // Adjusted for 96px logo

  let startFormatted = 'Invalid Date';
  let endFormatted = 'Invalid Date';
  try {
    startFormatted = format(new Date(item.startDate), 'MMM yyyy');
    endFormatted = item.endDate === 'present' ? 'Present' : format(new Date(item.endDate), 'MMM yyyy');
  } catch (error) {
    console.warn(`Invalid date for ${item.title}`);
  }

  return (
    <motion.div
      whileHover={{ rotateY: 5, rotateX: 5, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`ml-12 md:w-5/12 ${cardSide} rounded-xl border ${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-100/50 border-gray-300'} shadow-md hover:shadow-lg transition-shadow duration-300`}
      role="region"
      aria-label={`${item.type === 'work' ? 'Work Experience' : 'Education'}: ${item.title} at ${item.organization}`}
    >
      <div className="p-6 space-y-4">
        {/* Type Badge */}
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium font-montserrat ${isDark ? 'bg-blue-600/20 text-blue-200' : 'bg-blue-600/20 text-blue-800'}`}>
          {item.type === 'work' ? <Briefcase size={16} className="mr-2" /> : <GraduationCap size={16} className="mr-2" />}
          {item.type === 'work' ? 'Work Experience' : 'Education'}
        </div>

        {/* Title and Organization */}
        <h3 className={`text-xl font-semibold font-orbitron ${isDark ? 'text-white' : 'text-black'}`}>
          {item.title}
        </h3>
        <div className="flex items-center space-x-2">
          {item.website ? (
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg font-medium font-montserrat ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
            >
              {item.organization}
              <ExternalLink size={16} className="inline ml-1" aria-label="External link" />
            </a>
          ) : (
            <h4 className={`text-lg font-medium font-montserrat ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              {item.organization}
            </h4>
          )}
        </div>

        {/* Meta Info */}
        <div className={`flex flex-wrap gap-4 text-sm font-montserrat ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <div className="flex items-center space-x-1">
            <Calendar size={14} aria-hidden="true" />
            <span>{startFormatted} - {endFormatted}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={14} aria-hidden="true" />
            <span>{item.location}</span>
          </div>
        </div>

        {/* Description */}
        <ul className={`space-y-2 text-sm font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
          {item.description.map((desc: string, descIndex: number) => (
            <li key={descIndex} className="flex items-start space-x-2">
              <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'} mt-1`}>•</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        {item.technologies && (
          <div>
            <p className={`text-sm font-medium mb-2 font-montserrat ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
              Technologies Used:
            </p>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech: string, techIndex: number) => (
                <span
                  key={techIndex}
                  className={`px-2 py-1 rounded-full text-xs font-medium font-montserrat ${isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-600'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {item.achievements && (
          <div>
            <p className={`text-sm font-medium mb-2 font-montserrat ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
              Key Achievements:
            </p>
            <ul className={`space-y-1 text-sm font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
              {item.achievements.map((achievement: string, achIndex: number) => (
                <li key={achIndex} className="flex items-start space-x-2">
                  <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'} mt-1`}>★</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
});

const Experience = () => {
  const { isDark } = useTheme();

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      type: 'work',
      title: 'Full Stack Developer Intern',
      organization: 'Blue Planet Info Solutions',
      location: 'Remote',
      startDate: '2025-04',
      endDate: '2025-07',
      description: [
        'Developed a comprehensive MERN stack club management system',
        'Implemented real-time features using WebSocket technology',
        'Designed and optimized MongoDB database schemas for scalability'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      achievements: ['Improved system efficiency by 40%', 'Delivered project 2 weeks ahead of schedule'],
      logo: 'https://blueplanetsolutions.com/public/images/logo-1.png',
      website: 'https://blueplanetsolutions.com/'
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer',
      organization: 'Edunet Foundation',
      location: 'Remote',
      startDate: '2023-08',
      endDate: '2024-02',
      description: [
        'Built a complete online auction platform from scratch',
        'Implemented secure user authentication and payment integration',
        'Developed real-time bidding system with live updates'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Stripe'],
      achievements: ['Handled 500+ concurrent users', 'Zero security vulnerabilities reported'],
      logo: 'https://edunetfoundation.org/wp-content/uploads/2022/06/edunet-logo-white.png',
      website: 'https://edunetfoundation.org/'
    },
    {
      id: 3,
      type: 'work',
      title: 'Frontend UI Developer Intern',
      organization: 'Motion Cut',
      location: 'Remote',
      startDate: '2023-05',
      endDate: '2023-07',
      description: [
        'Created responsive and interactive user interfaces',
        'Collaborated with design team to implement pixel-perfect designs',
        'Optimized frontend performance and accessibility'
      ],
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
      achievements: ['Improved page load speed by 35%', 'Achieved 98% accessibility score'],
      logo: 'https://motioncut.in/wp-content/uploads/2023/05/MOTION-CUT1-e1751999514735.png',
      website: 'https://motioncut.in/'
    },
    {
      id: 4,
      type: 'education',
      title: 'B.Tech in Cybersecurity',
      organization: 'Bharat Institute of Engineering and Technology',
      location: 'India',
      startDate: '2023-09',
      endDate: '2026-06',
      description: [
        'Specializing in cybersecurity, ethical hacking, and secure software development',
        'Relevant coursework: Network Security, Cryptography, Digital Forensics',
        'Active member of Cybersecurity Club and coding societies'
      ],
      technologies: ['Python', 'C++', 'Linux', 'Wireshark', 'Metasploit'],
      achievements: ['CGPA: 8.5/10', 'Dean\'s List for 2 consecutive semesters'],
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLzlTpM-HjdbMjDHmuzySc8vvKQmqmLenVlJeQzwEHyQ&s=10',
      website: 'https://biet.ac.in/'
    },
    {
      id: 5,
      type: 'education',
      title: 'Diploma in Electrical & Electronics Engineering',
      organization: 'Mahaveer Institute of Science and Technology',
      location: 'India',
      startDate: '2020-09',
      endDate: '2023-05',
      description: [
        'Comprehensive foundation in electrical systems and electronics',
        'Projects focused on automation and IoT applications',
        'Strong mathematical and analytical foundation'
      ],
      technologies: ['C Programming', 'Circuit Design', 'PLC', 'Arduino'],
      achievements: ['First Class with Distinction', 'Best Project Award 2023'],
      logo: 'https://mist.ac.in/images/logos/logo1.jpg',
      website: 'https://mist.ac.in/'
    }
  ];

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-6xl font-bold font-orbitron ${isDark ? 'text-white' : 'text-black'}`}>
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
            <p className={`text-lg mt-4 font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
              My professional journey and academic background in technology
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 ${isDark ? 'bg-gray-700' : 'bg-gray-300'} md:-translate-x-1/2`}></div>
            <div className="space-y-12">
              {timelineData.map((item: TimelineItem, index: number) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 + index * 0.1 }}
                  className={`relative flex justify-start md:w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                  style={{ perspective: '1000px', left: index % 2 === 0 ? '-150px' : 'auto', right: index % 2 === 0 ? 'auto' : '0' }}
                >
                  {/* Timeline Dot */}
                  {/* <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full ${isDark ? 'bg-blue-600' : 'bg-blue-600'} -translate-x-1/2  shadow-md`}
                  ></div> */}

                  {item.logo && (
                    <div
                      className={`hidden md:block sticky top-0 w-32 h-32 rounded-full overflow-hidden shadow-md flex items-center justify-center ${index % 2 === 0
                          ? 'left-1/2 translate-x-[36px]'
                          : 'left-1/2 -translate-x-[172px]'
                        }`}
                    >
                      <img
                        src={item.logo}
                        alt={`${item.organization} logo`}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                  )}


                  {/* Content Card */}
                  <TimelineCard item={item} index={index} isDark={isDark} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
          className="text-center mt-16"
        >
          <p className={`text-lg mb-6 font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
            Want to know more about my professional journey?
          </p>
          <a
            href="./assets/Raviteja_resume.pdf"
            download
            className={`px-8 py-4 rounded-full font-medium font-montserrat transition-all duration-300 border hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${isDark ? 'bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 hover:text-black'}`}
            aria-label="Download Detailed Resume"
          >
            Download Detailed Resume
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

// Add font and animation styles (consider moving to global CSS)
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Montserrat:wght@400;500;700&display=swap');

  .font-orbitron {
    font-family: 'Orbitron', sans-serif;
  }

  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

export default Experience;