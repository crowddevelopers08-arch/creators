import Footerred from "@/component/endfooter";
import PrivacyPolicy from "@/component/pravicy";
import Navbars from "@/component/tknavbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbars />
      <PrivacyPolicy />
      <Footerred />
    </div>
  );
};

export default page;
