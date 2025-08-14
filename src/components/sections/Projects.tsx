import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

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

const Projects = () => {
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
      liveUrl: 'https://online-auction-frontend.onrender.com/',
      githubUrl: 'https://github.com/Raviteja5469/Online-Auction-Platform',
      featured: true
    },
    {
      id: 2,
      title: 'Job Quest - Gamified Portal (on going)',
      description: 'Innovative job portal with gamification elements, coin rewards system, and AI-powered job matching. Enhances user engagement through interactive features.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Web',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux', 'PWA'],
      liveUrl: 'https://gamified-job-portal.vercel.app/',
      githubUrl: 'https://github.com/Raviteja5469/gamified-job-portal',
      featured: true
    },
    {
      id: 3,
      title: 'Waste Classifier AI',
      description: 'CNN-based waste sorting system using computer vision. Achieves 94% accuracy in classifying recyclable vs non-recyclable waste through deep learning.',
      image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'AI',
      technologies: ['Python', 'TensorFlow', 'Streamlit', 'OpenCV', 'NumPy'],
      liveUrl: 'https://waste-analyzer-novukyc46t6pdd5qrj.streamlit.app/',
      githubUrl: 'https://github.com/Raviteja5469/CNN-model-waste-classification',
      featured: true
    },
    {
      id: 4,
      title: 'Animal Species Classifier',
      description: 'Multi-class deep learning model for animal species recognition. Trained on 50+ species with transfer learning and data augmentation techniques.',
      image: 'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?_gl=1*18wzkws*_ga*MTEzNDIyODIzMy4xNzU0OTI1NDgz*_ga_8JE65Q40S6*czE3NTQ5MjU0ODIkbzEkZzEkdDE3NTQ5MjU1MTMkajI5JGwwJGgw',
      category: 'AI',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'Matplotlib', 'Scikit-learn'],
      liveUrl: 'https://multiclassanimalclassification-jhpwpmaea4drz9jgxkkojm.streamlit.app/',
      githubUrl: 'https://github.com/Raviteja5469/Multi_class_animal_classification',
      featured: false
    },
    {
      id: 5,
      title: 'Lifeease Accessibility App',
      description: 'React Native application focused on accessibility features for users with disabilities. Includes voice navigation, high contrast modes, and assistive technologies.',
      image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Accessibility',
      technologies: ['React Native', 'Firebase', 'Voice API', 'Accessibility APIs'],
      liveUrl: 'https://github.com/Raviteja5469/Lifease',
      githubUrl: 'https://github.com/Raviteja5469/Lifease',
      featured: true
    },
    // {
    //   id: 6,
    //   title: 'Cybersecurity Dashboard',
    //   description: 'Real-time security monitoring dashboard with threat detection, vulnerability scanning, and incident response automation for network security.',
    //   image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500',
    //   category: 'Cybersecurity',
    //   technologies: ['Python', 'Flask', 'D3.js', 'PostgreSQL', 'Docker'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: false
    // }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-6xl font-bold font-orbitron ${isDark ? 'text-white' : 'text-black'}`}>
              My Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
            <p className={`text-lg max-w-2xl mx-auto mt-4 font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
              A collection of projects showcasing my expertise across different domains
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                initial={{ opacity: 0, transform: 'translateY(20px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 font-montserrat ${
                  activeFilter === category
                    ? isDark
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-blue-600 text-white border-blue-600'
                    : isDark
                      ? 'bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700 hover:text-white'
                      : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 hover:text-black'
                }`}
                aria-label={`Filter projects by ${category}`}
              >
                <span className="flex items-center space-x-2">
                  <Filter size={16} aria-hidden="true" />
                  <span>{category}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, transform: 'translateY(20px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 + index * 0.1 }}
                className={`group relative rounded-xl border ${isDark ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50' : 'bg-gray-100/50 border-gray-300 hover:bg-gray-200/50'} shadow-md hover:scale-105 transition-all duration-300`}
                aria-describedby={`project-description-${project.id}`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-sm font-semibold font-montserrat ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>
                    Featured
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className={`text-xl font-bold font-orbitron ${isDark ? 'text-white group-hover:text-blue-400' : 'text-black group-hover:text-blue-600'} transition-colors duration-300`}>
                      {project.title}
                    </h3>
                    <p
                      id={`project-description-${project.id}`}
                      className={`text-sm line-clamp-3 font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-600'}`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium font-montserrat ${isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-600'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}">
                    <span className={`text-sm font-medium font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
                      {project.category}
                    </span>
                    <div className="flex space-x-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm font-medium font-montserrat transition-colors duration-300 ${isDark ? 'text-blue-400 hover:text-white' : 'text-blue-600 hover:text-black'}`}
                          aria-label={`View ${project.title} live demo`}
                        >
                          View Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm font-medium font-montserrat transition-colors duration-300 ${isDark ? 'text-blue-400 hover:text-white' : 'text-blue-600 hover:text-black'}`}
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
            className="text-center mt-16"
          >
            <a
              href="https://github.com/Raviteja5469?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-full font-medium font-montserrat transition-all duration-300 border hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${isDark ? 'bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 hover:text-black'}`}
              aria-label="View more projects on GitHub"
            >
              View More Projects on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Add custom animations and fonts to the global styles
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

export default Projects;