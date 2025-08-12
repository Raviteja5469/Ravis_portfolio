import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'stats', label: 'Stats' },
    { id: 'blog', label: 'Blog' },
    { id: 'experience', label: 'Experience' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(element.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className={`glass-dark rounded-full p-4 space-y-4 ${
          isDark ? 'bg-black/30' : 'bg-white/30'
        }`}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 block group relative ${
                activeSection === section.id
                  ? 'bg-neon-cyan border-neon-cyan shadow-[0_0_20px_rgba(0,255,255,0.5)]'
                  : isDark 
                    ? 'border-white/30 hover:border-neon-cyan'
                    : 'border-gray-400 hover:border-cosmic-indigo'
              }`}
              aria-label={`Navigate to ${section.label}`}
            >
              <span className={`absolute left-8 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none ${
                isDark
                  ? 'bg-black/80 text-white'
                  : 'bg-white/80 text-gray-900'
              }`}>
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 lg:hidden ${
        isDark ? 'bg-cosmic-dark/80' : 'bg-white/80'
      } backdrop-blur-md`}>
        <div className="flex items-center justify-between p-4">
          <div className="text-xl font-bold font-mono">
            <span className="text-neon-cyan">RT</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDark
                  ? 'text-neon-cyan hover:bg-neon-cyan/20'
                  : 'text-cosmic-indigo hover:bg-cosmic-indigo/20'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDark
                  ? 'text-neon-cyan hover:bg-neon-cyan/20'
                  : 'text-cosmic-indigo hover:bg-cosmic-indigo/20'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } ${isDark ? 'bg-cosmic-dark/95' : 'bg-white/95'} backdrop-blur-md`}>
          <div className="p-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? isDark
                      ? 'bg-neon-cyan/20 text-neon-cyan'
                      : 'bg-cosmic-indigo/20 text-cosmic-indigo'
                    : isDark
                      ? 'hover:bg-white/10 text-white'
                      : 'hover:bg-gray-100 text-gray-900'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Desktop Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 z-50 hidden lg:flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
          isDark
            ? 'bg-yellow-400 text-cosmic-dark hover:bg-yellow-300'
            : 'bg-cosmic-midnight text-white hover:bg-cosmic-blue'
        } shadow-lg hover:scale-110`}
        aria-label="Toggle theme"
      >
        <div className="relative">
          {isDark ? (
            <Sun size={20} className="animate-pulse" />
          ) : (
            <Moon size={20} className="animate-pulse" />
          )}
        </div>
      </button>
    </>
  );
};

export default Navigation;