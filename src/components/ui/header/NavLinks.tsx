"use client";
import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { NavLink } from "reactstrap";
import clsx from "clsx";
import { DropDown } from "@components";
interface ILink {
  links: Array<{
    name: string;
    href?: string;
    icon?: React.ReactNode;
    children?: Array<ReactNode>;
  }>;
}
const NavLinks = (props: ILink) => {
  const { links } = props;
  const [navMenu, setNavMenu] = useState("");

  const pathname = usePathname();
  const currentPathname = pathname.split("/").slice(2).join("/"); // Remove the locale

  return (
    <React.Fragment>
      {links.map((link, index) => {
        const navLinkPathname = link.href?.slice(1);
        return (
          <React.Fragment key={index}>
            {link.href ? (
              <NavLink
                href={link.href || undefined}
                className={clsx({
                  active: currentPathname === navLinkPathname,
                })}
                onClick={() => {
                  setNavMenu(navMenu === `${index}` ? "" : `${index}`);
                }}
              >
                <p className="navlink-name">{link.name}</p>
              </NavLink>
            ) : (
              <DropDown
                key={index}
                title={link.name}
                menuItems={link.children!}
              />
            )}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default NavLinks;
