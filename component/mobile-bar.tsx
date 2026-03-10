"use client";

import { Phone, Calendar } from "lucide-react";
export default function MobileActionBar() {

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-white border-t shadow-lg
        flex md:hidden
      "
    >
      {/* Call Now */}
      <a
        href="tel:+91 63850 83099"
        className="
          flex-1 flex items-center justify-center gap-2
          py-4 font-semibold
          text-sm
          text-white
          bg-[#6d5b8f]
          active:scale-95 transition
        "
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>

      {/* Book Now */}
      <a
        className="
          flex-1 flex items-center justify-center gap-2
          py-4 font-semibold
          text-white
          text-sm
          border-l border-[#d96a80]
          active:scale-95 transition
        "
        style={{ background: "linear-gradient(90deg, #ec778d, #d95f76)" }}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.dispatchEvent(new CustomEvent("open-booking-modal"));
        }}
      >
        <Calendar className="w-4 h-4" />
        Book Now
      </a>
    </div>
  );
}
