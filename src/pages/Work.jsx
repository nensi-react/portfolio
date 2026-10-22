
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Work.css";

const projects = [
  {
    id: "01",
    name: "Client Management",
    category: "BUSINESS / CRM",
    description:
      "A clean customer management dashboard to organise clients, track activity and manage business relationships.",
    image: "/client-management-system.png",
    tags: ["React", "Dashboard", "CRM"],
    theme: "crm",
    link: "/work/client-management",
  },
  {
    id: "02",
    name: "LUXE",
    category: "E-COMMERCE / FASHION",
    description:
      "A premium shopping experience featuring elegant product displays, modern layouts and effortless browsing.",
    image: "/luxe-store.png",
    tags: ["React", "E-commerce", "Responsive"],
    theme: "luxe",
    link: "/work/luxury-ecommerce",
  },
  {
    id: "03",
    name: "RestoPro",
    category: "RESTAURANT / POS",
    description:
      "A restaurant management workspace for handling orders, tables, menu items and daily business operations.",
    image: "/restaurant-pos.png",
    tags: ["React", "POS System", "Management"],
    theme: "resto",
    link: "/work/restaurant-pos",
  },
  {
    id: "04",
    name: "TaskFlow",
    category: "PRODUCTIVITY / PLANNER",
    description:
      "A project planning dashboard to organise tasks, monitor progress and keep teams focused on their goals.",
    image: "/taskflow-project.png",
    tags: ["React", "Task Manager", "Analytics"],
    theme: "task",
    link: "/work/taskflow",
  },
];

export default function Work() {
  return (
    <main className="work-page">
      <section className="work-intro">
        <span className="work-eyebrow">
          <span className="work-eyebrow-dot" />
          PORTFOLIO / SELECTED PROJECTS
        </span>

        <div className="work-heading-row">
          <h1>
            Ideas into digital experiences.
          </h1>

          <div className="work-count">
            <strong>04</strong>
            <span>PROJECTS BUILT</span>
          </div>
        </div>

        <div className="work-intro-bottom">
          <p>
            A collection of projects built with React, thoughtful
            interfaces and useful functionality. Each project
            explores a different real-world digital experience.
          </p>

          <span className="work-scroll-note">
            SELECTED WORK <ArrowRight size={15} />
          </span>
        </div>
      </section>

      <section className="work-projects">
        {projects.map((project) => (
          <article className="work-card" key={project.id}>
            <Link
              to={project.link}
              className={`work-image-wrap ${project.theme}`}
              aria-label={`View ${project.name} project`}
            >
              <div className="work-image-top">
                <span>{project.id} / 04</span>
                <span className="work-image-category">
                  {project.category}
                </span>
              </div>

              <img
                className="work-project-image"
                src={project.image}
                alt={`${project.name} project screenshot`}
                loading="lazy"
              />

              <span className="work-image-caption">
                PROJECT PREVIEW ↗
              </span>
            </Link>

            <div className="work-card-content">
              <div className="work-card-title">
                <div>
                  <span className="work-card-number">
                    PROJECT {project.id}
                  </span>

                  <h2>
                    <Link to={project.link}>
                      {project.name}
                    </Link>
                  </h2>
                </div>

                <Link
                  to={project.link}
                  className="work-card-arrow"
                  aria-label={`Open ${project.name}`}
                >
                  <ArrowUpRight size={21} />
                </Link>
              </div>

              <p className="work-card-description">
                {project.description}
              </p>

              <div className="work-card-bottom">
                <div className="work-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <span className="work-card-type">
                  WEB APP ↗
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="work-contact">
        <div>
          <span className="work-eyebrow">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let’s build something
            <br />
            <span>worth exploring.</span>
          </h2>
        </div>

        <Link to="/contact" className="work-contact-button">
          Let’s talk <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
}
