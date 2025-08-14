import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { isDark } = useTheme();
  const [animatedLevels, setAnimatedLevels] = useState(new Array(12).fill(0));
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [rocketPosition, setRocketPosition] = useState({ x: 400, y: 400 });
  const [rocketRotation, setRocketRotation] = useState(0);
  const [smokes, setSmokes] = useState([]);
  const { ref, inView } = useInView({ threshold: 0.3 });

  const skills = [
    { name: 'React', level: 75, category: 'Frontend', icon: '⚛️', color: '#61DAFB' },
    { name: 'CSS3', level: 85, category: 'Frontend', icon: '🎨', color: '#264DE4' },
    { name: 'Node.js', level: 90, category: 'Backend', icon: '🟢', color: '#68A063' },
    { name: 'MongoDB', level: 85, category: 'Database', icon: '🍃', color: '#47A248' },
    { name: 'SQL', level: 55, category: 'Database', icon: '🛢️', color: '#47A248' },
    { name: 'Express', level: 88, category: 'Backend', icon: '🚀', color: '#000000' },
    { name: 'Python', level: 75, category: 'Programming', icon: '🐍', color: '#3776AB' },
    { name: 'Java', level: 52, category: 'Programming', icon: '☕', color: '#007396' },
    { name: 'JavaScript', level: 88, category: 'Programming', icon: '🟡', color: '#F7DF1E' },
    { name: 'TensorFlow', level: 80, category: 'AI/ML', icon: '🧠', color: '#FF6F00' },
    { name: 'PyTorch', level: 75, category: 'AI/ML', icon: '🔥', color: '#EE4C2C' },
    { name: 'OpenCV', level: 85, category: 'AI/ML', icon: '👁️', color: '#5C3EE8' },
    { name: 'Tailwind CSS', level: 93, category: 'Frontend', icon: '💨', color: '#38B2AC' },
    { name: 'GitHub', level: 88, category: 'Tools', icon: '🐙', color: '#007396' },
    { name: 'REST APIs', level: 90, category: 'Backend', icon: '🔗', color: '#6B7280' },
    { name: 'React Native', level: 82, category: 'App', icon: '📱', color: '#61DAFB' }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  // Calculate positions in a circle
  const radius = 200;
  const centerX = 400;
  const centerY = 400;
  const categoryPositions = {};
  categories.forEach((category, index) => {
    const angle = (index / categories.length) * 2 * Math.PI;
    categoryPositions[category] = {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  });

  const defaultRocketPosition = { x: centerX, y: centerY };

  useEffect(() => {
    if (inView && !selectedCategory) {
      setRocketPosition(defaultRocketPosition);
      setRocketRotation(0);
      setSmokes([]);
    }
  }, [inView]);

  useEffect(() => {
    if (selectedCategory) {
      setAnimatedLevels(new Array(skills.length).fill(0));
      animateSkills(selectedCategory);
    }
  }, [selectedCategory]);

  const animateSkills = (category) => {
    const categorySkills = skills.filter(skill => skill.category === category);
    categorySkills.forEach((skill, catIndex) => {
      const globalIndex = skills.findIndex(s => s.name === skill.name);
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
            newLevels[globalIndex] = current;
            return newLevels;
          });
        }, 20);
      }, catIndex * 100);
    });
  };

  const handleCategoryClick = (category) => {
    const pos = categoryPositions[category];
    const startX = rocketPosition.x;
    const startY = rocketPosition.y;
    const targetX = pos.x;
    const targetY = pos.y - 20;
    const deltaX = targetX - startX;
    const deltaY = targetY - startY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    setRocketRotation(angle);
    setRocketPosition({ x: targetX, y: targetY });
    setSelectedCategory(category);
    setSmokes([]);

    let newSmokes = [];
    for (let i = 0; i < 5; i++) {
      const fraction = (i + 1) / 6;
      const smokeX = startX + fraction * deltaX;
      const smokeY = startY + fraction * deltaY;
      newSmokes.push({ id: Date.now() + i, x: smokeX, y: smokeY, delay: i * 0.2 });
    }
    setSmokes(newSmokes);
  };

  const getDashArray = (level) => {
    const circumference = 2 * Math.PI * 40;
    return `${(level / 100) * circumference} ${circumference}`;
  };

  // Calculate points for the connecting lines (closed polygon)
  const polygonPoints = [...categories, categories[0]].map(category => {
    const pos = categoryPositions[category];
    return `${pos.x},${pos.y}`;
  }).join(' ');

  return (
    <section
      ref={ref}
      id="skills"
      className={`py-12 ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className={`text-4xl md:text-5xl font-bold font-orbitron ${isDark ? 'text-white' : 'text-black'}`}>
            My Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>
          <p className={`text-base md:text-lg mt-3 ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
            Click a category to explore my skillset with a rocket journey.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* Skill Map */}
          <div className="relative" style={{ width: 'min(90vw, 600px)', height: 'min(90vw, 600px)' }}>
            <svg width="100%" height="100%" viewBox="0 0 800 800" role="img" aria-label="Interactive skill map">
              {/* Connecting lines (closed polygon) */}
              <polyline
                points={polygonPoints}
                fill="none"
                stroke={isDark ? '#38B2AC' : '#BBBBBB'}
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              {categories.map((category) => {
                const pos = categoryPositions[category];
                const categoryColor = skills.find(skill => skill.category === category)?.color || '#61DAFB'; // Default to teal
                return (
                  <g
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className="group cursor-pointer"
                    role="button"
                    aria-label={`Select ${category} skills`}
                  >
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r="60"
                      fill={isDark ? '#111111' : '#F0F0F0'}
                      stroke={categoryColor}
                      strokeWidth="2"
                      whileHover={{ scale: 1.05, fill: isDark ? '#1F2937' : '#E5E7EB' }}
                      transition={{ duration: 0.3 }}
                    />
                    <text
                      x={pos.x}
                      y={pos.y}
                      dy=".3em"
                      textAnchor="middle"
                      fill={isDark ? '#FFFFFF' : '#000000'}
                      fontSize="14"
                      fontWeight="500"
                      className="font-montserrat"
                    >
                      {category}
                    </text>
                  </g>
                );
              })}
              <motion.text
                animate={{ x: rocketPosition.x, y: rocketPosition.y, rotate: rocketRotation }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                textAnchor="middle"
                fontSize="40"
                style={{ transformOrigin: 'center' }}
                aria-label="Rocket indicator"
              >
                🚀
              </motion.text>
              {smokes.map((smoke) => (
                <motion.circle
                  key={smoke.id}
                  cx={smoke.x}
                  cy={smoke.y}
                  r="5"
                  fill={isDark ? '#555555' : '#AAAAAA'}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.8, delay: smoke.delay, ease: 'easeOut' }}
                />
              ))}
            </svg>
          </div>

          {/* Skills Display */}
          <div className="flex-1">
            {selectedCategory && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-gray-100'} shadow-lg`}
                role="region"
                aria-label={`${selectedCategory} skills`}
              >
                <h3 className={`text-2xl font-semibold font-orbitron mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  {selectedCategory} Skills
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {skills
                    .filter((skill) => skill.category === selectedCategory)
                    .map((skill) => {
                      const skillIndex = skills.findIndex((s) => s.name === skill.name);
                      const animatedLevel = animatedLevels[skillIndex] || 0;

                      return (
                        <motion.div
                          key={skill.name}
                          className={`relative p-4 w-[160px] rounded-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'} border shadow-md group hover:shadow-lg transition-shadow duration-300`}
                          whileHover={{ scale: 1.05 }}
                          role="region"
                          aria-label={`${skill.name}: ${Math.round(animatedLevel)}% proficiency`}
                        >
                          <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke={isDark ? '#333333' : '#DDDDDD'}
                              strokeWidth="6"
                            />
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke={skill.color}
                              strokeWidth="6"
                              strokeDasharray={getDashArray(animatedLevel)}
                              strokeDashoffset="0"
                              strokeLinecap="round"
                              initial={{ strokeDasharray: getDashArray(0) }}
                              animate={{ strokeDasharray: getDashArray(animatedLevel) }}
                              transition={{ duration: 1, ease: 'easeOut' }}
                            />
                            <text
                              x="50"
                              y="55"
                              textAnchor="middle"
                              fill={isDark ? '#FFFFFF' : '#000000'}
                              fontSize="14"
                              fontWeight="500"
                              className="font-montserrat"
                            >
                              {Math.round(animatedLevel)}%
                            </text>
                          </svg>
                          <div className="mt-2 flex items-center justify-center space-x-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className={`text-sm font-medium font-montserrat ${isDark ? 'text-white' : 'text-black'}`}>
                              {skill.name}
                            </span>
                          </div>
                          <p className={`text-xs mt-1 font-montserrat ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {animatedLevel >= 90 ? 'Expert' : animatedLevel >= 75 ? 'Advanced' : 'Intermediate'}
                          </p>
                          <div
                            className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}
                          ></div>
                        </motion.div>
                      );
                    })}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <h3 className={`text-2xl font-bold font-orbitron ${isDark ? 'text-white' : 'text-black'} mb-4`}>
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Problem Solving', 'Team Collaboration', 'Communication', 'Leadership', 'Creativity', 'Adaptability'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium font-montserrat ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
                role="listitem"
                aria-label={`Soft skill: ${skill}`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`mt-6 text-sm font-montserrat ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Continuously learning to elevate my craft.
        </motion.p>
      </div>
    </section>
  );
};

// Inject global styles
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Montserrat:wght@400;500;700&display=swap');

  .font-orbitron {
    font-family: 'Orbitron', sans-serif;
  }

  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
`;
document.head.appendChild(style);

export default Skills;