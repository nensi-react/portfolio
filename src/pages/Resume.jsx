import React from "react";
import "./Resume.css";

const Resume = () => {
  const projects = [
    {
      name: "Client Management System",
      tag: "REACT PROJECT",
      tech: "React.js · JavaScript · CSS",
      points: [
        "Developed a client management interface to organize client information and records.",
        "Focused on reusable React components and a user-friendly layout.",
      ],
    },
    {
      name: "Luxury E-commerce Website",
      tag: "WEB PROJECT",
      tech: "React.js · JavaScript · CSS",
      points: [
        "Designed a modern e-commerce website with a premium shopping experience.",
        "Focused on product presentation, page styling and responsive design.",
      ],
    },
    {
      name: "Restaurant POS",
      tag: "POS PROJECT",
      tech: "React.js · JavaScript · CSS",
      points: [
        "Created a restaurant POS interface for organizing orders and order information.",
        "Focused on a clean dashboard layout and easy-to-use interface.",
      ],
    },
    {
      name: "TaskFlow-Project-Planner",
      tag: "PRODUCTIVITY PROJECT",
      tech: "React.js · JavaScript · CSS",
      points: [
        "Designed a project planner to organize tasks and track project progress.",
        "Focused on structured task sections and a responsive user interface.",
      ],
    },
  ];

  const skills = [
    {
      title: "Languages",
      items: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Frontend",
      items: ["React.js", "React Hooks", "React Router"],
    },
    {
      title: "UI Library",
      items: ["Material UI (MUI)"],
    },
    {
      title: "Tools",
      items: ["VS Code", "Git", "GitHub", "npm", "Vite"],
    },
    {
      title: "Concepts",
      items: ["Responsive Design", "Components", "Props", "State"],
    },
  ];

  const handleDownload = () => window.print();

  return (
    <main className="resume-page">
      <div className="resume-toolbar">
        <span>PROFESSIONAL RESUME</span>
        <button onClick={handleDownload}>
          Download / Save as PDF ↓
        </button>
      </div>

      <article className="resume-paper">
        <header className="resume-header">
          <span className="eyebrow">FRONTEND DEVELOPER</span>

          <h1>
            NENSI <span>MANGROLIYA</span>
          </h1>

          <h2>React.js Developer | Frontend Developer</h2>

          <div className="contact-grid">
            <p>
              <span className="contact-icon">●</span>
              Chital, Amreli, Gujarat, India
            </p>

            <p>
              <span className="contact-icon">☎</span>
              8849409456
            </p>

            <p>
              <span className="contact-icon">✉</span>
              nensimangroliya29@gmail.com
            </p>

            <p>
              <span className="contact-icon">◉</span>
              GitHub:{" "}
              <a
                href="https://github.com/nensi-react"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub Profile
              </a>
            </p>

            <p>
              <span className="contact-icon">↗</span>
              Portfolio: <a href="https://portfolio-khaki-psi-mu2brpaxdq.vercel.app/">Add your live website link</a>
            </p>
          </div>
        </header>

        <div className="resume-columns">
          <div className="resume-left">
            <section className="resume-section summary-section">
              <h3>
                <span className="section-number">01</span>
                PROFESSIONAL SUMMARY
              </h3>

              <p className="summary-text">
                BCA graduate seeking an entry-level Frontend Developer
                or React.js Developer role. Knowledge of HTML, CSS,
                JavaScript and React.js, with practical experience
                building personal projects. Interested in developing
                responsive, user-friendly web applications and growing
                as a software developer.
              </p>
            </section>

            <section className="resume-section projects-section">
              <h3>
                <span className="section-number">03</span>
                PROJECTS
              </h3>

              {projects.map((project) => (
                <div className="project-item" key={project.name}>
                  <div className="project-heading">
                    <h4>{project.name}</h4>
                    <span className="project-tag">{project.tag}</span>
                  </div>

                  <p className="project-tech">{project.tech}</p>

                  <ul>
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <p className="project-link">
                    <strong>GitHub:</strong>{" "}
                    <a
                      href="https://github.com/nensi-react"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Add repository link after upload
                    </a>
                  </p>
                </div>
              ))}
            </section>
          </div>

          <aside className="resume-right">
            <section className="resume-section skills-section">
              <h3>
                <span className="section-number">02</span>
                TECHNICAL SKILLS
              </h3>

              {skills.map((skill) => (
                <div className="skill-row" key={skill.title}>
                  <strong>{skill.title}</strong>

                  <div className="skill-pills">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="resume-section education-section">
              <h3>
                <span className="section-number">04</span>
                EDUCATION
              </h3>

              <div className="education-content">
                <h4>Bachelor of Computer Applications (BCA)</h4>

                <p className="college-name">
                  Hariben Bhagvanji Lalji Tejura Mahila College,
                  Chalala, Gujarat
                </p>

                <div className="education-detail">
                  <span className="detail-icon">◆</span>
                  <span>Graduated: 2026</span>
                </div>

                <div className="education-detail">
                  <span className="detail-icon">%</span>
                  <span>Aggregate: 84.46%</span>
                </div>

                <div className="education-detail">
                  <span className="detail-icon">★</span>
                  <span>Final CGPA: 8.52 / 10</span>
                </div>

                <div className="education-detail">
                  <span className="detail-icon">✦</span>
                  <span>First Distinction</span>
                </div>
              </div>
            </section>

            <section className="resume-section additional-section">
              <h3>
                <span className="section-number">05</span>
                ADDITIONAL INFO
              </h3>

              <div className="additional-detail">
                <span className="detail-icon">▣</span>
                <p>
                  <strong>Career Level:</strong> Fresher
                </p>
              </div>

              <div className="additional-detail">
                <span className="detail-icon">◎</span>
                <p>
                  <strong>Languages:</strong> Gujarati, Hindi, English
                </p>
              </div>
            </section>
          </aside>
        </div>

        <footer className="resume-footer">
          NENSI MANGROLIYA <span>•</span> FRONTEND DEVELOPER
        </footer>
      </article>
    </main>
  );
};

export default Resume;