"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ButtonMaker, ProgressBar } from "@components";

const Skills = () => {
  const development = 93;
  const design = 83;
  const ux = 96;

  return (
    <Container className="py-3">
      <Row className="py-4">
        <Col md={6} className="flex-col-start">
          <p className="text-secondary">APPLICATION</p>
          <h2 className="fw-bold underline-59">Our Skills</h2>
          <p className="text-secondary py-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con.
          </p>
        </Col>
        <Col md={6} className="flex-col-between px-md-5 py-4 ">
          <div className="w-100">
            <div className="flex-between w-100">
              <h4>Development</h4>
              <h4>{development}%</h4>
            </div>
            <ProgressBar percentage={development} />
          </div>
          <div className="w-100">
            <div className="flex-between w-100">
              <h4>Design</h4>
              <h4>{design}%</h4>
            </div>
            <ProgressBar percentage={design} />
          </div>
          <div className="w-100">
            <div className="flex-between w-100">
              <h4>User Experience</h4>
              <h4>{ux}%</h4>
            </div>
            <ProgressBar percentage={ux} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
