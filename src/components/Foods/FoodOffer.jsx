import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FoodCard from "./components/FoodCard";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FoodOffer = () => {
  const swiperRef = useRef(null);
  const [category, setCategory] = useState("Pizza"); // Default category

  // Data for each category
  const foodData = {
    Pizza: [
      { imageSrc: "assets/combopizza.jpg", title: "Wisa Pizza", description: "Sos, sir, suho meso, sudžuka, gljive, pavlaka, origano", price: "$12.99" },
      { imageSrc: "assets/combopizza.jpg", title: "Capricciosa", description: "Sos, sir, šunka, gljive, origano", price: "$8.99" },
      { imageSrc: "assets/combopizza.jpg", title: "Margherita", description: "Sos, sir, origano", price: "$15.50" },
      { imageSrc: "assets/combopizza.jpg", title: "Bosanska Pizza", description: "Sos, sir, suho meso, gljive, origano", price: "$15.50" },
      { imageSrc: "assets/combopizza.jpg", title: "Mexicana Pizza", description: "Sos, sir, ljuta sudžuka, gljive, origano", price: "$15.50" },
      { imageSrc: "assets/combopizza.jpg", title: "Al Tonno Pizza", description: "Sos, sir, tuna, masline, origano", price: "$15.50" },
      { imageSrc: "assets/combopizza.jpg", title: "Piletina Pizza", description: "Sos, sir, piletina, gljive, origano", price: "$15.50" },
      { imageSrc: "assets/combopizza.jpg", title: "Vegeteriana Pizza", description: "Sos, sir, gljive, masline, kukuruz, paprika, origano", price: "$15.50" },
      { imageSrc: "assets/combopizza.jpg", title: "Quattro Formagio Pizza", description: "Sos, edamer, mozzarela, dimljeni sir, gorgonzola, origano", price: "$15.50" },
      { imageSrc: "assets/combopizza.jpg", title: "Doner Pizza", description: "Sos, sir, doner, doner sos, origano", price: "$15.50" },
    ],
    Sendvici: [
      { title: "Sendvič 1", description: "Sendvič sa šunkom, sirom", price: "$5.99", imageSrc: "assets/sandwich.png" },
      { title: "Sendvič 2", description: "Sendvič sa piletinom", price: "$6.99", imageSrc: "assets/sandwich.png" },
      { title: "Sendvič 2", description: "Sendvič sa piletinom", price: "$6.99", imageSrc: "assets/sandwich.png" },
      { title: "Sendvič 2", description: "Sendvič sa piletinom", price: "$6.99", imageSrc: "assets/sandwich.png" },
      { title: "Sendvič 2", description: "Sendvič sa piletinom", price: "$6.99", imageSrc: "assets/sandwich.png" },
      // Add more sendvic items here
    ],
    Maslenice: [
      { imageSrc: "assets/combopizza.jpg", title: "Wisa Pizza", description: "Sos, sir, suho meso, sudžuka, gljive, pavlaka, origano", price: "$12.99" },
      { imageSrc: "assets/combopizza.jpg", title: "Capricciosa", description: "Sos, sir, šunka, gljive, origano", price: "$8.99" },
      { imageSrc: "assets/combopizza.jpg", title: "Margherita", description: "Sos, sir, origano", price: "$15.50" },
      { imageSrc: "assets/combopizza.jpg", title: "Bosanska Pizza", description: "Sos, sir, suho meso, gljive, origano", price: "$15.50" },
      { imageSrc: "assets/combopizza.jpg", title: "Mexicana Pizza", description: "Sos, sir, ljuta sudžuka, gljive, origano", price: "$15.50" },
      { imageSrc: "assets/combopizza.jpg", title: "Al Tonno Pizza", description: "Sos, sir, tuna, masline, origano", price: "$15.50" },
      { imageSrc: "assets/combopizza.jpg", title: "Piletina Pizza", description: "Sos, sir, piletina, gljive, origano", price: "$15.50" },
      { imageSrc: "assets/combopizza.jpg", title: "Vegeteriana Pizza", description: "Sos, sir, gljive, masline, kukuruz, paprika, origano", price: "$15.50" },
      { imageSrc: "assets/combopizza.jpg", title: "Quattro Formagio Pizza", description: "Sos, edamer, mozzarela, dimljeni sir, gorgonzola, origano", price: "$15.50" },
      { imageSrc: "assets/combopizza.jpg", title: "Doner Pizza", description: "Sos, sir, doner, doner sos, origano", price: "$15.50" },
    ],
  };

  // Handle next slide
  const handleNext = () => {
    swiperRef.current.swiper.slideNext(); 
  };

  // Handle previous slide
  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev(); 
  };

  return (
    <div className="flex justify-center items-center flex-col mb-50 relative px-30">
      <p className="font-black text-5xl text-[#F3274C] mb-3">PONUDA</p>

      {/* Category Selection */}
      <div className="flex flex-row gap-10 font-semibold text-lg mb-20">
        <p onClick={() => setCategory("Pizza")} className="cursor-pointer">Pizza</p>
        <p onClick={() => setCategory("Sendvici")} className="cursor-pointer">Sendviči, Doner i Salate</p>
        <p onClick={() => setCategory("Maslenice")} className="cursor-pointer">Maslenice i Uštipci</p>
        <p onClick={() => setCategory("Combo Paketi")} className="cursor-pointer">Combo Paketi</p>
        <p onClick={() => setCategory("Palacinci")} className="cursor-pointer">Palačinci</p>
        <p onClick={() => setCategory("Pica")} className="cursor-pointer">Pića</p>
      </div>

      {/* Swiper for Food Items */}
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        loop={true}
        navigation={false}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
          1536: { slidesPerView: 4 }
        }}
        className="w-screen px-40 max-w-[1300px]"
      >
        {foodData[category]?.map((item, index) => (
          <SwiperSlide key={index} className="py-4">
            <FoodCard
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 mt-20 transform -translate-y-1/2 bg-[#F3274C] text-white px-2 py-4 rounded-full hover:scale-104 transition-transform duration-300"
      >
        <FaChevronLeft size={26} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 mt-20 transform -translate-y-1/2 bg-[#F3274C] text-white px-2 py-4 rounded-full hover:scale-104 transition-transform duration-300"
      >
        <FaChevronRight size={26} />
      </button>
    </div>
  );
};

export default FoodOffer;
