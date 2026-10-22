import {
  Code2,
  Palette,
  Lightbulb,
  MonitorSmartphone,
  ArrowUpRight,
} from "lucide-react";

import "./About.css";

const strengths = [
  {
    icon: Code2,
    title: "Frontend Development",
    text: "React, JavaScript, HTML and CSS",
  },
  {
    icon: Palette,
    title: "Clean UI Design",
    text: "Simple, modern interfaces",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Layouts",
    text: "Mobile-friendly experiences",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    text: "Learning and improving with every project",
  },
];

const skills = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Material UI",
  "Git & GitHub",
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Profile and Introduction */}
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-image-card">
           <div
  style={{
    width: "300px",
    height: "350px",
    border: "2px solid red",
    margin: "20px auto",
  }}
>
  <img
    src="/nensi.png"
    alt="Nensi"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</div>

              <div className="about-image-label">
                <span className="about-status-dot" />
                <span>FRONTEND DEVELOPER</span>
              </div>

              <span
                className="about-image-decoration"
                aria-hidden="true"
              >
                ✳
              </span>
            </div>

            <div className="about-image-caption">
              <span>DESIGN WITH INTENTION.</span>
              <span>BUILD WITH PURPOSE.</span>
            </div>
          </div>

          <div className="about-copy">
            <span className="eyebrow">A LITTLE ABOUT ME</span>

            <h2 className="section-heading">
              Hi, I'm Nensi.
              <br />
              I build <span>digital experiences.</span>
            </h2>

            <p className="section-description">
              I'm a React developer who enjoys building
              clean, responsive websites and practical web
              applications. I love learning new technologies
              and turning ideas into useful digital experiences.
            </p>

            <div className="about-stats">
              <div>
                <strong>React</strong>
                <span>Development</span>
              </div>

              <div>
                <strong>UI/UX</strong>
                <span>Design Focus</span>
              </div>

              <div>
                <strong>Web</strong>
                <span>Experiences</span>
              </div>
            </div>

            <a className="btn btn-outline" href="#contact">
              Let's Connect
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Skills and Strengths */}
        <div className="strengths-card" id="skills">
          <div className="skills-panel">
            <span className="skills-kicker">MY TOOLKIT</span>
            <h3>Technologies I use</h3>

            <div className="skills-list">
              {skills.map((skill) => (
                <span className="skill-chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="strengths-list">
            <span className="skills-kicker">WHAT I DO</span>
            <h3>My Core Strengths</h3>

            {strengths.map(({ icon: Icon, title, text }) => (
              <div className="strength-row" key={title}>
                <span className="strength-icon">
                  <Icon size={20} />
                </span>

                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
