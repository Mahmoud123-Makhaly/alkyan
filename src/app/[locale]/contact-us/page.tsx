import React from "react";
import { Banner } from "@components";
import bannerImg from "@assets/images/contact-us/banner.jpg";
import ContactUs from "../../../components/ui/contact-us/ContactUs";
const page = () => {
  return (
    <React.Fragment>
      <Banner img={bannerImg.src} text="Contact Us" />
      <ContactUs />
    </React.Fragment>
  );
};

export default page;
