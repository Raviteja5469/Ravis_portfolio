import { useTheme } from '../../contexts/ThemeContext';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

const Blog = () => {
  const { isDark } = useTheme();

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building a Real-Time Auction Platform with MERN',
      excerpt: 'Dive deep into creating a scalable auction system with real-time bidding, secure authentication, and automated auction management. Learn about WebSocket implementation and state management.',
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
                    <a
                      href={`/blog/${post.slug}`}
                      className={`group/btn flex items-center space-x-2 text-sm font-medium font-montserrat transition-all duration-300 ${isDark ? 'text-blue-400 hover:text-white' : 'text-blue-600 hover:text-black'}`}
                      aria-label={`Read more about ${post.title}`}
                    >
                      <span>Read More</span>
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
                    </a>
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