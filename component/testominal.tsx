"use client";

import { useState, useEffect, useRef } from "react";
import FadeIn from "./scrollanimate";

const testimonials = [
  {
    id: 1,
    text: "I came here for laser hair removal and was honestly nervous at first. The staff made me feel relaxed and explained how the sessions would go. The treatment was smoother than expected and the results are showing slowly. I appreciate the calm and respectful environment.",
    name: "Swetha",
    treatment: "Laser Hair Removal",
    initial: "S",
    color: "#6d5b8f",
    colorBg: "rgba(109,91,143,0.08)",
  },
  {
    id: 2,
    text: "I'd been struggling with pigmentation for 3 years and tried everything. After just 2 sessions of Gluta + Collagen at Creator Clinic, I can genuinely see the difference. Dr. Sai was thorough and explained everything. I feel so much more confident.",
    name: "Anaya R",
    treatment: "Gluta + Collagen",
    initial: "A",
    color: "#2a9d8f",
    colorBg: "rgba(42,157,143,0.08)",
  },
  {
    id: 3,
    text: "HIFU changed my face. I was nervous about a non-surgical treatment but Dr. Sai explained every step and the results after few sessions speak for themselves. My jawline is so much more defined. Worth every rupee.",
    name: "Meera",
    treatment: "HIFU Treatment",
    initial: "M",
    color: "#c9a96e",
    colorBg: "rgba(201,169,110,0.08)",
  },
  {
    id: 4,
    text: "I took the 4-session Laser Hair Removal package and I'm never going back to waxing. The team was professional, it was barely painful, and the results are exactly what I was promised. Highly recommend the Creator Aesthetic Clinic.",
    name: "Priya K",
    treatment: "Laser Hair Removal",
    initial: "P",
    color: "#a78bfa",
    colorBg: "rgba(167,139,250,0.08)",
  },
  {
    id: 5,
    text: "The MNRF treatment for my acne scars was a game changer. I've had scars since my early 20s and after 3 sessions the texture of my skin completely changed. The clinic is clean, modern, and the staff make you feel comfortable.",
    name: "Rahul M",
    treatment: "MNRF Treatment",
    initial: "R",
    color: "#f97316",
    colorBg: "rgba(249,115,22,0.08)",
  },
];

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBC04">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC04"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(((idx % total) + total) % total);
      setAnimating(false);
    }, 300);
  };

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % total);
    }, 5000);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => setCurrent((p) => (p + 1) % total), 5000);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [total]);

  const prev = () => { goTo(current - 1); resetAuto(); };
  const next = () => { goTo(current + 1); resetAuto(); };

  const active = testimonials[current];

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap");

        .tm-wrap { font-family: "Outfit", sans-serif; }

        .tm-eyebrow-l { height:1px; width:60px; background:linear-gradient(90deg,transparent,#ec778d); }
        .tm-eyebrow-r { height:1px; width:60px; background:linear-gradient(90deg,#ec778d,transparent); }

        .tm-italic-teal {
          font-family: "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 700;
          background: linear-gradient(90deg, #6d5b8f, #ec778d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .tm-card-fade {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .tm-card-fade.out {
          opacity: 0;
          transform: translateY(10px);
        }
        .tm-card-fade.in {
          opacity: 1;
          transform: translateY(0);
        }

        .tm-arrow {
          transition: all 0.2s ease;
        }
        .tm-arrow:hover {
          background: rgba(109,91,143,0.08) !important;
          border-color: rgba(109,91,143,0.35) !important;
          color: #6d5b8f !important;
        }

        .tm-dot {
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          padding: 0;
        }

        .tm-mini-card {
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .tm-mini-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08) !important;
        }

        @keyframes tmQuotePulse {
          0%,100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .tm-quote-bg {
          animation: tmQuotePulse 4s ease-in-out infinite;
        }

        .tm-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent);
        }

        /* ── Media Queries ── */
        @media (max-width: 768px) {
          .tm-nav-row {
            flex-direction: column;
            align-items: center !important;
            gap: 14px !important;
          }
          .tm-quote-bg {
            font-size: 120px !important;
          }
        }

        @media (max-width: 480px) {
          .tm-card-inner {
            padding: 24px 20px !important;
          }
          .tm-quote-bg {
            font-size: 90px !important;
          }
          .tm-author-row {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }
      `}</style>

      <section id="testimonials" className="tm-wrap bg-white py-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">

          {/* ── TITLE BLOCK ── */}
          <FadeIn direction="up">
          <div className="text-center mb-9">
            <div className="flex items-center justify-center gap-4 mb-1">
              <div className="tm-eyebrow-l" />
              <span style={{ fontSize:"11px", fontWeight:600, letterSpacing:"3px", textTransform:"uppercase", color:"#6d5b8f" }}>
                Real Patients · Real Results
              </span>
              <div className="tm-eyebrow-r" />
            </div>
            <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(28px,5vw,45px)", fontWeight:700, color:"#111111", lineHeight:1.2, margin:"0 0 4px", letterSpacing:"-0.3px" }}>
              They Came In Curious.
            </h2>
            <h2 className="tm-italic-teal" style={{ fontSize:"clamp(18px,3vw,36px)", lineHeight:1.25, margin:"0 0 10px" }}>
              They Left Glowing.
            </h2>
            <p style={{ fontSize:"15px", color:"rgba(0,0,0,0.5)", maxWidth:"480px", margin:"0 auto", lineHeight:1.7, fontWeight:400 }}>
              These are the words of real patients from Creator Aesthetic Clinic, ECR.
            </p>
          </div>
          </FadeIn>

          {/* ── MAIN TESTIMONIAL CARD ── */}
          <FadeIn direction="up" delay={150}>
          <div className="relative mb-10">

            {/* Big decorative quote mark */}
            <div
              className="tm-quote-bg absolute select-none pointer-events-none"
              style={{ top:"-10px", left:"20px", fontSize:"180px", lineHeight:1, color:"#6d5b8f", fontFamily:"Georgia,serif", zIndex:0 }}
            >
              "
            </div>

            <div
              className={`tm-card-fade tm-card-inner relative z-10 rounded-3xl p-8 md:p-12 ${animating ? "out" : "in"}`}
              style={{
                background: "#fafafa",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
              }}
            >
              {/* Google + Stars row */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background:"rgba(66,133,244,0.06)", border:"1px solid rgba(66,133,244,0.15)" }}>
                  <GoogleIcon />
                  <span style={{ fontSize:"12px", fontWeight:700, color:"#3c4043" }}>Google Review</span>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <span style={{ fontSize:"13px", fontWeight:600, color:"#FBBC04" }}>5.0</span>
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontSize:"clamp(15px,2.2vw,20px)",
                  color:"#1a1a1a",
                  lineHeight:1.75,
                  marginBottom:"32px",
                  fontWeight:500,
                }}
              >
                "{active.text}"
              </p>

              {/* Author row */}
              <div className="tm-author-row flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ background:`linear-gradient(135deg, ${active.color}, ${active.color}99)` }}
                  >
                    {active.initial}
                  </div>
                  <div>
                    <div style={{ fontSize:"16px", fontWeight:700, color:"#111", fontFamily:"'Playfair Display',Georgia,serif" }}>
                      {active.name}
                    </div>
                    <div
                      className="inline-flex items-center gap-1.5 mt-1 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background:active.colorBg, color:active.color, border:`1px solid ${active.color}33` }}
                    >
                      <span style={{ width:5, height:5, borderRadius:"50%", background:active.color, display:"inline-block" }} />
                      {active.treatment}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── NAVIGATION ROW ── */}
          <div className="tm-nav-row flex items-center justify-between mb-6">

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                className="tm-arrow w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background:"rgba(0,0,0,0.04)", border:"1px solid rgba(0,0,0,0.1)", color:"#555", cursor:"pointer" }}
                onClick={prev}
                aria-label="Previous"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="tm-arrow w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background:"rgba(0,0,0,0.04)", border:"1px solid rgba(0,0,0,0.1)", color:"#555", cursor:"pointer" }}
                onClick={next}
                aria-label="Next"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className="tm-dot rounded-full"
                  style={{
                    height:"8px",
                    width: i === current ? "28px" : "8px",
                    borderRadius: i === current ? "4px" : "50%",
                    background: i === current ? "#6d5b8f" : "rgba(0,0,0,0.15)",
                    boxShadow: i === current ? "0 0 8px rgba(109,91,143,0.35)" : "none",
                  }}
                  onClick={() => { goTo(i); resetAuto(); }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div style={{ fontSize:"13px", color:"rgba(0,0,0,0.35)", fontWeight:500 }}>
              <span style={{ color:"#111", fontWeight:700 }}>{String(current + 1).padStart(2,"0")}</span>
              {" / "}
              {String(total).padStart(2,"0")}
            </div>
          </div>
          </FadeIn>

        </div>
      </section>
    </>
  );
}