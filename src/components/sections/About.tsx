import React from 'react';
import { Code2, Zap, Shield, Smartphone } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import logo from '../../assets/image.png';

const About = () => {
  const { isDark } = useTheme();

  const coreAreas = [
    {
      icon: <Code2 size={24} />,
      title: 'MERN Stack Development',
      description: 'Full-stack web applications with modern JavaScript',
    },
    {
      icon: <Zap size={24} />,
      title: 'AI/ML (TensorFlow, PyTorch, OpenCV)',
      description: 'Intelligent systems and computer vision solutions',
    },
    {
      icon: <Shield size={24} />,
      title: 'Cybersecurity & Ethical Hacking',
      description: 'Security-first development and vulnerability assessment',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'React Native Accessibility Apps',
      description: 'Mobile solutions focused on inclusive design',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16 opacity-0 animate-[slideInUp_0.8s_ease-out_0.2s_forwards]">
            <h2 className="text-4xl md:text-6xl font-bold text-white font-orbitron mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Profile Image - Left (4 columns) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start opacity-0 animate-[slideInUp_0.8s_ease-out_0.4s_forwards]">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-2xl">
                  <img src={logo} alt="avatar" height="320" width="320" />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-600/30 animate-pulse"></div>
              </div>
            </div>

            {/* Content - Right (8 columns) */}
            <div className="lg:col-span-8 space-y-8 opacity-0 animate-[slideInUp_0.8s_ease-out_0.6s_forwards]">
              {/* Description */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white font-orbitron">
                  Who I Am
                </h3>
                <p className="text-lg leading-relaxed text-gray-300 font-montserrat">
                  I'm a Computer Science student passionate about full-stack development, AI/ML, and cybersecurity. 
                  I thrive on solving complex problems under tight deadlines, blending technical precision with 
                  creative innovation to build user-centric, scalable solutions. My journey is fueled by curiosity 
                  and a relentless drive to explore new tech frontiers.
                </p>
              </div>

              {/* Core Areas */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white font-orbitron">
                  Core Areas of Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {coreAreas.map((area, index) => (
                    <div
                      key={index}
                      className="group p-4 rounded-xl border border-gray-700 bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-blue-600 text-white flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                          {area.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 font-montserrat">
                            {area.title}
                          </h4>
                          <p className="text-sm text-gray-400 leading-relaxed font-montserrat">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Fun Fact - Bottom */}
          <div className="mt-16 opacity-0 animate-[slideInUp_0.8s_ease-out_1s_forwards]">
            <div className="max-w-4xl mx-auto p-8 rounded-2xl border-l-4 border-blue-600 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm">
              <div className="flex items-start space-x-6">
                <div className="p-4 rounded-full bg-blue-600/20 flex-shrink-0">
                  <Zap className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-3 font-orbitron">
                    Fun Fact
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-montserrat">
                    When I'm not coding, you'll find me exploring the latest cybersecurity trends, 
                    training neural networks, or contributing to open-source accessibility projects. 
                    I believe technology should be a force for good, making the world more connected and inclusive.
                  </p>
                </div>
              </div>
            </div>
          </div>
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

export default About;