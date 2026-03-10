"use client";

import Image from "next/image";
import FadeIn from "./scrollanimate";

const philosophyPoints = [
  {
    number: "01",
    title: "Diagnose before treating",
    desc: "Every patient receives a thorough clinical assessment before any treatment is recommended, no assumptions, no rush.",
  },
  {
    number: "02",
    title: "Educate, then decide",
    desc: "Dr. Sai explains the science behind every treatment in plain language so you understand exactly what is being done to your scalp and why.",
  },
  {
    number: "03",
    title: "No delegation",
    desc: "Every injection, every protocol, every follow-up is Dr. Sai — not a technician. Your result is her personal responsibility.",
  },
  {
    number: "04",
    title: "Real results over quick wins",
    desc: "Dr. Sai designs treatment plans for lasting outcomes, not temporary improvements that fade within months.",
  },
];

export default function DoctorSection() {
  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap");

        .doc-wrap { font-family: "Outfit", sans-serif; }

        .doc-eyebrow-l { height:1px; width:60px; background:linear-gradient(90deg,transparent,#ec778d); }
        .doc-eyebrow-r { height:1px; width:60px; background:linear-gradient(90deg,#ec778d,transparent); }

        .doc-italic-teal {
          font-family: "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 700;
          background: linear-gradient(90deg, #6d5b8f, #ec778d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .doc-phil-card {
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }
        .doc-phil-card:hover {
          border-left-color: #6d5b8f;
          background: rgba(109,91,143,0.03) !important;
          transform: translateX(4px);
        }

        @keyframes docShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .doc-badge-shimmer {
          background: linear-gradient(90deg, #5a4a7a 0%, #6d5b8f 40%, #ec778d 60%, #6d5b8f 80%, #5a4a7a 100%);
          background-size: 200% 100%;
          animation: docShimmer 3s linear infinite;
        }

        .doc-credential {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          background: rgba(109,91,143,0.08);
          border: 1px solid rgba(109,91,143,0.25);
          color: #6d5b8f;
          white-space: nowrap;
        }

        .doc-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent);
        }

        .doc-why-card { transition: box-shadow 0.3s, transform 0.3s; }
        .doc-why-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.09);
        }

        @keyframes docPulse {
          0%,100% { opacity:1; }
          50%      { opacity:0.3; }
        }
        .doc-live-dot {
          width: 7px; height: 7px;
          background: #6d5b8f;
          border-radius: 50%;
          animation: docPulse 1.6s ease-in-out infinite;
          display: inline-block;
          flex-shrink: 0;
        }

        .doc-img-secondary {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .doc-img-secondary:hover {
          transform: scale(1.03) translateY(-4px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.22) !important;
        }

        .vs-cta-buttonse {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 40px;
        }

        /* ── IMAGE WRAPPER ── */
        .doc-img-wrapper {
          position: relative;
          width: 100%;
          height: 600px;
        }

        /* ── FLOATING STAT CARD ── */
        .doc-stat-card {
          position: absolute;
          z-index: 30;
          left: -12px;
          top: 50%;
          transform: translateY(-50%);
          background: #ffffff;
          box-shadow: 0 8px 28px rgba(0,0,0,0.12);
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 16px;
          padding: 12px 16px;
          text-align: center;
          min-width: 80px;
        }

        /* ── CTA BUTTONS ── */
        .vs-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 50px;
          background: linear-gradient(90deg,#5a4a7a,#6d5b8f);
          color: white;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          white-space: nowrap;
        }

        .vs-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 50px;
          background: #f5f5f5;
          border: 1px solid rgba(0,0,0,0.1);
          color: #333;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          white-space: nowrap;
        }

        /* ════════════════════════════
           MEDIA QUERIES
        ════════════════════════════ */

        /* Tablet — ≤1024px */
        @media (max-width: 1024px) {
          .doc-img-wrapper {
            height: 480px;
            max-width: 500px;
            margin: 0 auto;
          }

          .doc-stat-card {
            left: 0px;
          }
        }

        /* Mobile large — ≤768px */
        @media (max-width: 768px) {
          .doc-img-wrapper {
            height: 420px;
            max-width: 100%;
          }

          .doc-stat-card {
            left: 8px;
            top: auto;
            bottom: 12px;
            transform: none;
          }

          .vs-cta-buttonse {
            align-items: center;
            gap: 10px;
            margin-top: 24px;
          }

          .vs-btn-primary,
          .vs-btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .doc-eyebrow-l,
          .doc-eyebrow-r {
            width: 32px;
          }
        }

        /* Mobile small — ≤480px */
        @media (max-width: 480px) {
          .doc-img-wrapper {
            height: 320px;
          }

          .doc-phil-card {
            padding: 12px 14px !important;
          }

          .doc-phil-card:hover {
            transform: none;
          }

          .doc-stat-card {
            padding: 8px 12px;
            min-width: 68px;
          }

          .doc-credential {
            font-size: 11px;
            padding: 4px 10px;
          }

          .vs-cta-buttonse {
            margin-top: 10px;
          }
        }
      `}</style>

      <section id="doctor" className="doc-wrap py-6 overflow-hidden" style={{ background: "#faf8ff" }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* ── 1. TITLE BLOCK ── */}
          <FadeIn direction="up">
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="doc-eyebrow-l" />
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#6d5b8f",
                }}
              >
                The Doctor Behind Your Results
              </span>
              <div className="doc-eyebrow-r" />
            </div>
            <h2
            className="doc-italic-teal"
              style={{
                fontFamily: "'Playfair Display',Georgia,serif",
                fontSize: "clamp(28px,5vw,48px)",
                fontWeight: 700,
                color: "#111111",
                lineHeight: 1.2,
                margin: "0 0 2px",
                letterSpacing: "-0.3px",
              }}
            >
              Meet Dr. Sai.
            </h2>
            {/* <h2
              className="doc-italic-teal"
              style={{
                fontSize: "clamp(18px,3.5vw,42px)",
                lineHeight: 1.25,
                margin: "0 0 8px",
              }}
            >
              Picture of the doctor at the left side
            </h2> */}
            <p
              style={{
                fontSize: "15px",
                color: "rgba(0,0,0,0.5)",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              Behind every hair transformation at Creator Aesthetic Clinic is a doctor who takes hair loss personally because she understands the confidence it costs you.
            </p>
          </div>
          </FadeIn>

          {/* ── 2. WHY CHOOSE HEADING ── */}
          <FadeIn direction="right" delay={100}>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{
                  width: "3px",
                  height: "32px",
                  background: "linear-gradient(to bottom,#6d5b8f,#ec778d)",
                  borderRadius: "2px",
                  flexShrink: 0,
                }}
              />
              <h3
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  fontSize: "clamp(18px,2.8vw,32px)",
                  fontWeight: 700,
                  color: "#111",
                  lineHeight: 1.2,
                }}
              >
                Why Choose Creator Aesthetic Clinic
              </h3>
            </div>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(0,0,0,0.55)",
                lineHeight: 1.8,
                fontWeight: 400,
                paddingLeft: "15px",
              }}
            >
              Real results come from the right diagnosis, the right technology,
              and the right hands.
            </p>
          </div>
          </FadeIn>

          {/* ── 3. DOCTOR IMAGES (left) + PHILOSOPHY (right) ── */}
          <FadeIn direction="up" delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT — Images */}
            <div className="flex justify-center lg:justify-start">
              <div className="doc-img-wrapper">
                {/* Purple glow */}
                <div
                  className="absolute rounded-full"
                  style={{
                    bottom: "-20px", left: "-20px",
                    width: "160px", height: "160px",
                    background: "radial-gradient(circle, rgba(109,91,143,0.18) 0%, transparent 70%)",
                    zIndex: 0,
                  }}
                />
                {/* Pink glow */}
                <div
                  className="absolute rounded-full"
                  style={{
                    top: "-10px", right: "-10px",
                    width: "120px", height: "120px",
                    background: "radial-gradient(circle, rgba(236,119,141,0.18) 0%, transparent 70%)",
                    zIndex: 0,
                  }}
                />

                {/* IMAGE 1 */}
                <div
                  className="absolute z-10 overflow-hidden"
                  style={{
                    top: 0, left: 0, width: "100%", height: "100%",
                    borderRadius: "120px 24px 24px 24px",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.14)",
                  }}
                >
                  <Image
                    src="/creatdoc.png"
                    alt="Dr. Sai — Creator Aesthetic Clinic"
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)" }}
                  />
                </div>

                {/* IMAGE 2 */}
                <div
                  className="doc-img-secondary absolute z-20 overflow-hidden"
                  style={{
                    bottom: "-20px", right: "-25px",
                    width: "46%", height: "48%",
                    borderRadius: "24px 24px 120px 24px",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
                    border: "4px solid #ffffff",
                  }}
                >
                  <Image
                    src="/2026-01-27.webp"
                    alt="Dr. Sai — Consultation"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)" }}
                  />
                </div>

                {/* Floating stat card */}
                <div className="doc-stat-card">
                  <div
                    style={{
                      fontFamily: "'Playfair Display',Georgia,serif",
                      fontSize: "22px", fontWeight: 700,
                      color: "#6d5b8f", lineHeight: 1,
                    }}
                  >
                    100%
                  </div>
                  <div
                    style={{
                      fontSize: "10px", color: "rgba(0,0,0,0.45)",
                      fontWeight: 500, marginTop: "4px", lineHeight: 1.3,
                    }}
                  >
                    Doctor-led<br />sessions
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Philosophy */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  style={{
                    width: "3px", height: "28px",
                    background: "linear-gradient(to bottom,#ec778d,rgba(236,119,141,0.3))",
                    borderRadius: "2px", flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "11px", fontWeight: 600,
                    letterSpacing: "2.5px", textTransform: "uppercase",
                    color: "#6d5b8f",
                  }}
                >
                  Our Approach
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  fontSize: "clamp(18px,2.5vw,30px)",
                  fontWeight: 700, color: "#111",
                  lineHeight: 1.25, marginBottom: "8px",
                }}
              >
                Creator Aesthetic Clinic Philosophy
              </h3>
              <p
                style={{
                  fontSize: "14px", color: "rgba(0,0,0,0.45)",
                  lineHeight: 1.8, marginBottom: "20px",
                }}
              >
                Four principles that guide every patient interaction — from
                first consultation to final result.
              </p>

              {/* Philosophy cards */}
              <div className="flex flex-col gap-3 mb-5">
                {philosophyPoints.map((p) => (
                  <div
                    key={p.number}
                    className="doc-phil-card flex items-start gap-4 px-5 py-4 rounded-2xl"
                    style={{ background: "#fafafa", border: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs"
                      style={{
                        background: "rgba(109,91,143,0.07)",
                        color: "#6d5b8f",
                        fontFamily: "'Playfair Display',serif",
                      }}
                    >
                      {p.number}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "15px", fontWeight: 700, color: "#111",
                          marginBottom: "4px",
                          fontFamily: "'Playfair Display',Georgia,serif",
                        }}
                      >
                        {p.title}
                      </div>
                      <p
                        style={{
                          fontSize: "13px", color: "rgba(0,0,0,0.52)",
                          lineHeight: 1.75, margin: 0,
                        }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeIn>

          {/* ── CTA Buttons ── */}
          <FadeIn direction="up" delay={100}>
          <div className="vs-cta-buttonse">
            <a href="#" onClick={e => { e.preventDefault(); window.dispatchEvent(new CustomEvent("open-booking-modal")); }} className="vs-btn-primary ">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
                  fill="white"
                />
              </svg>
              Book Your Consultation
            </a>
            <a href="tel:+91 63850 83099" className="vs-btn-secondary sh-cta-mobile-only">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
                  fill="#333"
                />
              </svg>
              Let's Talk
            </a>
          </div>
          </FadeIn>

        </div>
      </section>
    </>
  );
}