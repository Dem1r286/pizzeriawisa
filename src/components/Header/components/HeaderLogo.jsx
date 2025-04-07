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
      <img src="assets/wisalogo.svg" alt="logo" className="w-30" />
    </div>
  );
};

export default HeaderLogo;
