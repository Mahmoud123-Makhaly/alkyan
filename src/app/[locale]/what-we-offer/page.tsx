import React from "react";
import {
  Advantages,
  Banner,
  ButtonMaker,
  Clients,
  Overlay,
  Skills,
} from "@components";
import bannerimg from "@assets/images/what-we-offer/banner.jpg";
import overlayImg from "@assets/images/what-we-offer/s3 pic1.jpg";
import overlayImg2 from "@assets/images/what-we-offer/overlay.jpg";

import { Container } from "reactstrap";

const page = () => {
  return (
    <React.Fragment>
      <Banner img={bannerimg.src}>
        <h1 className="banner-header">What We Offer</h1>
        <h2 className="font-40 text-white">Introducing COZY Design</h2>
        <h2 className="font-40 text-white">For Homes </h2>
      </Banner>
      <Container>
        <Overlay img={overlayImg.src}>
          <div className="flex-col-start ">
            <h4>Fully Elegant</h4>
            <h4>& Simple Design</h4>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <ButtonMaker text="READ MORE" />
          </div>
        </Overlay>
        <Advantages />
        <Overlay img={overlayImg2.src} imgOnleft={false}>
          <div className="flex-col-start ">
            <h4>Beautiful on All</h4>
            <h4>Home Sizes</h4>
            <p className="text-secondary ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <ButtonMaker text="READ MORE" />
          </div>
        </Overlay>
        <Skills />
      </Container>
      <Clients />
    </React.Fragment>
  );
};

export default page;
