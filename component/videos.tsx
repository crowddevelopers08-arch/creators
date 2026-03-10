"use client";

import React, { useState, useRef, useEffect } from "react";
import FadeIn from "./scrollanimate";

const REELS = [
  { id: "DTtoZAWk006" },
  { id: "DUQaHBDjPLM" },
  // { id: "DUanIVik-XF" },
  { id: "DU5n-l1EwWh" },
  { id: "DVQmGObDCei" },
];

function IgIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
    </svg>
  );
}

function ReelCard({ id }: { id: string }) {
  return (
    <div className="vs-card">
      <div className="vs-iframe-wrap">
        <iframe
          src={`https://www.instagram.com/reel/${id}/embed/`}
          allowFullScreen
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title={`Instagram Reel ${id}`}
        />
      </div>
      <div className="vs-card-footer">
        <div className="vs-ig-badge"><IgIcon /></div>
        <span className="vs-card-title">Watch on Instagram</span>
      </div>
    </div>
  );
}

export default function VideoSection() {
  const [current, setCurrent] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const check = () => setIsMobileView(window.innerWidth <= 580);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Desktop shows 3 at a time, mobile shows 1
  // Max index = total - visible
  const desktopVisible = 3;
  const mobileVisible = 1;
  const maxDesktop = REELS.length - desktopVisible; // 2
  const maxMobile = REELS.length - mobileVisible;   // 4

  const prev = (isMobile: boolean) => {
    const max = isMobile ? maxMobile : maxDesktop;
    setCurrent((c) => (c === 0 ? max : c - 1));
  };
  const next = (isMobile: boolean) => {
    const max = isMobile ? maxMobile : maxDesktop;
    setCurrent((c) => (c >= max ? 0 : c + 1));
  };

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next(true) : prev(true);
    touchStartX.current = null;
  };

  // Desktop offset: each slide = 100/3 %
  const desktopOffset = current * (100 / desktopVisible);
  // Mobile offset: each slide = 100%
  const mobileOffset = current * 100;
  const offset = isMobileView ? mobileOffset : desktopOffset;

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap");

        .vs-wrap {
          font-family: "Outfit", sans-serif;
          background: #ffffff;
          padding: 40px 0 90px;
        }

        .vs-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Header ── */
        .vs-eyebrow-row {
          display: flex; align-items: center;
          justify-content: center; gap: 16px; margin-bottom: 8px;
        }
        .vs-line { height: 1px; width: 60px; }
        .vs-line-l { background: linear-gradient(90deg, transparent, #ec778d); }
        .vs-line-r { background: linear-gradient(90deg, #ec778d, transparent); }

        .vs-eyebrow-text {
          font-size: 11px; font-weight: 600;
          letter-spacing: 3px; text-transform: uppercase; color: #6d5b8f;
        }

        .vs-headline-black {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(24px, 4vw, 38px);
          font-weight: 700; color: #111111;
          line-height: 1.2; text-align: center;
          margin: 0 0 4px; letter-spacing: -0.3px;
        }

        .vs-headline-italic {
          font-family: "Playfair Display", Georgia, serif;
          font-style: italic; font-weight: 700;
          font-size: clamp(22px, 3.8vw, 36px);
          background: linear-gradient(90deg, #6d5b8f, #ec778d);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; text-align: center;
          line-height: 1.25; margin: 0 0 14px;
        }

        .vs-subtext {
          font-size: 15px; color: rgba(0,0,0,0.48);
          max-width: 640px; margin: 0 auto 48px;
          line-height: 1.7; text-align: center;
        }

        /* ── Card ── */
        .vs-card {
          border-radius: 20px; overflow: hidden;
          background: #f9f9f9; border: 1px solid rgba(0,0,0,0.07);
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .vs-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }
        .vs-iframe-wrap {
          position: relative; width: 100%;
          background: #000; aspect-ratio: 9 / 16; overflow: hidden;
        }
        .vs-iframe-wrap iframe {
          width: 100%; height: 100%; border: none; display: block;
        }
        .vs-card-footer {
          padding: 16px 18px; display: flex; align-items: center; gap: 12px;
        }
        .vs-ig-badge {
          flex-shrink: 0; width: 32px; height: 32px; border-radius: 8px;
          background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          display: flex; align-items: center; justify-content: center;
        }
        .vs-card-title { font-size: 13px; font-weight: 600; color: #1a1a1a; line-height: 1.4; }

        /* ── Shared carousel container ── */
        .vs-carousel-outer { overflow: hidden; border-radius: 20px; }
        .vs-carousel-track {
          display: flex;
          transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ── Desktop: show 3 slides at a time ── */
        .vs-carousel-track .vs-slide {
          flex: 0 0 calc(100% / 3);
          padding: 0 10px;
          box-sizing: border-box;
        }

        /* ── Controls ── */
        .vs-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 24px;
        }

        .vs-dots {
          display: flex;
          justify-content: center;
          gap: 7px;
        }

        .vs-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: rgba(0,0,0,0.15);
          border: none; padding: 0;
          cursor: pointer;
          transition: background 0.25s, transform 0.25s;
        }
        .vs-dot.active {
          background: #6d5b8f;
          transform: scale(1.35);
        }

        .vs-arrow {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1.5px solid rgba(0,0,0,0.12);
          background: #fff; display: flex; align-items: center;
          justify-content: center; cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
        }
        .vs-arrow:hover {
          border-color: #6d5b8f;
          box-shadow: 0 0 12px rgba(109,91,143,0.25);
        }

        .vs-counter {
          font-size: 12px;
          font-weight: 600;
          color: rgba(0,0,0,0.38);
          min-width: 40px;
          text-align: center;
        }

        /* ── CTA strip ── */
        .vs-cta-strip {
          margin-top: 48px; padding: 24px 32px;
          background: #f4f4f4; border-radius: 20px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px; flex-wrap: wrap;
        }
        .vs-cta-heading { font-size: 18px; font-weight: 700; color: #111111; margin-bottom: 4px; }
        .vs-cta-sub { font-size: 13px; color: rgba(0,0,0,0.45); }
        .vs-cta-buttons { display: flex; gap: 12px; flex-wrap: wrap; }

        .vs-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: "Outfit", sans-serif; font-size: 14px; font-weight: 600; color: #fff;
          background: linear-gradient(90deg, #5a4a7a 0%, #6d5b8f 40%, #ec778d 60%, #6d5b8f 80%, #5a4a7a 100%);
          background-size: 200% 100%; border: none; border-radius: 50px;
          padding: 12px 24px; cursor: pointer; text-decoration: none;
          animation: vs-shimmer 3s linear infinite;
          transition: box-shadow 0.3s; white-space: nowrap;
        }
        .vs-btn-primary:hover { box-shadow: 0 0 20px rgba(109,91,143,0.4); }

        @keyframes vs-shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        .vs-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: "Outfit", sans-serif; font-size: 14px; font-weight: 600;
          color: #333; background: #fff; border: 1.5px solid rgba(0,0,0,0.15);
          border-radius: 50px; padding: 12px 24px;
          cursor: pointer; text-decoration: none;
          transition: border-color 0.2s, box-shadow 0.2s; white-space: nowrap;
        }
        .vs-btn-secondary:hover { border-color: rgba(0,0,0,0.3); box-shadow: 0 4px 16px rgba(0,0,0,0.08); }

        /* ════════════════════════════════
           MEDIA QUERIES
        ════════════════════════════════ */

        @media (max-width: 1024px) {
          .vs-wrap { padding: 40px 0 70px; }
        }

        /* Tablet: show 2 slides at a time */
        @media (max-width: 900px) {
          .vs-carousel-track .vs-slide {
            flex: 0 0 50%;
          }
          .vs-cta-strip { flex-direction: column; align-items: flex-start; gap: 16px; }
          .vs-cta-buttons { width: 100%; }
          .vs-btn-primary, .vs-btn-secondary { flex: 1; justify-content: center; }
        }

        /* Mobile: show 1 slide at a time */
        @media (max-width: 580px) {
          .vs-wrap { padding: 17px 0 36px;}
          .vs-container { padding: 0 16px; }
          .vs-subtext { font-size: 14px; margin-bottom: 28px; }

          .vs-carousel-track .vs-slide {
            flex: 0 0 100%;
            padding: 0;
          }
          .vs-card:hover { transform: none; }
          .vs-cta-strip { padding: 18px 16px; border-radius: 16px; margin-top: 32px; }
          .vs-cta-heading { font-size: 16px; }
          .vs-cta-buttons { flex-direction: column; width: 100%; }
          .vs-btn-primary, .vs-btn-secondary {
            width: 100%; justify-content: center; padding: 12px 20px;
          }
        }

        @media (max-width: 400px) {
          .vs-card-footer { padding: 12px 14px; }
          .vs-card-title { font-size: 12px; }
          .vs-ig-badge { width: 28px; height: 28px; }
        }

        @media (min-width: 641px) {
          .vs-call-wrapper { display: none !important; }
        }
      `}</style>

      <section className="vs-wrap">
        <div className="vs-container">

          {/* ── Header ── */}
          <FadeIn direction="up">
          <div className="vs-eyebrow-row">
            <div className="vs-line vs-line-l" />
            <span className="vs-eyebrow-text">Watch Before You Book</span>
            <div className="vs-line vs-line-r" />
          </div>

          <h2 className="vs-headline-black">Learn From Dr. Sai.</h2>
          <h2 className="vs-headline-italic">Honest. Real. No filters.</h2>

          <p className="vs-subtext">
            Short, honest videos from Dr. Sai and our team, answering common questions, and showing you exactly what to expect before you walk in.
          </p>
          </FadeIn>

          {/* ── Universal Carousel ── */}
          <FadeIn direction="up" delay={150}>
          <div
            className="vs-carousel-outer"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="vs-carousel-track"
              style={{ transform: `translateX(-${offset}%)` }}
            >
              {REELS.map((r) => (
                <div key={r.id} className="vs-slide">
                  <ReelCard id={r.id} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Controls ── */}
          <div className="vs-controls">
            <button className="vs-arrow" onClick={() => prev(isMobileView)} aria-label="Previous">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="vs-dots">
              {REELS.map((_, i) => (
                <button
                  key={i}
                  className={`vs-dot${i === current ? " active" : ""}`}
                  onClick={() => setCurrent(isMobileView ? i : Math.min(i, maxDesktop))}
                  aria-label={`Go to reel ${i + 1}`}
                />
              ))}
            </div>

            <span className="vs-counter">{current + 1} / {REELS.length}</span>

            <button className="vs-arrow" onClick={() => next(isMobileView)} aria-label="Next">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          </FadeIn>

          {/* ── CTA strip ── */}
          <FadeIn direction="up" delay={100}>
          <div className="vs-cta-strip">
            <div>
              <div className="vs-cta-heading">Ready to take the first step?</div>
              <div className="vs-cta-sub">Book Your consultation with Dr. Sai — no pressure, just answers.</div>
            </div>
            <div className="vs-cta-buttons">
              <a href="#" onClick={e => { e.preventDefault(); window.dispatchEvent(new CustomEvent("open-booking-modal")); }} className="vs-btn-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="white"/>
                </svg>
                Book Your Consultation
              </a>
              <div className="vs-call-wrapper">
              <a href="tel:+919876543210" className="vs-btn-secondary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="#333"/>
                </svg>
                Let's Talk
              </a>
              </div>
            </div>
          </div>
          </FadeIn>

        </div>
      </section>
    </>
  );
}