"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        .stt-btn {
          position: fixed;
          bottom: 65px;
          right: 18px;
          z-index: 999;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #6d5b8f 0%, #ec778d 100%);
          box-shadow: 0 4px 18px rgba(109,91,143,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .stt-btn.stt-hidden {
          opacity: 0;
          pointer-events: none;
          transform: translateY(12px);
        }
        .stt-btn.stt-visible {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        .stt-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(109,91,143,0.55);
        }
        @media (min-width: 768px) {
          .stt-btn { bottom: 28px; right: 28px; }
        }
      `}</style>

      <button
        className={`stt-btn ${visible ? "stt-visible" : "stt-hidden"}`}
        onClick={scrollTop}
        aria-label="Scroll to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 19V5M5 12l7-7 7 7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </>
  );
}
