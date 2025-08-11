import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], input, textarea, select')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className={`cursor fixed pointer-events-none z-[10000] transition-all duration-300 ${
        isHovering ? 'cursor-hover' : ''
      } ${isDark ? 'border-neon-cyan' : 'border-cosmic-indigo'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className={`w-full h-full rounded-full ${
        isHovering 
          ? `bg-gradient-to-r ${isDark ? 'from-neon-cyan to-neon-magenta' : 'from-cosmic-indigo to-neon-purple'} opacity-20`
          : 'bg-transparent'
      }`} />
    </div>
  );
};

export default CustomCursor;