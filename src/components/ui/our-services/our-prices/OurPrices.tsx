import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ButtonMaker, ImageMaker, ProgressBar } from "@components";
import support from "@assets/svgs/support.svg";
import development from "@assets/svgs/development.svg";

const OurPrices = () => {
  return (
    <div className="bg-light">
      <Container>
        <Row className="align-items-center py-5 row-gap-5">
          <Col md={6}>
            <h4 className="underline-51">Our prices</h4>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore consectetur adipiscing elit, sed do eiusmod{" "}
            </p>
            <ButtonMaker text="VIEW MORE" />
          </Col>
          <Col md={6}>
            <Row>
              <Col>
                <div className="px-2 px-lg-5">
                  <ImageMaker src={support} alt="" className="mb-3" />
                </div>
                <h4 className="text-center">Outstanding Support</h4>
              </Col>
              <Col>
                <div className="px-2 px-lg-5">
                  <ImageMaker src={development} alt="" className="mb-3" />
                </div>
                <h4 className="text-center">Web Development</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurPrices;
