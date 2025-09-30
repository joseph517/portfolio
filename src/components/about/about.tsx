
import { motion } from 'framer-motion';
import './about.css';
import CV_ALVARO_VERGARA from '../../assets/documents/CV_ALVARO_VERGARA.pdf';

/**
 * About component.
 *
 * This component renders the about section of the website.
 *
 * It's composed of a title, a subtitle, and a paragraph with some text.
 * Also, it renders a button to download the CV.
 *
 * @returns The About component.
 */
function About() {

    const cv = CV_ALVARO_VERGARA;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section id="about" className="about-container">
            <div className="about-content pd-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 about-title"
                >
                    <h2 className="about-title fs-36 geist-font-bold mb-8">About Me</h2>
                    <div className="title-line mb-40"></div>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="about-content-" variants={itemVariants}>
                        <motion.h3
                            className="geist-font-bold text-primary fs-24 mb-16"
                            variants={itemVariants}
                        >
                            Web Developer based in{' '}
                            <span className="text-accent">Cartagena, Colombia</span>
                        </motion.h3>
                        <motion.p
                            className="geist-font-regular text-secondary fs-18 mb-24"
                            variants={itemVariants}
                        >
                            Available for remote work
                        </motion.p>
                        <motion.p
                            className="geist-font-regular text-card-foreground fs-16 mb-16"
                            variants={itemVariants}
                        >
                            I'm passionate about creating beautiful, functional, and user-friendly websites and applications. With a
                            strong foundation in both front-end and back-end development, I bring ideas to life with clean code and
                            modern technologies
                        </motion.p>
                        <motion.p
                            className="geist-font-regular text-popover fs-16 mb-24"
                            variants={itemVariants}
                        >
                            When I'm not coding, you can find me exploring new technologies, or enjoying outdoor activities.
                        </motion.p>
                        <motion.div className="about-info mb-24" variants={itemVariants}>
                            <div className="about-info-left">
                                <motion.p
                                    className="about-info-item fs-16 geist-font-regular"
                                    whileHover={{ x: 5, color: 'var(--accent)' }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <strong>Name:</strong> Alvaro Vergara
                                </motion.p>
                                <motion.p
                                    className="about-info-item fs-16 geist-font-regular"
                                    whileHover={{ x: 5, color: 'var(--accent)' }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <strong>Experience:</strong> 3 years
                                </motion.p>
                            </div>
                            <div className="about-info-right">
                                <motion.p
                                    className="about-info-item fs-16 geist-font-regular"
                                    whileHover={{ x: 5, color: 'var(--accent)' }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <strong>Email:</strong> alvarovergara1993@hotmail.com
                                </motion.p>
                                <motion.p
                                    className="about-info-item fs-16 geist-font-regular"
                                    whileHover={{ x: 5, color: 'var(--accent)' }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <strong>Location:</strong> Cartagena, Colombia
                                </motion.p>
                            </div>
                        </motion.div>
                        <motion.button
                            className="btn-primary fs-16"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href={cv} target="_blank" rel="noopener noreferrer" className="btn-primary-content" download>
                                Download CV
                            </a>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
