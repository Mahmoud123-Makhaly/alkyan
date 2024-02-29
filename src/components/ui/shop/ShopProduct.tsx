import React from "react";
import { Col, Row } from "reactstrap";
import ShopCard from "./ShopCard";
import product1 from "@assets/images/shop/product1.jpg";
import product2 from "@assets/images/shop/product2.jpg";
import product3 from "@assets/images/shop/product3.jpg";
const ShopProduct = () => {
  return (
    <Row className="py-5">
      <Col className="col-6" lg={4}>
        <ShopCard title="Combo-shelf" img={product1.src} price="$16.00" />
      </Col>
      <Col className="col-6" lg={4}>
        <ShopCard
          title="Combo-shelf"
          img={product2.src}
          price="$16.00"
          discount="$32.00"
        />
      </Col>
      <Col className="col-6" lg={4}>
        <ShopCard
          title="Combo-shelf"
          img={product3.src}
          price="$16.00"
          discount="$32.00"
        />
      </Col>
      <Col className="col-6" lg={4}>
        <ShopCard title="Combo-shelf" img={product2.src} price="$16.00" />
      </Col>
      <Col className="col-6" lg={4}>
        <ShopCard title="Combo-shelf" img={product3.src} price="$16.00" />
      </Col>
      <Col className="col-6" lg={4}>
        <ShopCard
          title="Combo-shelf"
          img={product1.src}
          price="$16.00"
          discount="$32.00"
        />
      </Col>
      <Col className="col-6" lg={4}>
        <ShopCard title="Combo-shelf" img={product2.src} price="$16.00" />
      </Col>
    </Row>
  );
};

export default ShopProduct;
