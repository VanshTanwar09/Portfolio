import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Lab Work', path: '/lab-work' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full border-b border-[var(--card-border)] backdrop-blur-md transition-all duration-300"
      style={{
        backgroundColor: theme === 'dark'
          ? 'rgba(16, 13, 36, 0.92)'
          : 'rgba(237, 233, 248, 0.92)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="navbar-logo text-2xl font-bold">
            Vansh Tanwar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 transition-colors duration-300 hover:text-accent ${
                  location.pathname === item.path ? 'text-accent' : 'text-text-primary'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle mobile navigation"
              className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <motion.div
                animate={isOpen ? { rotate: 180, scale: 1.1 } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
className="fixed inset-0 md:hidden"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 40 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile dropdown panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
              className="fixed inset-x-0 top-16 z-50 flex w-full flex-col gap-4 border-b border-[var(--card-border)] p-6 shadow-lg backdrop-blur-lg md:hidden"
              style={{
                backgroundColor: theme === 'dark'
                  ? 'rgba(16, 13, 36, 0.98)'
                  : 'rgba(237, 233, 248, 0.98)',
              }}
              id="mobile-menu"
              role="menu"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`w-full rounded-lg px-4 py-3 font-medium transition-colors hover:bg-accent/10 ${
                    location.pathname === item.path
                      ? 'bg-accent/15 text-accent font-semibold'
                      : 'text-text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
