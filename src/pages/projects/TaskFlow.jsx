import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Search,
  CalendarDays,
  ChartNoAxesColumn,
  Users,
  Target,
  FolderKanban,
  ListTodo,
  Settings,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./TaskFlow.css";

const dashboardImages = [
  {
    title: "Project Overview",
    label: "PROJECT TRACKING",
    image: "/projects.jpeg",
    description: "Track project progress, deadlines and team assignments.",
    icon: FolderKanban,
  },
  {
    title: "Task Board",
    label: "TASK ORGANISATION",
    image: "/tasks.jpeg",
    description: "Organise tasks, monitor status and track completion.",
    icon: ListTodo,
  },
  {
    title: "Team Workspace",
    label: "TEAM COLLABORATION",
    image: "/team.jpeg",
    description: "Manage team members and project responsibilities.",
    icon: Users,
  },
  {
    title: "Messages",
    label: "TEAM COMMUNICATION",
    image: "/messages.jpeg",
    description: "Keep project conversations organised in one place.",
    icon: Search,
  },
  {
    title: "Analytics",
    label: "PRODUCTIVITY INSIGHTS",
    image: "/analystics.jpeg",
    description: "Review project progress and team productivity.",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Settings",
    label: "WORKSPACE PREFERENCES",
    image: "/settings.jpeg",
    description: "Manage workspace preferences and project settings.",
    icon: Settings,
  },
];

const features = [
  {
    icon: FolderKanban,
    title: "Project Management",
    text: "Organise projects and monitor their progress.",
  },
  {
    icon: CheckCircle2,
    title: "Task Tracking",
    text: "Manage task statuses, priorities and completion.",
  },
  {
    icon: CalendarDays,
    title: "Deadline Planning",
    text: "Keep upcoming deadlines and schedules organised.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Productivity Analytics",
    text: "Understand progress through clear visual insights.",
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
    title: "RestoPro",
    subtitle: "Restaurant POS",
    image: "/restaurant-pos.png",
    path: "/work/restaurant-pos",
  },
];

function ProjectImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`tf-image-container ${className}`}>
      {failed ? (
        <div className="tf-image-fallback">
          <span>Preview unavailable</span>
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

export default function TaskFlow() {
  return (
    <main className="tf-page">
      <div className="tf-container">
        {/* TOP NAVIGATION */}
        <div className="tf-topline">
          <Link to="/work" className="tf-back">
            <ArrowLeft size={15} />
            Back to selected work
          </Link>

          <span className="tf-counter">02 / 04 ━━━━━</span>
        </div>

        {/* HERO SECTION */}
        <section className="tf-hero">
          <div className="tf-heading">
            <span className="tf-eyebrow">
              PRODUCTIVITY / PROJECT MANAGEMENT
            </span>

            <h1>TaskFlow</h1>

            <p className="tf-subtitle">Plan smarter. Work better.</p>

            <div className="tf-tags">
              <span>React</span>
              <span>Dashboard</span>
              <span>Productivity</span>
            </div>
          </div>

          <p className="tf-summary">
            A modern project management dashboard to organise tasks,
            manage deadlines and keep teams focused in one clean workspace.
          </p>
        </section>

        {/* PROJECT GALLERY */}
        <section className="tf-gallery">
          <div className="tf-gallery-heading">
            <div>
              <span className="tf-eyebrow">PRODUCT PREVIEW</span>
              <h2>Explore the workspace</h2>
            </div>

            <span className="tf-image-count">07 SCREENS</span>
          </div>

          {/* MAIN PREVIEW */}
          <article className="tf-featured-screen">
            <div className="tf-screen-topbar">
              <span className="tf-window-dot" />
              <span className="tf-window-dot" />
              <span className="tf-window-dot" />

              <span className="tf-screen-caption">
                TASKFLOW PROJECT WORKSPACE
              </span>
            </div>

            <ProjectImage
              src="/taskflow-project.png"
              alt="TaskFlow main project dashboard"
              className="tf-featured-image-wrap"
            />

            <div className="tf-featured-caption">
              <div>
                <span className="tf-eyebrow">MAIN INTERFACE</span>
                <h3>Your work, organised</h3>
              </div>

              <p>
                Plan projects, organise tasks and track progress in one place.
              </p>
            </div>
          </article>

          {/* SIX SUPPORTING SCREENS */}
          <div className="tf-screen-grid">
            {dashboardImages.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="tf-screen-card" key={item.title}>
                  <div className="tf-screen-image-wrap">
                    <ProjectImage
                      src={item.image}
                      alt={`${item.title} TaskFlow screen`}
                    />

                    <span className="tf-screen-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="tf-screen-card-copy">
                    <span className="tf-eyebrow">{item.label}</span>

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

        {/* ABOUT PROJECT */}
        <section className="tf-about">
          <div className="tf-about-copy">
            <span className="tf-eyebrow">ABOUT THE PROJECT</span>
            <h2>Designed for better workflows</h2>

            <p>
              TaskFlow is a project planning and task management interface
              designed to make everyday work easier to organise. It brings
              projects, tasks, deadlines and team activity into one structured
              workspace with a clean, modern design.
            </p>
          </div>

          <div className="tf-goal">
            <span className="tf-goal-icon">
              <Target size={21} />
            </span>

            <div>
              <h3>The Goal</h3>
              <p>
                Create an intuitive productivity dashboard that helps users
                plan projects, stay on top of deadlines and track progress
                without unnecessary complexity.
              </p>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="tf-features">
          <div className="tf-section-heading">
            <div>
              <span className="tf-eyebrow">KEY FEATURES</span>
              <h2>Everything in one place</h2>
            </div>

            <p>
              Everything needed to plan projects, track tasks and keep
              work organised.
            </p>
          </div>

          <div className="tf-feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="tf-feature" key={feature.title}>
                  <span className="tf-feature-icon">
                    <Icon size={20} />
                  </span>

                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* MORE PROJECTS */}
        <section className="tf-more">
          <div className="tf-more-heading">
            <div>
              <span className="tf-eyebrow">MORE PROJECTS</span>
              <h2>Explore more work</h2>
            </div>

            <Link to="/work" className="tf-view-all">
              View all projects <ArrowRight size={15} />
            </Link>
          </div>

          <div className="tf-more-grid">
            {moreProjects.map((project) => (
              <Link
                to={project.path}
                className="tf-project-card"
                key={project.title}
              >
                <ProjectImage
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="tf-project-image"
                />

                <div className="tf-project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                  </div>

                  <span className="tf-project-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="tf-contact">
          <div>
            <span className="tf-eyebrow">HAVE A PROJECT IN MIND?</span>

            <h2>
              Let's make work
              <br />
              <span>flow better.</span>
            </h2>
          </div>

          <Link to="/contact" className="tf-contact-button">
            Let's talk <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </main>
  );
}
