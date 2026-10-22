import { ArrowRight } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner container">
        <div className="hero-copy">
          <span className="eyebrow">👋 Hello, I'm</span>

          <h1>
            Nensi <span>Mangroliya</span>
          </h1>

          <h2>React Developer</h2>

          <p>
            I build modern, responsive and user-friendly web
            applications that help turn ideas into clean,
            useful digital experiences.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Projects <ArrowRight size={16} />
            </a>

            <a className="btn btn-outline" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/nensi-react"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GitHub ↗
            </a>

            <a href="#contact" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="#contact" aria-label="Instagram">
              Instagram
            </a>

            <a href="mailto:YOUR_EMAIL@example.com" aria-label="Email">
              Email
            </a>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-blob"></div>

          <div className="hero-initials">
            N<span>.</span>
          </div>

          <div className="floating-card">
            <strong>Frontend Developer</strong>
            <span>React · JavaScript · CSS</span>
            <span>Responsive UI</span>
          </div>

          <div className="hero-note">
            Code
            <br />
            Create
            <br />
            Impact
            <span>〰</span>
          </div>
        </div>
      </div>
    </section>
  );
}
