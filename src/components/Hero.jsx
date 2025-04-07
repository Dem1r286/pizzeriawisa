import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ForkKnife } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div
        id="homepage"
        className="flex justify-center items-center w-screen h-screen mb-25 bg-cover bg-center"
        style={{
          backgroundImage: `url('assets/background.svg')`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-between w-screen ml-0 xl:ml-[10vw] flex-col xl:flex-row lg:px-0">

          {/* Left Side Content */}
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-start flex-col px-20 py-10 backdrop-blur-sm bg-white/70 rounded-2xl">
              <p className="text-black 3xl:text-[100px] 2xl:text-[60px] xl:text-[70px] lg:text-[50px] md:text-[50px] ">
                Vruća <span className="text-[#F3274C] font-medium">Pizza</span>,{" "}
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

                <a
                  href="https://maps.app.goo.gl/d7gj7VM7iFw2U7ZA8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex flex-row justify-center items-center gap-3 w-[130px] bg-[#F3274C] h-fit py-2 px-4 text-white font-semibold rounded-xl text-lg hover:scale-104 transition-transform duration-300"
                >
                  Lokacija
                  <MapPin className="sm:w-5 sm:h-5 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Plate Image */}
          <div className="flex justify-center items-center">
            <img
              src="assets/plate.svg"
              alt="plate"
              className="w-[30vw] max-w-[800px] rotate-[90deg] xl:rotate-[0deg]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
