import { motion } from 'framer-motion';
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-section',
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.04,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b4787ba5-cda3-478d-b605-a59b8d95df61',
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      const result: { success?: boolean; message?: string } = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error(result.message || `Form submission failed with status ${response.status}.`);
      }

      setSubmissionStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vansh.tanwar09@gmail.com',
      href: 'mailto:vansh.tanwar09@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8076565847',
      href: 'tel:+918076565847',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/VanshTanwar09',
      color: 'hover:text-gray-300',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vanshtanwar09',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 contact-section"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Let's <span className="glow-text">Connect</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
{/* Contact Form */}
          <motion.div
            className="contact-section card send-message-card"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-text-secondary">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="contact-input w-full bg-card-background border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:shadow-[0_0_20px_rgba(172,63,255,0.25)] transition-all duration-300"
                  placeholder="John"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-text-secondary">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="contact-input w-full bg-card-background border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:shadow-[0_0_20px_rgba(172,63,255,0.25)] transition-all duration-300"
                  placeholder="Doe"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-secondary">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="contact-input w-full bg-card-background border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:shadow-[0_0_20px_rgba(172,63,255,0.25)] transition-all duration-300"
                  placeholder="john.doe@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-text-secondary">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="contact-input w-full bg-card-background border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:shadow-[0_0_20px_rgba(172,63,255,0.25)] transition-all duration-300"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="contact-input w-full bg-card-background border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:shadow-[0_0_20px_rgba(172,63,255,0.25)] transition-all duration-300 resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                className="btn-primary w-full group mt-2 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && (
                  <Send className="inline-block ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
              {submissionStatus && (
                <p
                  className={`text-sm ${submissionStatus === 'success' ? 'text-green-600' : 'text-red-500'}`}
                  role="status"
                  aria-live="polite"
                >
                  {submissionStatus === 'success'
                    ? 'Your message has been sent successfully. Thank you for reaching out!'
                    : "We couldn't send your message. Please try again or email vansh.tanwar09@gmail.com."}
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <div className="space-y-6 sm:space-y-8">
{/* Contact Information */}
            <motion.div
              className="contact-section card contact-info-card"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">Get In Touch</h2>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-card-background/50 rounded-lg hover:bg-card-background transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <info.icon className="w-5 sm:w-6 h-5 sm:h-6 text-accent group-hover:scale-110 transition-transform flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-medium text-text-primary text-sm sm:text-base">{info.label}</p>
                      <p className="text-text-secondary text-xs sm:text-sm break-all">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

{/* Social Links */}
            <motion.div
              className="contact-section card contact-info-card"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">Follow Me</h2>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-card-background/50 rounded-lg hover:bg-card-background transition-all duration-300 group ${social.color}`}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <social.icon className="w-5 sm:w-6 h-5 sm:h-6 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              className="contact-section card text-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-4 animate-pulse"></div>
              <h3 className="text-lg font-semibold mb-2 text-accent">Seeking Data Analyst Roles</h3>
              <p className="text-text-secondary">
                I'm seeking an entry-level Data Analyst opportunity. Get in touch to discuss how I can support your team with data cleaning, analysis, and reporting.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-white/10 contact-section"
        >
          <p className="text-text-secondary mb-4">
            Built by Vansh Tanwar
          </p>
          <a
            href="https://github.com/VanshTanwar09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-accent hover:text-bright-accent-glow transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span>Visit my GitHub profile</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
