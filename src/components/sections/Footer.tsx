import { Heart, Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

const Footer = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-10 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className={`text-3xl font-bold font-orbitron ${isDark ? 'text-white' : 'text-black'}`}>
                  <span className="text-blue-600">Ravi</span>
                  <span className="text-blue-600">Teja</span>
                </h3>
                <p className={`text-lg font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
                  Full Stack Developer | AI Enthusiast | Cybersecurity Explorer
                </p>
              </div>
              
              <p className={`text-sm leading-relaxed max-w-md font-montserrat ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Passionate about crafting scalable solutions with code, curiosity, and cosmic precision. Always exploring the intersection of technology, security, and user experience.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: <Mail size={20} />, href: 'mailto:ravitejseguria@gmail.com', label: 'Email', color: 'hover:text-blue-600' },
                  { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/seguri-raviteja-61190a253/', label: 'LinkedIn', color: 'hover:text-blue-600' },
                  { icon: <Github size={20} />, href: 'https://github.com/Raviteja5469', label: 'GitHub', color: 'hover:text-blue-600' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ rotateY: 10, rotateX: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`p-3 rounded-full border ${isDark ? 'bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700' : 'bg-gray-100/50 border-gray-300 text-black hover:bg-gray-200'} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className={`text-lg font-semibold font-orbitron ${isDark ? 'text-white' : 'text-black'}`}>
                Quick Links
              </h4>
              <nav className="space-y-3">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Blog', href: '#blog' },
                  { label: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`block text-sm font-montserrat ${isDark ? 'text-gray-400 hover:text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-all duration-300`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{ position: 'relative' }}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ${isDark ? 'hover:w-full' : 'hover:w-full'}`}></span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Technologies */}
            <div className="space-y-6">
              <h4 className={`text-lg font-semibold font-orbitron ${isDark ? 'text-white' : 'text-black'}`}>
                Technologies
              </h4>
              <div className="space-y-3">
                {[
                  'React & Node.js',
                  'Python & TensorFlow',
                  'MongoDB & Express',
                  'Cybersecurity Tools',
                  'React Native'
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`text-sm font-montserrat ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          className={`py-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className={`flex items-center space-x-2 text-sm font-montserrat ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>© Ravi Teja 2025 — Built with Passion and Precision</span>
              <motion.div
                animate={{ scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } }}
              >
                <Heart size={16} className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              </motion.div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
              transition={{ duration: 0.3 }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border font-montserrat ${isDark ? 'bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700' : 'bg-gray-100/50 border-gray-300 text-black hover:bg-gray-200'} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600`}
              aria-label="Back to top"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-20 w-4 h-4 bg-neon-cyan rounded-full animate-ping opacity-20"></div>
      <div className="absolute top-20 right-40 w-6 h-6 border border-neon-magenta rotate-45 animate-pulse opacity-20"></div>
      <div className="absolute bottom-40 right-20 w-3 h-3 bg-neon-green rounded-full animate-bounce opacity-20"></div>
    </footer>
  );
};

// Add font and animation styles
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

export default Footer;