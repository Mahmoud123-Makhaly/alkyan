import React from "react";
import { Banner } from "@components";
import bannerimg from "@assets/images/shop/banner.jpg";
import { Shop } from "@components";
const page = () => {
  return (
    <React.Fragment>
      <Banner img={bannerimg.src}>
        <h1 className="banner-header">Shop</h1>
        <h2 className="font-40 text-white">Interior Decoration Made</h2>
        <h2 className="font-40 text-white">
          With{" "}
          <span className="position-relative">
            <div className="polygon"></div>CARE
          </span>
        </h2>
      </Banner>
      <Shop />
    </React.Fragment>
  );
};

export default page;
