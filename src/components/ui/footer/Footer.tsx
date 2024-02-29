import React from "react";
import { Col, Container, Row } from "reactstrap";
import lglogo from "@assets/svgs/bw-logo.png";
import smlogo from "@assets/svgs/bw-mobile-logo.png";
import instagram1 from "@assets/images/footer/image-1.jpg";
import instagram2 from "@assets/images/footer/image-2.jpg";
import instagram3 from "@assets/images/footer/image-3.jpg";
import instagram4 from "@assets/images/footer/image-4.jpg";
import instagram5 from "@assets/images/footer/image-5.jpg";
import instagram6 from "@assets/images/footer/image-6.jpg";
import { ButtonMaker, ImageMaker } from "../../common";
import { useTranslate } from "@app/hooks";
const Footer = () => {
  const t = useTranslate("COMP_Footer");
  return (
    <React.Fragment>
      <div className="bg-dark">
        <Container>
          <Row className="gap-4 gap-md-0">
            <Col md={6} lg={3}>
              <h5>{t("ABOUT_US")}</h5>
              <p className="mb-4">
                Learn practical strategies to enhance your Quran memorization
                Learn practical strategies to enhance your Quran memorization.
              </p>
              <div className="w-50">
                <ImageMaker src={smlogo} alt="ALKAYAN DECORATION" />
              </div>
            </Col>
            <Col md={6} lg={3}>
              <h5>{t("LATEST_POSTS")}</h5>
              <ul>
                <li className="border-bottom border-gray mb-3">
                  <p className="text-white">Street inspiration</p>
                  <p className="text-primary py-3">03.03.2016</p>
                </li>
                <li className="border-bottom border-gray mb-3">
                  <p className="text-white">Places to get lost</p>
                  <p className="text-primary py-3">03.03.2016</p>
                </li>
                <li>
                  <p className="text-white">
                    Expand your mind, change everything
                  </p>
                  <p className="text-primary mb-0 py-3">03.03.2016</p>
                </li>
              </ul>
            </Col>
            <Col md={6} lg={3}>
              <h5>{t("CONTACT_US")}</h5>
              <p>
                Learn practical strategies to enhance your Quran memorization
                Learn practical strategies.
              </p>
              <form action="" className="d-flex py-3">
                <input
                  type="text"
                  placeholder="Your E-Mail"
                  className="rounded bg-transparent border px-2  font-10 width-200"
                />
                <ButtonMaker design="rounded ms-2">
                  <i className="fa-solid fa-angle-right text-white rounded"></i>
                </ButtonMaker>
              </form>
            </Col>
            <Col md={6} lg={3}>
              <h5>{t("INSTAGRAM")}</h5>
              <Row>
                <Col className="col-6" md={4}>
                  <ImageMaker src={instagram1} alt="ALKAYAN DECORATION" />
                </Col>

                <Col className="col-6" md={4}>
                  <ImageMaker src={instagram2} alt="ALKAYAN DECORATION" />
                </Col>

                <Col className="col-6" md={4}>
                  <ImageMaker src={instagram3} alt="ALKAYAN DECORATION" />
                </Col>

                <Col className="col-6" md={4}>
                  <ImageMaker src={instagram4} alt="ALKAYAN DECORATION" />
                </Col>

                <Col className="col-6" md={4}>
                  <ImageMaker src={instagram5} alt="ALKAYAN DECORATION" />
                </Col>

                <Col className="col-6" md={4}>
                  <ImageMaker src={instagram6} alt="ALKAYAN DECORATION" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottom-footer flex-between bg-black flex-wrap">
        <div className="image-container">
          <ImageMaker src={lglogo} alt="ALKAYAN DECORATION" />
        </div>
        <div className="social-links flex-between">
          <i className="fa-brands fa-xl fa-x-twitter text-white"></i>
          <i className="fa-brands fa-xl fa-facebook-f text-white"></i>
          <i className="fa-brands fa-xl fa-linkedin text-white"></i>
          <i className="fa-brands fa-xl fa-instagram text-white"></i>
        </div>
        <p className="text-white m-0 font-13">{t("COPYRIGHTS")}</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
