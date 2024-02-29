import Image from "next/image";
import React, { ReactNode } from "react";
import { Col, Container, Row } from "reactstrap";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ImageMaker } from "@components";
interface IOverlay {
  img: string | StaticImport;
  children: ReactNode;
  imgOnleft?: boolean;
}
const Overlay = (props: IOverlay) => {
  const { img, children, imgOnleft = true } = props;
  return (
    <Row
      className={`overlay-container gap-0 ${
        imgOnleft === false ? "flex-row-reverse" : ""
      }`}
    >
      <Col lg={6} className="p-0">
        <ImageMaker src={img} alt="" className="w-100" />
      </Col>
      <Col lg={6} className="py-lg-2 px-0 flex-col position-relative">
        <div className="overlay">{children}</div>
      </Col>
    </Row>
  );
};

export default Overlay;
