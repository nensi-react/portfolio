import { Link } from "react-router-dom";
import projects from "../../data/projects";
import "./ProjectDetails.css";

export default function AnalyticsDashboard() {
  const project = projects.find((item) => item.id === "analytics-dashboard");

  return (
    <section className="project-detail">
      <div className="container">
        <Link to="/work" className="project-back">← Back to all projects</Link>

        <div className="project-detail-heading">
          <div>
            <p className="eyebrow">03 / ANALYTICS APPLICATION</p>
            <h1>Analytics <span>Dashboard.</span></h1>
          </div>
          <div>
            <p className="project-detail-summary">
              A business reporting dashboard concept for presenting
              revenue metrics, trends and performance information.
            </p>
            <span className="project-status">Portfolio concept</span>
          </div>
        </div>

        <div className="project-detail-image">
          <img src={project.image} alt="Analytics dashboard project preview" />
        </div>

        <div className="project-detail-info">
          <div>
            <p className="eyebrow">OVERVIEW</p>
            <h2>About the project</h2>
          </div>
          <div>
            <p>
              The intended interface brings important business metrics
              into one place, helping users understand performance quickly.
            </p>
            <ul>
              <li>Revenue, sales and performance summary cards.</li>
              <li>Charts for comparing business trends.</li>
              <li>Report table with search and filtering.</li>
              <li>Date-range controls and CSV export.</li>
              <li>Dark and light theme options.</li>
            </ul>
          </div>
        </div>

        <div className="project-detail-info">
          <div>
            <p className="eyebrow">TECH STACK</p>
            <h2>Planned tools</h2>
          </div>
          <div className="project-detail-tags">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            <span>Material UI</span>
            <span>Recharts</span>
          </div>
        </div>

        <div className="project-detail-info">
          <div>
            <p className="eyebrow">PROJECT STATUS</p>
            <h2>Next steps</h2>
          </div>
          <div>
            <p>
              Implement working filters, charts, CSV export and theme
              switching before presenting the dashboard as a finished product.
            </p>
            <Link to="/contact" className="button button-dark">
              Discuss a similar project ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}