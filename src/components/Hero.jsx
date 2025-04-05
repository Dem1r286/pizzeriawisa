import React, { useState, useEffect } from "react";
import HeaderLogo from "./Header/components/HeaderLogo";
import HeaderLinks from "./Header/components/HeaderLinks";
import { Link } from "react-router-dom";
import { MapPin, ForkKnife } from "lucide-react";

const Hero = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <>
      {/* Hero Section */}
      <div className="flex justify-center items-center w-screen h-[80vh] mb-25 bg-cover bg-center">
        <div className="flex justify-between w-screen ml-[10vw]">
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-start flex-col">
              <p className="text-black text-[70px]">
                Vruća <span className="text-[#F3274C] font-medium">Pizza</span>,
                <br />
                Besplatna Dostava
              </p>
              <p className="text-lg">
                Radno vrijeme: od ponedjeljka do subote, od{" "}
                <span className="font-bold">09:00 do 22:00</span>. Nedjelja
                neradna. <br />
                Dostava na vaša vrata u roku od{" "}
                <span className="font-bold">30 minuta!</span>
              </p>
              <p className="text-lg">
                Nazovite nas na broj:
                <span className="text-[#F3274C] font-bold ml-4">
                  +387 61 205 605
                </span>
                <span className="ml-4">ili</span>
                <span className="text-[#F3274C] font-bold ml-4">
                  +387 62 805 205
                </span>
              </p>

              <div className="flex justify-center items-center flex-row gap-20 pt-20">
                <Link
                  to="/menu"
                  className="cursor-pointer flex flex-row justify-center items-center gap-3 w-[130px] bg-[#F3274C] h-fit py-2 px-4 text-white font-semibold rounded-xl text-lg hover:scale-104 transition-transform duration-300"
                >
                  Menu
                  <ForkKnife className="sm:w-5 sm:h-5 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/menu"
                  className="cursor-pointer flex flex-row justify-center items-center gap-3 w-[130px] bg-[#F3274C] h-fit py-2 px-4 text-white font-semibold rounded-xl text-lg hover:scale-104 transition-transform duration-300"
                >
                  Lokacija
                  <MapPin className="sm:w-5 sm:h-5 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="assets/herobackground1.png"
              alt=""
              className="w-[40vw] max-w-[900px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
