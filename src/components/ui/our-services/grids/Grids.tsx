import React from "react";
import { Col, Row } from "reactstrap";
import { ButtonMaker } from "@components";
import grid1 from "@assets/images/our-services/grid1.jpg";
import grid2 from "@assets/images/our-services/grid2.jpg";
import grid3 from "@assets/images/our-services/grid3.jpg";
import { GridCard } from "@components";
const Grids = () => {
  const topleft1 = (
    <div>
      <p>Interior Design</p>
      <p>for the Future</p>
    </div>
  );
  const topleft2 = (
    <div>
      <p className="text-white">Lots of Flexible</p>
      <p className="text-white">Funcionalities</p>
    </div>
  );
  const topleft3 = (
    <div>
      <p className="text-white">Introduce</p>
      <p className="text-white">Vision to our space</p>
    </div>
  );
  const bottomleft = <ButtonMaker text="READ MORE" />;
  return (
    <Row>
      <Col lg={4} className="p-0">
        <GridCard img={grid1.src} topleft={topleft1} bottomleft={bottomleft} />
      </Col>
      <Col lg={4} className="p-0">
        <GridCard img={grid2.src} topleft={topleft2} bottomleft={bottomleft} />
      </Col>
      <Col lg={4} className="p-0">
        <GridCard img={grid3.src} topleft={topleft3} bottomleft={bottomleft} />
      </Col>
    </Row>
  );
};

export default Grids;
