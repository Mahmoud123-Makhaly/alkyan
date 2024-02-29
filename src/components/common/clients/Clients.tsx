import React from "react";
import { CarouselMaker, ImageMaker } from "@components";
import amazon from "@assets/svgs/amazon.png";
import bestbuy from "@assets/svgs/best-buy.png";
import shopify from "@assets/svgs/shopify.png";
import walmart from "@assets/svgs/walmart.png";
const Clients = () => {
  const clients = [
    <div key={0} className="w-50">
      <ImageMaker src={amazon} alt="amazon" />
    </div>,
    <div key={1} className="w-50">
      <ImageMaker src={bestbuy} alt="amazon" />
    </div>,
    <div key={2} className="w-50">
      <ImageMaker src={shopify} alt="amazon" />
    </div>,
    <div key={3} className="w-50">
      <ImageMaker src={walmart} alt="amazon" />
    </div>,
    <div key={4} className="w-50">
      <ImageMaker src={amazon} alt="amazon" />
    </div>,
    <div key={5} className="w-50">
      <ImageMaker src={bestbuy} alt="amazon" />
    </div>,
    <div key={6} className="w-50">
      <ImageMaker src={shopify} alt="amazon" />
    </div>,
    <div key={7} className="w-50">
      <ImageMaker src={walmart} alt="amazon" />
    </div>,
  ];
  return (
    <div className="p-5 flex-center">
      <CarouselMaker
        numVisible={4}
        items={clients}
        delay={0.001}
        navigation={false}
        pagination={false}
        speed={2000}
        loop
      />
    </div>
  );
};

export default Clients;
