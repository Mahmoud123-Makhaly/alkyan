import React from "react";
import { Col, Container, Row } from "reactstrap";
import CardMaker from "../../../common/card/CardMaker";
import img1 from "@assets/images/home/journal-news/img1.jpg";
import img2 from "@assets/images/home/journal-news/img2.jpg";
import img3 from "@assets/images/home/journal-news/img3.jpg";
import { Link } from "@navigation";
const JournalNews = () => {
  return (
    <Container>
      <div className=" text-center paddingb-32">
        <p className="text-secondary">JOURNAL</p>
        <h5 className="fw-semibold underline-83-center">
          Read Our Latest News
        </h5>
      </div>
      <Row>
        <Col md={4}>
          <CardMaker img={img1.src} ratio="standard">
            <div className="flex-col-start">
              <h5 className="fw-bold">make it simple</h5>
              <div className="d-flex">
                <p className="text-secondary border-end pe-2 border-2 border-primary">
                  by jane doe
                </p>
                <p className="text-secondary px-2 border-end border-2 border-primary">
                  competition
                </p>
                <p className="text-secondary ps-2">23.02.2016</p>
              </div>
            </div>
            <p className="py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <Link href={""}>READ MORE</Link>
          </CardMaker>
        </Col>
        <Col md={4}>
          <CardMaker img={img2.src} ratio="standard">
            <div className="flex-col-start">
              <h5 className="fw-bold">make it simple</h5>
              <div className="d-flex">
                <p className="text-secondary border-end pe-2 border-2 border-primary">
                  by jane doe
                </p>
                <p className="text-secondary px-2 border-end border-2 border-primary">
                  competition
                </p>
                <p className="text-secondary ps-2">23.02.2016</p>
              </div>
            </div>
            <p className="py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <Link href={""}>READ MORE</Link>
          </CardMaker>
        </Col>
        <Col md={4}>
          <CardMaker img={img3.src} ratio="standard">
            <div className="flex-col-start">
              <h5 className="fw-bold">make it simple</h5>
              <div className="d-flex">
                <p className="text-secondary border-end pe-2 border-2 border-primary">
                  by jane doe
                </p>
                <p className="text-secondary px-2 border-end border-2 border-primary">
                  competition
                </p>
                <p className="text-secondary ps-2">23.02.2016</p>
              </div>
            </div>
            <p className="py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <Link href={""}>READ MORE</Link>
          </CardMaker>
        </Col>
      </Row>
    </Container>
  );
};

export default JournalNews;
