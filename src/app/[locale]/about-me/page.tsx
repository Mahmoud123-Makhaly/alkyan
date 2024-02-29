import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Banner, ImageMaker, ProgressBar } from "@components";
import person from "@assets/images/about-me/person.jpg";
import signature from "@assets/images/about-me/signature.jpg";
import banner from "@assets/images/about-me/banner.jpg";
const page = () => {
  return (
    <React.Fragment>
      <Banner img={banner.src} alt="about me" text="About Me" />
      <Container>
        <Row className="py-5">
          <Col lg={7}>
            <ImageMaker src={person} alt="about me" />
          </Col>
          <Col lg={5} className="flex-col-start gap-5 px-5">
            <h4 className="underline-83">Cameron Williamson</h4>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore
            </p>
            <ul className="text-secondary">
              <li>
                <i className="fa-regular fa-square-check pe-3 text-primary"></i>
                Lorem ipsum dolor sit amet, consectetur
              </li>
              <li>
                <i className="fa-regular fa-square-check pe-3 text-primary"></i>
                Lorem ipsum dolor sit amet, consectetur
              </li>
              <li>
                <i className="fa-regular fa-square-check pe-3 text-primary"></i>
                Lorem ipsum dolor sit amet, consectetur
              </li>
              <li>
                <i className="fa-regular fa-square-check pe-3 text-primary"></i>
                Lorem ipsum dolor sit amet, consectetur
              </li>
            </ul>
            <ImageMaker src={signature} alt="signature" />
          </Col>
        </Row>
      </Container>
      <div className="bg-light py-5">
        <Container>
          <Row>
            <Col lg={6} className="flex-col-start">
              <p></p>
              <h4 className="mb-0 underline-83 mb-3">What I’m good at</h4>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore consectetur adipiscing elit, sed do eiusmod
              </p>
            </Col>
            <Col lg={6}>
              <div className="w-100">
                <div className="flex-between w-100">
                  <h4>Development</h4>
                  <h4>93%</h4>
                </div>
                <ProgressBar percentage={93} />
              </div>
              <div className="w-100">
                <div className="flex-between w-100">
                  <h4>Design</h4>
                  <h4>83%</h4>
                </div>
                <ProgressBar percentage={83} />
              </div>
              <div className="w-100">
                <div className="flex-between w-100">
                  <h4>User Experience</h4>
                  <h4>93%</h4>
                </div>
                <ProgressBar percentage={93} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default page;
