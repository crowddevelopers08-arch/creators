"use client";

import React, { useState, useMemo, useEffect } from "react";

interface SkinHeroFormProps {
  inline?: boolean;
}

export default function SkinHeroForm({ inline = false }: SkinHeroFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [skinConcern, setSkinConcern] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /* Modal event listener — only when used as popup */
  useEffect(() => {
    if (inline) return;
    const open = () => setIsOpen(true);
    window.addEventListener("open-booking-modal", open);
    return () => window.removeEventListener("open-booking-modal", open);
  }, [inline]);

  /* Scroll lock + ESC — only when modal is open */
  useEffect(() => {
    if (inline) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, inline]);

  const close = () => { setIsOpen(false); setSuccess(false); };

  const canSubmit = useMemo(() => (
    name.trim().length > 1 &&
    /^\d{10}$/.test(phone) &&
    location.trim().length > 0 &&
    skinConcern.trim().length > 0
  ), [name, phone, location, skinConcern]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          mobile: phone,
          concern: skinConcern,
          treatment: "Skin Consultation",
          message: `Location: ${location} | Skin Concern: ${skinConcern}`,
          source: "skin-hero-section-form",
          formName: "skin-hero-section-form",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        alert(data.error || "Submission failed. Please try again.");
        return;
      }
      setSuccess(true);
      setName(""); setPhone(""); setLocation(""); setSkinConcern("");
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ── Shared styles ── */
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

    .shf-overlay {
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(0,0,0,0.65);
      backdrop-filter: blur(4px);
      display: flex; align-items: center; justify-content: center;
      padding: 16px;
      animation: shf-fade-in 0.2s ease;
    }
    @keyframes shf-fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    .shf-modal {
      background: #ffffff;
      border-radius: 22px;
      padding: 32px 28px;
      width: 100%; max-width: 460px;
      box-shadow: 0 30px 80px rgba(0,0,0,0.4);
      font-family: 'Outfit', sans-serif;
      position: relative;
      animation: shf-slide-up 0.25s ease;
      max-height: 90vh;
      overflow-y: auto;
    }
    @keyframes shf-slide-up {
      from { opacity: 0; transform: translateY(24px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0)   scale(1); }
    }

    .shf-close {
      position: absolute; top: 16px; right: 16px;
      width: 32px; height: 32px; border-radius: 50%;
      border: 1.5px solid rgba(0,0,0,0.12);
      background: #f5f5f5; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.2s;
    }
    .shf-close:hover { background: #ececec; }

    .shf-title { font-size: 20px; font-weight: 800; color: #1a1a1a; text-align: center; margin-bottom: 4px; }
    .shf-sub   { font-size: 13px; color: #6b7280; text-align: center; margin-bottom: 22px; }

    .shf-label {
      display: block; font-size: 11px; font-weight: 700;
      letter-spacing: 0.8px; text-transform: uppercase;
      color: black; margin-bottom: 5px;
    }
    .shf-input {
      width: 100%; padding: 11px 14px;
      border: 1.5px solid #e5e7eb; border-radius: 10px;
      font-size: 14px; color: #0d0e11; background: #f9fafb;
      outline: none; font-family: 'Outfit', sans-serif;
      transition: border-color 0.2s, box-shadow 0.2s;
      box-sizing: border-box;
    }
    .shf-input::placeholder { color: #201919; }
    .shf-input:focus {
      border-color: #6d5b8f; background: #fff;
      box-shadow: 0 0 0 3px rgba(109,91,143,0.08);
    }
    .shf-textarea {
      width: 100%; padding: 11px 14px;
      border: 1.5px solid #e5e7eb; border-radius: 10px;
      font-size: 14px; color: #111827; background: #f9fafb;
      outline: none; font-family: 'Outfit', sans-serif;
      transition: border-color 0.2s, box-shadow 0.2s;
      box-sizing: border-box; resize: none; min-height: 80px;
    }
    .shf-textarea::placeholder { color: #201919; }
    .shf-textarea:focus {
      border-color: #6d5b8f; background: #fff;
      box-shadow: 0 0 0 3px rgba(109,91,143,0.08);
    }
    .shf-field { margin-bottom: 14px; }

    .shf-terms {
      font-size: 11px; color: #000000;
      text-align: center; margin-bottom: 14px; line-height: 1.5;
    }
    .shf-terms a { color: #000000; text-decoration: underline; }

    .shf-success {
      margin-bottom: 16px; padding: 12px 16px;
      background: #f0fdf4; border: 1px solid #bbf7d0;
      border-radius: 10px; color: #15803d;
      font-size: 13px; font-weight: 600; text-align: center;
    }

    .shf-submit {
      width: 100%; padding: 14px 24px; border: none;
      border-radius: 50px; font-family: 'Outfit', sans-serif;
      font-size: 15px; font-weight: 700; cursor: pointer;
      background: linear-gradient(135deg, #6d5b8f 0%, #5a4a7a 100%);
      color: #fff;
      box-shadow: 0 5px 18px rgba(109,91,143,0.38);
      transition: all 0.2s ease;
    }
    .shf-submit:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(109,91,143,0.5);
    }
    .shf-submit:disabled { opacity: 0.55; cursor: not-allowed; }

    @media (max-width: 480px) {
      .shf-modal { padding: 24px 18px; }
    }
  `;

  /* ── Form fields (shared between inline & modal) ── */
  const formContent = (
    <>
      {success && (
        <div className="shf-success">Thank you! Our team will reach out to you shortly.</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="shf-field">
          <label className="shf-label">Name</label>
          <input className="shf-input" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="shf-field">
          <label className="shf-label">Phone Number</label>
          <input className="shf-input" placeholder="10-digit number" inputMode="numeric" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))} />
        </div>
        <div className="shf-field">
          <label className="shf-label">Location</label>
          <input className="shf-input" placeholder="Your area / city" value={location} onChange={e => setLocation(e.target.value)} />
        </div>
        <div className="shf-field">
          <label className="shf-label">Tell Us About Your Skin Problem</label>
          <textarea className="shf-textarea" placeholder="e.g. acne scars, pigmentation, hair removal, skin tightening..." value={skinConcern} onChange={e => setSkinConcern(e.target.value)} />
        </div>
        <p className="shf-terms">
          By submitting, you agree to our <a href="#">Terms of Service</a> &amp; <a href="#">Privacy Policy</a>.
        </p>
        <button type="submit" className="shf-submit" disabled={!canSubmit || loading}>
          {loading ? "Submitting..." : "Book Your Consultation →"}
        </button>
      </form>
    </>
  );

  /* ── Inline mode: render form directly, no modal wrapper ── */
  if (inline) {
    return (
      <>
        <style>{styles}</style>
        {formContent}
      </>
    );
  }

  /* ── Modal mode: hidden until event fires ── */
  if (!isOpen) return null;

  return (
    <>
      <style>{styles}</style>
      <div className="shf-overlay" onClick={close}>
        <div className="shf-modal" onClick={e => e.stopPropagation()}>

          <button className="shf-close" onClick={close} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="#555" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </button>

          <h2 className="shf-title">Book Your <span style={{ color: "#6d5b8f" }}>Consultation</span></h2>
          <p className="shf-sub">Whatever your concern, we have a solution!</p>

          {formContent}
        </div>
      </div>
    </>
  );
}
