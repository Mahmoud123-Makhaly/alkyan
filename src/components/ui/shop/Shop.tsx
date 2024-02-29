"use client";
import React from "react";
import { Col, Container, Input, Row } from "reactstrap";
import { DropDown, ImageMaker } from "@components";
import SideBar from "./SideBar";
import search from "@assets/svgs/search.svg";
import ShopProduct from "./ShopProduct";

const Shop = () => {
  const tags = ["basic", "Decoration", "trend", "Lighting", "Modern"];
  const sortItems = ["Price", "Trend", "Size", "rate"];
  return (
    <Container className="my-5 py-3">
      <Row className="shop">
        <Col xl={8}>
          <p className="text-secondary font-18 pb-4">
            Showing 1-12 of 30 results
          </p>
          <div className="flex-between gap-3">
            <Input
              type="text"
              name={"search"}
              placeholder="Search"
              className="shop-search"
            >
              <ImageMaker src={search} alt="search" className="black-search" />
            </Input>
            <div className="flex-between gap-3">
              <DropDown menuItems={tags} title="Select Tags"></DropDown>
              <DropDown menuItems={sortItems} title="Sort by"></DropDown>
            </div>
          </div>
          <ShopProduct />
        </Col>

        <Col xl={4}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
