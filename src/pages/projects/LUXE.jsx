import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Target,
  Gem,
  CreditCard,
  Truck,
  Heart,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./LUXE.css";


const screens = [
  {
    number: "01",
    title: "Home",
    label: "LUXURY HOMEPAGE",
    image: "/Home.jpeg",
    description:
      "Discover the LUXE brand through an elegant homepage featuring premium fashion, refined visuals and a luxurious shopping experience.",
  },
  {
    number: "02",
    title: "Shop",
    label: "EXPLORE PRODUCTS",
    image: "/Shop.jpeg",
    description:
      "Browse a curated collection of luxury products with a clean layout designed to make shopping simple and enjoyable.",
  },
  {
    number: "03",
    title: "Collection",
    label: "EXCLUSIVE COLLECTIONS",
    image: "/Collection.jpeg",
    description:
      "Explore carefully presented collections that highlight timeless styles, premium products and the distinctive LUXE aesthetic.",
  },
  {
    number: "04",
    title: "Our Story",
    label: "THE LUXE STORY",
    image: "/Our-story.jpeg",
    description:
      "Learn about the LUXE brand, its design philosophy and its commitment to timeless style and a premium customer experience.",
  },
];

const features = [
  {
    icon: Gem,
    title: "Premium Design",
    text: "Elegant visuals and a consistent luxury-inspired interface.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    text: "A clear payment experience designed around customer confidence.",
  },
  {
    icon: Truck,
    title: "Order Delivery",
    text: "A shopping experience that can communicate delivery information clearly.",
  },
  {
    icon: Heart,
    title: "Wishlist",
    text: "A convenient way for shoppers to save favourite products.",
  },
];

const moreProjects = [
  {
    title: "TaskFlow",
    subtitle: "Project Management",
    image: "/taskflow-project.png",
    path: "/work/taskflow",
  },
  {
    title: "Client Management",
    subtitle: "CRM Dashboard",
    image: "/client-management-system.png",
    path: "/work/client-management",
  },
  {
    title: "RestoPro",
    subtitle: "Restaurant POS",
    image: "/restaurant-pos.png",
    path: "/work/restaurant-pos",
  },
];

function LuxeImage({ src, alt }) {
  const [failed, setFailed] = React.useState(false);

  return failed ? (
    <div className="lx-image-fallback">
      <ShoppingBag size={28} />
      <span>Image not found</span>
      <small>{src}</small>
    </div>
  ) : (
    <img
      className="lx-image"
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function LUXE() {
  return (
    <main className="lx-page">
      <div className="lx-container">
        {/* Navigation */}
        <div className="lx-topline">
          <Link to="/work" className="lx-back">
            <ArrowLeft size={16} />
            Back to selected work
          </Link>

          <span className="lx-counter">03 / 04</span>
        </div>

        {/* Hero */}
        <section className="lx-hero">
          <div className="lx-hero-copy">
            <span className="lx-eyebrow">
              E-COMMERCE / LUXURY RETAIL
            </span>

            <h1>LUXE<span>.</span></h1>

            <p className="lx-tagline">
              Luxury, redefined online.
            </p>

            <div className="lx-tags">
              <span>React</span>
              <span>E-commerce</span>
              <span>UI/UX</span>
            </div>
          </div>

          <div className="lx-hero-description">
            <span className="lx-gold-line" />
            <p>
              A modern luxury e-commerce experience designed to
              showcase premium products through elegant visuals,
              intuitive browsing and a refined shopping journey.
            </p>

            <div className="lx-project-meta">
              <div>
                <span>PROJECT TYPE</span>
                <strong>E-commerce</strong>
              </div>
              <div>
                <span>BUILT WITH</span>
                <strong>React UI</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Exactly four images */}
        <section className="lx-gallery">
          <div className="lx-section-heading">
            <div>
              <span className="lx-eyebrow">THE EXPERIENCE</span>
              <h2>Designed to feel different.</h2>
            </div>
            <span className="lx-image-count">04 SCREENS</span>
          </div>

          <div className="lx-screen-grid">
            {screens.map((screen) => (
              <article className="lx-screen-card" key={screen.number}>
                <div className="lx-screen-image">
                  <LuxeImage
                    src={screen.image}
                    alt={`LUXE ${screen.title} screen`}
                  />
                  <span className="lx-screen-number">
                    {screen.number}
                  </span>
                </div>

                <div className="lx-screen-copy">
                  <span className="lx-eyebrow">{screen.label}</span>
                  <h3>{screen.title}</h3>
                  <p>{screen.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="lx-about">
          <div className="lx-about-copy">
            <span className="lx-eyebrow">ABOUT THE PROJECT</span>
            <h2>Less noise. More luxury.</h2>
            <p>
              LUXE is a luxury e-commerce concept built around a
              calm, polished and product-focused shopping experience.
              Warm neutrals, refined typography and spacious layouts
              help the products take centre stage.
            </p>
          </div>

          <div className="lx-goal">
            <Target size={27} />
            <div>
              <span className="lx-eyebrow">THE GOAL</span>
              <h3>Make every detail count.</h3>
              <p>
                Create a stylish and intuitive storefront that helps
                customers explore products, understand their choices
                and move through the shopping journey with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="lx-features">
          <div className="lx-section-heading">
            <div>
              <span className="lx-eyebrow">KEY FEATURES</span>
              <h2>What's inside</h2>
            </div>
            <p>
              A premium visual direction with useful shopping
              experiences at its core.
            </p>
          </div>

          <div className="lx-feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="lx-feature" key={feature.title}>
                  <span className="lx-feature-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Other portfolio projects */}
        <section className="lx-more">
          <div className="lx-section-heading">
            <div>
              <span className="lx-eyebrow">MORE SELECTED WORK</span>
              <h2>Explore other projects</h2>
            </div>

            <Link to="/work" className="lx-view-all">
              View all <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="lx-more-grid">
            {moreProjects.map((project) => (
              <Link
                to={project.path}
                className="lx-project-card"
                key={project.title}
              >
                <div className="lx-project-image">
                  <LuxeImage
                    src={project.image}
                    alt={`${project.title} project preview`}
                  />
                </div>

                <div className="lx-project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                  </div>
                  <ArrowUpRight size={19} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="lx-contact">
          <div>
            <span className="lx-eyebrow">HAVE AN IDEA?</span>
            <h2>
              Let's create
              <br />
              <span>something timeless.</span>
            </h2>
          </div>

          <Link to="/contact" className="lx-contact-button">
            Start a project <ArrowRight size={17} />
          </Link>
        </section>

      
      </div>
    </main>
  );
}
