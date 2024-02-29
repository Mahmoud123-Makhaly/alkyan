"use client";
import React from "react";
import { Button, ButtonProps } from "reactstrap";

export interface IButtonProps
  extends Omit<ButtonProps, "className" | "cssModule"> {
  design?: string;
  children?: React.ReactNode;
}

const ButtonMaker = (props: IButtonProps) => {
  const {
    text,
    design,
    outline,
    color = "primary",
    type,
    block = false,
    close,
    onClick,
    children,
    disabled = false,
  } = props;

  return (
    <Button
      type={type}
      className={`button-maker ${design}`}
      outline={outline}
      color={color}
      block={block}
      close={close}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {children}
    </Button>
  );
};

export default ButtonMaker;
