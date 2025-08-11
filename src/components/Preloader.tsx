import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <div className="flex flex-col items-center space-y-6">
        <div className="cosmic-loader"></div>
        <div className="text-neon-cyan font-mono text-lg animate-pulse-neon">
          Initializing Cosmic Portfolio...
        </div>
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-neon-magenta rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-neon-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;