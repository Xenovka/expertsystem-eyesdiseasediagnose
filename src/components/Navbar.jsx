import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-2 flex justify-around w-52">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;
