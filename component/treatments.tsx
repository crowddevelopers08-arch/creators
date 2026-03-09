"use client";

import { useState } from "react";
import FadeIn from "./scrollanimate";

const treatments = [
  {
    id: "red-light",
    number: "01",
    tag: "Skin Repair",
    name: "Red Light Therapy",
    subtitle: "A gentle light-based therapy that supports skin repair, radiance, and overall skin freshness.",
    description:
      "A gentle light-based therapy that supports skin repair, radiance, and overall skin freshness.",
    idealFor: [
      "Skin whitening & brightening",
      "Dull, tired-looking complexion",
      "Fine lines & loss of firmness",
      "Uneven skin tone or pigmentation",
    ],
    image: "/treatments.avif",
    imageAlt: "Red light therapy skin treatment session",
  },
  {
    id: "gluta",
    number: "02",
    tag: "Glow & Tone",
    name: "Gluta + Collagen Combo",
    subtitle: "A combination approach designed to support overall glow and an even, healthy-looking tone.",
    description:
      "A combination approach designed to support overall glow and an even, healthy-looking tone.",
    idealFor: [
      "Full-body skin brightening",
      "Dark patches or pigmentation",
      "Anti-ageing & skin rejuvenation",
      "Bridal glow preparation",
    ],
    image: "/treatments1.avif",
    imageAlt: "Gluta collagen skin brightening treatment",
  },
  {
    id: "hifu",
    number: "03",
    tag: "Non-Surgical Lift",
    name: "HIFU",
    subtitle: "High-intensity focused ultrasound designed to support firmness and tightening, especially for early sagging.",
    description:
      "High-intensity focused ultrasound designed to support firmness and tightening, especially for early sagging.",
    idealFor: [
      "Sagging jaw area",
      "Loose neck or double chin",
      "Overall facial tightening & contouring",
      "Ages 28–60 seeking a non-surgical lift",
    ],
    image: "/treatments2.avif",
    imageAlt: "HIFU facial tightening treatment",
  },
  {
    id: "mnrf",
    number: "04",
    tag: "Collagen Remodeling",
    name: "MNRF",
    subtitle: "Microneedling + radiofrequency technology that supports collagen remodeling for smoother-looking skin.",
    description:
      "Microneedling + radiofrequency technology that supports collagen remodeling for smoother-looking skin.",
    idealFor: [
      "Acne scars (ice pick, boxcar, rolling)",
      "Enlarged open pores",
      "Rough or uneven skin texture",
      "Stretch marks on face or body",
    ],
    image: "/treatments3.avif",
    imageAlt: "MNRF microneedling radiofrequency skin treatment",
  },
  {
    id: "lhr",
    number: "05",
    tag: "Permanent Reduction",
    name: "Laser Hair Removal",
    subtitle: "Reduce unwanted hair growth over time and say goodbye to frequent shaving and waxing.",
    description:
      "Reduce unwanted hair growth over time and say goodbye to frequent shaving and waxing.",
    idealFor: [
      "Unwanted hair on full body / specific areas",
      "Ingrown hair / razor bumps",
      "Underarm darkness due to shaving irritation",
      "People tired of repeated waxing",
    ],
    image: "/treatments4.avif",
    imageAlt: "Laser hair removal treatment session",
  },
];

function ContactForm() {
  return (
    <div className="mt-5 p-4 rounded-xl bg-white/[0.03] border border-white/10">
      <p
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#ec778d",
          marginBottom: 10,
        }}
      >
        Book a Consultation
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", gap: 8, marginTop: 2 }}>
          <a
            href="#consultation-form"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(90deg,#5a4a7a,#6d5b8f)",
              color: "white",
              fontWeight: 600,
              fontSize: 13,
              padding: "10px 0",
              borderRadius: 10,
              boxShadow: "0 4px 16px rgba(109,91,143,0.3)",
              textDecoration: "none",
            }}
          >
            Contact Us
          </a>
          <a
            href="tel:+919999999999"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "white",
              fontWeight: 600,
              fontSize: 13,
              padding: "10px 16px",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path
                d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
                fill="white"
              />
            </svg>
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </div>
  );
}

