import React from "react";
import { ButtonMaker } from "@components";
import img1 from "@assets/images/home/zoom/image-1.jpg";
import img2 from "@assets/images/home/zoom/image-2.jpg";
import img3 from "@assets/images/home/zoom/image-3.jpg";
import ZoomCard from "./ZoomCard";
import { Col, Row } from "reactstrap";
const ZoomCollection = () => {
  const zoomCollection = [
    {
      img: img1,
      text: "Introduce Vision to ourspace",
      btn: <ButtonMaker text="READ MORE" design="font-14" />,
    },
    {
      img: img2,
      text: "",
      btn: <ButtonMaker text="READ MORE" design="font-14" />,
    },
    {
      img: img3,
      text: "Cozy Design For Your Home",
      btn: <ButtonMaker text="READ MORE" design="font-14" />,
    },
  ];
  return (
    <React.Fragment>
      <Row className="gap-0">
        {zoomCollection.map((item, index) => {
          return (
            <Col md={4} className="p-0" key={index}>
              <ZoomCard img={item.img.src} text={item.text} btn={item.btn} />
            </Col>
          );
        })}
      </Row>
    </React.Fragment>
  );
};

export default ZoomCollection;
