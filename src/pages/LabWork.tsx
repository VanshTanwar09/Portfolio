import { motion } from 'framer-motion';
import { FileText, Download, Cpu, Code, Globe, Monitor, Terminal, PenTool, Layers, Lightbulb, Share2 } from 'lucide-react';

// Auto-generate professional description from title
const generateDescription = (title: string): string => {
  const descriptions: Record<string, string> = {
    'PYTHON PROGRAMMING': 'Comprehensive Python programming labs covering syntax, data structures, algorithms, and application development.',
    'ARTIFICIAL INTELLIGENCE': 'Foundational AI experiments covering neural networks, machine reasoning, and cognitive computing methodologies.',
    'MACHINE LEARNING': 'Practical implementations of supervised and unsupervised learning algorithms, data modeling, and predictive analytics techniques.',
    'DEEP LEARNING': 'Advanced neural network architectures, CNNs, RNNs, and hands-on deep learning model development.',
    'JAVA PROGRAMMING': 'Object-oriented programming labs covering inheritance, polymorphism, GUI development, and enterprise application design.',
    'INTERNET OF THINGS': 'IoT sensor integration, embedded systems programming, and connected device infrastructure experiments.',
    'LINUX OPERATING SYSTEM': 'Linux OS administration labs covering file systems, user management, networking, and system security.',
    'COMPUTER GRAPHICS': '2D and 3D rendering techniques, geometric transformations, and graphics pipeline implementation.',
    'C++ PROGRAMMING': 'Low-level memory management, data structures, algorithm optimization, and performance-oriented programming.',
    'SOFTWARE ENGINEERING': 'SDLC methodologies, requirement analysis, system design, testing frameworks, and agile development practices.',
  };
  return descriptions[title] || `Comprehensive laboratory work and practical exercises in ${title.toLowerCase()}.`;
};

// Lab data with corresponding PDF files
const labWorks = [
  {
    id: 1,
    title: 'PYTHON PROGRAMMING',
    file: '/PYTHONLAB.pdf',
    icon: Cpu,
  },
  {
    id: 2,
    title: 'ARTIFICIAL INTELLIGENCE',
    file: '/AILAB.pdf',
    icon: Lightbulb,
  },
  {
    id: 3,
    title: 'MACHINE LEARNING',
    file: '/MACHINELEARNINGLAB.pdf',
    icon: Layers,
  },
  {
    id: 4,
    title: 'DEEP LEARNING',
    file: '/DEEPLEARNINGLAB.pdf',
    icon: Share2,
  },
  {
    id: 5,
    title: 'JAVA PROGRAMMING',
    file: '/JAVALAB.pdf',
    icon: Code,
  },
  {
    id: 6,
    title: 'INTERNET OF THINGS',
    file: '/IOTLAB.pdf',
    icon: Globe,
  },
  {
    id: 7,
    title: 'LINUX OPERATING SYSTEM',
    file: '/LINUXLAB.pdf',
    icon: Terminal,
  },
  {
    id: 8,
    title: 'COMPUTER GRAPHICS',
    file: '/COMPUTERGRAPHICSLAB.pdf',
    icon: Monitor,
  },
  {
    id: 9,
    title: 'C++ PROGRAMMING',
    file: '/CPLUSLAB.pdf',
    icon: Code,
  },
  {
    id: 10,
    title: 'SOFTWARE ENGINEERING',
    file: '/SOFTWAREENGLAB.pdf',
    icon: PenTool,
  },
];

const LabWork = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title mb-4">
            Lab Work & <span className="glow-text">Practical Files</span>
          </h1>
          <p className="section-subtitle">
            Academic practical records and laboratory work completed during BCA.
          </p>
        </motion.div>

        {/* Lab Works Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          layout
        >
          {labWorks.map((lab) => {
            const Icon = lab.icon;
            return (
              <motion.div
                key={lab.id}
                className="lab-card card group flex flex-col"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Card Header with Icon */}
                <div className="p-4 sm:p-5 flex items-start justify-between">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-accent/20 border border-accent/30">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <span className="flex items-center gap-1 text-xs text-text-muted">
                    <FileText className="w-3 h-3" />
                    PDF
                  </span>
                </div>

                {/* Card Content */}
                <div className="px-4 sm:px-5 pb-4 flex-1">
                  <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-accent line-clamp-2">
                    {lab.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary line-clamp-3">
                    {generateDescription(lab.title)}
                  </p>
                </div>

{/* Download Button */}
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 mt-auto">
                  <a
                    href={lab.file}
                    download={lab.title.replace(/\s+/g, '_') + '.pdf'}
                    className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-accent/20 hover:border-accent/40 transition-all duration-300 text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default LabWork;
