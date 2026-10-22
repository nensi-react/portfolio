import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ShoppingCart,
  Utensils,
  Table2,
  ClipboardList,
  ChefHat,
  CreditCard,
  LayoutDashboard,
  Target,
  CheckCircle2,
  X,
  ZoomIn,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./RestoPro.css";

const screenshots = [
  {
    title: "POS Terminal",
    label: "SALES & BILLING",
    image: "/pos-terminal.jpeg",
    description: "Manage orders, food quantities and customer bills.",
    icon: ShoppingCart,
  },
  {
    title: "Menu Management",
    label: "FOOD CATALOGUE",
    image: "/menu-management.jpeg",
    description: "Organise menu items, categories and prices.",
    icon: Utensils,
  },
  {
    title: "Table Management",
    label: "TABLE OPERATIONS",
    image: "/tables.jpeg",
    description: "View restaurant tables and their current status.",
    icon: Table2,
  },
  {
    title: "Order Management",
    label: "ORDER TRACKING",
    image: "/orders.jpeg",
    description: "Track orders and organise restaurant workflows.",
    icon: ClipboardList,
  },
];

const features = [
  {
    icon: ShoppingCart,
    title: "Smart POS",
    text: "Add food items, adjust quantities and calculate order totals.",
  },
  {
    icon: Utensils,
    title: "Menu Management",
    text: "Organise food categories, item prices and availability.",
  },
  {
    icon: Table2,
    title: "Table Tracking",
    text: "View table status and keep restaurant operations organised.",
  },
  {
    icon: ClipboardList,
    title: "Order Management",
    text: "Keep order information structured and easy to follow.",
  },
  {
    icon: CreditCard,
    title: "Billing & Receipts",
    text: "Present order totals, tax and final bill information clearly.",
  },
  {
    icon: LayoutDashboard,
    title: "Business Dashboard",
    text: "Review important restaurant statistics in one workspace.",
  },
];

