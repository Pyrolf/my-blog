import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AnimatePresence } from "framer-motion";

export const MainLayout = () => (
  <div className="layout-wrapper">
    <Navbar />
    <main className="container">
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </main>
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} My Blog. Built with React, TypeScript &
          Framer Motion.
        </p>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="mailto:hello@example.com">Contact</a>
        </div>
      </div>
    </footer>
  </div>
);
