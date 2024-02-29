"use client";
import React from "react";
import { Banner, ImageMaker, Portfolio } from "@components";
import { motion } from "framer-motion";
import bannerimg from "@assets/images/portfolio/banner.jpg";
import arrow from "@assets/svgs/arrow.png";
import { Link } from "@navigation";
const page = () => {
  return (
    <React.Fragment>
      <Banner img={bannerimg.src}>
        <h1 className="banner-header">
          Interior <span className="text-warning">Decoration</span> Made with
          Care
        </h1>
        <h2 className="fw-light">Scroll Down for More</h2>
        <Link href={"#portfolio"} className="arrow-down">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 50, 0] }}
            transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
          >
            <ImageMaker src={arrow.src} alt="banner" />
          </motion.div>
        </Link>
      </Banner>
      <Portfolio />
    </React.Fragment>
  );
};

export default page;
