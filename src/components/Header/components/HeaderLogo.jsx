import React from "react";

const HeaderLogo = () => {
  const handleScrollToHome = () => {
    const homepage = document.getElementById("homepage");
    if (homepage) {
      homepage.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="header-logo"
      className="hidden lg:flex lg:fixed top-0 left-10 items-center justify-center cursor-pointer z-10"
      onClick={handleScrollToHome}
    >
      <img
        src="assets/other/wisalogo.svg"
        alt="Wisa Pizzeria Logo"
        className="w-22 sm:w-26 2xl:w-28"
      />
    </div>
  );
};

export default HeaderLogo;
