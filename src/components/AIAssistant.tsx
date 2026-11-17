import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { projects } from '../data/projects';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Vansh's portfolio assistant.\n\nAsk me about his skills, projects, or experience.", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const suggestedQuestions = [
    "Tell me about Vansh",
    "List his projects",
    "What technologies does he know?",
    "Tell me about his internship",
    "What did he study?",
    "What certifications does he have?"
  ];

  const handleSend = (message = input) => {
    const question = message.trim();
    if (!question) return;

    const userMessage = { id: Date.now(), text: question, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response based on local data
    setTimeout(() => {
      const aiResponse = getAIResponse(question);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: aiResponse, sender: 'ai' }]);
    }, 1000);
  };

  const getAIResponse = (question: string) => {
    const q = question.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    const projectNumber = q.match(/(?:project|number|no)\s*(\d+)/);
    const numberedProject = projectNumber && projects.find(project => project.id === Number(projectNumber[1]));
    const namedProject = projects.find(project => project.keywords.some(keyword => q.includes(keyword)));
    const selectedProject = numberedProject || namedProject;
    const formatProject = (project: typeof projects[number]) =>
      `${project.title}\n\n${project.description}\n\nTechnologies: ${project.technologies.join(', ')}\nRepository: ${project.github}`;
    const formatProjectList = (matchingProjects: typeof projects[number][]) =>
      matchingProjects.map((project, index) => `${index + 1}. ${formatProject(project)}`).join('\n\n');

    if (selectedProject) {
      return formatProject(selectedProject);
    }

    const projectCategory = [
      ['business intelligence', 'business-intelligence'],
      ['customer analytics', 'customer-analytics'],
      ['sales analytics', 'sales-analytics'],
      ['machine learning', 'machine-learning'],
      ['computer vision', 'computer-vision'],
      ['data analysis', 'data-analysis'],
      ['recommendation system', 'recommendation-systems'],
    ].find(([label]) => q.includes(label));
    if (projectCategory && (q.includes('project') || q.includes('work'))) {
      return formatProjectList(projects.filter(project => project.category === projectCategory[1]));
    }

    const matchingTechnologyProjects = projects.filter(project =>
      project.technologies.some(technology => q.includes(technology.toLowerCase()))
    );
    if (matchingTechnologyProjects.length && (q.includes('project') || q.includes('use') || q.includes('using'))) {
      return formatProjectList(matchingTechnologyProjects);
    }

    if (q.includes('project') || q.includes('portfolio') || q.includes('built')) {
      return formatProjectList(projects);
    }

    if (q.includes('certificat') || q.includes('credential') || q.includes('shapemyskills') || q.includes('simplilearn') || q.includes('great learning')) {
      return "Vansh's certifications:\n\n• Introduction to Data Analytics — Simplilearn, February 2026 (Credential ID: 9897137)\n  Credential: https://tinyurl.com/Vansh-Data-Analytics\n\n• Artificial Intelligence and Machine Learning using Python — ShapeMySkills Pvt. Ltd., July 2025 (Credential ID: SMSDUCAT2025 - 0312)\n  Credential: https://www.linkedin.com/posts/vansh-tanwar-382701249_certification-in-artificial-intelligence-activity-7364745206056792064--iQ3\n\n• SQL for Data Science — Great Learning, February 2026 (Credential ID: GAWWHOBH)\n  Credential: https://www.mygreatlearning.com/certificate/GAWWHOBH";
    }

    if (q.includes('intern') || q.includes('experience') || q.includes('work history') || q.includes('career') || q.includes('ibm')) {
      return "Vansh completed a six-week Data Analytics with AI internship with IBM SkillsBuild, AICTE, and BharatCares (August–September 2026).\n\n• Worked on end-to-end data processing, exploratory analysis, and AI integration\n• Cleaned and preprocessed datasets with 5,000+ rows using Python, reducing data inconsistencies by approximately 25%\n• Built Power BI dashboards that reduced reporting time by 40%";
    }

    if (q.includes('education') || q.includes('degree') || q.includes('study') || q.includes('college') || q.includes('cgpa') || q.includes('bca')) {
      return "Vansh completed a Bachelor of Computer Applications (BCA) from 2023 to 2026, graduating with an 8.15 CGPA.";
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('call') || q.includes('reach') || q.includes('linkedin') || q.includes('github') || q.includes('social')) {
      return "Contact details:\n\n• Email: vansh.tanwar09@gmail.com\n• Phone: +91 8076565847\n• Location: New Delhi, India\n• GitHub: https://github.com/VanshTanwar09\n• LinkedIn: https://www.linkedin.com/in/vanshtanwar09";
    }

    if (q.includes('skill') || q.includes('technolog') || q.includes('tool') || q.includes('stack') || q.includes('what does he know')) {
      return "Vansh's skills and tools include:\n\n• Python: Pandas, NumPy, Matplotlib\n• SQL and MySQL, including CASE WHEN and DENSE_RANK()\n• Power BI and DAX for interactive dashboards\n• Microsoft Excel: Pivot Tables, VLOOKUP, and XLOOKUP\n• Data cleaning, exploratory data analysis, and descriptive statistics\n• Git, GitHub, and Jupyter Notebook";
    }

    if (q.includes('available') || q.includes('opportunit') || q.includes('hire') || q.includes('role') || q.includes('job')) {
      return "Vansh is seeking an entry-level Data Analyst role and is open to professional opportunities and data-project collaborations.";
    }

    if (q.includes('lab') || q.includes('practical')) {
      return "Vansh's BCA practical files cover:\n\n• Python Programming\n• Artificial Intelligence\n• Machine Learning\n• Deep Learning\n• Java Programming\n• Internet of Things\n• Linux Operating System\n• Computer Graphics\n• C++ Programming\n• Software Engineering";
    }

    if (q.includes('language') || q.includes('speak')) {
      return 'Vansh speaks Hindi (native) and English (professional).';
    }

    if (q.includes('location') || q.includes('based') || q.includes('live')) {
      return 'Vansh is based in New Delhi, India.';
    }

    if (q.includes('everything') || q.includes('full profile') || q.includes('complete profile')) {
      return `Vansh Tanwar is a BCA graduate (8.15 CGPA, 2023–2026) based in New Delhi, India. He is seeking an entry-level Data Analyst role and speaks Hindi (native) and English (professional).\n\nEDUCATION\nBachelor of Computer Applications (BCA), 2023–2026 · 8.15 CGPA\n\nEXPERIENCE\nSix-week Data Analytics with AI internship with IBM SkillsBuild, AICTE, and BharatCares (August–September 2026). Processed datasets with 5,000+ rows using Python, reduced data inconsistencies by approximately 25%, and built Power BI dashboards that reduced reporting time by 40%.\n\nSKILLS\nPython (Pandas, NumPy, Matplotlib), SQL/MySQL, Power BI/DAX, Excel (Pivot Tables, VLOOKUP, XLOOKUP), data cleaning, exploratory analysis, descriptive statistics, Git, GitHub, and Jupyter Notebook.\n\nCERTIFICATIONS\nIntroduction to Data Analytics (Simplilearn, February 2026); Artificial Intelligence and Machine Learning using Python (ShapeMySkills, July 2025); SQL for Data Science (Great Learning, February 2026).\n\nPROJECTS\n${projects.map((project, index) => `${index + 1}. ${formatProject(project)}`).join('\n\n')}\n\nCONTACT\nEmail: vansh.tanwar09@gmail.com · Phone: +91 8076565847`;
    }

    if (q.includes('about') || q.includes('who') || q.includes('tell me') || q.includes('what does he do') || q.includes('what does vansh do') || q.includes('what can he do') || q.includes('profession')) {
      return "Vansh Tanwar is a BCA graduate (8.15 CGPA, 2023–2026) based in New Delhi, India. He is pursuing an entry-level Data Analyst role and has hands-on experience with data cleaning, exploratory analysis, and dashboard development.\n\nHe completed a six-week Data Analytics with AI internship with IBM SkillsBuild, AICTE, and BharatCares. His projects span retail and sales analytics, customer churn, machine learning, and computer vision. He speaks Hindi and English.";
    }

    return "I can answer questions about Vansh's background, education, internship, skills, projects, certifications, practical files, availability, and contact details. Ask for a specific project or topic to get the full details.";
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="ai-chat-launcher"
        aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'}
        aria-expanded={isOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="ai-chat-popup ai-assistant-container chat-widget-popup"
          >
            {/* Header */}
            <div className="chat-header ai-assistant-header">
              <div className="ai-chat-brand">
                <span className="ai-chat-brand-icon" aria-hidden="true">
                  <MessageCircle />
                </span>
                <div>
                  <h3>Portfolio Assistant</h3>
                  <p>Ask me about Vansh</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="chat-close-btn"
                aria-label="Close assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="chat-body chat-messages ai-chat-body">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`ai-message-row ${message.sender === 'user' ? 'ai-message-row--user' : 'ai-message-row--assistant'}`}
                >
                  <div
                    className={`ai-message ai-message--${message.sender === 'user' ? 'user' : 'assistant'} ${message.id === 1 && message.sender === 'ai' ? 'welcome-message ai-intro-text' : ''}`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="ai-chat-suggestions">
                <p className="try-asking-label">Try asking</p>
                <div className="ai-chat-suggestion-list">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSend(question)}
                      className="suggestion-chip quick-suggestion chat-suggestion-btn"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="ai-chat-composer">
              <div className="ai-chat-input">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about skills, projects..."
                  aria-label="Ask the portfolio assistant"
                  className="chat-input chat-input-field"
                />
                <button
                  onClick={() => handleSend()}
                  className="send-btn chat-send-button"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;