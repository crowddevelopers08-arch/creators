"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    q: "Are these treatments safe for Indian skin tones?",
    a: "Yes. All treatments at Creator Aesthetic Clinic are selected and calibrated specifically for Indian skin types (Fitzpatrick III–V). Dr. Sai customises every treatment protocol for your skin tone, concerns, and goals.",
    category: "Safety",
  },
  {
    id: 2,
    q: "How many sessions of HIFU do I need?",
    a: "Most patients see significant results after a single HIFU session. Results continue to improve over 2–3 months. A follow-up session is typically recommended after 12–18 months to maintain the lifting effect.",
    category: "Sessions",
  },
  {
    id: 3,
    q: "Is the Gluta + Collagen Combo an injection?",
    a: "It is administered as an IV infusion — not a painful injection. A small cannula is placed once and the drip runs over 20–30 minutes. It is painless and medically supervised throughout.",
    category: "Procedure",
  },
  {
    id: 4,
    q: "What is the downtime after MNRF?",
    a: "Mild redness and slight swelling are normal for 24–48 hours after MNRF. Most patients are comfortable returning to work and daily activities the following day. Sun protection is important for the first week.",
    category: "Recovery",
  },
  {
    id: 5,
    q: "How many laser hair removal sessions will I need?",
    a: "We recommend a course of 4–6 sessions spaced 4–6 weeks apart for full body hair removal. The 4-session package at ₹51,999 covers the core treatment course for most patients.",
    category: "Sessions",
  },
  {
    id: 6,
    q: "Will I see results from Red Light Therapy after one session?",
    a: "Many patients notice a glow and improved radiance after a single session. Best results for firmness and whitening are seen over a course of 4–6 sessions. Single sessions are available for maintenance glow.",
    category: "Results",
  },
  {
    id: 7,
    q: "Where is the clinic located?",
    a: "Creator Aesthetic Clinic is located at First Floor, No. 6A, East Coast Road, Rajendra Garden, Vettuvankeni, Chennai — 600115. Easily accessible from ECR, Adyar, OMR, and South Chennai.",
    category: "Clinic",
  },
  {
    id: 8,
    q: "Can I combine multiple treatments in the same visit?",
    a: "Yes. Many patients combine treatments for maximum results — for example, Red Light Therapy after MNRF to support recovery, or Gluta + Collagen alongside Laser Hair Removal. Dr. Sai will assess your skin and design a safe, effective combination plan tailored to your goals.",
    category: "Treatment",
  },
];

const categoryColors: Record<string, { color: string; bg: string; border: string }> = {
  Safety:    { color: "#9b88c2", bg: "rgba(155,136,194,0.08)",  border: "rgba(155,136,194,0.2)" },
  Sessions:  { color: "#ec778d", bg: "rgba(236,119,141,0.08)",  border: "rgba(236,119,141,0.2)" },
  Procedure: { color: "#6d5b8f", bg: "rgba(109,91,143,0.08)",   border: "rgba(109,91,143,0.2)" },
  Recovery:  { color: "#d95f76", bg: "rgba(217,95,118,0.08)",   border: "rgba(217,95,118,0.2)" },
  Results:   { color: "#f2a0b5", bg: "rgba(242,160,181,0.08)",  border: "rgba(242,160,181,0.2)" },
  Treatment: { color: "#6d5b8f", bg: "rgba(109,91,143,0.08)",   border: "rgba(109,91,143,0.2)" },
  Clinic:    { color: "#5a4a7a", bg: "rgba(90,74,122,0.08)",    border: "rgba(90,74,122,0.2)" },
};

