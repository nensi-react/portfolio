import { Link } from "react-router-dom";
import projects from "../../data/projects";
import "./ProjectDetails.css";

export default function RestaurantPOS() {
  const project = projects.find((item) => item.id === "restaurant-pos");

  return (
    <section className="project-detail">
      <div className="container">
        <Link to="/work" className="project-back">← Back to all projects</Link>

        <div className="project-detail-heading">
          <div>
            <p className="eyebrow">02 / BUSINESS APPLICATION</p>
            <h1>Restaurant <span>POS.</span></h1>
          </div>
          <div>
            <p className="project-detail-summary">
              A restaurant point-of-sale interface concept for managing
              menu items, customer orders, tables and billing.
            </p>
            <span className="project-status">Portfolio concept</span>
          </div>
        </div>

        <div className="project-detail-image">
          <img src={project.image} alt="Restaurant POS project preview" />
        </div>

        <div className="project-detail-info">
          <div>
            <p className="eyebrow">OVERVIEW</p>
            <h2>About the project</h2>
          </div>
          <div>
            <p>
              The goal is to design a clear and practical interface that
              helps restaurant staff manage orders without unnecessary steps.
            </p>
            <ul>
              <li>Menu categories and food item selection.</li>
              <li>Cart with item quantities and bill calculations.</li>
              <li>Table and order management screens.</li>
              <li>Receipt and order summary interface.</li>
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
            <span>JavaScript</span>
            <span>Responsive CSS</span>
          </div>
        </div>

        <div className="project-detail-info">
          <div>
            <p className="eyebrow">PROJECT STATUS</p>
            <h2>Next steps</h2>
          </div>
          <div>
            <p>
              Build the functional menu, cart, table selection and billing
              workflow before publishing this as a completed client-ready project.
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