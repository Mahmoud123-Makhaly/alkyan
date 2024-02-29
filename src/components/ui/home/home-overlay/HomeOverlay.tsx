import React from "react";
import cafe from "@assets/images/home/overlay-section/Cafe.jpg";
import Living from "@assets/images/home/overlay-section/Living.jpg";
import { ButtonMaker, Overlay } from "@components";
import { Container } from "reactstrap";
const OverlayContainer = () => {
  return (
    <Container>
      <Overlay img={cafe.src} imgOnleft={false}>
        <div>
          <h5 className="fw-bold">Beautiful on All</h5>
          <h5 className="fw-bold mb-0">Home Sizes</h5>
        </div>
        <p className="text-secondary py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
        <ButtonMaker text="Read More" />
      </Overlay>
      <Overlay img={Living.src}>
        <div>
          <h5 className="fw-bold">Fully Elegant</h5>
          <h5 className="fw-bold mb-0">& Simple Designs</h5>
        </div>
        <p className="text-secondary py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
        <ButtonMaker text="Read More" />
      </Overlay>
    </Container>
  );
};

export default OverlayContainer;