export default function SkinTreatments() {
  const [active, setActive] = useState("red-light");
  const current = treatments.find((t) => t.id === active) ?? treatments[0];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');

        .sk-root * { box-sizing: border-box; }
        .sk-root { font-family: 'Outfit', sans-serif; }
        .sk-serif { font-family: 'Cormorant Garamond', serif; }

        .sk-fade {
          animation: skFade 0.35s ease forwards;
        }
        @keyframes skFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sk-tab {
          flex: 1;
          text-align: left;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.02);
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .sk-tab:hover {
          border-color: rgba(255,255,255,0.16);
        }
        .sk-tab.active {
          border-color: rgba(109,91,143,0.55) !important;
          background: rgba(109,91,143,0.07) !important;
        }

        .sk-ideal li {
          position: relative;
          padding-left: 15px;
          color: rgba(255,255,255,0.62);
          font-size: 13px;
          line-height: 1.6;
        }
        .sk-ideal li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 5px;
          background: #6d5b8f;
          border-radius: 50%;
          box-shadow: 0 0 5px rgba(109,91,143,0.5);
        }

        .sk-img-wrap {
          position: relative;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          background: #111;
          min-height: 360px;
        }

        /* ── Tabs scroll on mobile ── */
        .sk-tabs-scroll {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 4px;
        }
        .sk-tabs-scroll::-webkit-scrollbar { display: none; }

        /* ── Media queries ── */
        @media (max-width: 1023px) {
          .sk-grid { grid-template-columns: 1fr !important; }
          .sk-img-wrap { min-height: 260px; }
        }

        @media (max-width: 580px) {
          .sk-tab {
            flex: 0 0 auto;
            min-width: 130px;
          }
          .sk-img-wrap { min-height: 220px; }
        }
      `}</style>

      <section id="skin-treatments" className="sk-root" style={{ background: "#080808", padding: "60px 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* ── Header ── */}
          <FadeIn direction="right">
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#6d5b8f", marginBottom: 10 }}>
              Skin Treatments
            </p>
            <h2 className="sk-serif" style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: 10 }}>
              Treatments For Every<br />
              <span style={{ color: "#ec778d" }}>Skin Goal.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 14, maxWidth: 480, lineHeight: 1.65 }}>
              Five treatments. Each designed for a specific skin concern. All supervised personally by Dr. Sai.
            </p>
          </div>
          </FadeIn>

          {/* ── Tabs (horizontal scroll on mobile) ── */}
          <FadeIn direction="up" delay={150}>
          <div className="sk-tabs-scroll">
            {treatments.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`sk-tab${active === t.id ? " active" : ""}`}
              >
                <span style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 3, color: active === t.id ? "#6d5b8f" : "rgba(255,255,255,0.25)" }}>
                  {t.number}
                </span>
                <span style={{ display: "block", fontSize: 13, fontWeight: 600, lineHeight: 1.35, color: active === t.id ? "#fff" : "rgba(255,255,255,0.48)" }}>
                  {t.name}
                </span>
                <span style={{ display: "block", fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 3, color: active === t.id ? "rgba(109,91,143,0.75)" : "rgba(255,255,255,0.18)" }}>
                  {t.tag}
                </span>
              </button>
            ))}
          </div>
          </FadeIn>

          {/* ── Card ── */}
          <FadeIn direction="up" delay={250}>
          <div
            key={active}
            className="sk-fade sk-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            {/* LEFT — Image */}
            <div className="sk-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.image}
                alt={current.imageAlt}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: 14, left: 14 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.78)", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.14)", padding: "5px 12px", borderRadius: 20, backdropFilter: "blur(6px)" }}>
                  {current.name}
                </span>
              </div>
            </div>

            {/* RIGHT — Content */}
            <div style={{ display: "flex", flexDirection: "column" }}>

              {/* number + tag */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#6d5b8f" }}>{current.number}</span>
                <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
                <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", padding: "4px 10px", borderRadius: 20 }}>
                  {current.tag}
                </span>
              </div>

              {/* title */}
              <h3 className="sk-serif" style={{ fontSize: "clamp(24px,3vw,32px)", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: 6 }}>
                {current.name}
              </h3>

              {/* subtitle */}
              <p style={{ color: "#ec778d", fontSize: 13, fontWeight: 500, lineHeight: 1.5, marginBottom: 12 }}>
                {current.subtitle}
              </p>

              {/* description */}
              <p style={{ color: "rgba(255,255,255,0.48)", fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>
                {current.description}
              </p>

              {/* ideal for */}
              <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "14px 16px" }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#6d5b8f", marginBottom: 10 }}>
                  Ideal For
                </p>
                <ul className="sk-ideal" style={{ display: "flex", flexDirection: "column", gap: 6, listStyle: "none", margin: 0, padding: 0 }}>
                  {current.idealFor.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* form */}
              <ContactForm />
            </div>
          </div>
          </FadeIn>

        </div>
      </section>
    </>
  );
}