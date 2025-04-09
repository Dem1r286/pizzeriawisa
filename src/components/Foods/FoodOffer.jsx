import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ForkKnife } from "lucide-react";

const FoodOffer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const goToFirstSlide = () => {
    setCurrentIndex(0);
  };

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else if (width < 1280) {
        setVisibleCount(3);
      } else if (width < 1536) {
        setVisibleCount(4);
      } else if (width < 1800) {
        setVisibleCount(4);
      } else {
        setVisibleCount(5);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      nextSlide();
    } else if (diff < -threshold) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const foodData = [
    {
      imageSrc: "assets/foodImages/wisapizza.webp",
      title: "Wisa Pizza",
      description: "Sos, sir, suho meso, sudžuka, gljive, pavlaka, origano",
      price: "8KM",
      price2: "10KM",
      price3: "18KM",
    },
    {
      imageSrc: "assets/foodImages/capricciosapizza.webp",
      title: "Capricciosa Pizza",
      description: "Sos, sir, šunka, gljive, origano",
      price: "7KM",
      price2: "9KM",
      price3: "17KM",
    },
    {
      imageSrc: "assets/foodImages/margheritapizza.webp",
      title: "Margherita Pizza",
      description: "Sos, sir, origano",
      price: "6KM",
      price2: "8KM",
      price3: "14KM",
    },
    {
      imageSrc: "assets/foodImages/funghipizza.webp",
      title: "Funghi Pizza",
      description: "Sos, sir, gljive, origano",
      price: "6KM",
      price2: "8KM",
      price3: "14KM",
    },
    {
      imageSrc: "assets/foodImages/bosanskapizza.webp",
      title: "Bosanska Pizza",
      description: "Sos, sir, suho meso, gljive, origano",
      price: "8KM",
      price2: "10KM",
      price3: "18KM",
    },
    {
      imageSrc: "assets/foodImages/mexicanapizza.webp",
      title: "Mexicana Pizza",
      description: "Sos, sir, ljuta sudžuka, gljive, origano",
      price: "8KM",
      price2: "10KM",
      price3: "18KM",
    },
    {
      imageSrc: "assets/foodImages/altonnopizza.webp",
      title: "Al Tonno Pizza",
      description: "Sos, sir, tuna, masline, origano",
      price: "7KM",
      price2: "9KM",
      price3: "17KM",
    },
    {
      imageSrc: "assets/foodImages/piletinapizza.webp",
      title: "Piletina Pizza",
      description: "Sos, sir, piletina, gljive, origano",
      price: "8KM",
      price2: "10KM",
      price3: "18KM",
    },
    {
      imageSrc: "assets/foodImages/vegeterianapizza.webp",
      title: "Vegeteriana Pizza",
      description: "Sos, sir, gljive, masline, kukuruz, paprika, origano",
      price: "7KM",
      price2: "9KM",
      price3: "17KM",
    },
    {
      imageSrc: "assets/foodImages/sarajevopizza.webp",
      title: "Sarajevo Pizza",
      description: "Sos, sir, sudžuka, jaje, origano",
      price: "7KM",
      price2: "9KM",
      price3: "17KM",
    },
    {
      imageSrc: "assets/foodImages/quattropizza.webp",
      title: "Quattro Formagio Pizza",
      description: "Sos, edamer, mozzarela, dimljeni sir, gorgonzola, origano",
      price: "8KM",
      price2: "10KM",
      price3: "18KM",
    },
    {
      imageSrc: "assets/foodImages/donerpizza.webp",
      title: "Doner Pizza",
      description: "Sos, sir, doner, doner sos, origano",
      price: "8KM",
      price2: "10KM",
      price3: "18KM",
    },
    {
      title: "Pileći Sendvič",
      description: "Domaće pecivo, piletina, namazi, salate",
      price: "6KM",
      imageSrc: "assets/foodImages/sendvicpiletina.webp",
    },
    {
      title: "Pileći Sendvič u Sosu od Gljiva",
      description: "Domaće pecivo, piletina, sos od gljiva, salate",
      price: "7KM",
      imageSrc: "assets/foodImages/sendvicpiletinagljive.webp",
    },
    {
      title: "Suho Meso Sendvič",
      description: "Domaće pecivo, suho meso, namazi, salate, sir",
      price: "6KM",
      imageSrc: "assets/foodImages/sendvicsuhomeso.webp",
    },
    {
      title: "Sudžuka Sendvič",
      description: "Domaće pecivo, sudžuka, namazi, salate, sir",
      price: "6KM",
      imageSrc: "assets/foodImages/sendvicsudzuka.webp",
    },
    {
      title: "Šunka Sendvič",
      description: "Domaće pecivo, šunka, namazi, salate, sir",
      price: "5KM",
      imageSrc: "assets/foodImages/sendvicsunka.webp",
    },
    {
      title: "Tuna Sendvič",
      description: "Domaće pecivo, tuna, namazi, salate, sir",
      price: "6KM",
      imageSrc: "assets/foodImages/sendvictuna.webp",
    },
    {
      title: "Vegeterijanski Sendvič",
      description: "Domaće pecivo, namazi, salate, mozarela, sos od gljiva",
      price: "6KM",
      imageSrc: "assets/foodImages/sendvicvege.webp",
    },
    {
      title: "Doner",
      description: "Domaće pecivo, doner meso, doner sos, namazi, salate",
      price: "7KM",
      imageSrc: "assets/foodImages/doner.webp",
    },
    {
      title: "Pileća Salata",
      description: "",
      price: "7KM",
      imageSrc: "assets/foodImages/salatapiletina.webp",
    },
    {
      title: "Tuna Salata",
      description: "",
      price: "7KM",
      imageSrc: "assets/foodImages/salatatuna.webp",
    },
    {
      title: "Pileća Maslenica",
      description: "",
      price: "9KM",
      imageSrc: "assets/foodImages/maslenicapiletina.webp",
    },
    {
      title: "Maslenica Suho Meso",
      description: "",
      price: "9KM",
      imageSrc: "assets/foodImages/maslenicapiletina.webp",
    },
    {
      title: "Doner Maslenica",
      description: "",
      price: "9KM",
      imageSrc: "assets/foodImages/maslenicapiletina.webp",
    },
    {
      title: "Uštipci",
      description: "suho meso, sudžuka, pavlaka",
      price: "9KM",
      imageSrc: "assets/foodImages/ustipcislani.webp",
    },
    {
      title: "Slatki Uštipci",
      description: "",
      price: "7KM",
      imageSrc: "assets/foodImages/ustipcislatki.webp",
    },
    {
      title: "Combo 1",
      description: "Margherita, Funghi",
      description2: "sok po želji i palačinak",
      price: "11KM",
      imageSrc: "assets/other/combooffer.webp",
    },
    {
      title: "Combo 2",
      description: "Capricciosa, Sarajevo, Vegeteriana, Al Tonno",
      description2: "sok po želji i palačinak",
      price: "12KM",
      imageSrc: "assets/other/combooffer.webp",
    },
    {
      title: "Combo 3",
      description:
        "Wisa, Bosanska, Mexicana, Piletina, Doner Pizza, Quattro Formagio",
      description2: "sok po želji i palačinak",
      price: "13KM",
      imageSrc: "assets/other/combooffer.webp",
    },
    {
      title: "Palačinak 1x",
      description: "Nutella, Čokolada, Džem",
      price: "2KM",
      imageSrc: "assets/foodImages/pancake.webp",
    },
    {
      title: "Sokovi",
      description: "Coca Cola, Coca Cola Zero, Fanta, Ice Tea, Prirodni Sokovi",
      price: "3KM",
      imageSrc: "assets/foodImages/soda.webp",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < foodData.length - visibleCount) {
      setCurrentIndex(currentIndex + visibleCount);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - visibleCount);
    }
  };

  return (
    <div
      id="food-offer"
      className="flex flex-col items-center gap-6 md:gap-16 w-full py-10 pt-20 pb-40"
    >
      {/* Header Section */}
      <div className="flex justify-center items-center flex-col">
        <h5 className="text-3xl md:text-5xl text-[#f3274c] font-bold flex-grow md:mb-0">
          Ponuda
        </h5>
        <p className="text-center mt-3 text-xs sm:text-base">
          Zavirite u našu ponudu — nešto ukusno, svježe i baš po vašem ukusu!
        </p>
      </div>

      {/* Ponude Cards */}
      <div className="relative flex justify-center items-center w-full xl:w-fit">
        {/* Left Button */}
        <div
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-[5%] p-1 xl:p-2 md:left-6 rounded-full bg-[#f3274c] ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-red-500"
          }`}
        >
          <ChevronLeft size={24} className="text-white" />
        </div>

        {/* Slider Container */}
        <div
          className="flex overflow-hidden justify-center items-center gap-[3vw] w-full px-20 py-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="popLayout" custom={currentIndex}>
            {foodData
              .slice(currentIndex, currentIndex + visibleCount)
              .map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col justify-between items-center min-w-[250px] w-[300px] h-[450px] lg:h-[500px] shadow-lg rounded-2xl overflow-hidden bg-white"
                >
                  <div className="w-full h-[65%]">
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-full h-[35%] text-black p-4 flex justify-between flex-col rounded-b-2xl">
                    <div className="flex justify-center items-start gap-1 flex-col">
                      <p className="text-lg font-semibold">{item.title}</p>
                      <p className="text-[13px]">{item.description}</p>
                    </div>

                    <div className="flex flex-row justify-between items-center px-6">
                      {item.title.includes("Pizza") ? (
                        <>
                        <div className="flex justify-center items-center flex-col">
                            <p className="text-xs">mala</p>
                            <p className="text-[15px] md:text-[19px] font-black text-[#f3274c]">
                              {item.price}
                            </p>
                          </div>
                          <div className="flex justify-center items-center flex-col">
                            <p className="text-xs">srednja</p>
                            <p className="text-[15px] md:text-[19px] font-black text-[#f3274c]">
                              {item.price2}
                            </p>
                          </div>
                          <div className="flex justify-center items-center flex-col">
                            <p className="text-xs">jumbo</p>
                            <p className="text-[15px] md:text-[19px] font-black text-[#f3274c]">
                              {item.price3}
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="flex justify-center items-start flex-col w-full">
                          <p className="text-[15px] md:text-[19px] font-black text-[#f3274c]">
                            {item.price}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <div
          onClick={nextSlide}
          disabled={currentIndex >= foodData.length - visibleCount}
          className={`absolute right-[5%] p-1 md:right-6 xl:p-2 rounded-full bg-[#f3274c] ${
            currentIndex >= foodData.length - visibleCount
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-red-500"
          }`}
        >
          <ChevronRight size={24} className="text-white" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div
          onClick={goToFirstSlide}
          disabled={currentIndex === 0}
          className={`px-2 py-1 text-black text-sm font-semibold mb-4 rounded-xl ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          Idi nazad
        </div>

        <Link
          to="/menu"
          className="cursor-pointer flex flex-row justify-center items-center gap-3 w-fit bg-gradient-to-b from-[#F3274C] to-[#d4203f] h-fit py-2 px-4 text-white font-semibold shadow-lg rounded-xl text-sm sm:text-lg hover:scale-104 transition-transform duration-300"
          style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}
        >
          Pogledajte Menu
          <ForkKnife className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default FoodOffer;
