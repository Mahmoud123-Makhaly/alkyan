"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import imgs from "./motionCard";
import { Col, Row } from "reactstrap";
import { ImageMaker } from "@components";
const MotionCards = () => {
  return (
    <React.Fragment>
      <Row className="gap-0">
        {imgs.map((item, index) => {
          return (
            <Col key={index} md={3} className="p-0 col-6">
              <div
                className="motion-card"
                style={{ backgroundImage: `url('${item.img.src}')` }}
              >
                <ImageMaker src={item.img} alt="" className="d-none" />

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="motion-part"
                >
                  <div className="motion-text text-white">
                    <motion.div
                      initial={{ x: 1000 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="fw-bold border-bottom">
                        Welcome To The Future
                      </p>
                    </motion.div>
                    <p className="fw-light">Design/Interior</p>
                  </div>
                </motion.div>
              </div>
            </Col>
          );
        })}
      </Row>
    </React.Fragment>
  );
};

export default MotionCards;
