import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, ForkKnife, MousePointerClick, ArrowDown } from "lucide-react";

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const scrollToSection = () => {
    const el = document.getElementById('food-offer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="homepage"
      className="flex justify-center items-center w-screen xl:h-screen h-screen bg-cover bg-center pt-[15vh] xl:pt-0"
      style={{
        backgroundImage: "url(assets/other/background.webp",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-between w-full h-full ml-0 xl:ml-[5vw] flex-col xl:flex-row lg:px-0 gap-4">
        {/* Left Side Content ... (No Changes Here) */}
        <div className="flex justify-center items-center flex-col">

          <h3 role="heading" aria-level="3" className="text-black font-bold text-[13px] md:text-[15px] lg:text-[20px] self-center shadow-md  bg-[#f39420] rounded-xl px-4 py-1 text-white mb-4 text-center"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}>
            Brza i Besplatna Dostava u Sarajevu</h3>


          <div className="backdrop-blur-sm bg-white/80 rounded-2xl px-6 text-center lg:px-20 py-7 mx-4">
            <h1 role="heading" aria-level="1" className="whitespace-nowrap text-black text-[30px] font-bold sm:text-[30px] self-center text-center xl:self-start mb-2 md:text-[30px] lg:text-[40px] xl:text-[45px] 2xl:text-[60px] 3xl:text-[80px]">
              Pizzeria Wisa
            </h1>

            <p className="lg:whitespace-nowrap text-black text-[14px] sm:text-[14px] 2xl:text-[17px]">
              Radno vrijeme: od ponedjeljka do subote, od{" "}
              <span className="font-bold">09:00 do 22:00</span>. Nedjelja
              neradna.
            </p>

            <p className="text-red-500 text-[14px] font-black sm:text-[14px] 2xl:text-[17px] mt-2">Dostava na Vaša vrata u roku od 30 minuta!</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-10 md:gap-20 pt-10 self-center">
            <div>
              <a
                href="tel:+38761205605"
                className="flex justify-center items-center flex-col rounded-xl px-6 py-2 self-center bg-red-500 shadow-lg text-white hover:scale-104 transition-transform duration-300"
              >
                <div className="flex flex-col items-center mb-2">
                  <p className="text-[12px] 2xl:text-[15px] font-semibold"
                    style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}>
                    Naručite Sada:
                  </p>
                  <div className="flex items-center">
                    <p className="text-[13px] lg:text-[15px] 2xl:text-[17px] font-bold mr-2"
                      style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}>
                      +387 61 205 605 ili +387 62 805 205
                    </p>
                    <MousePointerClick size={20} />
                  </div>
                </div>
              </a>
            </div>

            <div className="flex justify-center items-center flex-row gap-8 xl:gap-20">
              <Link
                to="/menu"
                className="cursor-pointer flex flex-row justify-center items-center gap-3 w-[120px] lg:w-[130px]  bg-red-500 h-fit py-2 px-4 shadow-lg text-white font-semibold rounded-xl text-sm sm:text-md 2xl:text-lg hover:scale-104 transition-transform duration-300"
                style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}>
                Meni
                <ForkKnife className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>

              <a
                href="https://maps.app.goo.gl/d7gj7VM7iFw2U7ZA8"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex flex-row justify-center items-center gap-3 w-[110px] lg:w-[130px]  bg-red-500 h-fit py-2 px-4 shadow-lg text-white font-semibold rounded-xl text-sm sm:text-md 2xl:text-lg hover:scale-104 transition-transform duration-300"
                style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}>
                Lokacija
                <MapPin className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div onClick={scrollToSection}>
            <ArrowDown
              size={45}
              className="absolute top-[90%] z-10 left-1/2 -translate-x-1/2 text-white animate-bounce bg-black rounded-xl p-2 cursor-pointer transition-all hover:bg-[#fd6b21]"
            />
          </div>
        </div>

        <div className="relative w-full h-screen overflow-hidden">

          <style>
            {`
          @media (min-width: 2500px) {
            .right-limit-extra-wide {
              right: -20% !important;
            }
          }
        `}
          </style>
          {/* For small screens: bottom center - FIX APPLIED HERE */}
          {screenWidth < 1280 ? (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 z-0" // Removed mt-20
              style={{
                bottom: "-45%", // Set a safer, small negative percentage
              }}
            >
              <div
                className="overflow-hidden w-[105vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw]"
                style={{
                  transform: "rotate(90deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <div className="relative flex justify-center items-center w-full aspect-square">
                  <img
                    src="assets/other/plate.webp"
                    alt="Wisa Pizza"
                    className="animate-spin w-full h-auto"
                    style={{ animationDuration: "3s" }}
                  />
                  <img
                    src="assets/other/pizza.webp"
                    alt="Wisa pizza"
                    className="absolute"
                    style={{
                      width: "80%",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            // For large screens: right side, rotated
            <div className="absolute top-1/2 transform -translate-y-1/2 right-[-50%] right-limit-extra-wide z-0">
              <div
                className="overflow-hidden w-[60vw] max-w-[1200px]"
                style={{
                  transform: "rotate(90deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <div className="relative flex justify-center items-center w-full aspect-square">
                  <img
                    src="assets/other/plate.webp"
                    alt="Wisa pizza"
                    className="animate-spin w-full h-auto"
                    style={{ animationDuration: "3s" }}
                  />
                  <img
                    src="assets/other/pizza.webp"
                    alt="Wisa pizza"
                    className="absolute"
                    style={{
                      width: "80%",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;