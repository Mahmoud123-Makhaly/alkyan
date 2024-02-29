import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ButtonMaker, ImageMaker } from "../../../common";
interface IZoomCard {
  text?: string;
  img: string | StaticImport;
  alt?: string;
  btn?: React.ReactNode;
  design?: string;
}
const ZoomCard = (props: IZoomCard) => {
  const { text, img, btn, alt = "", design } = props;
  return (
    <div className={design}>
      <div className="zoom-card">
        <div
          className="zoom-image"
          style={{ backgroundImage: `url('${img}')` }}
        >
          <ImageMaker src={img} alt={alt} className="d-none" />
        </div>
        {text && <h4 className="text-white">{text}</h4>}
        {btn}
      </div>
    </div>
  );
};

export default ZoomCard;
