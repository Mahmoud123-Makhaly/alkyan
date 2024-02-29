import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { ReactNode } from "react";
import { Col, Row } from "reactstrap";
interface ImgaeGrid {
  img: string | StaticImport;
  ratio?: "squre" | "standard";
  topleft?: ReactNode;
  topright?: ReactNode;
  bottomleft?: ReactNode;
  bottomright?: ReactNode;
}
const ImageGrid = (props: ImgaeGrid) => {
  const {
    img,
    ratio = "standard",
    bottomleft,
    bottomright,
    topleft,
    topright,
  } = props;
  return (
    <div
      className={`${ratio}-ratio grid-card`}
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="position-absolute w-100 h-100">
        <Row className="top-grid">
          <Col>{topleft}</Col>
          <Col>{topright}</Col>
        </Row>
        <Row className="bottom-grid align-items-end">
          <Col>{bottomleft}</Col>
          <Col>{bottomright}</Col>
        </Row>
      </div>
    </div>
  );
};

export default ImageGrid;
