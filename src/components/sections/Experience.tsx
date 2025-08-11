import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

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
}

const Experience: React.FC = () => {
  const { isDark } = useTheme();

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      type: 'work',
      title: 'Full Stack Developer Intern',
      organization: 'Blue Planet Info Solutions',
      location: 'Remote',
      startDate: '2024-06',
      endDate: '2024-12',
      description: [
        'Developed a comprehensive MERN stack club management system',
        'Implemented real-time features using WebSocket technology',
        'Designed and optimized MongoDB database schemas for scalability'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      achievements: ['Improved system efficiency by 40%', 'Delivered project 2 weeks ahead of schedule']
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
      achievements: ['Handled 500+ concurrent users', 'Zero security vulnerabilities reported']
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
      achievements: ['Improved page load speed by 35%', 'Achieved 98% accessibility score']
    },
    {
      id: 4,
      type: 'education',
      title: 'B.Tech in Cybersecurity',
      organization: 'University College of Engineering',
      location: 'India',
      startDate: '2023-09',
      endDate: '2026-06',
      description: [
        'Specializing in cybersecurity, ethical hacking, and secure software development',
        'Relevant coursework: Network Security, Cryptography, Digital Forensics',
        'Active member of Cybersecurity Club and coding societies'
      ],
      technologies: ['Python', 'C++', 'Linux', 'Wireshark', 'Metasploit'],
      achievements: ['CGPA: 8.5/10', 'Dean\'s List for 2 consecutive semesters']
    },
    {
      id: 5,
      type: 'education',
      title: 'Diploma in Electrical & Electronics Engineering',
      organization: 'Government Polytechnic',
      location: 'India',
      startDate: '2020-09',
      endDate: '2023-05',
      description: [
        'Comprehensive foundation in electrical systems and electronics',
        'Projects focused on automation and IoT applications',
        'Strong mathematical and analytical foundation'
      ],
      technologies: ['C Programming', 'Circuit Design', 'PLC', 'Arduino'],
      achievements: ['First Class with Distinction', 'Best Project Award 2023']
    }
  ];

  return (
    <section id="experience" className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-cosmic-midnight' : 'bg-white'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-neon-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-neon-magenta rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-cosmic-dark'
          }`}>
            Experience & <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">Education</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-cosmic-blue'
          }`}>
            My professional journey and academic background in technology
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-purple transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={item.id} className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex-col md:flex-row`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-full transform md:-translate-x-1/2 shadow-[0_0_20px_rgba(0,255,255,0.5)] z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className={`p-6 rounded-2xl backdrop-blur-md border transition-all duration-500 hover:scale-105 ${
                      isDark
                        ? 'bg-white/10 border-white/20 hover:bg-white/20'
                        : 'bg-white/70 border-gray-200 hover:bg-white hover:shadow-xl'
                    }`}>
                      {/* Type Badge */}
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          item.type === 'work'
                            ? 'bg-gradient-to-r from-neon-cyan/20 to-blue-500/20 text-neon-cyan border border-neon-cyan/30'
                            : 'bg-gradient-to-r from-neon-magenta/20 to-purple-500/20 text-neon-magenta border border-neon-magenta/30'
                        }`}>
                          {item.type === 'work' ? '💼 Work Experience' : '🎓 Education'}
                        </span>
                      </div>

                      {/* Title and Organization */}
                      <div className="space-y-2 mb-4">
                        <h3 className={`text-xl font-bold ${
                          isDark ? 'text-white' : 'text-cosmic-dark'
                        }`}>
                          {item.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <h4 className={`text-lg font-semibold ${
                            item.type === 'work' ? 'text-neon-cyan' : 'text-neon-magenta'
                          }`}>
                            {item.organization}
                          </h4>
                          <ExternalLink size={16} className={`${
                            item.type === 'work' ? 'text-neon-cyan' : 'text-neon-magenta'
                          } opacity-50`} />
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className={`flex flex-wrap gap-4 mb-4 text-sm ${
                        isDark ? 'text-gray-400' : 'text-cosmic-blue'
                      }`}>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>
                            {new Date(item.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - {' '}
                            {item.endDate === 'present' ? 'Present' : new Date(item.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className={`space-y-2 mb-4 ${
                        isDark ? 'text-gray-300' : 'text-cosmic-blue'
                      }`}>
                        {item.description.map((desc, descIndex) => (
                          <li key={descIndex} className="flex items-start space-x-2">
                            <span className="text-neon-cyan mt-1.5 flex-shrink-0">•</span>
                            <span className="text-sm">{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      {item.technologies && (
                        <div className="mb-4">
                          <p className={`text-sm font-medium mb-2 ${
                            isDark ? 'text-gray-400' : 'text-cosmic-blue'
                          }`}>
                            Technologies Used:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-2 py-1 rounded-md text-xs font-medium ${
                                  isDark
                                    ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20'
                                    : 'bg-cosmic-indigo/10 text-cosmic-indigo border border-cosmic-indigo/20'
                                }`}
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
                          <p className={`text-sm font-medium mb-2 ${
                            isDark ? 'text-gray-400' : 'text-cosmic-blue'
                          }`}>
                            Key Achievements:
                          </p>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className={`flex items-start space-x-2 text-sm ${
                                isDark ? 'text-gray-300' : 'text-cosmic-blue'
                              }`}>
                                <span className="text-neon-magenta mt-1 flex-shrink-0">★</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${
            isDark ? 'text-gray-300' : 'text-cosmic-blue'
          }`}>
            Want to know more about my professional journey?
          </p>
          <button className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 ${
            isDark
              ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 text-white border border-neon-cyan hover:bg-gradient-to-r hover:from-neon-cyan/40 hover:to-neon-magenta/40 focus-visible:ring-neon-cyan'
              : 'bg-gradient-to-r from-cosmic-indigo/20 to-neon-purple/20 text-cosmic-dark border border-cosmic-indigo hover:bg-gradient-to-r hover:from-cosmic-indigo/40 hover:to-neon-purple/40 focus-visible:ring-cosmic-indigo'
          }`}>
            Download Detailed Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;