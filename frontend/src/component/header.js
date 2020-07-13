import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/" className="flex h-10 bg-black justify-center items-center">
      <img
        src="images/ecosystem-logo.png"
        className="w-10 h-10"
        alt="company-logo"
      />
    </Link>
  );
}

export default Header;
