import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-section',
        { scale: 0.92, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
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

  const experiences = [
    {
      title: 'Data Analytics with AI Intern',
      company: 'IBM SkillsBuild · AICTE & BharatCares',
      period: 'August 2026 - September 2026',
      description: 'Completed a structured six-week internship focused on end-to-end data processing, exploratory analysis, and AI integration. Cleaned and preprocessed datasets with 5,000+ rows using Python, reducing data inconsistencies by approximately 25%. Built Power BI dashboards that reduced reporting time by 40%.',
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16 lg:mb-20 about-section"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">
            About <span className="glow-text">Me</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            BCA graduate focused on data analysis, business intelligence, and turning complex datasets into clear, useful insights.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          <motion.div className="about-section card">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">My Story</h2>
            <p className="text-text-secondary mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
              I'm Vansh Tanwar, a BCA graduate with practical experience in data cleaning,
              exploratory data analysis, and dashboard development. I enjoy using data to
              answer questions and support better decisions.
            </p>
            <p className="text-text-secondary mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
              My work includes retail sales reporting in Power BI, customer churn analysis
              with Python, and sales pipeline analysis with SQL. I use tools such as Pandas,
              NumPy, MySQL, and Excel to prepare and analyze data.
            </p>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              I'm seeking an entry-level Data Analyst role where I can continue learning
              while helping teams make informed, data-driven decisions.
            </p>
          </motion.div>

          <motion.div className="about-section card">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">Quick Facts</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center text-sm sm:text-base">
                <span className="text-text-secondary">Location</span>
                <span className="text-text-primary font-medium">India</span>
              </div>
              <div className="flex justify-between items-center text-sm sm:text-base">
                <span className="text-text-secondary">Education</span>
                <span className="text-text-primary font-medium">BCA · 8.15 CGPA (2023-2026)</span>
              </div>
              <div className="flex justify-between items-center text-sm sm:text-base">
                <span className="text-text-secondary">Experience</span>
                <span className="text-text-primary font-medium">6-week analytics internship</span>
              </div>
              <div className="flex justify-between items-center text-sm sm:text-base">
                <span className="text-text-secondary">Languages</span>
                <span className="text-text-primary font-medium">Hindi (Native), English (Professional)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div className="about-section">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
            Experience <span className="glow-text">Timeline</span>
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.title}
                className="card"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-4 gap-1 sm:gap-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-accent">{exp.title}</h3>
                  <span className="text-text-secondary text-sm sm:text-base">{exp.period}</span>
                </div>
                <p className="text-text-primary font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">{exp.company}</p>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;