export default function SkinFAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap");

        .sfaq-wrap { font-family: "Outfit", sans-serif; }
        .sfaq-eyebrow-l { height:1px; width:60px; background:linear-gradient(90deg,transparent,#ec778d); }
        .sfaq-eyebrow-r { height:1px; width:60px; background:linear-gradient(90deg,#ec778d,transparent); }

        .sfaq-italic-teal {
          font-family: "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 700;
          background: linear-gradient(90deg, #6d5b8f, #ec778d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sfaq-card {
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .sfaq-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(109,91,143,0.03), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .sfaq-card:hover::before,
        .sfaq-card.open::before { opacity: 1; }
        .sfaq-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.1) !important;
          border-color: rgba(109,91,143,0.2) !important;
        }
        .sfaq-card.open {
          box-shadow: 0 20px 56px rgba(0,0,0,0.1) !important;
          border-color: rgba(109,91,143,0.25) !important;
        }

        .sfaq-answer {
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
        }
        .sfaq-answer.open   { max-height: 300px; opacity: 1; }
        .sfaq-answer.closed { max-height: 0; opacity: 0; }

        .sfaq-num {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 48px;
          font-weight: 700;
          line-height: 1;
          position: absolute;
          top: 16px;
          right: 20px;
          opacity: 0.06;
          color: #111;
          pointer-events: none;
          transition: opacity 0.3s;
        }
        .sfaq-card:hover .sfaq-num,
        .sfaq-card.open  .sfaq-num { opacity: 0.12; }

        .sfaq-icon {
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          flex-shrink: 0;
        }
        .sfaq-icon.open { transform: rotate(180deg); }

        @keyframes sfaqShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .sfaq-cta {
          background: linear-gradient(90deg,#5a4a7a 0%,#6d5b8f 40%,#ec778d 60%,#6d5b8f 80%,#5a4a7a 100%);
          background-size: 200% 100%;
          animation: sfaqShimmer 3s linear infinite;
        }
        .sfaq-cta:hover { box-shadow: 0 0 28px rgba(109,91,143,0.4); }
      `}</style>

      <section id="faq" className="sfaq-wrap max-sm:py-6 py-12 overflow-hidden" style={{ background: "#f5f1fb" }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* ── TITLE BLOCK ── */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="sfaq-eyebrow-l" />
              <span style={{ fontSize:"11px", fontWeight:600, letterSpacing:"3px", textTransform:"uppercase", color:"#6d5b8f" }}>
                Frequently Asked Questions
              </span>
              <div className="sfaq-eyebrow-r" />
            </div>
            <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(32px,5vw,45px)", fontWeight:700, color:"#111", lineHeight:1.2, margin:"0 0 4px", letterSpacing:"-0.3px" }}>
              Your Questions, Answered
            </h2>
            <h2 className="sfaq-italic-teal" style={{ fontSize:"clamp(18px,3vw,36px)", lineHeight:1.25, margin:"0 0 18px" }}>
              by Dr. Sai.
            </h2>
            <p style={{ fontSize:"15px", color:"rgba(0,0,0,0.5)", maxWidth:"500px", margin:"0 auto", lineHeight:1.7 }}>
              Dr. Sai answers the questions patients ask most before booking their first session.
            </p>
          </div>

          {/* ── FAQ GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {faqs.map((faq, idx) => {
              const isOpen = openId === faq.id;
              const cat = categoryColors[faq.category] ?? categoryColors.Treatment;
              return (
                <div
                  key={faq.id}
                  className={`sfaq-card rounded-2xl p-6 ${isOpen ? "open" : ""}`}
                  style={{ background:"#fff", border:"1px solid rgba(0,0,0,0.07)", boxShadow:"0 2px 12px rgba(0,0,0,0.04)" }}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                >
                  {/* Background number */}
                  <span className="sfaq-num">{String(idx + 1).padStart(2, "0")}</span>

                  {/* Top row */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex flex-col gap-3 flex-1">
                      {/* Category pill */}
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase self-start"
                        style={{ color:cat.color, background:cat.bg, border:`1px solid ${cat.border}` }}
                      >
                        <span style={{ width:4, height:4, borderRadius:"50%", background:cat.color, display:"inline-block" }} />
                        {faq.category}
                      </span>

                      {/* Question */}
                      <h3
                        style={{
                          fontFamily:"'Playfair Display',Georgia,serif",
                          fontSize:"clamp(14px,1.6vw,17px)",
                          fontWeight: isOpen ? 700 : 600,
                          color: isOpen ? "#111" : "#222",
                          lineHeight:1.45,
                          margin:0,
                          transition:"color 0.2s",
                          paddingRight:"8px",
                        }}
                      >
                        {faq.q}
                      </h3>
                    </div>

                    {/* Chevron */}
                    <div
                      className={`sfaq-icon mt-1 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isOpen ? "open" : ""}`}
                      style={{
                        background: isOpen ? "#6d5b8f" : "rgba(0,0,0,0.05)",
                        border: isOpen ? "1px solid #6d5b8f" : "1px solid rgba(0,0,0,0.1)",
                        color: isOpen ? "#fff" : "#666",
                        transition:"background 0.2s, border-color 0.2s, color 0.2s",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Answer */}
                  <div className={`sfaq-answer ${isOpen ? "open" : "closed"}`}>
                    <div className="mt-4 pt-4" style={{ borderTop:`1px solid ${cat.color}22` }}>
                      <p style={{ fontSize:"13.5px", color:"rgba(0,0,0,0.58)", lineHeight:1.8, margin:0 }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}