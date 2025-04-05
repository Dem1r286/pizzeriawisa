import React from "react";
import HeaderLogo from "./Header/components/HeaderLogo";
import HeaderLinks from "./Header/components/HeaderLinks";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-[80vh] mb-25 bg-cover bg-center">
        <div className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-10">
          <HeaderLogo />
          <HeaderLinks />
          <div></div>
        </div>

        <div className="flex justify-between w-screen ml-[15vw]">
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-start flex-col">
              <p className="text-[#F3274C] self center">Besplatna Dostava</p>
              <p className="text-black text-[75px]">
                Vruća <span className="text-[#F3274C] font-medium">Pizza</span>,
                <br />
                Besplatna Dostava
              </p>
              <p>Radno vrijeme: od ponedjeljka do subote, od 09:00 do 22:00. Dostava na vaša vrata u roku od 30 minuta!</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="assets/herobackground.png" alt="" className="w-[40vw] max-w-[900px]"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
