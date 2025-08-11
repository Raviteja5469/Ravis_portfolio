import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

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

const Blog: React.FC = () => {
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
    <section id="blog" className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-cosmic-dark' : 'bg-gray-50'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 border border-neon-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-neon-magenta rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-neon-green/20 to-neon-purple/20 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-cosmic-dark'
          }`}>
            Latest <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">Blog Posts</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-cosmic-blue'
          }`}>
            Sharing insights, tutorials, and lessons learned from my development journey
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group relative overflow-hidden rounded-2xl backdrop-blur-md border transition-all duration-500 hover:scale-105 ${
                isDark
                  ? 'bg-white/10 border-white/20 hover:bg-white/20'
                  : 'bg-white/70 border-gray-200 hover:bg-white hover:shadow-xl'
              }`}
              style={{ 
                opacity: 0,
                animation: `slideInRight 0.8s ease-out ${index * 0.2}s forwards`
              }}
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-neon-cyan to-neon-magenta text-cosmic-dark px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Meta Information */}
                <div className={`flex items-center space-x-4 text-sm ${
                  isDark ? 'text-gray-400' : 'text-cosmic-blue'
                }`}>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold leading-tight group-hover:text-neon-cyan transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-cosmic-dark'
                }`}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className={`text-sm line-clamp-4 leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-cosmic-blue'
                }`}>
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                  <button className={`group/btn flex items-center space-x-2 text-sm font-medium transition-all duration-300 ${
                    isDark ? 'text-neon-cyan hover:text-white' : 'text-cosmic-indigo hover:text-cosmic-dark'
                  }`}>
                    <span>Read More</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_50px_rgba(0,255,255,0.1)]"></div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="space-y-6">
            <p className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-cosmic-blue'
            }`}>
              Want to read more? Check out my full blog for in-depth tutorials and insights.
            </p>
            <button className={`group px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 ${
              isDark
                ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 text-white border border-neon-cyan hover:bg-gradient-to-r hover:from-neon-cyan/40 hover:to-neon-magenta/40 focus-visible:ring-neon-cyan'
                : 'bg-gradient-to-r from-cosmic-indigo/20 to-neon-purple/20 text-cosmic-dark border border-cosmic-indigo hover:bg-gradient-to-r hover:from-cosmic-indigo/40 hover:to-neon-purple/40 focus-visible:ring-cosmic-indigo'
            }`}>
              <span className="flex items-center space-x-2">
                <span>View All Posts</span>
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className={`mt-12 p-8 rounded-2xl backdrop-blur-md border ${
            isDark
              ? 'bg-white/10 border-white/20'
              : 'bg-white/70 border-gray-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-cosmic-dark'
            }`}>
              Stay Updated
            </h3>
            <p className={`mb-6 ${
              isDark ? 'text-gray-400' : 'text-cosmic-blue'
            }`}>
              Subscribe to my newsletter for the latest posts on web development, AI/ML, and cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-neon-cyan focus:border-neon-cyan'
                    : 'bg-white border-gray-300 text-cosmic-dark placeholder-gray-500 focus:ring-cosmic-indigo focus:border-cosmic-indigo'
                }`}
                aria-label="Email address"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-magenta text-cosmic-dark font-semibold rounded-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-cyan">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add animation keyframe
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
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