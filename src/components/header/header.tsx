import "./header.css"
import { useState, useEffect } from "react";
import {  Menu, X } from "lucide-react"


function Header() {

  const sections = ["home", "about", "skills", "projects", "contact"]

  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (!isMobile) setMobileMenuOpen(false)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-content fs-24">
          <a className="nav-logo geist-font-bold" href="#home">
            <span className="nav-logo-text">Dev</span>AlvaroVergara
          </a>
          {/* Navigation Desktop */}
          {!isMobile && (
            <div className="md-hidden nav-desktop-menu">
              {sections.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`fs-16 geist-font-medium capitalize transition-colors ${activeSection === item ? "text-accent" : "hover:text-accent/80"
                    }`}
                >
                  {item}
                </a>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button className="menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          )}

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="mobile-menu pd-16">
              <div className="mobile-menu-content">
                {sections.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`fs-16 hg-24 geist-font-medium capitalize transition-colors ${activeSection === item ? "text-accent" : "hover:text-accent/80"
                      }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>
      </nav >
    </>
  );
}

export default Header;
