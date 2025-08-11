import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { isDark } = useTheme();

  const projects: Project[] = [
    {
      id: 1,
      title: 'Online Auction Platform',
      description: 'Real-time bidding system with secure authentication, live updates, and automated auction management. Built with MERN stack and Socket.io for seamless user experience.',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Job Quest - Gamified Portal',
      description: 'Innovative job portal with gamification elements, coin rewards system, and AI-powered job matching. Enhances user engagement through interactive features.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Web',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux', 'PWA'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Waste Classifier AI',
      description: 'CNN-based waste sorting system using computer vision. Achieves 94% accuracy in classifying recyclable vs non-recyclable waste through deep learning.',
      image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'AI',
      technologies: ['Python', 'TensorFlow', 'Streamlit', 'OpenCV', 'NumPy'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Animal Species Classifier',
      description: 'Multi-class deep learning model for animal species recognition. Trained on 50+ species with transfer learning and data augmentation techniques.',
      image: 'https://images.pexels.com/photos/33787/animal-brown-horse-photography.jpg?auto=compress&cs=tinysrgb&w=500',
      category: 'AI',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'Matplotlib', 'Scikit-learn'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Lifeease Accessibility App',
      description: 'React Native application focused on accessibility features for users with disabilities. Includes voice navigation, high contrast modes, and assistive technologies.',
      image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Accessibility',
      technologies: ['React Native', 'Firebase', 'Voice API', 'Accessibility APIs'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Cybersecurity Dashboard',
      description: 'Real-time security monitoring dashboard with threat detection, vulnerability scanning, and incident response automation for network security.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Cybersecurity',
      technologies: ['Python', 'Flask', 'D3.js', 'PostgreSQL', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-cosmic-midnight' : 'bg-white'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-48 h-48 border border-neon-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 border border-neon-magenta rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-neon-green/10 to-neon-purple/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-cosmic-dark'
          }`}>
            Featured <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto mb-8 ${
            isDark ? 'text-gray-400' : 'text-cosmic-blue'
          }`}>
            A collection of projects showcasing my expertise across different domains
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-magenta text-cosmic-dark shadow-[0_0_20px_rgba(0,255,255,0.3)]'
                    : isDark
                      ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                      : 'bg-gray-100 text-cosmic-blue hover:bg-gray-200 border border-gray-200'
                } ${activeFilter === category ? 'focus-visible:ring-neon-cyan' : isDark ? 'focus-visible:ring-white' : 'focus-visible:ring-cosmic-indigo'}`}
                aria-label={`Filter by ${category}`}
              >
                <span className="flex items-center space-x-2">
                  <Filter size={16} />
                  <span>{category}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl backdrop-blur-md border transition-all duration-500 hover:scale-105 ${
                isDark
                  ? 'bg-white/10 border-white/20 hover:bg-white/20'
                  : 'bg-white/70 border-gray-200 hover:bg-white hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-neon-cyan to-neon-magenta text-cosmic-dark px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-neon-cyan/20 backdrop-blur-md rounded-full text-white hover:bg-neon-cyan/40 transition-colors duration-300"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-neon-magenta/20 backdrop-blur-md rounded-full text-white hover:bg-neon-magenta/40 transition-colors duration-300"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className={`text-xl font-bold group-hover:text-neon-cyan transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-cosmic-dark'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm line-clamp-3 ${
                    isDark ? 'text-gray-400' : 'text-cosmic-blue'
                  }`}>
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? 'bg-neon-cyan/20 text-neon-cyan'
                          : 'bg-cosmic-indigo/20 text-cosmic-indigo'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/10">
                  <span className={`text-sm font-medium ${
                    isDark ? 'text-gray-400' : 'text-cosmic-blue'
                  }`}>
                    {project.category}
                  </span>
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm font-medium transition-colors duration-300 ${
                          isDark ? 'text-neon-cyan hover:text-white' : 'text-cosmic-indigo hover:text-cosmic-dark'
                        }`}
                      >
                        View Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm font-medium transition-colors duration-300 ${
                          isDark ? 'text-neon-magenta hover:text-white' : 'text-neon-purple hover:text-cosmic-dark'
                        }`}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_50px_rgba(0,255,255,0.1)]"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 ${
            isDark
              ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 text-white border border-neon-cyan hover:bg-gradient-to-r hover:from-neon-cyan/40 hover:to-neon-magenta/40 focus-visible:ring-neon-cyan'
              : 'bg-gradient-to-r from-cosmic-indigo/20 to-neon-purple/20 text-cosmic-dark border border-cosmic-indigo hover:bg-gradient-to-r hover:from-cosmic-indigo/40 hover:to-neon-purple/40 focus-visible:ring-cosmic-indigo'
          }`}>
            View More Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;