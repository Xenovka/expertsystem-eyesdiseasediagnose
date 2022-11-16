import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4 w-full">
      <div className="flex justify-around w-auto text-white font-semibold text-md">
        <Link to="/">Home</Link>
        <Link to="/eyes/check">Eyes Check</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
