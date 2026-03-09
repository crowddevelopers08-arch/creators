
// import NewHairConsultationCardExact from "@/component/contactform";
import HeroSection from "@/component/herosection";
import Navbar from "@/component/navbar";
import BeforeAfterSection from "@/component/beforeafter";
import DoctorSection from "@/component/doctor";
import VideoSection from "@/component/videos";
import TestimonialsSection from "@/component/testominal";
import FAQSection from "@/component/faq";
import CTASection from "@/component/cta";
import VisitSection from "@/component/footer";
import Footerred from "@/component/endfooter";
import Treatments from "@/component/treatments";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BeforeAfterSection />
      <Treatments />
      <DoctorSection />
      <VideoSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <VisitSection />
      <Footerred />
      {/* <NewHairConsultationCardExact /> */}
    </div>
  );
}
