"use client";
import React from "react";
import { Col, Row } from "reactstrap";
import { plans } from "./plans";
import clsx from "clsx";
import { ButtonMaker } from "../../../common";
const PaymentPlans = () => {
  return (
    <React.Fragment>
      <div className="text-center py-5">
        <p className="text-secondary fw-light">CHECK OUT</p>
        <h4 className="underline-60-center">Our Prices</h4>
      </div>
      <Row className="plans pb-5">
        {plans.map((plan, index) => {
          return (
            <Col
              key={index}
              className={`col-3 ${clsx({
                "standard-plan": plan.title === "Standard",
              })}`}
            >
              <div className={`payment-plan `}>
                <div className="plan-title">
                  <h4>{plan.title}</h4>
                </div>
                <div className="plan-price">
                  <h2>
                    <span className="currency">$</span>
                    {plan.price}
                  </h2>
                  <p className="text-secondary">/month</p>
                </div>
                <div className="plan-desc text-secondary">
                  {plan.description}
                </div>
                <div className="plan-btn">
                  <ButtonMaker text={plan.buttonText} />
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </React.Fragment>
  );
};

export default PaymentPlans;
