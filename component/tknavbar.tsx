"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbars() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap");

        .nav-wrap { font-family: "Outfit", sans-serif; }

        @keyframes navShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .nav-call-btn {
          background: linear-gradient(90deg,#5a4a7a 0%,#6d5b8f 40%,#ec778d 60%,#6d5b8f 80%,#5a4a7a 100%);
          background-size: 200% 100%;
          animation: navShimmer 3s linear infinite;
          transition: box-shadow 0.3s, transform 0.2s;
        }
        .nav-call-btn:hover {
          box-shadow: 0 0 24px rgba(109,91,143,0.4);
          transform: translateY(-1px);
        }

        .nav-mobile-menu {
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          overflow: hidden;
        }
        .nav-mobile-menu.open  { max-height: 400px; opacity: 1; }
        .nav-mobile-menu.closed { max-height: 0; opacity: 0; }

        @keyframes navDotBlink {
          0%,100% { opacity:1; } 50% { opacity:0.2; }
        }
        .nav-dot {
          width: 6px; height: 6px;
          background: #6d5b8f;
          border-radius: 50%;
          animation: navDotBlink 1.5s ease-in-out infinite;
          display: inline-block;
          flex-shrink: 0;
        }
      `}</style>

      <header
        className="nav-wrap sticky top-0 z-50 bg-white"
        style={{ borderBottom:"1px solid rgba(0,0,0,0.07)", boxShadow:"0 2px 20px rgba(0,0,0,0.06)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-18 py-3">

            {/* ── LEFT — Logo ── */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative" style={{ width:"140px", height:"48px" }}>
                <Image
                  src="/Creator-Aesthetic-logo.png"
                  alt="Creator Aesthetic Clinic"
                  fill
                  style={{ objectFit:"contain", objectPosition:"left center" }}
                  priority
                />
              </div>
            </Link>

            {/* ── RIGHT — Call button ── */}
            <div className="flex items-center gap-3">

              {/* Call CTA button */}
              <a
                href="tel:+919876543210"
                className="nav-call-btn flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-sm border-none cursor-pointer no-underline"
                style={{ textDecoration:"none" }}
              >
                {/* Phone icon */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>+91 98765 43210</span>
              </a>

              {/* Mobile hamburger */}
              <button
                className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
                style={{ background:"none", border:"none" }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span
                  className="block rounded-full"
                  style={{
                    width:"22px", height:"2px",
                    background:"#111",
                    transition:"all 0.3s",
                    transform: menuOpen ? "rotate(45deg) translateY(5.5px)" : "none",
                  }}
                />
                <span
                  className="block rounded-full"
                  style={{
                    width:"22px", height:"2px",
                    background:"#111",
                    transition:"all 0.3s",
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  className="block rounded-full"
                  style={{
                    width:"22px", height:"2px",
                    background:"#111",
                    transition:"all 0.3s",
                    transform: menuOpen ? "rotate(-45deg) translateY(-5.5px)" : "none",
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <div className={`nav-mobile-menu ${menuOpen ? "open" : "closed"} md:hidden`}>
          <div className="max-w-6xl mx-auto px-6 pb-5" style={{ borderTop:"1px solid rgba(0,0,0,0.06)" }}>
            <a
              href="tel:+919876543210"
              className="nav-call-btn flex items-center justify-center gap-2 mt-4 py-3 rounded-full text-white font-semibold text-sm"
              style={{ textDecoration:"none" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +91 98765 43210
            </a>
          </div>
        </div>
      </header>
    </>
  );
}