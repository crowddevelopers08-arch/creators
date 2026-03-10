// components/SkinHeroSection.tsx (updated)
"use client";

import { useState, useEffect } from "react";
import SkinHeroForm from "./skinheroform";

const BG_IMAGES = [
  "/female-doctor.jpg",
  "/contact.avif",
];

const TRUST_BADGES = [
  {
    text: "US-FDA Approved Machines",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" fill="currentColor" stroke="none" opacity="0.15"/>
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/>
        <path d="M9 12l2 2 4-4" strokeWidth={2} stroke="currentColor"/>
      </svg>
    ),
  },
  {
    text: "Doctor Supervised Every Session",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6v0a6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3"/>
        <path d="M8 15v1a6 6 0 006 6h0a6 6 0 006-6v-4"/>
        <circle cx="20" cy="10" r="2"/>
        <path d="M12 6v4M10 8h4"/>
      </svg>
    ),
  },
  {
    text: "Less Downtime Treatments",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" opacity="0.12"/>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    text: "ECR's Premier Aethetic Clinic",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 010-5C7 4 12 2 12 2s5 2 7.5 2a2.5 2.5 0 010 5H18"/>
        <path d="M6 9l1.5 9h9L18 9" fill="currentColor" opacity="0.12"/>
        <path d="M6 9l1.5 9h9L18 9"/>
        <path d="M9 17h6"/>
        <path d="M12 12v5"/>
      </svg>
    ),
  },
];

