import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="preloader bg-black">
      <div className="flex flex-col items-center space-y-6">
        <div className="cosmic-loader"></div>
        <div className="text-neon-cyan font-montserrat text-lg animate-pulse-neon">
          Initializing Raviteja's Portfolio...
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

// Add font and animation styles
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }

  @keyframes pulse-neon {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  .animate-pulse-neon {
    animation: pulse-neon 1.5s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default Preloader;