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
      className="flex items-center justify-center cursor-pointer"
      onClick={handleScrollToHome}
    >
      <img src="assets/other/wisalogo.webp" alt="logo" className="w-22 sm:w-30" />
    </div>
  );
};

export default HeaderLogo;
