import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  useEffect(() => {
    const filterButtons = document.querySelectorAll<HTMLElement>('.filter-btn');
    const projectCards = document.querySelectorAll<HTMLElement>('.project-card');
    const listeners: Array<{ button: HTMLElement; handler: () => void }> = [];

    filterButtons.forEach(btn => {
      if (btn.dataset.filter === 'all') {
        btn.classList.add('active');
      }
    });

    filterButtons.forEach(btn => {
      const handler = () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        projectCards.forEach(card => {
          if (filter === 'all' || 
              card.dataset.category === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      };
      btn.addEventListener('click', handler);
      listeners.push({ button: btn, handler });
    });

    return () => {
      listeners.forEach(({ button, handler }) => button.removeEventListener('click', handler));
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'business-intelligence', name: 'Business Intelligence' },
    { id: 'customer-analytics', name: 'Customer Analytics' },
    { id: 'sales-analytics', name: 'Sales Analytics' },
    { id: 'machine-learning', name: 'Machine Learning' },
    { id: 'computer-vision', name: 'Computer Vision' },
    { id: 'data-analysis', name: 'Data Analysis' },
    { id: 'recommendation-systems', name: 'Recommendation Systems' },
  ];

  const filteredProjects = projects; // Keep all for vanilla JS filtering

  return (
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">
            My <span className="glow-text">Projects</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Projects spanning business intelligence, predictive modeling, computer vision,
            customer analytics, and recommendation systems.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-10 sm:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.35, ease: 'easeOut' }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              data-filter={category.id}
              className={`filter-btn text-xs sm:text-sm ${category.id === 'all' ? 'active' : ''}`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          layout
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card card group flex flex-col"
              data-category={project.category}
              layout
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Project Thumbnail */}
              <div
                className="project-thumbnail relative overflow-hidden rounded-lg sm:rounded-xl mb-3 sm:mb-4 h-40 sm:h-48 lg:h-52"
                data-tone={project.thumbnail.tone}
                role="img"
                aria-label={`${project.title} thumbnail`}
              >
                <div className="project-thumbnail__grid" aria-hidden="true" />
                <div className="project-thumbnail__icon" aria-hidden="true">
                  <project.thumbnail.icon />
                </div>
                <div className="project-thumbnail__content">
                  <span>{project.thumbnail.label}</span>
                  <div className="project-thumbnail__bars" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-3 sm:p-4 lg:p-6 flex-grow flex flex-col">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base line-clamp-2 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-accent/10 text-accent text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <section className="lets-work-section mt-12 sm:mt-16 lg:mt-20">
          <div className="lets-work-content">
            <span className="lets-work-tag">— OPEN TO OPPORTUNITIES —</span>
            <h2>Let's <span className="highlight">Work Together</span></h2>
            <p>
              Have a data project in mind? Looking for a Data Analyst?
              I'd love to hear about your project and explore how we can collaborate.
            </p>
            <Link to="/contact" className="lets-work-btn">
              Connect with Me →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;