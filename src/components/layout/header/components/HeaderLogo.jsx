import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to="/" id="header-logo" className="flex items-center justify-center gap-6">
      <p className="text-3xl font-semibold tracking-wider text-[#f0992f]" style={{ fontFamily: 'Dangrek, sans-serif' }}>
        WISA
      </p>
    </Link>
  );
};

export default HeaderLogo;
