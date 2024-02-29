import React, { Children } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Badge, Card, CardBody, CardImg } from "reactstrap";
import Image from "next/image";
import clsx from "clsx";
import { ImageMaker } from "@components";
interface ICardMaker {
  img: StaticImport | string;
  ratio: "square" | "standard";
  children: React.ReactNode;
  horizontal?: boolean;
  badgetext?: string;
}
const CardMaker = (props: ICardMaker) => {
  const { img, children, ratio, horizontal = false, badgetext } = props;
  return (
    <Card
      className={clsx({
        hcard: horizontal === true,
        vcard: horizontal === false,
      })}
    >
      <div className="card-img">
        <div
          className={`${ratio} `}
          style={{ backgroundImage: `url("${img}")` }}
        >
          {badgetext && <Badge color="primary">{badgetext}</Badge>}
          <ImageMaker
            src={img}
            alt="card image"
            className="d-none"
          />
        </div>
      </div>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default CardMaker;
