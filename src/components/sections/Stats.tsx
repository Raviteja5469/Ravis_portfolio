import { useState, useEffect, useRef } from 'react';
import { Rocket, Brain, Users, Clock, Code } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
}

const Stats = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { isDark } = useTheme();

  const stats: StatItem[] = [
    { icon: <Rocket size={24} />, value: 12, label: 'Projects Completed', suffix: '+' },
    { icon: <Brain size={24} />, value: 8, label: 'Technologies Mastered', suffix: '+' },
    { icon: <Users size={24} />, value: 4, label: 'Internships /Collaborations', suffix: '' },
    { icon: <Clock size={24} />, value: 100, label: 'On-Time Delivery', suffix: '%' },
    // { icon: <Code size={24} />, value: 2, label: 'Years of Experience', suffix: '+' }
  ];

  const sliceColors = isDark
    ? ['#93C5FD', '#60A5FA', '#3B82F6', '#1D4ED8', '#2563EB']
    : ['#BFDBFE', '#93C5FD', '#60A5FA', '#2563EB', '#1E40AF'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 30);
    });
  };

  const total = stats.reduce((sum, stat) => sum + stat.value, 0);
  let startAngle = 0;
  const radius = 100;
  const centerX = 150;
  const centerY = 150;

  return (
    <section
      ref={sectionRef}
      id="stats"
      className={`py-12 ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-center mb-10"
          >
            <h2
              className={`text-4xl md:text-5xl font-bold font-orbitron ${
                isDark ? 'text-white' : 'text-black'
              }`}
            >
              My Stats
            </h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>
            <p
              className={`text-base md:text-lg mt-3 ${
                isDark ? 'text-gray-200' : 'text-gray-600'
              }`}
            >
              Numbers that showcase my journey in tech
            </p>
          </motion.div>

          {/* Chart & Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-20"
          >
            {/* Pie Chart with Percentage Labels */}
            <div className="relative" style={{ width: 'min(80vw, 300px)', height: 'min(80vw, 300px)' }}>
              <svg width="120%" height="120%" viewBox="0 0 300 300" role="img" aria-label="Pie chart of portfolio stats" style={{ left: '200px', top: '-10%' }}>
                {stats.map((stat, index) => {
                  const value = counters[index];
                  const percentage = ((value / total) * 100).toFixed(1);
                  const angle = (value / total) * 360;
                  const endAngle = startAngle + (hasAnimated ? angle : 0);
                  const largeArcFlag = angle > 180 ? 1 : 0;

                  const x1 =
                    centerX +
                    radius * Math.cos(((startAngle - 90) * Math.PI) / 180);
                  const y1 =
                    centerY +
                    radius * Math.sin(((startAngle - 90) * Math.PI) / 180);
                  const x2 =
                    centerX +
                    radius * Math.cos(((endAngle - 90) * Math.PI) / 180);
                  const y2 =
                    centerY +
                    radius * Math.sin(((endAngle - 90) * Math.PI) / 180);

                  // Position labels outside for small slices (<10%)
                  const isSmallSlice = parseFloat(percentage) < 10;
                  const labelRadius = isSmallSlice ? radius * 1.3 : radius * 0.7;
                  const midAngle = startAngle + angle / 2;
                  const labelX =
                    centerX +
                    labelRadius * Math.cos(((midAngle - 90) * Math.PI) / 180);
                  const labelY =
                    centerY +
                    labelRadius * Math.sin(((midAngle - 90) * Math.PI) / 180);

                  startAngle = endAngle;

                  return (
                    <g key={index}>
                      <motion.path
                        d={`M${centerX},${centerY} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`}
                        fill={sliceColors[index]}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1, fill: hoveredIndex === index ? (isDark ? '#BFDBFE' : '#DBEAFE') : sliceColors[index] }}
                        transition={{
                          duration: 2,
                          ease: 'easeOut',
                          delay: 0.6 + index * 0.1
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        role="region"
                        aria-label={`${stat.label}: ${percentage}%`}
                      />
                      <motion.text
                        x={labelX}
                        y={labelY}
                        textAnchor="middle"
                        fill={isDark ? '#ffffff' : '#000000'}
                        fontSize={isSmallSlice ? '10' : '12'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 1,
                          ease: 'easeOut',
                          delay: 0.8 + index * 0.1
                        }}
                      >
                        {percentage}%
                      </motion.text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 0.8 + index * 0.1
                  }}
                  className={`flex items-center space-x-3 w-[180px] relative group ${hoveredIndex === index ? 'bg-blue-600/10' : ''}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  role="region"
                  aria-label={`${stat.label}: ${counters[index]}${stat.suffix}`}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: sliceColors[index] }}
                  ></div>
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium font-montserrat ${
                        isDark ? 'text-gray-200' : 'text-gray-600'
                      }`}
                    >
                      {stat.label}
                    </p>
                    <p
                      className={`text-lg font-bold font-montserrat ${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                    >
                      {counters[index]}
                      {stat.suffix}
                    </p>
                    <div
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}
                    ></div>
                  </div>
                  <div className="flex-shrink-0">{stat.icon}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Custom styles
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
`;
document.head.appendChild(style);

export default Stats;