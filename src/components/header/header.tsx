
import './header.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Header() {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Update scrolled state for backdrop effect
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (!isMobile) setMobileMenuOpen(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  });

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
      {/* Navigation */}
      <motion.nav
        className={`nav-container ${scrolled ? 'scrolled' : ''}`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="nav-content fs-24">
          <motion.a
            className="nav-logo geist-font-bold"
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="nav-logo-text">Dev</span>AlvaroVergara
          </motion.a>

          {/* Navigation Desktop */}
          {!isMobile && (
            <div className="md-hidden nav-desktop-menu">
              {sections.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className={`nav-item fs-16 geist-font-medium capitalize transition-colors ${
                    activeSection === item ? 'text-accent active' : ''
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                  {activeSection === item && (
                    <motion.div
                      className="nav-indicator"
                      layoutId="nav-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <motion.button
              className="menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="mobile-menu pd-16"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="mobile-menu-content">
                  {sections.map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item}`}
                      className={`fs-16 hg-24 geist-font-medium capitalize transition-colors ${
                        activeSection === item ? 'text-accent' : ''
                      }`}
                      variants={mobileItemVariants}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}

export default Header;
