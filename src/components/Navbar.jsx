import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Code2,
  FileText,
} from "lucide-react";
import "./Navbar.css";

const navItems = [
  { label: "Home", path: "/", end: true },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Logo */}
        <Link
          to="/"
          className="nav-logo"
          onClick={closeMenu}
          aria-label="Nensi home"
        >
          <span className="logo-mark">
            <Code2 size={21} strokeWidth={2.2} />
          </span>

          <span className="logo-name">
            NENSI
            <small>FRONTEND DEVELOPER</small>
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Navigation */}
        <nav
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <div className="nav-menu">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "nav-item-active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Resume Button */}
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `nav-resume ${isActive ? "nav-resume-active" : ""}`
            }
            onClick={closeMenu}
          >
            <FileText size={16} strokeWidth={2} />
            <span>Resume</span>
            <ArrowUpRight
              className="resume-arrow"
              size={16}
              strokeWidth={2}
            />
          </NavLink>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            <span>Let's talk</span>
            <span className="cta-icon">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
