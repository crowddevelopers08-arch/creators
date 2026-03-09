"use client";

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content:
      "We collect your name, phone number, and email when you book a consultation or fill out our contact form. We do not collect sensitive medical data without your explicit consent.",
  },
  {
    number: "02",
    title: "How We Use Your Information",
    content:
      "Your information is used solely to contact you regarding your consultation, follow up on treatment enquiries, and send appointment reminders. We never sell or share your data with third parties.",
  },
  {
    number: "03",
    title: "Data Security",
    content:
      "All data is stored securely and accessible only to authorised clinic staff. We use industry-standard encryption to protect your personal information at rest and in transit.",
  },
  {
    number: "04",
    title: "Cookies",
    content:
      "Our website uses minimal cookies to ensure basic functionality and improve your browsing experience. No tracking or advertising cookies are used.",
  },
  {
    number: "05",
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal data at any time. To make a request, contact us directly and we will respond within 7 working days.",
  },
  {
    number: "06",
    title: "Contact",
    content:
      "For any privacy-related queries, reach us at privacy@crowmedi.com or call us directly. We are committed to addressing your concerns promptly and transparently.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Outfit:wght@300;400;500;600&display=swap');

        .pp-root { font-family: 'Outfit', sans-serif; }
        .pp-serif { font-family: 'Cormorant Garamond', serif; }

        .pp-fade-in {
          animation: ppFade 0.6s ease forwards;
          opacity: 0;
        }
        @keyframes ppFade {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pp-card {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 24px 26px;
          background: rgba(255,255,255,0.02);
          transition: border-color 0.25s, background 0.25s;
        }
        .pp-card:hover {
          border-color: rgba(109,91,143,0.35);
          background: rgba(109,91,143,0.04);
        }

        .pp-line {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #6d5b8f, transparent);
          border-radius: 2px;
          margin-bottom: 28px;
        }
      `}</style>

      <main className="pp-root" style={{ background: "#080808", minHeight: "100vh", padding: "80px 16px 64px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>

          {/* ── Hero Header ── */}
          <div className="pp-fade-in" style={{ marginBottom: 56, animationDelay: "0s" }}>

            {/* Back to Home */}
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                marginBottom: 24,
                padding: "7px 14px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = "rgba(109,91,143,0.4)";
                e.currentTarget.style.background = "rgba(109,91,143,0.06)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </a>

            {/* label */}
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#6d5b8f", marginBottom: 14 }}>
              Legal · Privacy
            </p>

            {/* title */}
            <h1
              className="pp-serif"
              style={{ fontSize: "clamp(38px, 6vw, 64px)", fontWeight: 700, color: "white", lineHeight: 1.1, marginBottom: 18 }}
            >
              Privacy Policy
            </h1>

            {/* divider line */}
            <div className="pp-line" />

            {/* meta row */}
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#6d5b8f", display: "inline-block" }} />
                Effective: January 2025
              </span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
                CrowMedi Hair Clinic
              </span>
            </div>

            {/* intro */}
            <p style={{ marginTop: 20, fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.75, maxWidth: 560 }}>
              Your privacy matters to us. This policy explains what we collect, why we collect it, and how we keep it safe.
            </p>
          </div>

          {/* ── Sections Grid ── */}
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 14 }}
          >
            {sections.map((s, i) => (
              <div
                key={s.number}
                className="pp-card pp-fade-in"
                style={{ animationDelay: `${0.1 + i * 0.07}s` }}
              >
                {/* number */}
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#6d5b8f", display: "block", marginBottom: 8 }}>
                  {s.number}
                </span>

                {/* title */}
                <h2
                  className="pp-serif"
                  style={{ fontSize: 22, fontWeight: 600, color: "white", marginBottom: 10, lineHeight: 1.2 }}
                >
                  {s.title}
                </h2>

                {/* divider */}
                <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 12 }} />

                {/* content */}
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.48)", lineHeight: 1.75 }}>
                  {s.content}
                </p>
              </div>
            ))}
          </div>

          {/* ── Footer Note ── */}
          <div
            className="pp-fade-in"
            style={{
              marginTop: 40,
              padding: "18px 24px",
              borderRadius: 14,
              border: "1px solid rgba(109,91,143,0.2)",
              background: "rgba(109,91,143,0.04)",
              animationDelay: "0.6s",
              display: "flex",
              alignItems: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10" stroke="#6d5b8f" strokeWidth="1.5" />
              <path d="M12 8v4M12 16h.01" stroke="#6d5b8f" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.6, flex: 1 }}>
              We may update this policy from time to time. Continued use of our services constitutes acceptance of any changes.
            </p>
          </div>

          {/* ── Bottom Back to Home ── */}
          <div className="pp-fade-in" style={{ marginTop: 32, display: "flex", justifyContent: "center", animationDelay: "0.7s" }}>
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 600,
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                padding: "10px 22px",
                borderRadius: 24,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = "rgba(109,91,143,0.4)";
                e.currentTarget.style.background = "rgba(109,91,143,0.06)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </a>
          </div>

        </div>
      </main>
    </>
  );
}