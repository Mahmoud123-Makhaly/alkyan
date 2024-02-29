"use client";
import React, { ReactNode, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownProps,
  DropdownToggle,
} from "reactstrap";
interface IDropDown extends DropdownProps {
  title: string;
  menuItems: Array<string > | Array<ReactNode>;
}
const DropDown = (props: IDropDown) => {
  const { menuItems, title } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <Dropdown isOpen={isOpen} toggle={toggleMenu}>
      <DropdownToggle caret>{title}</DropdownToggle>
      <DropdownMenu>
        {menuItems.map((item, index) => {
          return <DropdownItem key={index}>{item}</DropdownItem>;
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
