import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Users,
  Search,
  ChartNoAxesColumn,
  Download,
  Target,
  LayoutDashboard,
  FolderKanban,
  Bell,
  LifeBuoy,
  Settings,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./ClientManagement.css";

const dashboardImages = [
  {
    title: "Projects",
    label: "PROJECT TRACKING",
    image: "/project.jpg",
    description: "Track project status, client assignments and progress.",
    icon: FolderKanban,
  },
  {
    title: "Home Dashboard",
    label: "WORKSPACE OVERVIEW",
    image: "/home.jpg",
    description: "View customers, projects and tasks in one place.",
    icon: LayoutDashboard,
  },
  {
    title: "Settings",
    label: "WORKSPACE PREFERENCES",
    image: "/settings.jpg",
    description: "Manage workspace information and preferences.",
    icon: Settings,
  },
  {
    title: "Support Center",
    label: "CLIENT SUPPORT",
    image: "/support.jpg",
    description: "Create and track support requests in one place.",
    icon: LifeBuoy,
  },
  {
    title: "Notifications",
    label: "ACTIVITY UPDATES",
    image: "/notification.jpg",
    description: "Keep up with recent workspace activity.",
    icon: Bell,
  },
  {
    title: "Client Directory",
    label: "CUSTOMER RECORDS",
    image: "/user.jpeg",
    description: "Browse and manage client records.",
    icon: Users,
  },
  {
    title: "Reporting",
    label: "BUSINESS INSIGHTS",
    image: "/reporting.jpg",
    description: "Review customer and project performance.",
    icon: ChartNoAxesColumn,
  },
];

const features = [
  {
    icon: Users,
    title: "Client Management",
    text: "Add, edit and track client information easily.",
  },
  {
    icon: Search,
    title: "Search & Filters",
    text: "Find client records quickly with easy navigation.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Overview & Analytics",
    text: "Review business statistics and project progress.",
  },
  {
    icon: Download,
    title: "Import & Export",
    text: "Keep customer information organised and accessible.",
  },
];


const moreProjects = [
  {
    title: "LUXE",
    subtitle: "Luxury E-commerce",
    image: "/luxe-store.png",
    path: "/work/luxe",
  },
  {
    title: "RestoPro",
    subtitle: "Restaurant POS",
    image: "/restaurant-pos.png",
    path: "/work/restaurant-pos",
  },
  {
    title: "TaskFlow",
    subtitle: "Project Planner",
    image: "/taskflow-project.png",
    path: "/work/taskflow",
  },
];

function ProjectImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`cm-image-container ${className}`}>
      {failed ? (
        <div className="cm-image-fallback">
          <span>Image not found</span>
          <small>{src}</small>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function ClientManagement() {
  return (
    <main className="cm-page">
      <div className="cm-container">
        {/* TOP LINE */}
        <div className="cm-topline">
          <Link to="/work" className="cm-back">
            <ArrowLeft size={14} />
            Back to selected work
          </Link>

          <span className="cm-counter">01 / 04 ━━━━━</span>
        </div>

        {/* HERO */}
        <section className="cm-hero">
          <div className="cm-heading">
            <span className="cm-eyebrow">BUSINESS / CRM</span>

            <h1>Client Management</h1>

            <p className="cm-subtitle">
              Better relationships. Better business.
            </p>

            <div className="cm-tags">
              <span>React</span>
              <span>Dashboard</span>
              <span>CRM</span>
            </div>
          </div>

          <p className="cm-summary">
            A clean customer management dashboard to organise clients,
            track activity and manage business relationships in one place.
          </p>
        </section>

        {/* PRODUCT GALLERY */}
        <section className="cm-gallery">
          <div className="cm-gallery-heading">
            <div>
              <span className="cm-eyebrow">PRODUCT PREVIEW</span>
              <h2>Explore the workspace</h2>
            </div>

            <span className="cm-image-count">07 SCREENS</span>
          </div>

          {/* MAIN SCREEN */}
          <article className="cm-featured-screen">
            <div className="cm-screen-topbar">
              <span className="cm-window-dot" />
              <span className="cm-window-dot" />
              <span className="cm-window-dot" />

              <span className="cm-screen-caption">
                CLIENT MANAGEMENT WORKSPACE
              </span>
            </div>

            <ProjectImage
              src="/client-management-system.png"
              alt="Client Management main dashboard"
              className="cm-featured-image-wrap"
            />

            <div className="cm-featured-caption">
              <div>
                <span className="cm-eyebrow">MAIN INTERFACE</span>
                <h3>Client management workspace</h3>
              </div>

              <p>
                Manage customer information from one clean workspace.
              </p>
            </div>
          </article>

          {/* DASHBOARD SCREENS */}
          <div className="cm-screen-grid">
            {dashboardImages.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="cm-screen-card" key={item.title}>
                  <div className="cm-screen-image-wrap">
                    <ProjectImage
                      src={item.image}
                      alt={`${item.title} dashboard screen`}
                    />

                    <span className="cm-screen-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="cm-screen-card-copy">
                    <span className="cm-eyebrow">{item.label}</span>

                    <h3>
                      <Icon size={15} />
                      {item.title}
                    </h3>

                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ABOUT */}
        <section className="cm-about">
          <div className="cm-about-copy">
            <span className="cm-eyebrow">ABOUT THE PROJECT</span>

            <h2>About</h2>

            <p>
              Client Management is a modern CRM interface designed to help
              businesses organise customer information, keep track of client
              activity and build stronger relationships through a clear,
              easy-to-use layout.
            </p>
          </div>

          <div className="cm-goal">
            <Target size={22} />

            <div>
              <h3>The Goal</h3>

              <p>
                Create a clean and easy-to-use dashboard that helps businesses
                manage their clients efficiently and improve communication
                and follow-ups.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="cm-features">
          <div className="cm-section-heading">
            <div>
              <span className="cm-eyebrow">KEY FEATURES</span>
              <h2>What's Inside</h2>
            </div>

            <p>
              Everything you need to manage clients in one place, with a clean
              and responsive design.
            </p>
          </div>

          <div className="cm-feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="cm-feature" key={feature.title}>
                  <span className="cm-feature-icon">
                    <Icon size={18} />
                  </span>

                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* MORE PROJECTS */}
        <section className="cm-more">
          <div className="cm-more-heading">
            <div>
              <span className="cm-eyebrow">MORE PROJECTS</span>
              <h2>You might also like</h2>
            </div>

            <Link to="/work" className="cm-view-all">
              View all projects <ArrowRight size={13} />
            </Link>
          </div>

          <div className="cm-more-grid">
            {moreProjects.map((project) => (
              <Link
                to={project.path}
                className="cm-project-card"
                key={project.title}
              >
                <ProjectImage
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="cm-project-image"
                />

                <div className="cm-project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                  </div>

                  <span className="cm-project-arrow">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="cm-contact">
          <div>
            <span className="cm-eyebrow">HAVE A PROJECT IN MIND?</span>

            <h2>
              Let's build something
              <br />
              <span>worth exploring.</span>
            </h2>
          </div>

          <Link to="/contact" className="cm-contact-button">
            Let's talk <ArrowRight size={15} />
          </Link>
        </section>
      </div>
    </main>
  );
}