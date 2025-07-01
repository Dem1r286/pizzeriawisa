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
      className="flex fixed top-[-4px] left-8 items-center justify-center cursor-pointer z-10"
      onClick={handleScrollToHome}
    >
      <img
        src="assets/other/wisalogo.svg"
        alt="Wisa Pizzeria Logo"
        className="w-18 sm:w-26 2xl:w-28"
      />
    </div>
  );
};

export default HeaderLogo;
