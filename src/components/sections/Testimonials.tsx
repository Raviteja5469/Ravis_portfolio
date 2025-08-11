import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { isDark } = useTheme();

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Senior Developer',
      company: 'TechCorp Solutions',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "Ravi's ability to deliver scalable solutions under tight deadlines is unmatched. His work on our auction platform exceeded all expectations, handling 500+ concurrent users flawlessly.",
      rating: 5
    },
    {
      id: 2,
      name: 'Dr. Michael Rodriguez',
      role: 'AI Research Lead',
      company: 'Innovation Labs',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "Working with Ravi on the waste classification project was inspiring. His deep understanding of CNNs and practical implementation skills resulted in a 94% accuracy rate that impressed our entire team.",
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Johnson',
      role: 'Product Manager',
      company: 'AccessiTech Inc.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "Ravi's commitment to accessibility-first design in our React Native app was remarkable. He didn't just build features—he crafted experiences that truly serve users with diverse needs.",
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'CTO',
      company: 'StartupVenture',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "Ravi combines technical excellence with creative problem-solving. His cybersecurity expertise and full-stack skills make him a valuable asset to any development team.",
      rating: 5
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'UX Director',
      company: 'DesignForward',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "Collaborating with Ravi was seamless. He translates design concepts into pixel-perfect, performant code while adding thoughtful improvements that enhance the user experience.",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-cosmic-dark' : 'bg-gray-50'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-48 h-48 border border-neon-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 border border-neon-magenta rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-neon-green/10 to-neon-purple/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-cosmic-dark'
          }`}>
            What People <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">Say</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-cosmic-blue'
          }`}>
            Testimonials from colleagues, mentors, and collaborators
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden rounded-3xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className={`p-8 md:p-12 backdrop-blur-md border ${
                    isDark
                      ? 'bg-white/10 border-white/20'
                      : 'bg-white/70 border-gray-200'
                  }`}>
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <Quote size={48} className="text-neon-cyan opacity-50" />
                    </div>

                    {/* Main Testimonial Content */}
                    <div className="text-center space-y-6">
                      {/* Quote */}
                      <blockquote className={`text-lg md:text-xl leading-relaxed italic ${
                        isDark ? 'text-gray-300' : 'text-cosmic-blue'
                      }`}>
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Rating Stars */}
                      <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-2xl ${
                              i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        {/* Profile Image */}
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 blur-sm"></div>
                        </div>

                        {/* Author Details */}
                        <div className="text-center md:text-left">
                          <h4 className={`font-bold text-lg ${
                            isDark ? 'text-white' : 'text-cosmic-dark'
                          }`}>
                            {testimonial.name}
                          </h4>
                          <p className={`text-sm ${
                            isDark ? 'text-neon-cyan' : 'text-cosmic-indigo'
                          }`}>
                            {testimonial.role}
                          </p>
                          <p className={`text-sm ${
                            isDark ? 'text-gray-400' : 'text-cosmic-blue'
                          }`}>
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <button
              onClick={prevTestimonial}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 ${
                isDark
                  ? 'bg-white/10 border-white/20 text-white hover:bg-white/20 focus-visible:ring-neon-cyan'
                  : 'bg-white/70 border-gray-200 text-cosmic-dark hover:bg-white focus-visible:ring-cosmic-indigo'
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextTestimonial}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 ${
                isDark
                  ? 'bg-white/10 border-white/20 text-white hover:bg-white/20 focus-visible:ring-neon-cyan'
                  : 'bg-white/70 border-gray-200 text-cosmic-dark hover:bg-white focus-visible:ring-cosmic-indigo'
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-magenta shadow-[0_0_10px_rgba(0,255,255,0.5)]'
                    : isDark
                      ? 'bg-white/30 hover:bg-white/50'
                      : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${
            isDark ? 'text-gray-300' : 'text-cosmic-blue'
          }`}>
            Ready to work together on your next project?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 ${
              isDark
                ? 'bg-gradient-to-r from-neon-cyan to-neon-magenta text-cosmic-dark hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] focus-visible:ring-neon-cyan'
                : 'bg-gradient-to-r from-cosmic-indigo to-neon-purple text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] focus-visible:ring-cosmic-indigo'
            }`}
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;