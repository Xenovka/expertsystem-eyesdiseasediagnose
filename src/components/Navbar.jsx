import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const activeClassName = "text-secondaryLight";
  const inactiveClassName = "text-white";

  const { pathname } = useLocation();

  return (
    <div className="mt-10 mx-10 mb-10 w-1/4">
      <div className="flex justify-around w-auto font-bold text-md">
        <NavLink to="/" className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}>
          HOME
        </NavLink>
        <NavLink
          to="/eyes/check"
          className={({ isActive }) => (isActive || pathname === "/eyes/result" ? activeClassName : inactiveClassName)}
        >
          PERIKSA
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}>
          ABOUT
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
