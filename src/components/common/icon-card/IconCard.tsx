import React from "react";
import IconCircle from "../icon-circle/IconCircle";
import { Col, Container, Row } from "reactstrap";

interface IIconCard {
  data: Array<{ icon: React.ReactNode; title: string; description: string }>;
}
const IconCard = (props: IIconCard) => {
  const { data } = props;
  return (
    <React.Fragment>
      <Row className="icon-cards">
        {data.map((item, index) => {
          return (
            <Col className="flex-col" key={index}>
              <IconCircle icon={item.icon} />
              <h6 className="fw-semibold">{item.title}</h6>
              <p className="text-secondary text-center">{item.description}</p>
            </Col>
          );
        })}
      </Row>
    </React.Fragment>
  );
};

export default IconCard;
