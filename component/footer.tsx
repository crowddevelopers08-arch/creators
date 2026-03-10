"use client";

export default function VisitSection() {
  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap");

        .vs-wrap { font-family:"Outfit",sans-serif; background:#faf8ff; }

        .vs-line-l { height:1px; width:60px; background:linear-gradient(90deg,transparent,#ec778d); flex-shrink:0; }
        .vs-line-r { height:1px; width:60px; background:linear-gradient(90deg,#ec778d,transparent); flex-shrink:0; }

        .vs-teal {
          font-family:"Playfair Display",Georgia,serif;
          font-style:italic; font-weight:700;
          background:linear-gradient(90deg,#6d5b8f,#ec778d);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }

        @keyframes vsShimmer {
          0%{background-position:200% center;} 100%{background-position:-200% center;}
        }

        .vs-btn-call {
          background:linear-gradient(90deg,#5a4a7a 0%,#6d5b8f 40%,#ec778d 60%,#6d5b8f 80%,#5a4a7a 100%);
          background-size:200% 100%; animation:vsShimmer 3s linear infinite;
          transition:box-shadow .3s,transform .2s; text-decoration:none;
        }
        .vs-btn-call:hover { box-shadow:0 0 32px rgba(109,91,143,.45); transform:translateY(-2px); }

        .vs-btn-wa {
          background:linear-gradient(90deg,#128C7E 0%,#25d366 45%,#128C7E 100%);
          background-size:200% 100%; animation:vsShimmer 3.5s linear infinite;
          transition:box-shadow .3s,transform .2s; text-decoration:none;
        }
        .vs-btn-wa:hover { box-shadow:0 0 28px rgba(37,211,102,.4); transform:translateY(-2px); }

        .vs-btn-book { transition:all .25s ease; text-decoration:none; }
        .vs-btn-book:hover {
          background:#111 !important; color:#fff !important;
          border-color:#111 !important; transform:translateY(-2px);
          box-shadow:0 10px 28px rgba(0,0,0,.18);
        }

        .vs-info { transition:transform .2s, box-shadow .2s; cursor:default; }
        .vs-info:hover { transform:translateX(5px); box-shadow:0 6px 24px rgba(0,0,0,.07) !important; }

        .vs-img1 { transition:transform .45s ease, box-shadow .45s ease; }
        .vs-img1:hover { transform:scale(1.025); box-shadow:0 28px 72px rgba(0,0,0,.18) !important; }

        .vs-img2 { transition:transform .45s ease, box-shadow .45s ease; }
        .vs-img2:hover { transform:scale(1.03) translateY(-5px); box-shadow:0 24px 60px rgba(0,0,0,.2) !important; }

        @keyframes vsDot { 0%,100%{opacity:1;} 50%{opacity:.25;} }
        .vs-dot { width:7px;height:7px;border-radius:50%;display:inline-block;flex-shrink:0;animation:vsDot 1.6s ease-in-out infinite; }
        .vs-dot-green{background:#34d399;}
        .vs-dot-red{background:#6d5b8f;}

        .vs-map-wrap {
          border-radius:28px; overflow:hidden;
          box-shadow:0 28px 80px rgba(0,0,0,.13);
          border:1px solid rgba(0,0,0,.07);
          transition:box-shadow .35s;
        }
        .vs-map-wrap:hover { box-shadow:0 36px 96px rgba(0,0,0,.18); }

        .vs-dir-btn { transition:all .25s ease; text-decoration:none; }
        .vs-dir-btn:hover {
          background:#111 !important; color:#fff !important;
          border-color:#111 !important; transform:translateY(-2px);
        }

        .vs-divider { height:1px; background:linear-gradient(90deg,transparent,rgba(0,0,0,.08),transparent); }

        @keyframes vsRingPulse { 0%,100%{transform:scale(1);opacity:.18;} 50%{transform:scale(1.07);opacity:.3;} }
        .vs-ring { animation:vsRingPulse 4s ease-in-out infinite; }
      `}</style>

      <section id="contact" className="vs-wrap py-4 max-sm:py-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">

          {/* ── TITLE ── */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-1">
              <div className="vs-line-l" />
              <span style={{fontSize:"11px",fontWeight:600,letterSpacing:"3px",textTransform:"uppercase",color:"#6d5b8f"}}>
                Find Us · ECR, Chennai
              </span>
              <div className="vs-line-r" />
            </div>
            <h2 style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize: "clamp(32px,5vw,48px)", fontWeight: 700,color:"#111",lineHeight:1.2,margin:"0 0 0px",letterSpacing:"-0.3px"}}>
              Visit Creator Aethetic Clinic,
            </h2>
            <h2 className="vs-teal" style={{fontSize:"clamp(20px,3.5vw,42px)",lineHeight:1.25,margin:"0 0 8px"}}>
              Vettuvankeni, ECR.
            </h2>
            <p style={{fontSize:"15px",color:"rgba(0,0,0,0.5)",maxWidth:"460px",margin:"0 auto",lineHeight:1.75}}>
              Come meet Dr. Sai in person. Your details are kept strictly confidential.
            </p>
          </div>

          {/* ── MAIN GRID: 5 left + 7 right ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* ████ LEFT ████ */}
            <div className="lg:col-span-5 flex flex-col gap-7">

              {/* BUTTONS */}
              <div className="flex flex-col gap-3">

                <div className="grid grid-cols-2 gap-3">
                  <a href="https://wa.me/+91 63850 83099" target="_blank" rel="noopener noreferrer" className="vs-btn-call flex items-center justify-center gap-2 py-3.5 rounded-2xl text-white font-semibold text-sm">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a href="#" onClick={e => { e.preventDefault(); window.dispatchEvent(new CustomEvent("open-booking-modal")); }} className="vs-btn-book flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm" style={{color:"#111",background:"#fff",border:"1.5px solid rgba(0,0,0,0.15)"}}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Book Now
                  </a>
                </div>
              </div>

              {/* INFO ROWS */}
              <div className="flex flex-col gap-2.5">
                {/* Address — full width */}
                <div className="vs-info flex items-center gap-4 px-5 py-3.5 rounded-2xl" style={{background:"#fafafa",border:"1px solid rgba(0,0,0,0.06)",boxShadow:"0 2px 10px rgba(0,0,0,0.03)"}}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:"rgba(109,91,143,0.07)"}}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="#6d5b8f" strokeWidth="2"/><circle cx="12" cy="11" r="3" stroke="#6d5b8f" strokeWidth="2"/></svg>
                  </div>
                  <div>
                    <div style={{fontSize:"10px",fontWeight:600,color:"rgba(0,0,0,0.35)",letterSpacing:"1.8px",textTransform:"uppercase",marginBottom:"2px"}}>Address</div>
                    <div style={{fontSize:"14px",fontWeight:600,color:"#111"}}>Vettuvankeni, ECR, Chennai</div>
                  </div>
                </div>

                {/* Clinic Hours + Phone — same row */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="vs-info flex items-center gap-3 px-4 py-3.5 rounded-2xl" style={{background:"#fafafa",border:"1px solid rgba(0,0,0,0.06)",boxShadow:"0 2px 10px rgba(0,0,0,0.03)"}}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:"rgba(109,91,143,0.07)"}}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#6d5b8f" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="#6d5b8f" strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                    <div>
                      <div style={{fontSize:"10px",fontWeight:600,color:"rgba(0,0,0,0.35)",letterSpacing:"1.8px",textTransform:"uppercase",marginBottom:"2px"}}>Hours</div>
                      <div style={{fontSize:"13px",fontWeight:600,color:"#111"}}>Mon–Sat · 10–7 PM</div>
                    </div>
                  </div>

                  <div className="vs-info flex items-center gap-3 px-4 py-3.5 rounded-2xl" style={{background:"#fafafa",border:"1px solid rgba(0,0,0,0.06)",boxShadow:"0 2px 10px rgba(0,0,0,0.03)"}}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:"rgba(236,119,141,0.07)"}}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="#ec778d" strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                    <div>
                      <div style={{fontSize:"10px",fontWeight:600,color:"rgba(0,0,0,0.35)",letterSpacing:"1.8px",textTransform:"uppercase",marginBottom:"2px"}}>Phone</div>
                      <div style={{fontSize:"13px",fontWeight:600,color:"#111"}}>+91 63850 83099</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TWO IMAGES — creative overlap */}
              <div className="relative w-full" style={{height:"320px"}}>

                {/* ambient glows */}
                <div className="absolute pointer-events-none" style={{bottom:"-20px",left:"-20px",width:"180px",height:"180px",borderRadius:"50%",background:"radial-gradient(circle,rgba(109,91,143,0.15) 0%,transparent 70%)",zIndex:0}} />
                <div className="absolute pointer-events-none" style={{top:"-10px",right:"-10px",width:"130px",height:"130px",borderRadius:"50%",background:"radial-gradient(circle,rgba(236,119,141,0.15) 0%,transparent 70%)",zIndex:0}} />

                {/* decorative ring */}
                <div className="vs-ring absolute pointer-events-none" style={{top:"14px",left:"37%",width:"52px",height:"52px",borderRadius:"50%",border:"1.5px solid rgba(109,91,143,0.45)",zIndex:1}} />

                {/* IMAGE 1 — tall left, big top-left radius */}
                <div className="vs-img1 absolute overflow-hidden" style={{top:0,left:0,width:"56%",height:"100%",borderRadius:"100px 20px 20px 20px",boxShadow:"0 20px 56px rgba(0,0,0,0.14)",zIndex:2}}>
                  <img src="/image.png" alt="Creator Aethetic Clinic" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center"}} />
                  <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(0,0,0,0.45) 0%,transparent 50%)"}} />
                  <div className="absolute bottom-4 left-3 right-3">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{background:"rgba(255,255,255,0.96)",backdropFilter:"blur(10px)"}}>
                      <span className="vs-dot vs-dot-green" />
                      <span style={{fontSize:"10px",fontWeight:700,color:"#111"}}>Creator Aethetic Clinic</span>
                    </div>
                  </div>
                </div>

                {/* IMAGE 2 — shorter right, big bottom-right radius */}
                <div className="vs-img2 absolute overflow-hidden" style={{bottom:0,right:0,width:"54%",height:"70%",borderRadius:"20px 20px 100px 20px",boxShadow:"0 18px 52px rgba(0,0,0,0.16)",border:"3.5px solid #fff",zIndex:3}}>
                  <img src="/fa2.jpg" alt="Dr. Sai — Hair Specialist ECR" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center"}} />
                  <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(0,0,0,0.3) 0%,transparent 55%)"}} />
                </div>

                {/* Floating ECR badge */}
                <div className="absolute z-10" style={{top:"14px",right:"6px",background:"#fff",boxShadow:"0 8px 28px rgba(0,0,0,0.12)",border:"1px solid rgba(0,0,0,0.07)",borderRadius:"14px",padding:"8px 14px",textAlign:"center"}}>
                  <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:"18px",fontWeight:700,color:"#6d5b8f",lineHeight:1}}>ECR</div>
                  <div style={{fontSize:"9px",color:"rgba(0,0,0,0.4)",fontWeight:500,marginTop:"3px",letterSpacing:"1px"}}>CHENNAI</div>
                </div>

              </div>

            </div>

            {/* ████ RIGHT — MAP (7 cols) ████ */}
            <div className="lg:col-span-7 flex flex-col gap-4 lg:sticky lg:top-8">

              {/* Map label row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div style={{width:"3px",height:"28px",background:"linear-gradient(to bottom,#6d5b8f,#ec778d)",borderRadius:"2px"}} />
                  <div>
                    <div style={{fontSize:"13px",fontWeight:700,color:"#111",fontFamily:"'Playfair Display',Georgia,serif"}}>Creator Aethetic Clinic</div>
                    <div style={{fontSize:"11px",color:"rgba(0,0,0,0.4)"}}>Vettuvankeni, ECR, Chennai</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{background:"rgba(109,91,143,0.08)",border:"1px solid rgba(109,91,143,0.22)"}}>
                  <span className="vs-dot vs-dot-red" />
                  <span style={{fontSize:"11px",fontWeight:600,color:"#6d5b8f"}}>Open Now</span>
                </div>
              </div>

              {/* MAP EMBED */}
              <div className="vs-map-wrap" style={{height:"500px"}}>
                {/* tricolor accent bar */}
                <div style={{height:"4px",background:"linear-gradient(90deg,#5a4a7a,#6d5b8f,#ec778d)",width:"100%",flexShrink:0}} />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7777.12364956484!2d80.252421!3d12.93586!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU2JzA5LjEiTiA4MMKwMTUnMDguNyJF!5e0!3m2!1sen!2sin!4v1773050088404!5m2!1sen!2sin"
                  width="100%" height="100%"
                  
                  style={{border:0,display:"block"}}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Creator Aethetic Clinic — Vettuvankeni ECR Chennai"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}