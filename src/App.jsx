import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

import ClientManagement from "./pages/projects/ClientManagement";
import TaskFlow from "./pages/projects/TaskFlow";
import LUXE from "./pages/projects/LUXE";
import RestoPro from "./pages/projects/RestoPro";
import Resume from "./pages/Resume";
import MovieApp from "./pages/projects/MovieApp";
import AnalyticsDashboard from "./pages/projects/AnalyticsDashboard";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />

          {/* Project pages */}
          <Route
            path="/work/movie-app"
            element={<MovieApp />}
          />

          <Route
            path="/work/analytics-dashboard"
            element={<AnalyticsDashboard />}
          />

          <Route
            path="/work/client-management"
            element={<ClientManagement />}
          />

          <Route
            path="/work/taskflow"
            element={<TaskFlow />}
          />

          <Route
            path="/work/luxe"
            element={<LUXE />}
          />

          <Route
            path="/work/restaurant-pos"
            element={<RestoPro />}
          />
          <Route path="/resume"
           element={<Resume />} 
           />
          <Route
            path="/work/movie-app"
            element={<MovieApp />}
          />
          {/* 404 page */}
          <Route
            path="*"
            element={
              <section className="not-found">
                 <p className="eyebrow">
                  404 — PAGE NOT FOUND
                </p>

                <h1>Oops! This page doesn't exist.</h1>

                <a className="button button-dark" href="/">
                  Back to home ↗
                </a>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
