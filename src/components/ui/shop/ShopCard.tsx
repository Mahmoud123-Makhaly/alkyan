import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { Badge, Card } from "reactstrap";
import { ButtonMaker, ImageMaker } from "@components";
import cart from "@assets/svgs/white-cart.svg";
interface IShopCard {
  img: string | StaticImport;
  title: string;
  price?: string;
  discount?: string;
  alt?: string;
}
const ShopCard = (props: IShopCard) => {
  const { img, title, discount, price, alt } = props;
  return (
    <Card className="shop-card">
      <div className="card-img">
        <div className="square" style={{ backgroundImage: `url("${img}")` }}>
          <Image src={img} alt={alt || ""} className="d-none rounded" fill />
        </div>
        {discount && <Badge>SALE</Badge>}
        <ButtonMaker design="bg-black rounded-pill flex-between border-0">
          <ImageMaker src={cart} alt="cart" />
          <p className="font-12 text-white fw-semibold">ADD TO CART</p>
        </ButtonMaker>
      </div>
      <h4 className="pt-3">{title}</h4>
      <div className="d-flex">
        {discount && <del className="text-gray me-2">{discount}</del>}
        <p className="text-primary p-0">{price}</p>
      </div>
    </Card>
  );
};

export default ShopCard;
