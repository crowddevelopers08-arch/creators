import Footerred from "@/component/endfooter";
import ThankYouPage from "@/component/thankpage";
import Navbars from "@/component/tknavbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbars />
      <ThankYouPage />
      <Footerred />
    </div>
  );
};

export default page;
