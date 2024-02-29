import React from "react";
import { Badge } from "reactstrap";
interface IBadge {
  color: string;
  text: string;
}
const BadgeMaker = (props: IBadge) => {
  const { color, text } = props;
  return <Badge color={color}>{text}</Badge>;
};

export default BadgeMaker;
