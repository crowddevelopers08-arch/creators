"use client";

import Link from "next/link";
import FadeIn from "./scrollanimate";

export default function CTASection() {
  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Outfit:wght@400;500;600;700&display=swap");
        @keyframes cta-shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes cta-pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes cta-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes cta-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        .cta-btn-primary {
          background: linear-gradient(90deg, #5a4a7a 0%, #6d5b8f 40%, #ec778d 60%, #6d5b8f 80%, #5a4a7a 100%);
          background-size: 200% 100%;
          animation: cta-shimmer 3s linear infinite;
        }
        .cta-orb-1 { animation: cta-float 6s ease-in-out infinite; }
        .cta-orb-2 { animation: cta-float 8s ease-in-out infinite reverse; }
        .cta-live-dot { animation: cta-blink 1.5s ease-in-out infinite; }
        .cta-ring {
          position: absolute;
          inset: -6px;
          border-radius: 9999px;
          border: 2px solid rgba(109,91,143,0.6);
          animation: cta-pulse-ring 2s ease-out infinite;
        }
        .cta-ring-2 {
          animation-delay: 1s;
        }
      `}</style>

      <section
        className="relative overflow-hidden py-8 px-6"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)" }}
      >

        {/* BG orbs */}
        <div
          className="cta-orb-1 absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(109,91,143,0.18) 0%, transparent 70%)" }}
        />
        <div
          className="cta-orb-2 absolute -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(109,91,143,0.14) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(109,91,143,0.06) 0%, transparent 70%)" }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center" style={{ fontFamily: "Outfit, sans-serif" }}>

          {/* Live badge */}
          <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-2"
            style={{ background: "rgba(109,91,143,0.08)", borderColor: "rgba(109,91,143,0.25)" }}>
            <span className="cta-live-dot w-2 h-2 rounded-full block" style={{ background: "#6d5b8f" }} />
            <span className="text-[11px] font-semibold tracking-[2.5px] uppercase" style={{ color: "#ec778d" }}>
              Take the First Step Today
            </span>
          </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn direction="up" delay={100}>
          <h2
            className="font-bold leading-[1.15] mb-1"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(32px,5vw,48px)", fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.5px",
            }}
          >
            Ready to Start Your Skin Transformation?
          </h2>
          <h2
            className="font-bold italic leading-[1.2] mb-8"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(32px,5vw,48px)", fontWeight: 700,
              background: "linear-gradient(90deg, #6d5b8f, #ec778d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.5px",
            }}
          >
            When Will You Start?
          </h2>
          </FadeIn>

          {/* Divider accent */}
          <FadeIn direction="fade" delay={150}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-[120px]" style={{ background: "linear-gradient(90deg, transparent, rgba(109,91,143,0.4))" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#6d5b8f" }} />
            <div className="h-px flex-1 max-w-[120px]" style={{ background: "linear-gradient(90deg, rgba(109,91,143,0.4), transparent)" }} />
          </div>
          </FadeIn>

          {/* Body */}
          <FadeIn direction="up" delay={200}>
          <p
            className="text-base leading-relaxed mx-auto mb-12 max-w-xl"
            style={{ color: "rgba(255,255,255,0.48)", fontWeight: 400 }}
          >
            Book consultation with Dr. Sai today. Walk in, get assessed, and leave with a personalised treatment plan  designed specifically for your skin, your goals, and your budget.
          </p>
          </FadeIn>

          {/* Buttons */}
          <FadeIn direction="up" delay={280}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">

            {/* Primary */}
            <div className="relative">
              <span className="cta-ring" />
              <span className="cta-ring cta-ring-2" />
              <a
                href="#consultation-form"
                className="cta-btn-primary relative inline-flex items-center gap-3 text-white font-semibold rounded-full px-9 py-5 text-[15px] transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow: "0 8px 32px rgba(109,91,143,0.4), 0 2px 8px rgba(0,0,0,0.3)",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Book Your Consultation Now
              </a>
            </div>

            {/* Secondary */}
            <a
              href="tel:+916385083099"
              className="inline-flex items-center gap-3 font-semibold text-[15px] rounded-full px-9 py-5 border transition-all duration-300 hover:scale-105"
              style={{
                color: "rgba(255,255,255,0.85)",
                borderColor: "rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(8px)",
                fontFamily: "Outfit, sans-serif",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="rgba(255,255,255,0.85)"/>
              </svg>
              Call: +91 63850 83099
            </a>
          </div>
          </FadeIn>

          {/* Trust pills row */}
          <FadeIn direction="up" delay={360}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: "✓", text: "Free Consultation" },
              { icon: "✓", text: "No Commitment" },
              { icon: "✓", text: "Dr-Led Assessment" },
              { icon: "✓", text: "Same-Day Results Plan" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-medium"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <span style={{ color: "#6d5b8f", fontWeight: 700 }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
          </FadeIn>

        </div>
      </section>
    </>
  );
}
