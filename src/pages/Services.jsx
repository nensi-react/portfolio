import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  LayoutDashboard,
  Plug,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

import "./Services.css";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "React Website Development",
    description:
      "Modern, fast, and professional websites designed around your business goals and users.",
    tags: ["React.js", "JavaScript", "CSS"],
    example: "Business websites & landing pages",
  },
  {
    number: "02",
    icon: LayoutDashboard,
    title: "Dashboard Development",
    description:
      "Clean, interactive dashboards that help you manage data, monitor performance, and make decisions.",
    tags: ["React", "MUI", "Charts"],
    example: "Analytics & admin dashboards",
  },
  {
    number: "03",
    icon: Plug,
    title: "API Integration",
    description:
      "Connect your application to APIs for dynamic content, search, data fetching, and useful features.",
    tags: ["REST API", "Fetch", "JSON"],
    example: "Movie & data-driven applications",
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Responsive UI Development",
    description:
      "Responsive interfaces that look consistent across desktop, tablet, and mobile devices.",
    tags: ["Responsive", "Flexbox", "Grid"],
    example: "Portfolios & product interfaces",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your goals, requirements, and design preferences.",
  },
  {
    number: "02",
    title: "Develop",
    description:
      "Build the interface and implement the required functionality.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Review responsiveness, test features, and deliver the project.",
  },
];

const highlights = [
  "Clean and reusable React components",
  "Responsive layouts for different screens",
  "Clear communication throughout the project",
];

export default function Services() {
  return (
    <main className="services-page">
      <div className="services-container">
        <header className="services-hero">
          <div className="services-hero-copy">
            <p className="services-eyebrow">
              <span className="eyebrow-line" />
              SERVICES & SOLUTIONS
            </p>

            <h1>
              Thoughtful design.
              <br />
              <span>Powerful development.</span>
            </h1>

            <p className="services-intro">
              I create modern React websites and user-friendly
              interfaces that help turn ideas into useful digital
              experiences.
            </p>

            <div className="services-hero-actions">
              <Link
                to="/contact"
                className="services-primary-button"
              >
                Discuss a project
                <ArrowUpRight size={16} />
              </Link>

              <Link to="/work" className="services-text-link">
                Explore my work
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="services-hero-panel">
            <div className="hero-panel-top">
              <span className="hero-panel-dot" />
              <span>MY APPROACH</span>
              <span className="hero-panel-index">01 / 03</span>
            </div>

            <div className="hero-panel-content">
              <div className="hero-panel-icon">
                <Code2 size={25} strokeWidth={1.7} />
              </div>

              <p className="hero-panel-label">
                BUILT WITH PURPOSE
              </p>

              <h2>
                Good ideas deserve
                <br />
                <span>great execution.</span>
              </h2>

              <p className="hero-panel-description">
                A thoughtful combination of design, functionality,
                and maintainable code.
              </p>
            </div>

            <div className="hero-panel-bottom">
              <span>DESIGN</span>
              <span>DEVELOPMENT</span>
              <span>DETAIL</span>
            </div>
          </div>
        </header>

        <section className="services-offerings">
          <div className="services-section-heading">
            <div>
              <p className="services-eyebrow">WHAT I OFFER</p>
              <h2>
                Services built around
                <br />
                <span>your next idea.</span>
              </h2>
            </div>

            <p className="services-section-description">
              Practical development solutions for websites,
              dashboards, and digital products.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="service-card"
                  key={service.number}
                >
                  <div className="service-card-top">
                    <span className="service-number">
                      {service.number}
                    </span>

                    <span className="service-icon">
                      <Icon size={21} strokeWidth={1.7} />
                    </span>
                  </div>

                  <h3>{service.title}</h3>

                  <p className="service-description">
                    {service.description}
                  </p>

                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="service-card-footer">
                    <div>
                      <span className="service-example-label">
                        EXAMPLE PROJECT
                      </span>
                      <p>{service.example}</p>
                    </div>

                    <Link
                      to="/contact"
                      className="service-arrow"
                      aria-label={`Discuss ${service.title}`}
                    >
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="services-approach">
          <div className="approach-copy">
            <p className="services-eyebrow">WHY WORK WITH ME</p>

            <h2>
              Simple, thoughtful
              <br />
              <span>and user-focused.</span>
            </h2>

            <p className="approach-description">
              Every project starts with understanding what you
              need. My focus is on creating clear interfaces,
              useful functionality, and responsive experiences.
            </p>

            <ul className="approach-list">
              {highlights.map((highlight) => (
                <li key={highlight}>
                  <CheckCircle2 size={17} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="process-panel">
            <div className="process-panel-heading">
              <span>THE WORKFLOW</span>
              <span className="process-panel-mark">✳</span>
            </div>

            <h3>From first idea to final delivery.</h3>

            <div className="process-list">
              {process.map((step) => (
                <div className="process-item" key={step.number}>
                  <span className="process-number">
                    {step.number}
                  </span>

                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>

                  <ArrowUpRight
                    className="process-arrow"
                    size={16}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-cta">
          <div className="cta-decoration" aria-hidden="true">
            ✳
          </div>

          <div className="services-cta-copy">
            <p className="services-eyebrow">
              HAVE SOMETHING IN MIND?
            </p>

            <h2>
              Let's make your
              <br />
              <span>next idea happen.</span>
            </h2>

            <p>
              Share your project details and let's discuss the
              right approach for your website.
            </p>
          </div>

          <Link to="/contact" className="services-cta-button">
            Start a conversation
            <ArrowUpRight size={17} />
          </Link>
        </section>

        <footer className="services-bottom">
          <span>DESIGNED WITH INTENTION.</span>
          <span>DEVELOPED WITH REACT.</span>
        </footer>
      </div>
    </main>
  );
}