export default function SkinHeroSection() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((i) => (i + 1) % BG_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        .sh-root { font-family: 'Outfit', sans-serif; }

        @keyframes sh-kenburns {
          0%   { transform: scale(1)    translateX(0px)   translateY(0px); }
          33%  { transform: scale(1.06) translateX(-12px) translateY(-6px); }
          66%  { transform: scale(1.1)  translateX(10px)  translateY(-10px); }
          100% { transform: scale(1)    translateX(0px)   translateY(0px); }
        }

        .sh-bg {
          position: relative;
          overflow: hidden;
        }

        .sh-bg-img {
          position: absolute;
          inset: -4%;
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          animation: sh-kenburns 18s ease-in-out infinite;
          will-change: transform, opacity;
          transition: opacity 1.5s ease-in-out;
        }
        .sh-bg-img.active { opacity: 1; }
        .sh-bg-img.inactive { opacity: 0; }

        .sh-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, rgba(10,10,10,0.88) 0%, rgba(17,13,26,0.82) 50%, rgba(10,10,10,0.92) 100%);
          pointer-events: none;
        }

        .sh-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        @keyframes sh-pulse {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50%       { opacity: 0.22; transform: scale(1.08); }
        }

        .sh-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: sh-pulse 4s ease-in-out infinite;
        }
        .sh-orb-1 {
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(109,91,143,0.22) 0%, transparent 70%);
          top: -120px; left: -160px;
        }
        .sh-orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(109,91,143,0.15) 0%, transparent 70%);
          bottom: -100px; right: -100px;
          animation-delay: 2s;
        }

        .sh-tagline {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(109,91,143,0.3);
          background: rgba(109,91,143,0.08);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          backdrop-filter: blur(8px);
        }

        .sh-dot {
          width: 7px; height: 7px;
          background: #6d5b8f;
          border-radius: 50%;
          animation: sh-blink 1.4s ease-in-out infinite;
        }

        @keyframes sh-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }

        .sh-headline {
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 900;
          line-height: 1.1;
          color: #ffffff;
          letter-spacing: -1px;
        }
        .sh-headline-accent { color: #6d5b8f; }

        .sh-rating-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .sh-stars { display: flex; gap: 2px; }
        .sh-star { width: 20px; height: 20px; fill: #FBBC04; }
        .sh-rating-score { font-size: 20px; font-weight: 800; color: #ffffff; line-height: 1; }
        .sh-rating-label {
          display: flex; align-items: center; gap: 6px;
          color: rgba(255,255,255,0.55); font-size: 13px; font-weight: 500;
        }

        .sh-badge-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .sh-badge {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          color: rgba(255,255,255,0.85);
          font-size: 13px; font-weight: 500;
          transition: background 0.2s, border-color 0.2s;
        }
        .sh-badge:hover {
          background: rgba(109,91,143,0.1);
          border-color: rgba(109,91,143,0.3);
        }
        .sh-badge-icon {
          width: 26px; height: 26px; flex-shrink: 0;
          color: rgba(255,255,255,0.7);
          transition: color 0.2s ease, filter 0.2s ease, transform 0.2s ease;
        }
        .sh-badge:hover .sh-badge-icon {
          color: #6d5b8f;
          filter: drop-shadow(0 0 5px rgba(109,91,143,0.55));
          transform: scale(1.15);
        }

        /* ── Form card ── */
        .sh-card {
          background: #ffffff;
          border-radius: 22px;
          padding: 32px 28px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(109,91,143,0.08);
        }
        .sh-card-title { font-size: 20px; font-weight: 800; color: #1a1a1a; text-align: center; margin-bottom: 4px; }
        .sh-card-sub { font-size: 13px; color: #6b7280; text-align: center; margin-bottom: 22px; }

        .sh-field { margin-bottom: 14px; }
        .sh-label {
          display: block; font-size: 11px; font-weight: 700;
          letter-spacing: 0.8px; text-transform: uppercase;
          color: #9ca3af; margin-bottom: 5px;
        }
        .sh-input {
          width: 100%; padding: 11px 14px;
          border: 1.5px solid #e5e7eb; border-radius: 10px;
          font-size: 14px; color: #111827; background: #f9fafb;
          outline: none; font-family: 'Outfit', sans-serif;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          box-sizing: border-box;
        }
        .sh-input::placeholder { color: #c0c4cc; }
        .sh-input:focus {
          border-color: #6d5b8f; background: #ffffff;
          box-shadow: 0 0 0 3px rgba(109,91,143,0.08);
        }

        .sh-textarea {
          width: 100%; padding: 11px 14px;
          border: 1.5px solid #e5e7eb; border-radius: 10px;
          font-size: 14px; color: #111827; background: #f9fafb;
          outline: none; font-family: 'Outfit', sans-serif;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          box-sizing: border-box; resize: none;
          min-height: 90px;
        }
        .sh-textarea::placeholder { color: #c0c4cc; }
        .sh-textarea:focus {
          border-color: #6d5b8f; background: #ffffff;
          box-shadow: 0 0 0 3px rgba(109,91,143,0.08);
        }

        .sh-terms {
          font-size: 11px; color: #9ca3af;
          text-align: center; margin-bottom: 14px; line-height: 1.5;
        }
        .sh-terms a { color: #6d5b8f; text-decoration: underline; cursor: pointer; }

        .sh-success {
          margin-bottom: 16px; padding: 12px 16px;
          background: #f0fdf4; border: 1px solid #bbf7d0;
          border-radius: 10px; color: #15803d;
          font-size: 13px; font-weight: 600; text-align: center;
        }

        .sh-submit {
          width: 100%; padding: 14px 24px; border: none;
          border-radius: 50px; font-family: 'Outfit', sans-serif;
          font-size: 15px; font-weight: 700; letter-spacing: 0.3px;
          cursor: pointer;
          background: linear-gradient(135deg, #6d5b8f 0%, #5a4a7a 100%);
          color: #ffffff;
          box-shadow: 0 5px 18px rgba(109,91,143,0.38);
          transition: all 0.2s ease;
        }
        .sh-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(109,91,143,0.5);
        }
        .sh-submit:disabled { opacity: 0.55; cursor: not-allowed; }

        /* ── CTA Buttons ── */
        .sh-cta-row { display: flex; gap: 12px; width: 100%; }

        @keyframes sh-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes sh-glow-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(109,91,143,0.5), 0 6px 20px rgba(109,91,143,0.35); }
          50%       { box-shadow: 0 0 0 6px rgba(109,91,143,0), 0 6px 24px rgba(109,91,143,0.5); }
        }

        .sh-cta-primary {
          position: relative; display: inline-flex; align-items: center;
          gap: 8px; padding: 13px 24px; border: none; border-radius: 50px;
          font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 700;
          letter-spacing: 0.4px; color: #ffffff; cursor: pointer;
          text-decoration: none; overflow: hidden;
          background: linear-gradient(90deg, #6d5b8f 0%, #ff3b3b 30%, #6d5b8f 50%, #5a4a7a 70%, #6d5b8f 100%);
          background-size: 200% auto;
          animation: sh-shimmer 3s linear infinite, sh-glow-ring 2.5s ease-in-out infinite;
          transition: transform 0.2s ease; white-space: nowrap;
          width: 100%; justify-content: center;
        }
        .sh-cta-primary:hover {
          transform: translateY(-3px) scale(1.02);
          animation: sh-shimmer 1.5s linear infinite, sh-glow-ring 2.5s ease-in-out infinite;
        }
        .sh-cta-primary::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%);
          background-size: 200% auto;
          animation: sh-shimmer 2s linear infinite;
          pointer-events: none;
        }

        .sh-cta-secondary {
          position: relative; display: inline-flex; align-items: center;
          gap: 8px; padding: 13px 24px; border-radius: 50px;
          font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 700;
          letter-spacing: 0.4px; color: #ffffff; cursor: pointer;
          text-decoration: none; overflow: hidden;
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(8px);
          transition: all 0.25s ease; white-space: nowrap;
          width: 100%; justify-content: center;
        }
        .sh-cta-secondary:hover {
          border-color: rgba(109,91,143,0.6);
          background: rgba(109,91,143,0.1);
          color: #ffffff; transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(109,91,143,0.2);
        }

        .sh-cta-icon { flex-shrink: 0; transition: transform 0.2s ease; }
        .sh-cta-primary:hover .sh-cta-icon  { transform: translateX(3px); }
        .sh-cta-secondary:hover .sh-cta-icon { transform: rotate(-8deg) scale(1.15); }

        @media (max-width: 640px) {
          .sh-badge-grid { grid-template-columns: 1fr; }
          .sh-card { padding: 24px 18px; }
          .sh-cta-primary, .sh-cta-secondary { font-size: 13px; padding: 12px 20px; }
        }

        @media (min-width: 641px) {
          .sh-cta-mobile-only { display: none !important; }
        }
      `}</style>

      <section className="sh-root sh-bg flex items-center max-sm:pt-22 py-10 lg:pt-25" style={{ scrollMarginTop: "70px" }}>
        {BG_IMAGES.map((src, i) => (
          <div
            key={src}
            className={`sh-bg-img ${i === bgIndex ? "active" : "inactive"}`}
            style={{
              backgroundImage: `url('${src}')`,
              animationDelay: `${i * -4.5}s`,
            }}
          />
        ))}
        <div className="sh-bg-overlay" />
        <div className="sh-grid-overlay" />
        <div className="sh-orb sh-orb-1" />
        <div className="sh-orb sh-orb-2" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch max-sm:gap-8 lg:gap-10 xl:gap-16">

            {/* ─── LEFT ─── */}
            <div className="lg:w-1/2 w-full flex flex-col gap-7">

              {/* Tagline */}
              <div>
                <span className="sh-tagline">
                  <span className="sh-dot" />
                  Doctor-Led Aethetic Clinic
                  <span style={{ color: "rgba(109,91,143,0.7)", fontWeight: 800 }}>·</span>
                  ECR Chennai
                </span>
              </div>

              {/* Headline */}
              <h1 className="sh-headline">
                Ready to take your
                <br />
                <span className="sh-headline-accent">best decision</span>
                <br />
                of your life.
              </h1>

              {/* Subtext */}
              <p style={{ color: "rgba(255,255,255,0.52)", fontSize: 15, lineHeight: 1.75, maxWidth: 480, fontWeight: 400 }}>
                Advanced skin treatments by Dr. Sai. From deep lifting with HIFU to full-body brightening, every treatment is medically guided, clinically proven, and designed for visible results.
              </p>

              {/* Google Rating */}
              <div className="sh-rating-row">
                <div className="sh-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="sh-star" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="sh-rating-score">5.0</span>
                <span className="sh-rating-label">
                  <svg viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google Rating
                </span>
              </div>

              {/* Trust Badges */}
              <div className="sh-badge-grid">
                {TRUST_BADGES.map(({ svg, text }) => (
                  <div key={text} className="sh-badge">
                    <span className="sh-badge-icon">{svg}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="sh-cta-row">
                <a href="#" onClick={e => { e.preventDefault(); window.dispatchEvent(new CustomEvent("open-booking-modal")); }} className="sh-cta-primary">
                  Book Your Consultation
                </a>
                <a href="tel:+916385083099" className="sh-cta-secondary sh-cta-mobile-only">
                  <svg className="sh-cta-icon" style={{ width: 16, height: 16 }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Let&apos;s Talk
                </a>
              </div>
            </div>

            {/* ─── RIGHT - FORM ─── */}
            <div className="lg:w-1/2 w-full">
              <div className="sh-card">
                <h2 className="sh-card-title">Book Your{" "}<span style={{ color: "#6d5b8f" }}>Consultation</span></h2>
                <p className="sh-card-sub">Whatever your concern, we have a solution!</p>
                <SkinHeroForm inline />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global booking modal */}
      <SkinHeroForm />
    </>
  );
}