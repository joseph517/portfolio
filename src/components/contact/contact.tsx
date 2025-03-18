import { motion } from "framer-motion";
import "./contact.css";
import {
  ArrowRight,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  User,
} from "lucide-react";

function Contact() {

  const linkedin = "https://www.linkedin.com/in/dev-alvaro-jose-vergara-garcia/"
  const github = "https://github.com/joseph517"

  return (
    <>
      <section id="contact" className="contact-container pd-16 pb-80 pt-80">
        <div className="contact-content pd-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-title mb-48"
          >
            <h2 className="fs-30 geist-font-bold mb-8">Get In Touch</h2>
            <div className="title-line mb-16"></div>
            <p className="fs-16 geist-font-medium">
              Have a project in mind or want to discuss potencial opportunites?
              Feel free to reach out!
            </p>
          </motion.div>
          <div className="contact-info">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="contact-info-container"
            >
              <div className="contact-info-content pd-16">
                <h3 className="fs-20 geist-font-bold mb-24 text-primary">
                  Contact Information
                </h3>
                {/* Email */}
                <div className="contact-info-item mb-24">
                  <div className="contact-info-icon mr-16 pd-10">
                    <Mail className="w-20 h-20" />
                  </div>
                  <div className="contact-info-text">
                    <h4 className="fs-16 geist-font-medium text-muted">
                      Email
                    </h4>
                    <p className="fs-16 geist-font-medium text-muted-foreground">
                      alvarovergara1993@hotmail.com
                    </p>
                  </div>
                </div>

                <div className="contact-info-item mb-24">
                  <div className="contact-info-icon mr-16 pd-10">
                    <User className="w-20 h-20" />
                  </div>
                  <div className="contact-info-text">
                    <h4 className="fs-16 geist-font-medium text-muted">
                      Location
                    </h4>
                    <p className="fs-16 geist-font-medium text-muted-foreground">
                      Cartagena, Colombia
                    </p>
                  </div>
                </div>

                <div className="contact-info-item mb-32">
                  <div className="contact-info-icon mr-16 pd-10">
                    <Briefcase className="w-20 h-20" />
                  </div>
                  <div className="contact-info-text">
                    <h4 className="fs-16 geist-font-medium text-muted">
                      Work Inquiries
                    </h4>
                    <p className="fs-16 geist-font-medium text-muted-foreground">
                      Open for freelance anda full-time positions
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="fs-16 geist-font-bold mb-16 text-primary">
                    Social Profiles
                  </h4>
                  <div className="social-media-icons">
                    <a
                      className="social-media-icon pd-10 mr-16"
                      href={github}
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <Github className="w-20 h-20" />
                    </a>
                    <a
                      className="social-media-icon pd-10"
                      href={linkedin}
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-20 h-20" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Send Message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="send-message-container"
            >
              <div className="contact-info-content pd-16">
                <h3 className="fs-20 geist-font-bold mb-24 text-primary">
                  Send Me a Message
                </h3>
                <form className="contact-form">
                  <div className="contact-form-inputs">
                    <div className="mb-24">
                      <label className="fs-14 geist-font-medium text-muted" htmlFor="name">Your Name</label>
                      <input
                        className="fs-12 geist-font-medium text-muted-foreground mt-8 pd-12 contact-form-input"
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="mb-24">
                      <label className="fs-14 geist-font-medium text-muted" htmlFor="email">Your Email</label>
                      <input
                        className="fs-12 geist-font-medium text-muted-foreground mt-8 pd-12 contact-form-input"
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form-inputs-2 mb-24">
                    <label className="fs-14 geist-font-medium text-muted" htmlFor="subject">Subject</label>
                    <input
                      className="fs-12 geist-font-medium text-muted-foreground mt-8 pd-12 contact-form-input"
                      type="text"
                      id="subject"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  <div className="contact-form-inputs-2 mb-24">
                    <label className="fs-14 geist-font-medium text-muted" htmlFor="message">Message</label>
                    <textarea
                      className="fs-12 geist-font-medium text-muted-foreground mt-8 pd-12 contact-form-input mh-100 mw-350"
                      id="message"
                      rows={5}
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  <button className="btn-primary">
                    Send Message <ArrowRight />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
