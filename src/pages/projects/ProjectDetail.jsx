import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Users,
  Search,
  ChartNoAxesColumnIncreasing,
  Download,
  Target,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./ProjectDetail.css";

const projects = [
  {
    id: "01",
    name: "Client Management",
    category: "BUSINESS / CRM",
    subtitle: "Better relationships. Better business.",
    description:
      "A clean customer management dashboard to organise clients, track activity and manage business relationships. Built to simplify client interactions and help businesses grow more efficiently.",
    image: "/client-management-system.png",
    previews: [
      "/client-management-list.png",
      "/client-management-details.png",
    ],
    about:
      "Client Management is a modern CRM dashboard designed to help businesses organise client information, track activity and build stronger relationships. It provides a simple and intuitive interface to manage clients, follow up on interactions and stay on top of business growth.",
    goal:
      "To create a clean and easy-to-use dashboard that helps businesses manage their clients efficiently and improve communication and follow-ups.",
    features: [
      {
        title: "Client Management",
        text: "Add, edit and track client information easily.",
        icon: Users,
      },
      {
        title: "Search & Filters",
        text: "Find clients quickly with search and filtering.",
        icon: Search,
      },
      {
        title: "Overview & Analytics",
        text: "View client statistics and business insights.",
        icon: ChartNoAxesColumnIncreasing,
      },
      {
        title: "Import & Export",
        text: "Organise client data with CSV import and export.",
        icon: Download,
      },
    ],
    tags: ["React", "Dashboard", "CRM"],
    theme: "crm",
  },
  {
    id: "02",
    name: "LUXE",
    category: "E-COMMERCE / FASHION",
    subtitle: "Less, but exceptional.",
    description:
      "A premium shopping experience featuring elegant product displays, modern layouts and effortless browsing.",
    image: "/luxe-store.png",
    previews: [],
    about:
      "LUXE is a fashion storefront concept focused on elegant presentation, clear product layouts and a smooth browsing experience.",
    goal:
      "To create a refined shopping interface that presents products beautifully and makes browsing simple.",
    features: [
      { title: "Product Display", text: "Present products in an elegant layout.", icon: CheckCircle2 },
      { title: "Easy Browsing", text: "Help shoppers explore collections.", icon: Search },
      { title: "Responsive Design", text: "Adapt the storefront to different screens.", icon: ChartNoAxesColumnIncreasing },
      { title: "Shopping Experience", text: "Keep the interface clear and intuitive.", icon: Users },
    ],
    tags: ["React", "E-commerce", "Responsive"],
    theme: "luxe",
  },
  {
    id: "03",
    name: "RestoPro",
    category: "RESTAURANT / POS",
    subtitle: "A better way to run your restaurant.",
    description:
      "A restaurant management workspace for handling orders, tables, menu items and daily business operations.",
    image: "/restaurant-pos.png",
    previews: [],
    about:
      "RestoPro is a restaurant workspace concept designed to bring daily operations into one convenient interface.",
    goal:
      "To make restaurant tasks easier to view and manage through a clear dashboard.",
    features: [
      { title: "Order Management", text: "View and organise restaurant orders.", icon: CheckCircle2 },
      { title: "Table Overview", text: "Keep track of table status.", icon: CalendarDays },
      { title: "Menu Management", text: "Organise food items and categories.", icon: Search },
      { title: "Daily Overview", text: "Review useful operational information.", icon: ChartNoAxesColumnIncreasing },
    ],
    tags: ["React", "POS System", "Management"],
    theme: "resto",
  },
  {
    id: "04",
    name: "TaskFlow",
    category: "PRODUCTIVITY / PLANNER",
    subtitle: "Make progress visible.",
    description:
      "A project planning dashboard to organise tasks, monitor progress and keep teams focused on their goals.",
    image: "/taskflow-project.png",
    previews: [],
    about:
      "TaskFlow is a productivity dashboard concept for organising projects, tracking tasks and reviewing team progress.",
    goal:
      "To help users keep their projects organised and understand what needs attention.",
    features: [
      { title: "Task Management", text: "Organise tasks and their status.", icon: CheckCircle2 },
      { title: "Project Search", text: "Find projects and tasks quickly.", icon: Search },
      { title: "Progress Overview", text: "Review project progress at a glance.", icon: ChartNoAxesColumnIncreasing },
      { title: "Planning", text: "Keep upcoming work organised.", icon: CalendarDays },
    ],
    tags: ["React", "Task Manager", "Analytics"],
    theme: "task",
  },
];

