"use client";

import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap");

        .ty-wrap { font-family: "Outfit", sans-serif; }

        .ty-eyebrow-l { height:1px; width:60px; background:linear-gradient(90deg,transparent,#c9a96e); }
        .ty-eyebrow-r { height:1px; width:60px; background:linear-gradient(90deg,#c9a96e,transparent); }

        .ty-italic-teal {
          font-family: "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 700;
          background: linear-gradient(90deg, #2a9d8f, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ty-fade-in {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ty-fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ty-fade-in.d1 { transition-delay: 0.1s; }
        .ty-fade-in.d2 { transition-delay: 0.3s; }
        .ty-fade-in.d3 { transition-delay: 0.5s; }
        .ty-fade-in.d4 { transition-delay: 0.7s; }
        .ty-fade-in.d5 { transition-delay: 0.9s; }

        @keyframes tyCheckPop {
          0%   { transform: scale(0) rotate(-10deg); opacity: 0; }
          70%  { transform: scale(1.15) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .ty-check {
          animation: tyCheckPop 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.3s both;
        }

        @keyframes tyRingPulse {
          0%,100% { transform: scale(1); opacity: 0.15; }
          50%      { transform: scale(1.08); opacity: 0.28; }
        }
        .ty-ring {
          animation: tyRingPulse 3s ease-in-out infinite;
        }

        @keyframes tyShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .ty-btn {
          background: linear-gradient(90deg,#5a4a7a 0%,#6d5b8f 40%,#ec778d 60%,#6d5b8f 80%,#5a4a7a 100%);
          background-size: 200% 100%;
          animation: tyShimmer 3s linear infinite;
          transition: box-shadow 0.3s, transform 0.2s;
        }
        .ty-btn:hover {
          box-shadow: 0 0 28px rgba(109,91,143,0.4);
          transform: translateY(-1px);
        }

        .ty-step-card {
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .ty-step-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.09) !important;
        }

        @keyframes tyDotBlink {
          0%,100% { opacity:1; }
          50%      { opacity:0.2; }
        }
        .ty-live-dot {
          width:7px; height:7px;
          background:#6d5b8f;
          border-radius:50%;
          animation: tyDotBlink 1.6s ease-in-out infinite;
          display:inline-block;
          flex-shrink:0;
        }
      `}</style>

      <section className="ty-wrap bg-[#080808] flex flex-col items-center justify-center text-white py-10 px-6 overflow-hidden relative">

        {/* Background glow blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none" style={{ background:"radial-gradient(circle, rgba(109,91,143,0.05) 0%, transparent 70%)", zIndex:0 }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full pointer-events-none" style={{ background:"radial-gradient(circle, rgba(42,157,143,0.07) 0%, transparent 70%)", zIndex:0 }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background:"radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)", zIndex:0 }} />

        <div className="relative z-10 max-w-2xl w-full mx-auto text-center">

          {/* ── CHECK ICON ── */}
          <div className={`ty-fade-in d1 ${show ? "visible" : ""} flex justify-center mb-8`}>
            <div className="relative">
              {/* Pulsing ring */}
              <div className="ty-ring absolute inset-0 rounded-full" style={{ border:"2px solid #6d5b8f", margin:"-12px" }} />
              {/* Circle */}
              <div
                className="ty-check w-24 h-24 rounded-full flex items-center justify-center"
                style={{ background:"linear-gradient(135deg,#6d5b8f,#ec778d)", boxShadow:"0 16px 48px rgba(109,91,143,0.25)" }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* ── TITLE BLOCK ── */}
          <div className={`ty-fade-in d2 ${show ? "visible" : ""} mb-10`}>
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="ty-eyebrow-l" />
              <span style={{ fontSize:"11px", fontWeight:600, letterSpacing:"3px", textTransform:"uppercase", color:"#c9a96e" }}>
                Booking Confirmed
              </span>
              <div className="ty-eyebrow-r" />
            </div>
            <h1 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(32px,5vw,56px)", fontWeight:700, color:"#fff", lineHeight:1.15, margin:"0 0 4px", letterSpacing:"-0.5px" }}>
              Thank You.
            </h1>
            <h2 className="ty-italic-teal" style={{ fontSize:"clamp(20px,3.5vw,40px)", lineHeight:1.25, margin:"0 0 20px" }}>
              Dr. Sai Will Be in Touch.
            </h2>
            <p style={{ fontSize:"16px", color:"rgba(255, 255, 255, 0.5)", lineHeight:1.8, fontWeight:400, maxWidth:"460px", margin:"0 auto" }}>
              Your consultation request has been received. A member of the Creator Aethetic Clinic team will contact you shortly to confirm your appointment.
            </p>
          </div>

          {/* ── WHAT HAPPENS NEXT ── */}
          <div className={`ty-fade-in d3 ${show ? "visible" : ""} mb-10`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div style={{ width:"3px", height:"24px", background:"linear-gradient(to bottom,#6d5b8f,#ec778d)", borderRadius:"2px" }} />
              <span style={{ fontSize:"11px", fontWeight:600, letterSpacing:"2.5px", textTransform:"uppercase", color:"#c9a96e" }}>What Happens Next</span>
              <div style={{ width:"3px", height:"24px", background:"linear-gradient(to bottom,#ec778d,#6d5b8f)", borderRadius:"2px" }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  step:"01",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="#6d5b8f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title:"We Call You",
                  desc:"Our team calls within 24 hours to confirm your slot.",
                },
                {
                  step:"02",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#2a9d8f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title:"Assessment",
                  desc:"Dr. Sai personally reviews your hair loss profile.",
                },
                {
                  step:"03",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="#c9a96e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title:"Your Plan",
                  desc:"A personalised treatment plan designed for your hair.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="ty-step-card rounded-2xl p-5 text-center"
                  style={{ background:"#fafafa", border:"1px solid rgba(0,0,0,0.07)", boxShadow:"0 2px 12px rgba(0,0,0,0.04)" }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background:"rgba(109,91,143,0.06)", border:"1px solid rgba(109,91,143,0.1)" }}>
                      {s.icon}
                    </div>
                  </div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"11px", fontWeight:700, color:"rgba(0,0,0,0.25)", marginBottom:"6px" }}>{s.step}</div>
                  <div style={{ fontSize:"14px", fontWeight:700, color:"#111", marginBottom:"5px", fontFamily:"'Playfair Display',Georgia,serif" }}>{s.title}</div>
                  <p style={{ fontSize:"12px", color:"rgba(0,0,0,0.45)", lineHeight:1.65, margin:0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CLINIC CARD ── */}
          <div className={`ty-fade-in d4 ${show ? "visible" : ""} mb-10`}>
            <div
              className="rounded-2xl px-6 py-5 flex items-center justify-between flex-wrap gap-4"
              style={{ background:"linear-gradient(135deg,rgba(109,91,143,0.04),rgba(201,169,110,0.05))", border:"1px solid rgba(109,91,143,0.1)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                  style={{ background:"linear-gradient(135deg,#6d5b8f,#ec778d)" }}
                >
                  S
                </div>
                <div className="text-left">
                  <div style={{ fontSize:"14px", fontWeight:700, color:"#fff", fontFamily:"'Playfair Display',Georgia,serif" }}>Dr. Sai</div>
                  <div style={{ fontSize:"12px", color:"rgba(255, 255, 255, 0.45)" }}>Creator Aethetic Clinic, ECR, Chennai</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background:"rgba(52,211,153,0.08)", border:"1px solid rgba(52,211,153,0.2)" }}>
                <span className="ty-live-dot" />
                <span style={{ fontSize:"12px", fontWeight:600, color:"#2a9d8f" }}>Accepting new patients</span>
              </div>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className={`ty-fade-in d5 ${show ? "visible" : ""}`}>
            <a href="/" className="ty-btn px-10 py-4 rounded-full text-white font-semibold text-sm tracking-wide border-none cursor-pointer inline-block">
              Back to Home
            </a>
            <p style={{ fontSize:"12px", color:"rgba(255, 255, 255, 0.3)", marginTop:"16px" }}>
              Creator Aethetic Clinic · ECR, Chennai
            </p>
          </div>

        </div>
      </section>
    </>
  );
}