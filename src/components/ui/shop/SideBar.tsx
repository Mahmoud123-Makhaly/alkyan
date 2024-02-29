"use client";
import React, { useState } from "react";
import CardMaker from "../../common/card/CardMaker";
import { Slider, SliderChangeEvent } from "primereact/slider";
import { Rating } from "primereact/rating";
import sidebar1 from "@assets/images/shop/sidebar1.jpg";
import sidebar2 from "@assets/images/shop/sidebar2.jpg";
import sidebar3 from "@assets/images/shop/sidebar3.jpg";
import { ButtonMaker } from "../../common";

const SideBar = () => {
  const defaultRange: [number, number] = [20, 80];
  const [value, setValue] = useState<[number, number]>(defaultRange);
  return (
    <aside className="flex-col-start border rounded py-4 px-3 sidebar">
      <h3>
        <span className="yellow-border pb-1">Filter</span> By Price
      </h3>
      <div className="my-4 w-75">
        <Slider
          value={value}
          onChange={(e: SliderChangeEvent) =>
            setValue(Array.isArray(e.value) ? e.value : defaultRange)
          }
          className="w-100"
          range
          style={{ height: "25px" }}
        />
      </div>
      <div className="flex-between w-75">
        <ButtonMaker text="FILTER" design="rounded" disabled />
        <p>
          PRICE: ${value[0]} - ${value[1]}
        </p>
      </div>
      <h3 className="my-4">
        <span className="yellow-border pb-1">Top</span> Rated Products
      </h3>
      <div className="w-100 d-flex flex-lg-column overflow-x-auto">
        <CardMaker img={sidebar1.src} ratio="square" horizontal>
          <h6>elegant</h6>
          <Rating value={5} cancel={false} readOnly />
          <p className="text-primary">$16.00</p>
        </CardMaker>
        <CardMaker img={sidebar2.src} ratio="square" horizontal>
          <h6>Bookcase</h6>
          <Rating value={5} cancel={false} readOnly />
          <p className="text-primary">$26.00</p>
        </CardMaker>
        <CardMaker img={sidebar3.src} ratio="square" horizontal>
          <h6>Classy Living</h6>
          <Rating value={5} cancel={false} readOnly />
          <p className="text-primary">$43.00</p>
        </CardMaker>
      </div>
    </aside>
  );
};

export default SideBar;
