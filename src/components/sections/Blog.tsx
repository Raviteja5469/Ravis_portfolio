import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string;
  readTime: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

const Blog = () => {
  const { isDark } = useTheme();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [selectedPost]);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building a Real-Time Auction Platform with MERN',
      excerpt: 'Dive deep into creating a scalable auction system with real-time bidding, secure authentication, and automated auction management. Learn about WebSocket implementation and state management.',
      fullContent: 'In this comprehensive guide, we\'ll walk through the process of building a real-time auction platform using the MERN stack (MongoDB, Express.js, React, Node.js). We\'ll start with setting up the backend server using Node.js and Express, integrating MongoDB for data storage, and implementing WebSocket functionality with Socket.io for real-time bidding.\n\nNext, we\'ll dive into the frontend development with React, creating intuitive user interfaces for browsing auctions, placing bids, and managing user accounts. We\'ll cover state management with Redux, authentication with JWT, and real-time updates using Socket.io client.\n\nFinally, we\'ll discuss deployment strategies, security considerations, and performance optimizations to make your auction platform production-ready. By the end of this article, you\'ll have a solid understanding of building scalable real-time applications with MERN.',
      readTime: '8 min read',
      date: '2024-01-15',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=500',
      slug: 'building-real-time-auction-platform-mern'
    },
    {
      id: 2,
      title: 'Lessons from Training CNNs for Waste Classification',
      excerpt: 'My journey building an AI-powered waste classifier that achieves 94% accuracy. Explore data preprocessing, model architecture decisions, and optimization techniques that made the difference.',
      fullContent: 'Training convolutional neural networks (CNNs) for waste classification presents unique challenges and opportunities. In this article, I share my experience building a model that achieves 94% accuracy in distinguishing between recyclable and non-recyclable waste.\n\nWe\'ll cover data collection and preprocessing techniques, including augmentation methods to handle imbalanced datasets. I\'ll discuss model architecture choices, from basic CNNs to transfer learning with pre-trained models like ResNet and EfficientNet.\n\nAdditionally, we\'ll explore optimization strategies, hyperparameter tuning, and deployment considerations for real-world applications in smart waste management systems. Lessons learned from common pitfalls and how to overcome them will help you in your own computer vision projects.',
      readTime: '12 min read',
      date: '2024-01-08',
      category: 'AI/ML',
      image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=500',
      slug: 'lessons-training-cnns-waste-classification'
    },
    {
      id: 3,
      title: 'Accessibility-First Design in React Native',
      excerpt: 'Creating inclusive mobile applications that work for everyone. Learn about implementing voice navigation, screen reader support, and designing for users with diverse abilities.',
      fullContent: 'Accessibility should be a core consideration in mobile app development, not an afterthought. This article explores best practices for building React Native applications with an accessibility-first approach.\n\nWe\'ll cover implementing VoiceOver and TalkBack support, creating dynamic font scaling, high-contrast modes, and touch-friendly interfaces. Learn how to use React Native\'s Accessibility APIs effectively and test your app with real users.\n\nThe guide includes code examples for common patterns like accessible forms, navigation, and custom components. We\'ll also discuss tools for auditing accessibility and strategies for maintaining inclusive design throughout the development lifecycle.',
      readTime: '10 min read',
      date: '2024-01-01',
      category: 'Accessibility',
      image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=500',
      slug: 'accessibility-first-design-react-native'
    }
  ];

  return (
    <section id="blog" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-6xl font-bold font-orbitron ${isDark ? 'text-white' : 'text-black'}`}>
              My Blog
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
            <p className={`text-lg max-w-2xl mx-auto mt-4 font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
              Sharing insights, tutorials, and lessons learned from my development journey
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, transform: 'translateY(20px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 + index * 0.1 }}
                className={`group relative rounded-xl border ${isDark ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50' : 'bg-gray-100/50 border-gray-300 hover:bg-gray-200/50'} shadow-md hover:scale-105 transition-all duration-300`}
                aria-describedby={`post-description-${post.id}`}
              >
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold font-montserrat ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>
                  {post.category}
                </div>

                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={`Featured image for ${post.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Meta Information */}
                  <div className={`flex items-center space-x-4 text-sm font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} aria-label="Publication date" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} aria-label="Read time" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold font-orbitron ${isDark ? 'text-white group-hover:text-blue-400' : 'text-black group-hover:text-blue-600'} transition-colors duration-300`}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    id={`post-description-${post.id}`}
                    className={`text-sm line-clamp-4 font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-600'}`}
                  >
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <div className={`pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                    <button
                      onClick={() => setSelectedPost(post)}
                      className={`group/btn flex items-center space-x-2 text-sm font-medium font-montserrat transition-all duration-300 ${isDark ? 'text-blue-400 hover:text-white' : 'text-blue-600 hover:text-black'}`}
                      aria-label={`Read more about ${post.title}`}
                    >
                      <span>Read More</span>
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
            className="text-center space-y-6"
          >
            <p className={`text-lg font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
              Dive into this content, you’ll definitely discover some great insights
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`max-w-3xl w-full rounded-xl ${isDark ? 'bg-black' : 'bg-white'} shadow-2xl overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64">
              <img
                src={selectedPost.image}
                alt={`Featured image for ${selectedPost.title}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Close blog post modal"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-sm font-montserrat text-blue-400 bg-blue-600/20 px-3 py-1 rounded-full">
                  {selectedPost.category}
                </span>
                <h2 className={`text-3xl font-bold font-orbitron text-white mt-2`}>
                  {selectedPost.title}
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-300 mt-2">
                  <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              <p className={`text-base leading-relaxed font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                {selectedPost.fullContent.split('\n\n').map((paragraph, index) => (
                  <span key={index}>
                    {paragraph}
                    <br /><br />
                  </span>
                ))}
              </p>
            </div>

            {/* Modal Footer */}
            <div className={`p-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} flex justify-end`}>
              <button
                onClick={() => setSelectedPost(null)}
                className={`px-6 py-3 rounded-lg font-medium font-montserrat transition-all duration-300 ${isDark ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                aria-label="Close blog post modal"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

// Add animation and font styles
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Montserrat:wght@400;500;700&display=swap');

  .font-orbitron {
    font-family: 'Orbitron', sans-serif;
  }

  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
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

  .line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
document.head.appendChild(style);

export default Blog;