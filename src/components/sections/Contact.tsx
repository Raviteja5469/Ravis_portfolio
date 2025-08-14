import { useState, useEffect } from 'react';
import {
  Send,
  Mail,
  Linkedin,
  Github,
  MapPin,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Interfaces
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

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY!);
  }, []);

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'ravitejseguria@gmail.com',
      href: 'mailto:ravitejseguria@gmail.com',
      color: 'text-blue-600',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: '/in/seguri-raviteja',
      href: 'https://www.linkedin.com/in/seguri-raviteja-61190a253/',
      color: 'text-blue-600',
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: '@raviteja-dev',
      href: 'https://github.com/Raviteja5469',
      color: 'text-blue-600',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'India',
      href: null,
      color: 'text-blue-600',
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address',
      });
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

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams
      );

      setFormStatus({
        type: 'success',
        message:
          "Thanks for reaching out! I'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus({
        type: 'error',
        message:
          'Something went wrong. Please try again or reach out via email directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
            <p className={`text-lg mt-4 font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
              Have a project in mind? Let's discuss how we can bring your ideas to life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, transform: 'translateY(20px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className={`text-2xl font-bold font-orbitron ${isDark ? 'text-white' : 'text-black'}`}>
                  Let's Connect
                </h3>
                <p className={`text-lg leading-relaxed font-montserrat ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
                  I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. Whether you need a full-stack developer, AI/ML consultant, or cybersecurity expertise, I'm here to help bring your vision to reality.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ rotateY: 5, rotateX: 5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl border ${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-100/50 border-gray-300'} shadow-md hover:shadow-lg transition-all duration-300`}
                    style={{ perspective: '1000px' }}
                  >
                    <div className={`p-3 rounded-lg ${item.color} bg-blue-600/10`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium font-montserrat ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`text-lg font-semibold font-montserrat ${isDark ? 'text-white' : 'text-black'} transition-colors duration-300 hover:text-blue-600`}
                          aria-label={`${item.label} link`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className={`text-lg font-semibold font-montserrat ${isDark ? 'text-white' : 'text-black'}`}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, transform: 'translateY(20px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
              className={`p-8 rounded-xl border ${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-100/50 border-gray-300'} shadow-md`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Status */}
                {formStatus.type && (
                  <div className={`p-4 rounded-lg flex items-center space-x-3 font-montserrat ${formStatus.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                    {formStatus.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    <span className="text-sm" aria-live="polite">{formStatus.message}</span>
                  </div>
                )}

                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 font-montserrat ${isDark ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-600' : 'bg-gray-100/50 border-gray-300 text-black placeholder-gray-600 focus:ring-blue-600'}`}
                    />
                    <label htmlFor="name" className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none font-montserrat ${isDark ? 'text-gray-400' : 'text-gray-600'} ${formData.name ? 'text-xs -top-2 text-blue-600' : ''}`}>
                      
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address * "
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 font-montserrat ${isDark ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-600' : 'bg-gray-100/50 border-gray-300 text-black placeholder-gray-600 focus:ring-blue-600'}`}
                    />
                    <label htmlFor="email" className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none font-montserrat ${isDark ? 'text-gray-400' : 'text-gray-600'} ${formData.email ? 'text-xs -top-2 text-blue-600' : ''}`}>
                      
                    </label>
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 font-montserrat ${isDark ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-600' : 'bg-gray-100/50 border-gray-300 text-black placeholder-gray-600 focus:ring-blue-600'}`}
                  />
                  <label htmlFor="subject" className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none font-montserrat ${isDark ? 'text-gray-400' : 'text-gray-600'} ${formData.subject ? 'text-xs -top-2 text-blue-600' : ''}`}>
                    
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Your Message * "
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 resize-vertical font-montserrat ${isDark ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-600' : 'bg-gray-100/50 border-gray-300 text-black placeholder-gray-600 focus:ring-blue-600'}`}
                  />
                  <label htmlFor="message" className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none font-montserrat ${isDark ? 'text-gray-400' : 'text-gray-600'} ${formData.message ? 'text-xs -top-2 text-blue-600' : ''}`}>
                    
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                  transition={{ duration: 0.3 }}
                  className={`w-full py-4 rounded-lg font-semibold font-montserrat transition-all duration-300 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed ${isDark ? 'bg-blue-600 text-white border border-blue-700 hover:bg-blue-700 focus:ring-blue-600' : 'bg-blue-600 text-white border border-blue-700 hover:bg-blue-700 focus:ring-blue-600'}`}
                  aria-label="Submit contact form"
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <motion.div animate={{ y: [0, -5, 0], transition: { duration: 1.5, repeat: Infinity } }}>
                          <Send size={20} />
                        </motion.div>
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Optional: add Google Fonts and style if not already globally available
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Montserrat:wght@400;500;700&display=swap');

  .font-orbitron {
    font-family: 'Orbitron', sans-serif;
  }

  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
`;
document.head.appendChild(style);

export default Contact;
