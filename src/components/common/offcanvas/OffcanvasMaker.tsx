"use client";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import { Offcanvas, OffcanvasBody } from "reactstrap";
import xmark from "@assets/images/header/xmark.svg";
import { ButtonMaker } from "..";
interface IOffcanvas {
  canvasBody: ReactNode;
  isOpen: boolean;
  offcavasToggler: () => void;
}
const OffcanvasMaker = (props: IOffcanvas) => {
  const { isOpen, canvasBody, offcavasToggler } = props;
  return (
    <Offcanvas direction="end" isOpen={isOpen} toggle={offcavasToggler}>
      <OffcanvasBody>
        {canvasBody}
        <ButtonMaker
          design="bg-transparent canvas-close"
          onClick={offcavasToggler}
        >
          <Image src={xmark} alt="close canvas" width={20} height={20} />
        </ButtonMaker>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default OffcanvasMaker;
