import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  color: string;
}

const Skills: React.FC = () => {
  const [animatedLevels, setAnimatedLevels] = useState<number[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { isDark } = useTheme();

  const skills: Skill[] = [
    { name: 'React', level: 95, category: 'Frontend', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 90, category: 'Backend', icon: '🟢', color: 'from-green-400 to-green-600' },
    { name: 'MongoDB', level: 85, category: 'Database', icon: '🍃', color: 'from-green-500 to-green-700' },
    { name: 'Express', level: 88, category: 'Backend', icon: '🚀', color: 'from-gray-400 to-gray-600' },
    { name: 'Python', level: 92, category: 'Programming', icon: '🐍', color: 'from-yellow-400 to-blue-500' },
    { name: 'TensorFlow', level: 80, category: 'AI/ML', icon: '🧠', color: 'from-orange-400 to-red-500' },
    { name: 'PyTorch', level: 75, category: 'AI/ML', icon: '🔥', color: 'from-red-400 to-orange-500' },
    { name: 'OpenCV', level: 85, category: 'AI/ML', icon: '👁️', color: 'from-purple-400 to-purple-600' },
    { name: 'Tailwind CSS', level: 93, category: 'Frontend', icon: '💨', color: 'from-cyan-400 to-cyan-600' },
    { name: 'GitHub', level: 88, category: 'Tools', icon: '🐙', color: 'from-gray-700 to-gray-900' },
    { name: 'REST APIs', level: 90, category: 'Backend', icon: '🔗', color: 'from-indigo-400 to-indigo-600' },
    { name: 'React Native', level: 82, category: 'Mobile', icon: '📱', color: 'from-blue-500 to-purple-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateSkills();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateSkills = () => {
    skills.forEach((skill, index) => {
      setTimeout(() => {
        let current = 0;
        const increment = skill.level / 30;
        const timer = setInterval(() => {
          current += increment;
          if (current >= skill.level) {
            current = skill.level;
            clearInterval(timer);
          }
          setAnimatedLevels(prev => {
            const newLevels = [...prev];
            newLevels[index] = current;
            return newLevels;
          });
        }, 20);
      }, index * 100);
    });
  };

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-20 relative overflow-hidden ${
        isDark ? 'bg-cosmic-dark' : 'bg-gray-50'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 border border-neon-cyan rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-neon-magenta rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-neon-green/20 to-neon-purple/20 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-cosmic-dark'
          }`}>
            Technical <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-cosmic-blue'
          }`}>
            A showcase of technologies I've mastered, with proficiency levels based on real-world experience
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className={`text-2xl font-semibold text-center ${
                isDark ? 'text-white' : 'text-cosmic-dark'
              }`}>
                {category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => {
                    const skillIndex = skills.findIndex(s => s === skill);
                    const animatedLevel = animatedLevels[skillIndex] || 0;
                    
                    return (
                      <div
                        key={skill.name}
                        className={`group p-6 rounded-2xl backdrop-blur-md border transition-all duration-500 hover:scale-105 ${
                          isDark
                            ? 'bg-white/10 border-white/20 hover:bg-white/20'
                            : 'bg-white/70 border-gray-200 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl" role="img" aria-label={skill.name}>
                              {skill.icon}
                            </span>
                            <span className={`font-semibold ${
                              isDark ? 'text-white' : 'text-cosmic-dark'
                            }`}>
                              {skill.name}
                            </span>
                          </div>
                          <span className={`text-sm font-mono ${
                            isDark ? 'text-neon-cyan' : 'text-cosmic-indigo'
                          }`}>
                            {Math.round(animatedLevel)}%
                          </span>
                        </div>

                        {/* Progress Circle */}
                        <div className="relative w-24 h-24 mx-auto mb-4">
                          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                            {/* Background Circle */}
                            <circle
                              cx="50"
                              cy="50"
                              r="42"
                              stroke={isDark ? "#374151" : "#E5E7EB"}
                              strokeWidth="8"
                              fill="transparent"
                              className="opacity-20"
                            />
                            {/* Progress Circle */}
                            <circle
                              cx="50"
                              cy="50"
                              r="42"
                              stroke="url(#gradient)"
                              strokeWidth="8"
                              fill="transparent"
                              strokeDasharray={`${2 * Math.PI * 42}`}
                              strokeDashoffset={`${2 * Math.PI * 42 * (1 - animatedLevel / 100)}`}
                              className="transition-all duration-1000 ease-out"
                              strokeLinecap="round"
                            />
                            {/* Gradient Definition */}
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#00FFFF" />
                                <stop offset="100%" stopColor="#FF00FF" />
                              </linearGradient>
                            </defs>
                          </svg>
                          
                          {/* Center Text */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className={`text-lg font-bold ${
                              isDark ? 'text-white' : 'text-cosmic-dark'
                            }`}>
                              {Math.round(animatedLevel)}%
                            </span>
                          </div>
                        </div>

                        {/* Skill Description */}
                        <div className="text-center">
                          <div className={`w-full h-2 rounded-full overflow-hidden ${
                            isDark ? 'bg-gray-700' : 'bg-gray-200'
                          }`}>
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                              style={{ width: `${animatedLevel}%` }}
                            ></div>
                          </div>
                          <p className={`mt-2 text-xs ${
                            isDark ? 'text-gray-400' : 'text-cosmic-blue'
                          }`}>
                            {animatedLevel >= 90 ? 'Expert' : 
                             animatedLevel >= 75 ? 'Advanced' : 
                             animatedLevel >= 60 ? 'Intermediate' : 'Learning'}
                          </p>
                        </div>

                        {/* Hover Effect */}
                        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          skill.name === 'React' ? 'shadow-[0_0_30px_rgba(59,130,246,0.3)]' :
                          skill.name === 'Node.js' ? 'shadow-[0_0_30px_rgba(34,197,94,0.3)]' :
                          skill.name === 'Python' ? 'shadow-[0_0_30px_rgba(255,193,7,0.3)]' :
                          'shadow-[0_0_30px_rgba(0,255,255,0.3)]'
                        }`}></div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`text-lg ${
            isDark ? 'text-gray-300' : 'text-cosmic-blue'
          }`}>
            Always learning, always growing. 
            <span className="text-neon-cyan"> What's next on my tech journey?</span>
          </p>
          <div className="flex justify-center mt-4 space-x-2">
            {['🚀', '⚡', '🔥', '💡', '🌟'].map((emoji, i) => (
              <span
                key={i}
                className="text-2xl animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
                role="img"
                aria-hidden="true"
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;