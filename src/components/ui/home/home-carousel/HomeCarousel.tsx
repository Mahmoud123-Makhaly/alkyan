import React from "react";
 
import { ButtonMaker, CarouselMaker, ImageMaker } from "@components";
import carousel1 from "@assets/images/home/image 38.png";
import carousel2 from "@assets/images/home/image 11.png";
import carousel3 from "@assets/images/home/image 20.png";
const HomeCarousel = () => {
  const carouselItems = [
    <div
      key={0}
      className="home-carousel"
      style={{ backgroundImage: `url('${carousel1.src}')` }}
    >
      <div className="gradient"></div>
      <ImageMaker src={carousel1} alt="carousel1" className="img-fluid w-100" />
      <div className="carousel-content">
        <div>
          <h1 className="fw-bold">Providing Solutions</h1>
          <h1 className="fw-normal">with Styles</h1>
        </div>
        <p>Beautiful Interior Designs</p>
        <ButtonMaker text="VIEW MORE" />
      </div>
    </div>,
    <div
      key={1}
      className="home-carousel"
      style={{ backgroundImage: `url('${carousel2.src}')` }}
    >
      <div className="gradient">
        <ImageMaker
          src={carousel2}
          alt="carousel1"
          className="img-fluid w-100"
        />
        <div className="carousel-content">
          <div>
            <h1 className="fw-bold">Providing Solutions</h1>
            <h1 className="fw-normal">with Styles</h1>
          </div>
          <p>Beautiful Interior Designs</p>
          <ButtonMaker text="VIEW MORE" />
        </div>
      </div>
    </div>,
    <div
      key={2}
      className="home-carousel"
      style={{ backgroundImage: `url('${carousel3.src}')` }}
    >
      <div className="gradient">
        <ImageMaker
          src={carousel3}
          alt="carousel1"
          className="img-fluid w-100"
        />
        <div className="carousel-content">
          <div>
            <h1 className="fw-bold">Providing Solutions</h1>
            <h1 className="fw-normal">with Styles</h1>
          </div>
          <p>Beautiful Interior Designs</p>
          <ButtonMaker text="VIEW MORE" />
        </div>
      </div>
    </div>,
  ];
  return <CarouselMaker items={carouselItems} numVisible={1}></CarouselMaker>;
};

export default HomeCarousel;
