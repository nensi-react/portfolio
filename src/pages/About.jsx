import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
  MonitorSmartphone,
  Palette,
  GitBranch,
  GitFork,
} from "lucide-react";

import "./About.css";

const skills = [
  {
    number: "01",
    name: "React.js",
    icon: Code2,
    detail: "Component-based UI",
  },
  {
    number: "02",
    name: "JavaScript",
    icon: Code2,
    detail: "Interactive experiences",
  },
  {
    number: "03",
    name: "HTML5",
    icon: Layers3,
    detail: "Semantic structure",
  },
  {
    number: "04",
    name: "CSS3",
    icon: Palette,
    detail: "Modern styling",
  },
  {
    number: "05",
    name: "Material UI",
    icon: Layers3,
    detail: "Reusable components",
  },
  {
    number: "06",
    name: "Responsive Design",
    icon: MonitorSmartphone,
    detail: "Mobile to desktop",
  },
  {
    number: "07",
    name: "Git",
    icon: GitBranch,
    detail: "Version control",
  },
  {
    number: "08",
    name: "GitHub",
    icon: GitFork,
    detail: "Code & repositories",
  },
];

const principles = [
  { number: "01", title: "Keep it simple" },
  { number: "02", title: "Build with purpose" },
  { number: "03", title: "Keep improving" },
];

export default function About() {
  return (
    <main className="about-page">
      <div className="container about-container">
        {/* HERO SECTION */}
        <section className="about-hero">
          <div className="about-hero-copy">
            <p className="eyebrow">
              <span className="about-status-dot" />
              ABOUT ME
            </p>

            <h1>
              Hello, I'm Nensi
              <span className="about-period">.</span>
              <br />
              I build for the{" "}
              <span className="about-highlight">web.</span>
            </h1>

            <p className="about-intro">
              I'm a frontend developer in the making, building clean,
              responsive and user-friendly websites with React and modern
              web technologies.
            </p>

            <div className="about-hero-actions">
              <Link to="/work" className="about-primary-button">
                Explore my work
                <ArrowUpRight size={16} />
              </Link>

              <Link to="/contact" className="about-text-link">
                Let's talk
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="about-mini-note">
              <Sparkles size={15} />
              <span>Always learning. Always building.</span>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="about-visual">
            <div className="about-visual-top">
              <span>PERSONAL PROFILE</span>
              <span className="about-visual-index">01 / 04</span>
            </div>

            <div className="about-visual-center">
              <div className="about-orbit about-orbit-one" />
              <div className="about-orbit about-orbit-two" />

              <div className="about-visual-circle">
                <img
                  src="/nensi.png"
                  alt="Nensi Mangroliya"
                  className="about-profile-photo"
                />
              </div>

              <span className="about-float-tag about-tag-react">
                React.js
              </span>

              <span className="about-float-tag about-tag-ui">
                UI Development
              </span>

              <span className="about-float-tag about-tag-code">
                {"</>"}
              </span>
            </div>

            <div className="about-visual-bottom">
              <div>
                <strong>NENSI MANGROLIYA</strong>
                <span>Frontend Developer</span>
              </div>

              <span className="about-available">
                <i />
                OPEN TO PROJECTS
              </span>
            </div>
          </div>
        </section>

        {/* MY APPROACH */}
        <section className="about-content-grid">
          <div className="about-section-heading">
            <p className="eyebrow">MY APPROACH / 01</p>

            <h2 className="section-title">
              Curious by nature.
              <br />
              <span>Creative by code.</span>
            </h2>
          </div>

          <div className="about-story">
            <p>
              I enjoy building websites that look polished, feel intuitive
              and work smoothly across different screen sizes. I believe
              good frontend development brings design and functionality
              together.
            </p>

            <p>
              I practise my skills through hands-on projects, including
              movie applications, dashboards and business websites. Each
              project helps me strengthen my React, CSS and problem-solving
              skills.
            </p>

            <p>
              My goal is to keep improving and create useful digital
              experiences that help businesses connect with their customers.
            </p>

            <div className="about-principles">
              {principles.map((item) => (
                <div key={item.number}>
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section">
          <div className="skills-heading-row">
            <div>
              <p className="eyebrow">
                TOOLS & TECHNOLOGIES / 02
              </p>

              <h2 className="section-title">
                My creative toolkit<span>.</span>
              </h2>
            </div>

            <p className="skills-description">
              Technologies I use and practise to create modern web
              experiences.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map(({ number, name, icon: Icon, detail }) => (
              <div className="skill-item" key={name}>
                <span className="skill-number">{number}</span>

                <div className="skill-icon">
                  <Icon size={17} strokeWidth={1.8} />
                </div>

                <div className="skill-info">
                  <strong>{name}</strong>
                  <span>{detail}</span>
                </div>

                <ArrowUpRight
                  className="skill-arrow"
                  size={16}
                />
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="about-cta">
          <div className="about-cta-symbol">
            <Sparkles size={21} />
          </div>

          <div className="about-cta-copy">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

            <h2>Let's build something great.</h2>

            <p>
              Have an idea for a website or React application? I'd love
              to hear about it.
            </p>
          </div>

          <Link to="/contact" className="about-cta-button">
            Start a conversation
            <ArrowUpRight size={15} />
          </Link>

          <div className="about-cta-decoration" aria-hidden="true">
            N.
          </div>
        </section>
      </div>
    </main>
  );
}
