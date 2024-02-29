"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ButtonMaker, ImageMaker } from "@components";
import address from "@assets/svgs/address.svg";
import phone from "@assets/svgs/phone.svg";
import email from "@assets/svgs/email.svg";
import chat from "@assets/svgs/chat.svg";
import Image from "next/image";
const ContactUs = () => {
  return (
    <React.Fragment>
      <Container>
        <Row className="py-3">
          <Col md={6} className="pe-md-5">
            <h4 className="py-3">
              <span className="yellow-border pb-3">Find</span> us on map
            </h4>
            <p className="text-secondary fw-light my-3">
              E55 Om alqaueyen street, elshweeb, el rowayda, emara elsharqa, UAE
            </p>
            <div>
              <iframe
                width="100%"
                height="300"
                className="pb-4"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </Col>
          <Col md={6} className="ps-md-5 contact-form">
            <h4 className="py-3">
              <span className="yellow-border pb-3">Write</span> us
            </h4>
            <p className="text-secondary fw-light my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              consectetur adipiscing
            </p>
            <form className="flex-col gap-3 pb-4">
              <input
                type="text"
                name="userName"
                id=""
                placeholder="Your name"
              />
              <input type="email" name="email" id="" placeholder="E-mail" />
              <input type="text" name="message" id="" placeholder="Message" />
              <div className="w-100">
                <ButtonMaker text="SUBMIT" type="submit" design="float-end" />
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <div className="contact-info">
        <Container>
          <Row>
            <Col md={3} className="col-6 border-end contact-column">
              <div className="head">
                <ImageMaker
                  src={address}
                  alt="address"
                  className="contact-icon"
                />
                <p className="fw-semibold font-20">Address</p>
              </div>
              <p className="text-secondary fw-light">
                E55 Om alqaueyen street, elshweeb, el rowayda, emara elsharqa,
                UAE
              </p>
            </Col>
            <Col md={3} className="col-6 border-end contact-column">
              <div className="head">
                <ImageMaker
                  src={phone}
                  alt="address"
                  className="contact-icon"
                />
                <p className="fw-semibold font-20">Phones</p>
              </div>
              <p className="text-secondary fw-light">Phone: +0971 6 801 202</p>
              <p className="text-secondary fw-light">
                Cell: +02 (0) 123 456 789
              </p>
            </Col>
            <Col md={3} className="col-6 border-end contact-column">
              <div className="head">
                <ImageMaker
                  src={email}
                  alt="address"
                  className="contact-icon"
                />
                <p className="fw-semibold font-20">Emails</p>
              </div>
              <p className="text-secondary fw-light">alkayan@gmail.com</p>
              <p className="text-secondary fw-light">alkayan@yahool.com</p>
            </Col>
            <Col md={3} className="col-6  ">
              <div className="head">
                <ImageMaker src={chat} alt="address" className="contact-icon" />
                <p className="fw-semibold font-20">Live chat</p>
              </div>
              <p className="text-secondary fw-light">
                If you have any questions please let us Know
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
