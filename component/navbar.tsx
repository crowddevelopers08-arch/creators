"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "#treatments" },
  { label: "Hair Loss Stages", href: "#stages" },
  { label: "Results", href: "#results" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap");

        .nb-root {
          font-family: "Outfit", sans-serif;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          transition: background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
        }

        .nb-root.scrolled {
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 1px 0 rgba(109, 91, 143, 0.25), 0 4px 24px rgba(0, 0, 0, 0.5);
        }

        .nb-root.top {
          background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%);
        }

        .nb-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 10 24px;
          height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .nb-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .nb-logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #6d5b8f 0%, #ec778d 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 12px rgba(109, 91, 143, 0.5);
          flex-shrink: 0;
        }

        .nb-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .nb-logo-brand {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.3px;
        }

        .nb-logo-brand span {
          color: #6d5b8f;
        }

        .nb-logo-sub {
          font-size: 10px;
          font-weight: 400;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* Desktop nav links */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nb-link {
          position: relative;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }

        .nb-link::after {
          content: "";
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: calc(100% - 28px);
          height: 2px;
          background: #6d5b8f;
          border-radius: 2px;
          transition: transform 0.25s ease;
        }

        .nb-link:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.06);
        }

        .nb-link:hover::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* CTA Button */
        .nb-cta {
          position: relative;
          overflow: hidden;
          font-family: "Outfit", sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(90deg, #5a4a7a 0%, #6d5b8f 40%, #ec778d 60%, #6d5b8f 80%, #5a4a7a 100%);
          background-size: 200% 100%;
          border: none;
          border-radius: 50px;
          padding: 10px 22px;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
          animation: nb-shimmer 3s linear infinite;
          box-shadow: 0 0 0 0 rgba(109, 91, 143, 0.5);
          transition: box-shadow 0.3s;
        }

        .nb-cta:hover {
          box-shadow: 0 0 18px rgba(109, 91, 143, 0.7), 0 0 32px rgba(109, 91, 143, 0.35);
        }

        @keyframes nb-shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        /* Hamburger */
        .nb-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s;
        }

        .nb-hamburger:hover {
          background: rgba(255,255,255,0.12);
        }

        .nb-bar {
          display: block;
          width: 20px;
          height: 2px;
          background: #ffffff;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
          transform-origin: center;
        }

        .nb-hamburger.open .nb-bar:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .nb-hamburger.open .nb-bar:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .nb-hamburger.open .nb-bar:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile menu */
        .nb-mobile-menu {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          opacity: 0;
          background: rgba(10, 10, 10, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(109, 91, 143, 0.2);
        }

        .nb-mobile-menu.open {
          max-height: 480px;
          opacity: 1;
        }

        .nb-mobile-inner {
          padding: 16px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nb-mobile-link {
          font-family: "Outfit", sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid transparent;
          transition: color 0.2s, background 0.2s, border-color 0.2s;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nb-mobile-link:hover {
          color: #ffffff;
          background: rgba(109, 91, 143, 0.08);
          border-color: rgba(109, 91, 143, 0.2);
        }

        .nb-mobile-link::before {
          content: "";
          width: 6px;
          height: 6px;
          background: #6d5b8f;
          border-radius: 50%;
          flex-shrink: 0;
          opacity: 0.6;
          transition: opacity 0.2s;
        }

        .nb-mobile-link:hover::before {
          opacity: 1;
        }

        .nb-mobile-divider {
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 8px 0;
        }

        .nb-mobile-cta {
          margin-top: 4px;
          text-align: center;
          font-family: "Outfit", sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(90deg, #5a4a7a 0%, #6d5b8f 40%, #ec778d 60%, #6d5b8f 80%, #5a4a7a 100%);
          background-size: 200% 100%;
          border: none;
          border-radius: 12px;
          padding: 14px;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          animation: nb-shimmer 3s linear infinite;
          box-shadow: 0 4px 20px rgba(109, 91, 143, 0.35);
        }

        @media (max-width: 900px) {
          .nb-links,
          .nb-cta {
            display: none;
          }

          .nb-hamburger {
            display: flex;
          }
        }
      `}</style>

      <nav className={`nb-root ${scrolled ? "scrolled" : "top"}`}>
        <div className="nb-inner">
          {/* Logo */}
          <Link href="/" className="nb-logo">
            <Image
                src="/Creator-Aesthetic-logo.png"
                alt="CrowMedi Logo"
                width={160}
                height={52}
                style={{ objectFit: "contain", width: "160px", height: "52px" }}
              />  
          </Link>

          {/* Desktop links */}
          <ul className="nb-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="nb-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="#consultation" className="nb-cta">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="white"/>
            </svg>
            Book Free Consultation
          </a>

          {/* Hamburger */}
          <button
            className={`nb-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="nb-bar" />
            <span className="nb-bar" />
            <span className="nb-bar" />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`nb-mobile-menu ${menuOpen ? "open" : ""}`}>
          <div className="nb-mobile-inner">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nb-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="nb-mobile-divider" />
            <Link
              href="#consultation"
              className="nb-mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="white"/>
              </svg>
              Book Free Consultation
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
