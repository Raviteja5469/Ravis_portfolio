import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isDark } = useTheme();

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'ravi.teja@example.com',
      href: 'mailto:ravi.teja@example.com',
      color: 'text-neon-cyan'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: '/in/ravi-teja-dev',
      href: 'https://linkedin.com/in/ravi-teja-dev',
      color: 'text-blue-500'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: '@raviteja-dev',
      href: 'https://github.com/raviteja-dev',
      color: 'text-gray-600 dark:text-gray-300'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'India',
      href: null,
      color: 'text-neon-magenta'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear form status when user starts typing
    if (formStatus.type) {
      setFormStatus({ type: null, message: '' });
    }
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setFormStatus({ type: 'error', message: 'Name is required' });
      return false;
    }
    if (!formData.email.trim()) {
      setFormStatus({ type: 'error', message: 'Email is required' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    if (!formData.message.trim()) {
      setFormStatus({ type: 'error', message: 'Message is required' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus({
        type: 'success',
        message: 'Thanks for reaching out! I\'ll get back to you within 24 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or reach out via email directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-cosmic-midnight' : 'bg-white'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 border border-neon-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-neon-magenta rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-neon-green/20 to-neon-purple/20 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-cosmic-dark'
          }`}>
            Get In <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-cosmic-blue'
          }`}>
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-cosmic-dark'
                }`}>
                  Let's Connect
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-cosmic-blue'
                }`}>
                  I'm always excited to discuss new opportunities, innovative projects, and 
                  potential collaborations. Whether you need a full-stack developer, AI/ML consultant, 
                  or cybersecurity expertise, I'm here to help bring your vision to reality.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className={`flex items-center space-x-4 p-4 rounded-xl backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'bg-white/10 border-white/20 hover:bg-white/20'
                      : 'bg-gray-50/70 border-gray-200 hover:bg-gray-100'
                  }`}>
                    <div className={`p-3 rounded-lg ${item.color} bg-current/10`}>
                      <div className={item.color}>
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${
                        isDark ? 'text-gray-400' : 'text-cosmic-blue'
                      }`}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`text-lg font-semibold transition-colors duration-300 hover:underline ${
                            isDark ? 'text-white' : 'text-cosmic-dark'
                          }`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className={`text-lg font-semibold ${
                          isDark ? 'text-white' : 'text-cosmic-dark'
                        }`}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className={`text-lg font-semibold mb-4 ${
                  isDark ? 'text-white' : 'text-cosmic-dark'
                }`}>
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {[
                    { icon: <Linkedin size={24} />, href: '#', color: 'hover:text-blue-500' },
                    { icon: <Github size={24} />, href: '#', color: 'hover:text-gray-600 dark:hover:text-gray-300' },
                    { icon: <Mail size={24} />, href: '#', color: 'hover:text-neon-cyan' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
                        isDark
                          ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                          : 'bg-gray-100/70 border-gray-200 text-cosmic-dark hover:bg-gray-200'
                      } ${social.color}`}
                      aria-label={`Social media link ${index + 1}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`p-8 rounded-2xl backdrop-blur-md border ${
              isDark
                ? 'bg-white/10 border-white/20'
                : 'bg-white/70 border-gray-200'
            }`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Status */}
                {formStatus.type && (
                  <div className={`p-4 rounded-lg flex items-center space-x-3 ${
                    formStatus.type === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {formStatus.type === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <span className="text-sm">{formStatus.message}</span>
                  </div>
                )}

                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="floating-label">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 ${
                        isDark
                          ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-neon-cyan focus:border-neon-cyan'
                          : 'bg-white border-gray-300 text-cosmic-dark placeholder-gray-500 focus:ring-cosmic-indigo focus:border-cosmic-indigo'
                      }`}
                    />
                    <label htmlFor="name" className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none ${
                      isDark ? 'text-gray-400' : 'text-cosmic-blue'
                    }`}>
                      Your Name *
                    </label>
                  </div>

                  <div className="floating-label">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 ${
                        isDark
                          ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-neon-cyan focus:border-neon-cyan'
                          : 'bg-white border-gray-300 text-cosmic-dark placeholder-gray-500 focus:ring-cosmic-indigo focus:border-cosmic-indigo'
                      }`}
                    />
                    <label htmlFor="email" className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none ${
                      isDark ? 'text-gray-400' : 'text-cosmic-blue'
                    }`}>
                      Email Address *
                    </label>
                  </div>
                </div>

                {/* Subject */}
                <div className="floating-label">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=" "
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 ${
                      isDark
                        ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-neon-cyan focus:border-neon-cyan'
                        : 'bg-white border-gray-300 text-cosmic-dark placeholder-gray-500 focus:ring-cosmic-indigo focus:border-cosmic-indigo'
                    }`}
                  />
                  <label htmlFor="subject" className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none ${
                    isDark ? 'text-gray-400' : 'text-cosmic-blue'
                  }`}>
                    Subject
                  </label>
                </div>

                {/* Message */}
                <div className="floating-label">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder=" "
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 resize-vertical ${
                      isDark
                        ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-neon-cyan focus:border-neon-cyan'
                        : 'bg-white border-gray-300 text-cosmic-dark placeholder-gray-500 focus:ring-cosmic-indigo focus:border-cosmic-indigo'
                    }`}
                  />
                  <label htmlFor="message" className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none ${
                    isDark ? 'text-gray-400' : 'text-cosmic-blue'
                  }`}>
                    Your Message *
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
                    isDark
                      ? 'bg-gradient-to-r from-neon-cyan to-neon-magenta text-cosmic-dark hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] focus:ring-neon-cyan'
                      : 'bg-gradient-to-r from-cosmic-indigo to-neon-purple text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] focus:ring-cosmic-indigo'
                  }`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;