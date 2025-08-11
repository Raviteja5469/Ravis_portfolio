import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Brain, Users, Clock } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  color: string;
}

const Stats: React.FC = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { isDark } = useTheme();

  const stats: StatItem[] = [
    {
      icon: <Rocket size={32} />,
      value: 12,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-neon-cyan'
    },
    {
      icon: <Brain size={32} />,
      value: 8,
      label: 'Technologies Mastered',
      suffix: '+',
      color: 'text-neon-magenta'
    },
    {
      icon: <Users size={32} />,
      value: 4,
      label: 'Internships/Collaborations',
      suffix: '',
      color: 'text-neon-green'
    },
    {
      icon: <Clock size={32} />,
      value: 100,
      label: 'On-Time Delivery',
      suffix: '%',
      color: 'text-neon-purple'
    }
  ];

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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

  return (
    <section
      ref={sectionRef}
      id="stats"
      className={`py-20 relative overflow-hidden ${
        isDark ? 'bg-cosmic-dark' : 'bg-cosmic-gray'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-neon-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-neon-magenta rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-cosmic-dark'
          }`}>
            <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
              Stats at a Glance
            </span>
          </h2>
          <p className={`text-xl ${
            isDark ? 'text-gray-400' : 'text-cosmic-blue'
          }`}>
            Numbers that showcase my journey in tech
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className={`relative p-8 rounded-2xl backdrop-blur-md border transition-all duration-500 hover:scale-105 ${
                isDark
                  ? 'bg-white/10 border-white/20 hover:bg-white/20'
                  : 'bg-white/50 border-gray-200 hover:bg-white/70'
              } hover:shadow-2xl`}>
                {/* Neon Border Animation */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  stat.color === 'text-neon-cyan' ? 'shadow-[0_0_30px_rgba(0,255,255,0.3)]' :
                  stat.color === 'text-neon-magenta' ? 'shadow-[0_0_30px_rgba(255,0,255,0.3)]' :
                  stat.color === 'text-neon-green' ? 'shadow-[0_0_30px_rgba(0,255,0,0.3)]' :
                  'shadow-[0_0_30px_rgba(139,92,246,0.3)]'
                }`}></div>

                <div className="text-center space-y-4 relative z-10">
                  {/* Icon */}
                  <div className={`flex justify-center ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>

                  {/* Counter */}
                  <div className="space-y-2">
                    <div className={`text-4xl md:text-5xl font-bold font-mono ${
                      isDark ? 'text-white' : 'text-cosmic-dark'
                    }`}>
                      <span className="tabular-nums">
                        {counters[index]}
                      </span>
                      <span className={stat.color}>
                        {stat.suffix}
                      </span>
                    </div>

                    {/* Label */}
                    <p className={`text-sm font-medium uppercase tracking-wider ${
                      isDark ? 'text-gray-400' : 'text-cosmic-blue'
                    }`}>
                      {stat.label}
                    </p>
                  </div>

                  {/* Progress Bar Animation */}
                  <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-2000 ease-out ${
                        stat.color === 'text-neon-cyan' ? 'bg-neon-cyan' :
                        stat.color === 'text-neon-magenta' ? 'bg-neon-magenta' :
                        stat.color === 'text-neon-green' ? 'bg-neon-green' :
                        'bg-neon-purple'
                      }`}
                      style={{
                        width: hasAnimated ? '100%' : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full animate-ping ${
                stat.color === 'text-neon-cyan' ? 'bg-neon-cyan' :
                stat.color === 'text-neon-magenta' ? 'bg-neon-magenta' :
                stat.color === 'text-neon-green' ? 'bg-neon-green' :
                'bg-neon-purple'
              } opacity-75`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-magenta animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;