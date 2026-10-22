import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Heart,
} from "lucide-react";

import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
       {/* Footer Main */}
        <div className="footer-main">
          <div className="footer-brand-column">
            <Link to="/" className="footer-brand">
              <span className="footer-brand-mark">
                <Code2 size={21} />
              </span>

              <span>
                NENSI<span className="footer-brand-dot">.</span>
              </span>
            </Link>

            <p className="footer-tagline">
              Frontend developer crafting clean,
              thoughtful and user-friendly web experiences.
            </p>

            <a
              className="footer-github"
              href="https://github.com/nensi-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 size={17} />
              <span>Explore my GitHub</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Explore Links */}
          <div className="footer-column">
            <h3>EXPLORE</h3>

            <Link to="/" className="footer-link">
              <span>Home</span>
              <ArrowUpRight size={14} />
            </Link>

            <Link to="/work" className="footer-link">
              <span>My Projects</span>
              <ArrowUpRight size={14} />
            </Link>

            <Link to="/about" className="footer-link">
              <span>About Me</span>
              <ArrowUpRight size={14} />
            </Link>

            <Link to="/services" className="footer-link">
              <span>Services</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Contact */}
          <div className="footer-column footer-connect">
            <h3>LET'S CONNECT</h3>

            <p>
              Looking for a frontend developer for your next project?
              Let's discuss your ideas.
            </p>

            <Link to="/contact" className="footer-connect-link">
              Get in touch
              <ArrowRight size={16} />
            </Link>

            <span className="footer-availability">
              <span className="footer-availability-dot" />
              Open to new opportunities
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} Nensi Mangroliya. All rights reserved.
          </p>

          <p className="footer-made">
            Designed & built with
            <Heart size={13} fill="currentColor" />
          </p>

          <button
            type="button"
            className="footer-back-top"
            onClick={scrollToTop}
          >
            Back to top
            <span>
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
