import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="section section-soft" id="projects">
      <div className="container">
        <div className="section-top">
          <div>
            <span className="eyebrow">My Projects</span>

            <h2 className="section-heading">
              Featured Projects
            </h2>

            <p className="section-description">
              A selection of projects I have built or am
              developing to practise real-world frontend skills.
            </p>
          </div>

          <a
            className="text-link"
            href="https://github.com/nensi-react"
            target="_blank"
            rel="noreferrer"
          >
            More on GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
                <span>{project.tag}</span>
              </div>

              <div className="project-content">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-links">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo <ExternalLink size={13} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="projects-note">
          Update each project link to its actual live demo and
          repository before sharing with clients.
        </p>
      </div>
    </section>
  );
}
