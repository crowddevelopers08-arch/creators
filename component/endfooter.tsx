"use client";

import Link from "next/link";

export default function Footerred() {
  return (
    <footer className="relative bg-black text-white overflow-hidden max-sm:mb-10">

      {/* Subtle top border gradient */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(109,91,143,0.5), rgba(236,119,141,0.5), transparent)" }} />

      {/* Faint bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(109,91,143,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

        {/* Left — brand + copyright */}
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{
              background: "linear-gradient(90deg, #6d5b8f, #ec778d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Creator Aethetic Clinic
          </span>
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "10px" }}>|</span>
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Outfit, sans-serif" }}>
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        {/* Right — links */}
        <div className="flex items-center gap-5">
          <Link
            href="/privacy-policy"
            className="text-[12px] transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Outfit, sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#ec778d")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
          >
            Privacy Policy
          </Link>
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "10px" }}>·</span>
          <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Outfit, sans-serif" }}>
            Powered by <span style={{ color: "rgba(109,91,143,0.7)" }}>Crowd Developers</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
