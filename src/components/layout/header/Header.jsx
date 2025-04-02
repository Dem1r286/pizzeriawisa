import React from "react";
import HeaderLogo from "./components/HeaderLogo";
import HeaderLinks from "./components/HeaderLinks";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full flex items-center bg-white shadow justify-between px-8 z-10 py-4 px-10">
            <HeaderLogo />
            <HeaderLinks />
            <div></div>
        </div>
    );
}

export default Header;