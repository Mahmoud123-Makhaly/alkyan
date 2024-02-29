"use client";
import React, { useState } from "react";
import { Input, Nav, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import NavLinks from "./NavLinks";
import { ButtonMaker, ImageMaker } from "../../common";
import logo from "@assets/svgs/logo.jpg";
import mobileLogo from "@assets/svgs/mobile-logo.jpg";
import cart from "@assets/svgs/cart-icon.svg";
import search from "@assets/svgs/search.svg";
import primarySearch from "@assets/svgs/search-primary.svg";
import Link from "next/link";
import { useTranslate } from "@app/hooks";
import OffcanvasMaker from "../../common/offcanvas/OffcanvasMaker";

const Header = () => {
  const t = useTranslate("COMP_Header");
  const [canvasToggler, setCanvasToggler] = useState(false);
  const links = [
    { name: t("HOME"), href: "/" },
    { name: t("SHOP"), href: "/shop" },
    { name: t("OUR_SERVICES"), href: "/our-services" },
    { name: t("PORTFOLIO"), href: "/portfolio" },
    {
      name: t("ABOUT"),
      children: [
        <Link href={"./about-me"} key={0}>
          About Me
        </Link>,
        <Link href={"./about-us"} key={1}>
          About Us
        </Link>,
        <Link href={"./what-we-offer"} key={2}>
          What We Offer
        </Link>,
      ],
    },
    { name: t("CONTACT_US"), href: "/contact-us" },
  ];
  const offcanvasToggeler = () => {
    setCanvasToggler(!canvasToggler);
  };
  return (
    <Navbar className="d-flex ">
      <NavbarBrand href="/">
        <ImageMaker
          src={logo}
          alt="ALKAYAN DECORATION"
          className="desktop-logo"
        />
        <ImageMaker
          src={mobileLogo}
          alt="ALKAYAN DECORATION"
          className="mobile-logo"
        />
      </NavbarBrand>
      <div className="nav-icons d-flex">
        <OffcanvasMaker
          canvasBody={
            <Nav>
              <NavLinks links={links} />
            </Nav>
          }
          isOpen={canvasToggler}
          offcavasToggler={offcanvasToggeler}
        />
        <Nav>
          <NavLinks links={links} />
        </Nav>

        <ButtonMaker design="bg-transparent border-0 p-0">
          <ImageMaker src={cart} alt="shopping cart" />
        </ButtonMaker>
        <div className="search-aria">
          <ImageMaker src={search} alt="search" className="black-search" />
          <ImageMaker
            src={primarySearch}
            alt="search"
            className="primary-search"
          />
          <Input
            type="text"
            className="search-input"
            placeholder={t("SEARCH_PLACEHOLDER")}
          />
        </div>
        <NavbarToggler onClick={offcanvasToggeler} className="border-0" />
      </div>
    </Navbar>
  );
};

export default Header;
