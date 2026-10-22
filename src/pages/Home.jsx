import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  CheckCircle2,
  Monitor,
  Smartphone,
  Palette,
} from "lucide-react";

import projects from "../data/projects";
import "./Home.css";

const featuredProjects = projects.slice(0, 4);

const skills = [
  "React.js",
  "JavaScript",
  "HTML & CSS",
  "Responsive Design",
  "Material UI",
  "Git & GitHub",
];

const services = [
  {
    number: "01",
    title: "React Website Development",
    description: "Modern websites with reusable components and clean code.",
    icon: Code2,
  },
  {
    number: "02",
    title: "UI Implementation",
    description: "Polished interfaces built with attention to visual details.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Responsive Design",
    description: "Layouts that adapt smoothly to mobile, tablet and desktop.",
    icon: Smartphone,
  },
  {
    number: "04",
    title: "Frontend Development",
    description: "Interactive web experiences focused on usability.",
    icon: Monitor,
  },
];

export default function Home() {
  return (
    <main className="portfolio-home" id="home">
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <div className="hero-availability">
              <span className="availability-dot" />
              AVAILABLE FOR PROJECTS
              <span className="availability-divider">/</span>
              PORTFOLIO 2026
            </div>

            <p className="hero-eyebrow">Hello, I’m Nensi Mangroliya</p>

            <h1>
              Thoughtful design.
              <br />
              <span>Powerful React</span>
              <br />
              experiences.
            </h1>

            <p className="hero-description">
              I build modern, responsive websites with React, clean
              interfaces and useful features. My focus is making websites
              look professional and feel easy to use.
            </p>

            <div className="hero-actions">
              <a href="#work" className="button-primary">
                Explore my work <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="button-secondary">
                Let’s connect <ArrowRight size={15} />
              </a>
            </div>

            <div className="hero-trust-row">
              <CheckCircle2 size={16} />
              <span>Clean code</span>
              <i>·</i>
              <span>Thoughtful UI</span>
              <i>·</i>
              <span>Responsive layouts</span>
            </div>

            <div className="hero-mini-stats">
              <div>
                <strong>React.js</strong>
                <span>Frontend development</span>
              </div>
              <div>
                <strong>UI focused</strong>
                <span>Careful design details</span>
              </div>
            </div>
          </div>

          <div className="home-hero-visual">
            <div className="hero-visual-label">
              <span>THE DEVELOPER</span>
              <span>01 — 04</span>
            </div>

            <div className="hero-profile-stage">
              <div className="profile-stage-grid" />

              <div className="profile-photo-frame">
                <div className="profile-photo-inner">
                  <img
                    src="/nensi.png"
                    alt="Nensi Mangroliya"
                  />
                </div>
              </div>

              <div className="profile-floating-card profile-react-card">
                <span className="floating-icon">
                  <Code2 size={17} />
                </span>
                <span>
                  <strong>React.js</strong>
                  <small>Frontend development</small>
                </span>
              </div>

              <div className="profile-name-card">
                <span className="profile-name-avatar">N.</span>
                <span>
                  <strong>Nensi Mangroliya</strong>
                  <small>Frontend Developer</small>
                </span>
              </div>

              <span className="profile-caption">
                BUILT WITH CURIOSITY
              </span>
            </div>
          </div>
        </div>

        <a href="#expertise" className="hero-scroll">
          SCROLL TO EXPLORE <ArrowDownRight size={15} />
        </a>
      </section>

      {/* SKILLS */}
      <section className="expertise-section" id="expertise">
        <div className="section-overline">
          <span>01</span>
          <span>MY TOOLKIT</span>
        </div>

        <div className="expertise-content">
          <div className="expertise-intro">
            <p className="section-kicker">WHAT I WORK WITH</p>
            <h2>
              Tools for turning
              <br />
              ideas into <span>reality.</span>
            </h2>
            <p className="section-description">
              The technologies I use to create modern and user-friendly
              web experiences.
            </p>
          </div>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <span className="skill-pill" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="home-projects-section" id="work">
        <div className="section-overline">
          <span>02</span>
          <span>SELECTED PROJECTS</span>
        </div>

        <div className="section-heading-row">
          <div>
            <p className="section-kicker">A FEW THINGS I’VE BUILT</p>
            <h2 className="section-heading">
              Work that speaks
              <br />
              <span>for itself.</span>
            </h2>
          </div>

          <p className="section-description project-intro-description">
            A selection of React projects built around useful features,
            clear layouts and smooth user experiences.
          </p>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="home-projects-grid">
            {featuredProjects.map((project, index) => (
              <article
                className="home-project-card"
                key={project.path || project.title}
              >
                <Link
                  to={project.path}
                  className="project-image-link"
                  aria-label={`View ${project.title}`}
                >
                  <div className="project-image-wrap">
                    <div className="project-image-top">
                      <span>
                        PROJECT / {String(index + 1).padStart(2, "0")}
                      </span>
                      <ArrowUpRight size={17} />
                    </div>

                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                    />

                    <span className="project-image-bottom">
                      VIEW PROJECT <ArrowUpRight size={13} />
                    </span>
                  </div>
                </Link>

                <div className="project-card-details">
                  <div>
                    <span className="project-category">
                      SELECTED WORK · {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{project.title}</h3>
                  </div>

                  <Link
                    to={project.path}
                    className="project-arrow"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-projects">
            Add projects to src/data/projects.js to display them here.
          </p>
        )}
      </section>

      {/* ABOUT */}
      <section className="home-about-section" id="about">
        <div className="section-overline">
          <span>04</span>
          <span>A LITTLE ABOUT ME</span>
        </div>

        <div className="about-layout">
          <div className="about-monogram-panel">
            <div className="about-panel-grid" />

            <span className="about-panel-label">
              A CREATIVE DEVELOPER
            </span>

            <div className="about-photo-frame">
              <div className="about-photo-inner">
                <img
                  src="/nensi.png"
                  alt="Nensi Mangroliya"
                  loading="lazy"
                />
              </div>
            </div>

            <span className="about-photo-tag">
              <span className="about-tag-dot" />
              DESIGN WITH INTENTION
            </span>
          </div>

          <div className="about-copy">
            <p className="section-kicker">THE PERSON BEHIND THE CODE</p>

            <h2>
              Building with
              <br />
              <span>curiosity & purpose.</span>
            </h2>

            <p>
              I’m Nensi, a frontend developer who enjoys creating
              attractive and easy-to-use websites. I like learning new
              technologies, solving problems and improving the small
              details that make a website feel complete.
            </p>

            <p>
              My goal is to build digital experiences that combine
              thoughtful design, practical features and responsive layouts.
            </p>

            <div className="about-highlights">
              <div>
                <CheckCircle2 size={15} />
                <span>Responsive web design</span>
              </div>
              <div>
                <CheckCircle2 size={15} />
                <span>Reusable React components</span>
              </div>
              <div>
                <CheckCircle2 size={15} />
                <span>User-friendly interfaces</span>
              </div>
            </div>

            <div className="about-signature">
              <span className="signature-mark">N.</span>
              <span>
                <strong>Nensi Mangroliya</strong>
                <small>Frontend Developer</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="home-contact-section" id="contact">
        <div className="contact-panel">
          <div className="contact-panel-top">
            <span>LET’S WORK TOGETHER</span>
            <span>AVAILABLE FOR PROJECTS</span>
          </div>

          <div className="contact-panel-content">
            <p className="contact-kicker">HAVE A PROJECT IN MIND?</p>
            <h2>
              Let’s build your
              <br />
              <span>next great idea.</span>
            </h2>
            <p className="contact-description">
              Have an idea for a website? Let’s discuss your project
              and turn it into a clean, responsive experience.
            </p>

            <Link to="/contact" className="contact-button">
              Get in touch <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="contact-panel-bottom">
            <span>DESIGNED WITH CARE</span>
            <span>DEVELOPED WITH REACT</span>
          </div>
        </div>
      </section>

      
    </main>
  );
}
