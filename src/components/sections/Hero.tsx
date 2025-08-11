import React, { useEffect, useState } from 'react';
import { Download, ArrowDown, Code, Rocket } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import StarField from '../StarField';

const Hero: React.FC = () => {
  const [codeText, setCodeText] = useState('');
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const { isDark } = useTheme();

  const technologies = ['MERN Stack', 'AI/ML', 'Cybersecurity', 'React Native'];
  const fullText = `> Initializing Ravi_Teja.exe
> Loading technologies: ${technologies[currentTechIndex]}
> Status: Ready to innovate_`;

  useEffect(() => {
    let index = 0;
    const typeText = () => {
      if (index < fullText.length) {
        setCodeText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeText, 50);
      }
    };

    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
      index = 0;
      setCodeText('');
      setTimeout(typeText, 500);
    }, 4000);

    typeText();
    return () => clearInterval(interval);
  }, [currentTechIndex, fullText]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // In a real implementation, this would download the actual resume
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume URL
    link.download = 'Ravi_Teja_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      isDark ? 'bg-black' : 'bg-light-gradient'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <StarField interactive className="opacity-80" />
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-neon-cyan/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-neon-magenta/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 rotate-12 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Name and Title */}
            <div className="space-y-4 opacity-0 animate-[slideInUp_0.8s_ease-out_0.2s_forwards]">
              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold ${
                isDark ? 'text-white' : 'text-cosmic-dark'
              }`}>
                <span className="block font-mono text-neon-cyan">Ravi</span>
                <span className="block font-mono text-neon-magenta">Teja</span>
              </h1>
              <div className={`text-lg md:text-xl lg:text-2xl font-medium space-y-2 ${
                isDark ? 'text-gray-300' : 'text-cosmic-blue'
              }`}>
                <p>Full Stack Developer</p>
                <p className="text-neon-cyan">AI Enthusiast</p>
                <p className="text-neon-magenta">Cybersecurity Explorer</p>
              </div>
            </div>

            {/* One-liner */}
            <p className={`text-lg md:text-xl opacity-0 animate-[slideInLeft_0.8s_ease-out_0.6s_forwards] ${
              isDark ? 'text-gray-400' : 'text-cosmic-blue'
            }`}>
              "Crafting Scalable Solutions with Code, Curiosity, and Cosmic Precision."
            </p>




            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-[slideInUp_0.8s_ease-out_1.2s_forwards]">
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-full font-semibold text-cosmic-dark transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
                aria-label="View my projects"
              >
                <span className="flex items-center space-x-2">
                  <Rocket size={20} />
                  <span>Explore Projects</span>
                </span>
              </button>
              
              <button
                onClick={downloadResume}
                className={`group px-8 py-4 border-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 ${
                  isDark
                    ? 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-cosmic-dark focus-visible:ring-neon-cyan'
                    : 'border-cosmic-indigo text-cosmic-indigo hover:bg-cosmic-indigo hover:text-white focus-visible:ring-cosmic-indigo'
                }`}
                aria-label="Download resume PDF"
              >
                <span className="flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download Resume</span>
                </span>
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-[slideInRight_0.8s_ease-out_0.8s_forwards]">
            <div className="relative">
              {/* Floating Astronaut */}
              <div className="relative z-10 animate-float">
                <div className={`w-80 h-80 rounded-full flex items-center justify-center ${
                  isDark ? 'bg-gradient-to-br from-cosmic-blue/20 to-cosmic-purple/20' : 'bg-gradient-to-br from-cosmic-indigo/20 to-neon-purple/20'
                } backdrop-blur-sm border border-white/10`}>
                  <div className="text-center space-y-4">
                    <Code size={80} className="text-neon-cyan mx-auto animate-pulse" />
                    <div className="space-y-2">
                      <div className="flex justify-center space-x-1">
                        <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-2 h-2 bg-neon-magenta rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-neon-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <p className={`text-sm font-mono ${isDark ? 'text-gray-400' : 'text-cosmic-blue'}`}>
                        Neural networks loading...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-6 h-6 bg-neon-cyan rounded-full shadow-[0_0_20px_rgba(0,255,255,0.5)]"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                  <div className="w-4 h-4 bg-neon-magenta rounded-full shadow-[0_0_20px_rgba(255,0,255,0.5)]"></div>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4">
                  <div className="w-5 h-5 bg-neon-green rounded-full shadow-[0_0_20px_rgba(0,255,0,0.5)]"></div>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4">
                  <div className="w-3 h-3 bg-neon-purple rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">
          <button
            onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
            className={`flex flex-col items-center space-y-2 transition-all duration-300 hover:scale-110 ${
              isDark ? 'text-gray-400 hover:text-neon-cyan' : 'text-cosmic-blue hover:text-cosmic-indigo'
            }`}
            aria-label="Scroll to next section"
          >
            <span className="text-sm font-mono">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Add custom animations to the global styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

export default Hero;