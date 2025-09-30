import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AlvaroVergara from '../../assets/AlvaroVergara.jpg';
import './home.css';

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const logo = AlvaroVergara;
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="home" className="home-container" ref={containerRef}>
      <motion.div
        className="home-content pd-32 mg-16"
        style={{ y, opacity }}
      >
        <motion.div
          className="home-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="home-left-content mb-40">
            <motion.h1
              className={
                'home-title ' +
                (isMobile ? 'fs-36 geist-font-bold' : 'fs-60 geist-font-bold')
              }
              variants={itemVariants}
            >
              <span className="text-primary">Hello I'm </span>
              <br />
              <div className="type-writer-container">
                <span className="text-accent type-writer">
                  Alvaro Vergara
                </span>
              </div>
            </motion.h1>
            <motion.h2
              className="mb-16 text-secondary fs-24 geist-font-medium"
              variants={itemVariants}
            >
              Web Developer
            </motion.h2>
            <motion.p
              className="home-description mb-32 fs-18 geist-font-regular"
              variants={itemVariants}
            >
              I build exceptional and accessible digital experiences for the
              web.
            </motion.p>
            <motion.div
              className="home-links fs-16 geist-font-medium"
              variants={itemVariants}
            >
              <motion.a
                className="home-link"
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: '24px', height: '24px' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.a>
              <motion.a
                className="home-link"
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="home-right"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <div className="home-right-content">
            <div className="img-container">
              <motion.img
                className="img-home"
                src={logo}
                alt="Developer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
