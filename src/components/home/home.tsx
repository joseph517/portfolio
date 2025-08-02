import { useEffect, useState } from 'react';
import AlvaroVergara from '../../assets/AlvaroVergara.jpg';
import './home.css';

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const logo = AlvaroVergara;

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

  return (
    <section id="home" className="home-container">
      <div className="home-content pd-32 mg-16">
        <div className="home-left">
          <div className="home-left-content mb-40">
            <h1
              className={
                'home-title ' +
                (isMobile ? 'fs-36 geist-font-bold' : 'fs-60 geist-font-bold')
              }
            >
              <span className="text-primary">Hello I'm </span>
              <br />
              <div className="type-writer-container">
                <span className="text-accent type-writer">
                  Alvaro Vergara
                </span>
              </div>
            </h1>
            <h2 className="mb-16 text-secondary fs-24 geist-font-medium">
              Web Developer
            </h2>
            <p className="home-description mb-32 fs-18 geist-font-regular">
              I build exceptional and accessible digital experiences for the
              web.
            </p>
            <div className="home-links fs-16 geist-font-medium">
              <a className="home-link" href="#contact">
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
              </a>
              <a className="home-link" href="#projects">
                View Projects
              </a>
            </div>
          </div>
        </div>
        <div className="home-right">
          <div className="home-right-content">
            <div className="img-container">
              <img className="img-home" src={logo} alt="Developer" />
            </div>
            <div className="home-footer">
              <svg
                className="home-footer-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span className="pl-25 fs-16 geist-font-medium">Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
