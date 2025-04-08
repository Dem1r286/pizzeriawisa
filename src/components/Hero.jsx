import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ForkKnife } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
      className="flex justify-center items-center w-screen xl:h-screen h-screen  bg-cover bg-center pt-40 xl:pt-0"
      style={{
        backgroundImage: `url('assets/background.webp')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-between w-full h-full ml-0 xl:ml-[5vw] flex-col xl:flex-row lg:px-0">
        {/* Left Side Content */}
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-center items-start flex-col px-10 lg:px-20 py-10 backdrop-blur-sm bg-white/70 rounded-2xl shadow-xl">
            <p className="text-black text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] 3xl:text-[80px]">
              Vruća <span className="text-[#F3274C] font-semibold">Pizza</span>,{" "}
              <br />
              Besplatna Dostava
            </p>

            <p className="text-[12px] sm:text-[15px] lg:text-[17px]">
              Radno vrijeme: od ponedjeljka do subote, od{" "}
              <span className="font-bold">09:00 do 22:00</span>. Nedjelja
              neradna. <br />
              Dostava na vaša vrata u roku od{" "}
              <span className="font-bold">30 minuta!</span>
            </p>

            <div className="flex justify-center items-center flex-col gap-10 md:gap-20 pt-10 self-center">
              <a
                href="tel:+38761205605"
                className="flex justify-center items-center flex-col rounded-xl px-6 py-2 self-center bg-gradient-to-b from-[#f39420] to-[#e57e19] shadow-md text-white hover:scale-104 transition-transform duration-300"
              >
                <p className="text-[13px] lg:text-[17px] font-semibold">
                  Dostava:
                </p>
                <p className="text-[13px] lg:text-[17px] font-bold">
                  +387 61 205 605 ili +387 62 805 205
                </p>
              </a>

              <div className="flex justify-center items-center flex-row gap-8 xl:gap-20">
                <Link
                  to="/menu"
                  className="cursor-pointer flex flex-row justify-center items-center gap-3 w-[120px] lg:w-[130px] bg-[#F3274C] h-fit py-2 px-4 text-white font-semibold rounded-xl text-sm sm:text-lg hover:scale-104 transition-transform duration-300"
                >
                  Menu
                  <ForkKnife className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://maps.app.goo.gl/d7gj7VM7iFw2U7ZA8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex flex-row justify-center items-center gap-3 w-[110px] lg:w-[130px] bg-[#F3274C] h-fit py-2 px-4 text-white font-semibold rounded-xl text-sm sm:text-lg hover:scale-104 transition-transform duration-300"
                >
                  Lokacija
                  <MapPin className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Plate Image */}
        <div className="flex justify-center items-center">
          <img
            src={
              screenWidth > 1280
                ? "assets/pizzaplate3.webp"
                : "assets/pizzaplate2.webp"
            }
            alt="plate"
            className="lg:max-w-[1000px] xl:max-w-[700px] xl:w-[35vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
