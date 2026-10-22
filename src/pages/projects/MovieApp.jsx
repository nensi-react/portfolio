import { Link } from "react-router-dom";
import projects from "../../data/projects";
import "./ProjectDetails.css";

export default function MovieApp() {
  const project = projects.find((item) => item.id === "movie-app");

  return (
    <section className="project-detail">
      <div className="container">
        <Link to="/work" className="project-back">← Back to all projects</Link>

        <div className="project-detail-heading">
          <div>
            <p className="eyebrow">01 / WEB APPLICATION</p>
            <h1>Movie Discovery <span>App.</span></h1>
          </div>
          <div>
            <p className="project-detail-summary">
              A movie browsing application designed to make exploring,
              searching and viewing movie information simple and intuitive.
            </p>
            <span className="project-status">Built project</span>
          </div>
        </div>

        <div className="project-detail-image">
          <img src={project.image} alt="Movie App project preview" />
        </div>

        <div className="project-detail-info">
          <div>
            <p className="eyebrow">OVERVIEW</p>
            <h2>About the project</h2>
          </div>
          <div>
            <p>
              This project focuses on building a responsive movie interface
              with reusable React components and Material UI elements.
            </p>
            <ul>
              <li>Browse movie cards and view movie information.</li>
              <li>Search movies using the available search interface.</li>
              <li>Use the available navigation and movie-related views.</li>
              <li>Explore a responsive, dark-themed interface.</li>
            </ul>
          </div>
        </div>

        <div className="project-detail-info">
          <div>
            <p className="eyebrow">TECH STACK</p>
            <h2>Tools used</h2>
          </div>
          <div className="project-detail-tags">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            <span>React Router</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="project-detail-info">
          <div>
            <p className="eyebrow">PROJECT LINKS</p>
            <h2>Explore the code</h2>
          </div>
          <div>
            <p>Open the repository or the deployed demo.</p>
            <p>
              <a
                className="button button-dark"
                href="https://github.com/nensimangroliya29-netizen/movie-app"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repository ↗
              </a>
            </p>
            <a
              className="button button-light"
              href="https://movie-app-three-mocha-24.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}