import { motion } from "framer-motion"
import './about.css'

function About() {
    return (
        <>
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
                        <div className="about-title-line mb-40"></div>
                    </motion.div>
                    <div>
                        {/* <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="md:w-1/2 mb-8 md:mb-0"
                        >
                            <div>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                        </motion.div> */}

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="about-content-"
                        >
                            <h3 className="geist-font-bold text-primary fs-24  mb-16">
                                Web Developer based in
                                <span className="text-accent "> Cartagena, Colombia</span>
                            </h3>
                            <p className="geist-font-regular text-secondary fs-18 mb-24">Available for remote work</p>
                            <p className="geist-font-regular text-card-foreground fs-16 mb-16">
                                I'm passionate about creating beautiful, functional, and user-friendly websites and applications. With a
                                strong foundation in both front-end and back-end development, I bring ideas to life with clean code and
                                modern technologies
                            </p>
                            <p className="geist-font-regular text-popover fs-16 mb-24">
                                When I'm not coding, you can find me exploring new technologies, or enjoying outdoor activities.
                            </p>
                            <div className="about-info mb-24">
                                <div className="about-info-left">
                                    <p className="about-info-item fs-16 geist-font-regular">
                                        <strong>Name: </strong>
                                        Alvaro Vergara
                                    </p>
                                    <p className="about-info-item fs-16 geist-font-regular">
                                        <strong>Experience: </strong>
                                        3 years
                                    </p>
                                </div>
                                <div className="about-info-right">
                                    <p className="about-info-item fs-16 geist-font-regular">
                                        <strong>Email: </strong>
                                        alvarovergara1993@hotmail.com
                                    </p>
                                    <p className="about-info-item fs-16 geist-font-regular">
                                        <strong>Location: </strong>
                                        Cartagena, Colombia
                                    </p>
                                </div>
                            </div>
                            <button className="btn-primary fs-16">
                                <a href="#" download>
                                    Download CV
                                </a>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About