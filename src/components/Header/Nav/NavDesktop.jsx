import React from "react";
import { routes } from "./routes";
import NavLink from "./NavLink";

const NavDesktop = () => {
  return (
    <ul className="hidden gap-4 lg:flex">
      {routes.map((route) => (
        <NavLink
          title={route.title}
          url={route.url}
          isPageLink={route.isPageLink}
        />
      ))}
    </ul>
  );
};

export default NavDesktop;
