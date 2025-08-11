import React from 'react';
import { Code2, Zap, Shield, Smartphone } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const About: React.FC = () => {
  const { isDark } = useTheme();

  const coreAreas = [
    {
      icon: <Code2 size={24} />,
      title: 'MERN Stack Development',
      description: 'Full-stack web applications with modern JavaScript',
      color: 'from-neon-cyan to-blue-400'
    },
    {
      icon: <Zap size={24} />,
      title: 'AI/ML (TensorFlow, PyTorch, OpenCV)',
      description: 'Intelligent systems and computer vision solutions',
      color: 'from-neon-magenta to-purple-400'
    },
    {
      icon: <Shield size={24} />,
      title: 'Cybersecurity & Ethical Hacking',
      description: 'Security-first development and vulnerability assessment',
      color: 'from-neon-green to-green-400'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'React Native Accessibility Apps',
      description: 'Mobile solutions focused on inclusive design',
      color: 'from-neon-purple to-indigo-400'
    }
  ];

  return (
    <section id="about" className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-cosmic-midnight' : 'bg-white'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl font-mono text-neon-cyan transform rotate-12">{'<>'}</div>
        <div className="absolute bottom-10 right-10 text-9xl font-mono text-neon-magenta transform -rotate-12">{'</>'}</div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-neon-cyan rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Profile Image Container */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className={`w-full h-full flex items-center justify-center text-8xl font-bold ${
                    isDark ? 'bg-gradient-to-br from-cosmic-blue to-cosmic-purple' : 'bg-gradient-to-br from-gray-200 to-gray-300'
                  } ${isDark ? 'text-neon-cyan' : 'text-cosmic-indigo'}`}>
                    RT
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan bg-clip-border animate-spin" style={{ animationDuration: '8s' }}></div>
                </div>

                {/* Floating Skill Badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-neon-cyan to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                  React
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-neon-magenta to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce" style={{ animationDelay: '0.5s' }}>
                  Python
                </div>
                <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-neon-green to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce" style={{ animationDelay: '1s' }}>
                  Node.js
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 blur-xl group-hover:scale-110 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Title */}
              <div className="space-y-4">
                <h2 className={`text-4xl md:text-5xl font-bold ${
                  isDark ? 'text-white' : 'text-cosmic-dark'
                }`}>
                  About <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">Me</span>
                </h2>
                
                <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-full"></div>
              </div>

              {/* Description */}
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-cosmic-blue'
              }`}>
                I'm a Computer Science student passionate about full-stack development, AI/ML, and cybersecurity. 
                I thrive on solving complex problems under tight deadlines, blending technical precision with 
                creative innovation to build user-centric, scalable solutions. My journey is fueled by curiosity 
                and a relentless drive to explore new tech frontiers.
              </p>

              {/* Core Areas */}
              <div className="space-y-4">
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-cosmic-dark'
                }`}>
                  Core Areas of Expertise
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {coreAreas.map((area, index) => (
                    <div
                      key={index}
                      className={`group p-4 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                        isDark 
                          ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${area.color} text-white flex-shrink-0`}>
                          {area.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-semibold text-sm mb-1 group-hover:text-neon-cyan transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-cosmic-dark'
                          }`}>
                            {area.title}
                          </h4>
                          <p className={`text-xs ${
                            isDark ? 'text-gray-400' : 'text-cosmic-blue'
                          }`}>
                            {area.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className={`h-0.5 w-0 bg-gradient-to-r ${area.color} group-hover:w-full transition-all duration-500 mt-3`}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fun Fact */}
              <div className={`p-6 rounded-2xl border-l-4 border-neon-cyan ${
                isDark ? 'bg-cosmic-blue/20' : 'bg-blue-50'
              }`}>
                <div className="flex items-start space-x-3">
                  <Zap className="text-neon-cyan flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      isDark ? 'text-neon-cyan' : 'text-cosmic-indigo'
                    }`}>
                      Fun Fact
                    </h4>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-300' : 'text-cosmic-blue'
                    }`}>
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
      </div>
    </section>
  );
};

export default About;