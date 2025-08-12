import React, { useEffect, useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
// import StarField from '../StarField';
import Raviteja_resume from '../../assets/Raviteja_Resume.pdf';

const Hero = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const { isDark } = useTheme();

  const taglines = [
    "Crafting Scalable Solutions with Code, Curiosity, and Precision.",
    "Building the Future with Innovative Tech and Passion.",
    "From Code to Creation: Where Ideas Meet Execution.",
    "Exploring AI, Securing Cyberspace, Developing Dreams.",
    "Innovating with MERN, AI, and Cybersecurity Expertise."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000); // Cycle every 4 seconds

    return () => clearInterval(interval);
  }, [taglines.length]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = Raviteja_resume;
    link.download = 'Raviteja_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* <div className="absolute inset-0">
        <StarField interactive className="opacity-80" />
      </div> */}

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="space-y-6">
          {/* Name and Title with Effects */}
          <div className="space-y-3">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDark ? 'text-white' : 'text-black'} font-orbitron glitch hover:animate-glitch`}>
             Seguri Ravi Teja
            </h1>
            <div className={`text-base md:text-lg font-medium space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <p className="opacity-0 animate-[fadeIn_0.5s_ease-out_0.5s_forwards]">MERN Stack Developer</p>
              {/* <p className="opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]">AI Enthusiast</p>
              <p className="opacity-0 animate-[fadeIn_0.5s_ease-out_1.5s_forwards]">Cybersecurity Explorer</p> */}
            </div>
          </div>

          {/* Enhanced Vanish Tagline with Underline Animation */}
          <div key={currentTaglineIndex} className="relative inline-block">
            <p
              className={`text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} font-mono opacity-0 animate-[dissolveEffect_4s_ease-in-out_forwards]`}
            >
              {taglines[currentTaglineIndex]}
            </p>
            <div
              className={`absolute -bottom-1 left-0 right-0 mx-auto h-0.5 bg-blue-600 transform scale-x-0 origin-center animate-[underlineGrow_4s_ease-in-out_forwards]`}
            ></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center opacity-0 animate-[slideInUp_0.8s_ease-out_0.6s_forwards]">
            <button
              onClick={scrollToProjects}
              className="px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 bg-blue-600 text-white hover:bg-blue-700"
              aria-label="View my projects"
            >
              Explore Projects
            </button>
            <button
              onClick={downloadResume}
              className={`px-5 py-2 border-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-blue-600 ${isDark ? 'text-blue-600 hover:bg-blue-600 hover:text-white' : 'text-blue-600 hover:bg-blue-600 hover:text-white'}`}
              aria-label="Download resume PDF"
            >
              <span className="flex items-center space-x-2">
                <Download size={18} />
                <span>Resume</span>
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className={`${isDark ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-blue-500'} transition-all duration-300`}
            aria-label="Scroll to next section"
          >
            <ChevronDown size={36} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Custom styles
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

  .font-orbitron {
    font-family: 'Orbitron', sans-serif;
  }

  .glitch {
    position: relative;
  }

  .glitch::before,
  .glitch::after {
    content: attr(class);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    clip: rect(0, 0, 0, 0);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .glitch::before {
    text-shadow: -2px 0 red;
    left: 2px;
  }

  .glitch::after {
    text-shadow: 2px 0 blue;
    left: -2px;
  }

  .hover\\:animate-glitch:hover {
    animation: glitch-hover 0.5s infinite;
  }

  .hover\\:animate-glitch:hover::before,
  .hover\\:animate-glitch:hover::after {
    opacity: 1;
    animation: glitch-layer 0.5s infinite;
  }

  @keyframes glitch-hover {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
  }

  @keyframes glitch-layer {
    0% { clip: rect(42px, 9999px, 44px, 0); }
    5% { clip: rect(12px, 9999px, 59px, 0); }
    10% { clip: rect(48px, 9999px, 29px, 0); }
    15% { clip: rect(42px, 9999px, 73px, 0); }
    20% { clip: rect(63px, 9999px, 27px, 0); }
    25% { clip: rect(34px, 9999px, 55px, 0); }
    30% { clip: rect(86px, 9999px, 73px, 0); }
    35% { clip: rect(20px, 9999px, 20px, 0); }
    40% { clip: rect(26px, 9999px, 60px, 0); }
    45% { clip: rect(25px, 9999px, 66px, 0); }
    50% { clip: rect(18px, 9999px, 98px, 0); }
    55% { clip: rect(6px, 9999px, 99px, 0); }
    60% { clip: rect(46px, 9999px, 4px, 0); }
    65% { clip: rect(21px, 9999px, 52px, 0); }
    70% { clip: rect(7px, 9999px, 70px, 0); }
    75% { clip: rect(69px, 9999px, 11px, 0); }
    80% { clip: rect(66px, 9999px, 17px, 0); }
    85% { clip: rect(17px, 9999px, 24px, 0); }
    90% { clip: rect(71px, 9999px, 88px, 0); }
    95% { clip: rect(68px, 9999px, 41px, 0); }
    100% { clip: rect(47px, 9999px, 69px, 0); }
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes dissolveEffect {
    0% {
      opacity: 0;
      filter: blur(5px);
      transform: scale(0.95);
    }
    20% {
      opacity: 1;
      filter: blur(0);
      transform: scale(1);
    }
    80% {
      opacity: 1;
      filter: blur(0);
      transform: scale(1);
    }
    100% {
      opacity: 0;
      filter: blur(5px);
      transform: scale(1.05);
    }
  }

  @keyframes underlineGrow {
    0% {
      transform: scaleX(0);
    }
    20% {
      transform: scaleX(1);
    }
    80% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }
`;
document.head.appendChild(style);

export default Hero;