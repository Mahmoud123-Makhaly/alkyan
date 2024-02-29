import React from "react";
import {
  Banner,
  ButtonMaker,
  Grids,
  ImageMaker,
  OurPrices,
  PaymentPlans,
} from "@components";
import bannerimg from "@assets/images/our-services/banner.jpg";
import { Advantages } from "@components";
import { Col, Container, Row } from "reactstrap";
import img from "@assets/images/our-services/holding-phone.jpg";
const page = () => {
  return (
    <React.Fragment>
      <Banner img={bannerimg.src}>
        <h1 className="banner-header">Our Services</h1>
        <h2 className="font-40 text-white">Today&apos;s Design Made</h2>
        <h2 className="font-40 text-white">For FUTURE</h2>
      </Banner>
      <div className="py-5 my-3">
        <Advantages />
      </div>
      <Grids />
      <OurPrices />
      <Container>
        <PaymentPlans />
      </Container>
      <Row className="gap-0">
        <Col className="p-0" lg={6}>
          <ImageMaker src={img} alt="" />
        </Col>
        <Col className="p-5 flex-col-start bg-light gap-3" lg={6}>
          <h4 className="underline-72">Annie Bullock</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore consectetur adipiscing elit, sed do eiusmod labore
            consectetur adipiscing elit, sed do eiusmod
          </p>
          <ButtonMaker text="DOWNLOAD APP" />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default page;
