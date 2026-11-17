import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, DownloadCloud, Code, Database, Globe, Cpu, Award } from 'lucide-react';

const Home = () => {
  const skills = [
    { name: 'Python', details: 'Pandas · NumPy · Matplotlib', icon: Code },
    { name: 'SQL', details: 'MySQL · CASE WHEN · DENSE_RANK()', icon: Database },
    { name: 'Data Analysis', details: 'Data cleaning · EDA · Descriptive statistics', icon: Cpu },
    { name: 'Power BI', details: 'Interactive dashboards · DAX', icon: Globe },
    { name: 'Microsoft Excel', details: 'Pivot Tables · VLOOKUP · XLOOKUP', icon: Database },
    { name: 'Developer Tools', details: 'Git · GitHub · Jupyter Notebook', icon: Code },
  ];

  const certifications = [
    {
      name: 'Introduction to Data Analytics',
      issuer: 'Simplilearn · February 2026',
      credentialId: '9897137',
      credentialUrl: 'https://tinyurl.com/Vansh-Data-Analytics',
    },
    {
      name: 'Artificial Intelligence and Machine Learning using Python',
      issuer: 'ShapeMySkills Pvt. Ltd. · July 2025',
      credentialId: 'SMSDUCAT2025 - 0312',
      credentialUrl: 'https://www.linkedin.com/posts/vansh-tanwar-382701249_certification-in-artificial-intelligence-activity-7364745206056792064--iQ3',
    },
    {
      name: 'SQL for Data Science',
      issuer: 'Great Learning · February 2026',
      credentialId: 'GAWWHOBH',
      credentialUrl: 'https://www.mygreatlearning.com/certificate/GAWWHOBH',
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Maven Toys Retail Analytics & Executive BI Dashboard',
      description: 'Analyzed 820,000+ retail transactions across 50 stores, with DAX measures and interactive business filters.',
      technologies: ['Power BI', 'DAX', 'MySQL'],
    },
    {
      id: 2,
      title: 'MavenFlix Subscription Cohort & Churn Analytics',
      description: 'Analyzed 3,000+ customer records and built a churn model achieving 73% accuracy and 0.79 ROC-AUC.',
      technologies: ['Python', 'Pandas', 'Scikit-learn'],
    },
    {
      id: 3,
      title: 'Maven B2B CRM Sales Pipeline Analytics',
      description: 'Queried a four-table sales database to analyze deal velocity, win/loss ratios, and sales performance.',
      technologies: ['MySQL', 'Python', 'Pandas'],
    },
  ];

const heroSocials = [
    {
      href: 'https://github.com/VanshTanwar09',
      icon: Github,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/vanshtanwar09',
      icon: Linkedin,
      label: 'LinkedIn',
    },
  ];

  return (
    <div className="min-h-screen">
{/* Hero Section */}
      <section className="home-hero relative min-h-screen overflow-hidden px-4 pt-20 sm:px-6 lg:px-8">
        <div className="hero-hero-overlay-1 absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,0,255,0.18),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.14),transparent_22%)] pointer-events-none" />
        <div className="hero-hero-overlay-2 absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,26,0.92),rgba(13,11,30,0.96))] pointer-events-none" />

<div className="relative max-w-7xl mx-auto grid gap-8 lg:gap-12 lg:grid-cols-[minmax(120px,auto)_1fr_350px] items-center py-12 sm:py-16 lg:py-20 min-h-screen">
          <div className="hidden lg:flex flex-col items-center space-y-8">
            <div className="flex flex-col items-center space-y-3">
              <span className="text-sm tracking-[0.35em] uppercase text-text-secondary rotate-90 origin-left">
                Follow Me
              </span>
              <div className="h-36 w-[1px] bg-white/10" />
            </div>
            <div className="flex flex-col items-center space-y-4">
              {heroSocials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-icon p-3 rounded-full bg-card-background border border-white/10 text-text-primary transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(139,0,255,0.25)]"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <motion.div
            className="z-10 flex flex-col justify-center gap-5 sm:gap-6 lg:gap-7 order-1 lg:order-none"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="max-w-xl">
                <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-text-secondary mb-3 sm:mb-4">TURNING DATA INTO DECISIONS</p>
<h1 className="hero-heading">
                  <span className="greeting">I am</span>
                  <span className="name">Vansh</span>
                  <span className="role-line">
                    <span className="highlight">Data Analyst</span>
                  </span>
                </h1>
                <p className="hero-subtitle mt-4 sm:mt-5 lg:mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-text-secondary max-w-2xl leading-7 sm:leading-8">
                  BCA graduate with hands-on experience in data cleaning,
                  exploratory analysis, and dashboard development. Seeking an
                  entry-level Data Analyst role to turn data into useful insights.
                </p>
              </div>

              <div className="hero-buttons flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <a
                  href="/resume.pdf"
                  className="btn-primary inline-flex items-center gap-2 sm:gap-3 shadow-[0_16px_40px_rgba(139,0,255,0.18)] text-sm sm:text-base"
                >
                  <DownloadCloud className="w-4 sm:w-5 h-4 sm:h-5" />
                  Download Resume
                </a>
                <div className="available-badge flex items-center gap-2 sm:gap-3 rounded-full px-3 sm:px-4 py-2.5 sm:py-3 border shadow-[0_0_40px_rgba(34,197,94,0.15)] text-xs sm:text-sm">
                  <span className="dot-pulse" />
                  <span>Seeking Data Analyst Roles</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:hidden mt-2">
              {heroSocials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-icon p-2.5 sm:p-3 rounded-xl sm:rounded-full bg-card-background border border-white/10 text-text-primary transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(139,0,255,0.25)]"
                  >
                    <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-sm lg:max-w-md flex justify-center order-first lg:order-none lg:col-start-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="hero-image-card">
              <div className="hero-image-wrapper">
                <img
                  src="/Vansh.jpeg"
                  alt="Vansh Tanwar"
                  loading="lazy"
                  className="hero-profile-img"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-3 sm:mb-4 lg:mb-6">
              Featured <span className="glow-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              A look at my retail, customer churn, and sales pipeline analytics projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="card group"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-accent line-clamp-2">{project.title}</h3>
                <p className="text-text-secondary mb-3 sm:mb-4 text-xs sm:text-sm line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-accent/20 text-accent rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <motion.button
                className="btn-primary group text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View More Projects
                <ArrowRight className="inline-block ml-2 w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-3 sm:mb-4 lg:mb-6">
              Technical <span className="glow-text">Skills</span>
            </h2>
            <p className="section-subtitle">
              Tools and analytical methods from my data analytics work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="skill-card card text-center group"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <skill.icon className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 mx-auto mb-2 sm:mb-3 lg:mb-4 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1.5 sm:mb-2">{skill.name}</h3>
                <p className="text-xs sm:text-sm text-text-secondary">{skill.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-3 sm:mb-4 lg:mb-6">
              <Award className="inline-block w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 mr-1.5 sm:mr-2 text-accent" />
              Certifications & <span className="glow-text">Achievements</span>
            </h2>
            <p className="section-subtitle">
              Data analytics and AI credentials listed on my resume.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-4 sm:gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                className="cert-badge card group flex h-full min-h-[18rem] flex-col items-center p-6 text-center"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Award className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 mx-auto mb-2 sm:mb-3 lg:mb-4 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="flex min-h-16 items-center justify-center text-sm sm:text-base lg:text-lg font-semibold">
                  {cert.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-text-secondary">{cert.issuer}</p>
                <p className="mt-1 text-[0.65rem] text-text-muted">Credential ID: {cert.credentialId}</p>
                <div className="mt-auto flex min-h-8 items-end justify-center pt-3">
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-accent hover:underline"
                    >
                      View credential
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;