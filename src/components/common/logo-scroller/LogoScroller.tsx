import React, { ReactNode } from "react";
import { CarouselMaker } from "..";

const LogoScroller = (logos: Array<ReactNode>) => {
  return (
    <CarouselMaker
      items={logos}
      numVisible={4}
      delay={0.5}
      spaceBetween={40}
      freeMode
      disableOnInteraction={false}
    />
  );
};

export default LogoScroller;
