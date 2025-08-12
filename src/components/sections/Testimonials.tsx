import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials = () => {
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
      name: 'Voutla Jayendra',
      role: 'Software Developer',
      company: 'Workelate',
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
    <section id="testimonials" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-6xl font-bold font-roboto ${isDark ? 'text-white' : 'text-black'}`}>
              What People Say
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
            <p className={`text-lg mt-4 ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
              Testimonials from colleagues, mentors, and collaborators
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto relative">
            <div
              className="relative overflow-hidden rounded-xl"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    className="w-full flex-shrink-0"
                    style={{ perspective: '1000px' }}
                    whileHover={{ rotateY: 5, rotateX: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`p-8 rounded-xl border ${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-100/50 border-gray-300'} shadow-md hover:shadow-lg transition-shadow duration-300`}>
                      {/* Quote Icon */}
                      <motion.div
                        className="flex justify-center mb-6"
                        animate={{ scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } }}
                      >
                        <Quote size={48} className={`${isDark ? 'text-blue-400' : 'text-blue-600'} opacity-70`} />
                      </motion.div>

                      {/* Main Testimonial Content */}
                      <div className="text-center space-y-6">
                        {/* Quote */}
                        <blockquote className={`text-xl leading-relaxed italic ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Rating Stars */}
                        <div className="flex justify-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-xl ${i < testimonial.rating ? (isDark ? 'text-yellow-300' : 'text-yellow-500') : (isDark ? 'text-gray-500' : 'text-gray-400')}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>

                        {/* Author Info */}
                        <div className="flex flex-col items-center space-y-4">
                          <div className="relative">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-20 h-20 rounded-full object-cover border-2 border-blue-600"
                              loading="lazy"
                            />
                          </div>
                          <div className="text-center">
                            <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>
                              {testimonial.name}
                            </h4>
                            <p className={`text-sm ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                              {testimonial.role}
                            </p>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Navigation Controls */}
              <button
                onClick={prevTestimonial}
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full border-2 ${isDark ? 'border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700' : 'border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextTestimonial}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full border-2 ${isDark ? 'border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700' : 'border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600`}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dot Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
              className="flex justify-center space-x-2 mt-8"
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'border-2 border-blue-600 animate-pulse bg-blue-600' : (isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-400 hover:bg-gray-500')}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
            className="text-center mt-16"
          >
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
              Ready to work together on your next project?
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-300 border hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${isDark ? 'bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 hover:text-black'} hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]`}
              aria-label="Scroll to contact section"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Add font and animation styles
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  .font-roboto {
    font-family: 'Roboto', sans-serif;
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

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;
document.head.appendChild(style);

export default Testimonials;