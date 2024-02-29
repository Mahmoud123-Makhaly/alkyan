import React from "react";
import { TabMenu } from "primereact/tabmenu";
import { MenuItem } from "primereact/menuitem";
import { Col, Container, Row } from "reactstrap";
import CardMaker from "../../common/card/CardMaker";
import img from "@assets/images/portfolio/image 34.png";
const Portfolio = () => {
  const items: MenuItem[] = [
    { label: "Show all" },
    { label: "Architecture" },
    { label: "Furniture" },
    { label: "Penthouse" },
  ];
  return (
    <Container>
      <TabMenu model={items} className="py-4" />
      <Row id="portfolio">
        <Col lg={3} className="col-6">
          <CardMaker img={img.src} ratio="standard">
            <p className="fw-bold">Stylish Interior Decoration</p>
            <p className="text-secondary">Design/Interior</p>
          </CardMaker>
        </Col>
        <Col lg={3} className="col-6">
          <CardMaker img={img.src} ratio="standard">
            <p className="fw-bold">Stylish Interior Decoration</p>
            <p className="text-secondary">Design/Interior</p>
          </CardMaker>
        </Col>
        <Col lg={3} className="col-6">
          <CardMaker img={img.src} ratio="standard">
            <p className="fw-bold">Stylish Interior Decoration</p>
            <p className="text-secondary">Design/Interior</p>
          </CardMaker>
        </Col>
        <Col lg={3} className="col-6">
          <CardMaker img={img.src} ratio="standard">
            <p className="fw-bold">Stylish Interior Decoration</p>
            <p className="text-secondary">Design/Interior</p>
          </CardMaker>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
