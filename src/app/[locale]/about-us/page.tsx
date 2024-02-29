import React from "react";
import { Banner, Clients, ImageMaker } from "@components";
import banner from "@assets/images/about-us/banner.jpg";
import paint from "@assets/images/about-us/paint.jpg";
import { content } from "../about/data";
import { StaticPage } from "@components";
import { Col, Container, Row } from "reactstrap";
const page = (props: { params: { locale?: "en" | "ar" } }) => {
  const { locale } = props.params;
  const data = content["about-us"][locale || "en"];

  return (
    <React.Fragment>
      <Banner img={banner.src} text="About Us" />
      <Container>
        <Row className="pt-5 mt-3">
          <Col md={4}>
            {data && locale && (
              <StaticPage header={data.col1.header} body={data.col1.body} />
            )}
          </Col>
          <Col md={4}>
            {data && locale && (
              <StaticPage header={data.col2.header} body={data.col2.body} />
            )}
          </Col>
          <Col md={4}>
            {data && locale && (
              <StaticPage header={data.col3.header} body={data.col3.body} />
            )}
          </Col>
        </Row>
      </Container>
      <ImageMaker className="p-2 p-md-5" src={paint.src} alt="home paint" />
      <div className="bg-gray">
        <Container>
          <Clients />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default page;