export default function ProjectDetail() {
  const location = useLocation();

  const project =
    projects.find((item) => itemLink(item) === location.pathname) ||
    projects[0];

  const relatedProjects = projects.filter(
    (item) => item.id !== project.id
  );

  return (
    <main className={`project-detail ${project.theme}`}>
      <div className="detail-container">
        <div className="detail-topbar">
          <Link to="/work" className="detail-back">
            <ArrowLeft size={16} />
            Back to selected work
          </Link>

          <span className="detail-counter">
            {project.id} / 04 <span />
          </span>
        </div>

        <section className="detail-heading">
          <div className="detail-heading-main">
            <span className="detail-eyebrow">{project.category}</span>
            <h1>{project.name}</h1>
            <p className="detail-subtitle">{project.subtitle}</p>

            <div className="detail-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <p className="detail-description">{project.description}</p>
        </section>

        <section className="detail-hero-image">
          <img src={project.image} alt={`${project.name} main preview`} />
          <span className="detail-image-label">PROJECT OVERVIEW</span>
        </section>

        {project.previews.length > 0 && (
          <section className="detail-preview-grid">
            {project.previews.map((image, index) => (
              <div className="detail-small-image" key={image}>
                <img
                  src={image}
                  alt={`${project.name} preview ${index + 1}`}
                  onError={(event) => {
                    event.currentTarget.parentElement.style.display = "none";
                  }}
                />
              </div>
            ))}
          </section>
        )}

        <section className="detail-about">
          <div className="detail-about-copy">
            <span className="detail-section-label">ABOUT THE PROJECT</span>
            <h2>About</h2>
            <p>{project.about}</p>
          </div>

          <div className="detail-goal">
            <Target size={25} />
            <div>
              <h3>The Goal</h3>
              <p>{project.goal}</p>
            </div>
          </div>
        </section>

        <section className="detail-features">
          <div className="detail-features-heading">
            <div>
              <span className="detail-section-label">KEY FEATURES</span>
              <h2>What's Inside</h2>
            </div>
            <p>
              A closer look at the key features and experience
              designed for this project.
            </p>
          </div>

          <div className="detail-feature-grid">
            {project.features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="detail-feature-card" key={feature.title}>
                  <span className="detail-feature-icon">
                    <Icon size={22} />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="detail-related">
          <div className="detail-related-heading">
            <div>
              <span className="detail-section-label">MORE PROJECTS</span>
              <h2>You might also like</h2>
            </div>

            <Link to="/work" className="detail-view-all">
              View all projects <ArrowRight size={15} />
            </Link>
          </div>

          <div className="detail-related-grid">
            {relatedProjects.map((item) => (
              <Link
                to={itemLink(item)}
                className={`detail-related-card ${item.theme}`}
                key={item.id}
              >
                <div className="detail-related-image">
                  <img src={item.image} alt={`${item.name} preview`} />
                </div>
                <div className="detail-related-info">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                  </div>
                  <span><ArrowUpRight size={17} /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="detail-contact">
          <div>
            <span className="detail-section-label">HAVE A PROJECT IN MIND?</span>
            <h2>
              Let's build something
              <br />
              <span>worth exploring.</span>
            </h2>
          </div>

          <Link to="/contact" className="detail-contact-button">
            Let's talk <ArrowRight size={17} />
          </Link>
        </section>
      </div>
    </main>
  );
}

function itemLink(item) {
  const paths = {
    "01": "/work/client-management",
    "02": "/work/luxury-ecommerce",
    "03": "/work/restaurant-pos",
    "04": "/work/taskflow",
  };

  return paths[item.id];
}
