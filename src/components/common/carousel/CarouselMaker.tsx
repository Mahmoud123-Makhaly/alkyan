"use client";

import React, { ReactNode } from "react";

import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/scss/autoplay";

interface ICarousel {
  loop?: boolean;
  numVisible: number;
  orientation?: "vertical" | "horizontal";
  items: Array<ReactNode>;
  pagination?: boolean;
  navigation?: boolean;
  delay?: number;
  speed?: number;
  spaceBetween?: number;
  freeMode?: boolean;
  disableOnInteraction?: boolean;
}

const CarouselMaker = (props: ICarousel) => {
  const {
    items,
    loop = true,
    numVisible,
    orientation = "horizontal",
    navigation = true,
    pagination = true,
    delay = 3000,
    speed,
    spaceBetween,
    freeMode,
    disableOnInteraction = true,
  } = props;

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      pagination={pagination ? { clickable: true } : false}
      slidesPerView={numVisible}
      spaceBetween={spaceBetween}
      autoplay={{
        delay: delay,
        disableOnInteraction: disableOnInteraction,
      }}
      speed={speed}
      direction={orientation}
      loop={loop}
      navigation={navigation}
      freeMode={freeMode}
    >
      {items.map((item, index) => {
        return (
          <SwiperSlide key={index} className="flex-center">
            {item}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselMaker;
