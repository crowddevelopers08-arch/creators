"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbars() {
  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap");

        .nav-wrap { font-family: "Outfit", sans-serif; }

        @keyframes navShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .nav-call-btn {
          background: linear-gradient(90deg,#5a4a7a 0%,#6d5b8f 40%,#ec778d 60%,#6d5b8f 80%,#5a4a7a 100%);
          background-size: 200% 100%;
          animation: navShimmer 3s linear infinite;
          transition: box-shadow 0.3s, transform 0.2s;
        }
        .nav-call-btn:hover {
          box-shadow: 0 0 24px rgba(109,91,143,0.4);
          transform: translateY(-1px);
        }
      `}</style>

      <header
        className="nav-wrap sticky top-0 z-50 bg-white"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-3">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <div className="relative" style={{ width: "130px", height: "44px" }}>
                <Image
                  src="/Creator-Aesthetic-logo.png"
                  alt="Creator Aesthetic Clinic"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                  priority
                />
              </div>
            </Link>

            {/* Call button */}
            <a
              href="tel:+916385083099"
              className="nav-call-btn flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-white font-semibold text-sm"
              style={{ textDecoration: "none" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="hidden xs:inline sm:inline">+91 63850 83099</span>
              <span className="sm:hidden">Call Us</span>
            </a>

          </div>
        </div>
      </header>
    </>
  );
}
