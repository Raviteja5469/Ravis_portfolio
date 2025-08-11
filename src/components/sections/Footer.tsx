import React from 'react';
import { Heart, Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative overflow-hidden ${
      isDark ? 'bg-cosmic-dark' : 'bg-gray-50'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-neon-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-neon-magenta rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-neon-green/10 to-neon-purple/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className={`text-3xl font-bold font-mono ${
                  isDark ? 'text-white' : 'text-cosmic-dark'
                }`}>
                  <span className="text-neon-cyan">Ravi</span>
                  <span className="text-neon-magenta">Teja</span>
                </h3>
                <p className={`text-lg ${
                  isDark ? 'text-gray-400' : 'text-cosmic-blue'
                }`}>
                  Full Stack Developer | AI Enthusiast | Cybersecurity Explorer
                </p>
              </div>
              
              <p className={`text-sm leading-relaxed max-w-md ${
                isDark ? 'text-gray-400' : 'text-cosmic-blue'
              }`}>
                Passionate about crafting scalable solutions with code, curiosity, and cosmic precision. 
                Always exploring the intersection of technology, security, and user experience.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: <Mail size={20} />, href: 'mailto:ravi.teja@example.com', label: 'Email', color: 'hover:text-neon-cyan' },
                  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/ravi-teja-dev', label: 'LinkedIn', color: 'hover:text-blue-500' },
                  { icon: <Github size={20} />, href: 'https://github.com/raviteja-dev', label: 'GitHub', color: 'hover:text-gray-600 dark:hover:text-gray-300' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 ${
                      isDark
                        ? 'bg-white/10 border-white/20 text-white hover:bg-white/20 focus:ring-neon-cyan'
                        : 'bg-white/70 border-gray-200 text-cosmic-dark hover:bg-white focus:ring-cosmic-indigo'
                    } ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-cosmic-dark'
              }`}>
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
                    className={`block text-sm transition-colors duration-300 hover:translate-x-2 ${
                      isDark ? 'text-gray-400 hover:text-neon-cyan' : 'text-cosmic-blue hover:text-cosmic-indigo'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Technologies */}
            <div className="space-y-6">
              <h4 className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-cosmic-dark'
              }`}>
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
                    className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-cosmic-blue'
                    }`}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`py-8 border-t ${
          isDark ? 'border-white/10' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className={`flex items-center space-x-2 text-sm ${
              isDark ? 'text-gray-400' : 'text-cosmic-blue'
            }`}>
              <span>© Ravi Teja 2025 — Built with Passion, Pixels, and a Touch of Stardust</span>
              <span className="text-neon-magenta animate-pulse">✨</span>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className={`group flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 ${
                isDark
                  ? 'bg-white/10 border-white/20 text-white hover:bg-white/20 focus:ring-neon-cyan'
                  : 'bg-white/70 border-gray-200 text-cosmic-dark hover:bg-white focus:ring-cosmic-indigo'
              }`}
              aria-label="Back to top"
            >
              <span className="text-sm font-medium">Back to top</span>
              <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="text-center py-4">
          <p className={`text-xs ${
            isDark ? 'text-gray-600' : 'text-gray-400'
          }`}>
            Made with <Heart size={12} className="inline text-red-500 mx-1" /> by a cosmic developer
          </p>
        </div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-neon-cyan rounded-full animate-ping opacity-20"></div>
      <div className="absolute top-20 right-40 w-6 h-6 border border-neon-magenta rotate-45 animate-pulse opacity-20"></div>
      <div className="absolute bottom-40 right-20 w-3 h-3 bg-neon-green rounded-full animate-bounce opacity-20"></div>
    </footer>
  );
};

export default Footer;