const moreProjects = [
  {
    title: "Client Management",
    subtitle: "CRM Dashboard",
    image: "/client-management-system.png",
    path: "/work/client-management",
  },
  {
    title: "LUXE",
    subtitle: "Luxury E-commerce",
    image: "/luxe-store.png",
    path: "/work/luxe",
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
    <div className={`rp-image-container ${className}`}>
      {failed ? (
        <div className="rp-image-fallback">
          <Utensils size={26} />
          <span>{alt}</span>
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

export default function RestoPro() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <main className="rp-page">
      <div className="rp-container">
        <div className="rp-topline">
          <Link to="/work" className="rp-back">
            <ArrowLeft size={15} />
            Back to selected work
          </Link>
          <span className="rp-counter">02 / 04 ━━━━━</span>
        </div>

        <section className="rp-hero">
          <div className="rp-heading">
            <span className="rp-eyebrow">
              <span className="rp-status-dot" />
              RESTAURANT / POS SYSTEM
            </span>

            <h1>Resto<span>Pro.</span></h1>

            <p className="rp-subtitle">
              Smarter service. Smoother operations.
            </p>

            <div className="rp-tags">
              <span>React</span>
              <span>Dashboard</span>
              <span>Restaurant POS</span>
              <span>CSS</span>
            </div>
          </div>

          <p className="rp-summary">
            A modern restaurant management interface designed to organise
            orders, manage tables, maintain menus and simplify daily billing
            through one clear workspace.
          </p>
        </section>

        <section className="rp-gallery">
          <div className="rp-gallery-heading">
            <div>
              <span className="rp-eyebrow">PRODUCT PREVIEW</span>
              <h2>Explore the workspace</h2>
            </div>
            <span className="rp-image-count">05 SCREENS</span>
          </div>

          <article className="rp-featured-screen">
            <div className="rp-window-bar">
              <div className="rp-window-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="rp-window-caption">
                RESTOPRO / RESTAURANT WORKSPACE
              </span>
            </div>

            <button
              type="button"
              className="rp-featured-preview"
              onClick={() =>
                setActiveImage({
                  title: "RestoPro Dashboard",
                  image: "/restopro-project.png",
                })
              }
              aria-label="Open main dashboard preview"
            >
              <ProjectImage
                src="/restaurant-pos.png"
                alt="RestoPro main dashboard"
                className="rp-featured-image"
              />
              <span className="rp-zoom-label">
                <ZoomIn size={16} />
                View Preview
              </span>
            </button>

            <div className="rp-featured-caption">
              <div>
                <span className="rp-eyebrow">MAIN INTERFACE</span>
                <h3>Restaurant management dashboard</h3>
              </div>
              <p>
                A central workspace for restaurant orders, tables and sales.
              </p>
            </div>
          </article>

          <div className="rp-screen-grid">
            {screenshots.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="rp-screen-card" key={item.title}>
                  <button
                    type="button"
                    className="rp-screen-preview"
                    onClick={() =>
                      setActiveImage({
                        title: item.title,
                        image: item.image,
                      })
                    }
                    aria-label={`View ${item.title} screenshot`}
                  >
                    <ProjectImage src={item.image} alt={item.title} />

                    <span className="rp-screen-number">
                      0{index + 1}
                    </span>

                    <span className="rp-screen-zoom">
                      <ZoomIn size={16} />
                    </span>
                  </button>

                  <div className="rp-screen-copy">
                    <span className="rp-eyebrow">{item.label}</span>
                    <h3>
                      <Icon size={16} />
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rp-about">
          <div className="rp-about-copy">
            <span className="rp-eyebrow">ABOUT THE PROJECT</span>
            <h2>
              Designed for
              <br />
              <span>better service.</span>
            </h2>
            <p>
              RestoPro is a restaurant POS and management UI concept focused
              on making everyday restaurant tasks easier to navigate. It
              brings important workflows such as food ordering, table
              tracking, menu management and billing into one consistent
              interface.
            </p>
          </div>

          <div className="rp-goal">
            <Target size={23} />
            <div>
              <h3>The Goal</h3>
              <p>
                Create an attractive, easy-to-understand workspace that helps
                restaurant staff organise orders, manage tables and review
                billing information efficiently.
              </p>
              <div className="rp-goal-checks">
                <div>
                  <CheckCircle2 size={16} />
                  Clear visual hierarchy
                </div>
                <div>
                  <CheckCircle2 size={16} />
                  Consistent interface components
                </div>
                <div>
                  <CheckCircle2 size={16} />
                  Responsive layout approach
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rp-features">
          <div className="rp-section-heading">
            <div>
              <span className="rp-eyebrow">KEY FEATURES</span>
              <h2>What's Inside</h2>
            </div>
            <p>
              Essential restaurant workflows presented in a modern,
              organised and user-friendly interface.
            </p>
          </div>

          <div className="rp-feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article className="rp-feature" key={feature.title}>
                  <div className="rp-feature-top">
                    <span className="rp-feature-icon">
                      <Icon size={20} />
                    </span>
                    <span className="rp-feature-number">
                      0{index + 1}
                    </span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rp-details">
          <div className="rp-details-copy">
            <span className="rp-eyebrow">PROJECT DETAILS</span>
            <h2>Built with a practical frontend approach.</h2>
            <p>
              A portfolio project focused on reusable components, consistent
              styling and clear restaurant workflows.
            </p>
          </div>

          <div className="rp-details-list">
            <div>
              <span>Project Type</span>
              <strong>Restaurant POS Dashboard</strong>
            </div>
            <div>
              <span>Frontend</span>
              <strong>React.js</strong>
            </div>
            <div>
              <span>Styling</span>
              <strong>CSS3</strong>
            </div>
            <div>
              <span>Icons</span>
              <strong>Lucide React</strong>
            </div>
            <div>
              <span>Design Theme</span>
              <strong>Navy, Orange & Cream</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>Restaurant Operations UI</strong>
            </div>
          </div>
        </section>

        <section className="rp-more">
          <div className="rp-more-heading">
            <div>
              <span className="rp-eyebrow">MORE PROJECTS</span>
              <h2>You might also like</h2>
            </div>
            <Link to="/work" className="rp-view-all">
              View all projects
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="rp-more-grid">
            {moreProjects.map((project) => (
              <Link
                to={project.path}
                className="rp-project-card"
                key={project.title}
              >
                <ProjectImage
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="rp-project-image"
                />
                <div className="rp-project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                  </div>
                  <span className="rp-project-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="rp-contact">
          <div className="rp-contact-decoration">
            <ChefHat size={90} strokeWidth={0.8} />
          </div>
          <div className="rp-contact-copy">
            <span className="rp-eyebrow">HAVE A PROJECT IN MIND?</span>
            <h2>
              Let's build something
              <br />
              <span>worth exploring.</span>
            </h2>
            <p>
              Looking for a modern React dashboard or a custom business
              interface? Let's discuss your project.
            </p>
          </div>
          <Link to="/contact" className="rp-contact-button">
            Let's talk
            <ArrowRight size={16} />
          </Link>
        </section>

        <footer className="rp-footer">
          <Link to="/work" className="rp-footer-brand">
            <span className="rp-footer-mark">
              <Utensils size={17} />
            </span>
            <span>
              RESTO<span>PRO.</span>
            </span>
          </Link>
          <p>Restaurant POS · React Portfolio Project</p>
          <Link to="/work" className="rp-footer-link">
            Back to work
            <ArrowUpRight size={15} />
          </Link>
        </footer>
      </div>

      {activeImage && (
        <div
          className="rp-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="rp-lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close image preview"
          >
            <X size={22} />
          </button>

          <div
            className="rp-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <span className="rp-eyebrow">RESTOPRO / PREVIEW</span>
            <h2>{activeImage.title}</h2>
            <ProjectImage
              src={activeImage.image}
              alt={activeImage.title}
              className="rp-lightbox-image"
            />
          </div>
        </div>
      )}
    </main>
  );
}
