import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FoodCard from "./components/FoodCard";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FoodOffer = () => {
  const swiperRef = useRef(null);
  const [category, setCategory] = useState("Pizza");
  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const [canSlideNext, setCanSlideNext] = useState(true);


  const foodData = {
    Pizza: [
      { imageSrc: "assets/combopizza.webp", title: "Wisa Pizza", description: "Sos, sir, suho meso, sudžuka, gljive, pavlaka, origano", price: "8KM", price2: "10KM", price3: "18KM" },
      { imageSrc: "assets/combopizza.webp", title: "Capricciosa", description: "Sos, sir, šunka, gljive, origano", price: "7KM", price2: "9KM", price3: "17KM" },
      { imageSrc: "assets/combopizza.webp", title: "Margherita", description: "Sos, sir, origano", price: "6KM", price2: "8KM", price3: "14KM" },
      { imageSrc: "assets/combopizza.webp", title: "Funghi", description: "Sos, sir, gljive, origano", price: "6KM", price2: "8KM", price3: "14KM" },
      { imageSrc: "assets/combopizza.webp", title: "Bosanska Pizza", description: "Sos, sir, suho meso, gljive, origano", price: "8KM",  price2: "10KM", price3: "18KM" },
      { imageSrc: "assets/combopizza.webp", title: "Mexicana Pizza", description: "Sos, sir, ljuta sudžuka, gljive, origano", price: "8KM", price2: "10KM", price3: "18KM" },
      { imageSrc: "assets/combopizza.webp", title: "Al Tonno Pizza", description: "Sos, sir, tuna, masline, origano", price: "7KM", price2: "9KM", price3: "17KM" },
      { imageSrc: "assets/combopizza.webp", title: "Piletina Pizza", description: "Sos, sir, piletina, gljive, origano", price: "8KM", price2: "10KM", price3: "18KM" },
      { imageSrc: "assets/combopizza.webp", title: "Vegeteriana Pizza", description: "Sos, sir, gljive, masline, kukuruz, paprika, origano", price: "7KM", price2: "9KM", price3: "17KM" },
      { imageSrc: "assets/combopizza.webp", title: "Sarajevo Pizza", description: "Sos, sir, gljive, masline, kukuruz, paprika, origano", price: "7KM", price2: "9KM", price3: "17KM" },
      { imageSrc: "assets/combopizza.webp", title: "Quattro Formagio Pizza", description: "Sos, edamer, mozzarela, dimljeni sir, gorgonzola, origano", price: "8KM", price2: "10KM", price3: "18KM" },
      { imageSrc: "assets/combopizza.webp", title: "Doner Pizza", description: "Sos, sir, doner, doner sos, origano", price: "8KM", price2: "10KM", price3: "18KM"},
    ],
    Sendvici: [
      { title: "Pileći Sendvič", description: "Domaće pecivo, piletina, namazi, salate", price: "6KM", imageSrc: "assets/sandwich.webp" },
      { title: "Pileći Sendvič u Sosu od Gljiva", description: "Domaće pecivo, piletina, sos od gljiva, salate", price: "7KM", imageSrc: "assets/sandwich.webp" },
      { title: "Suho Meso Sendvič", description: "Suho Meso Sendvič", price: "6KM", imageSrc: "assets/sandwich.webp" },
      { title: "Sudžuka Sendvič", description: "Sendvič sa piletinom", price: "6KM", imageSrc: "assets/sandwich.webp" },
      { title: "Šunka Sendvič", description: "Sendvič sa piletinom", price: "5KM", imageSrc: "assets/sandwich.webp" },
      { title: "Tuna Sendvič", description: "Sendvič sa piletinom", price: "6KM", imageSrc: "assets/sandwich.webp" },
      { title: "Vegeterijanski Sendvič", description: "Sendvič sa piletinom", price: "6KM", imageSrc: "assets/sandwich.webp" },
      { title: "Doner", description: "Sendvič sa piletinom", price: "7KM", imageSrc: "assets/sandwich.webp" },
      { title: "Pileća Salata", description: "Sendvič sa piletinom", price: "7KM", imageSrc: "assets/sandwich.webp" },
      { title: "Tuna Salata", description: "Sendvič sa piletinom", price: "7KM", imageSrc: "assets/sandwich.webp" },
    ],
    Maslenice: [
      { title: "Pileća Maslenica", description: "", price: "9KM", imageSrc: "assets/maslenica.webp" },
      { title: "Maslenica Suho Meso", description: "", price: "9KM", imageSrc: "assets/maslenica.webp" },
      { title: "Doner Maslenica", description: "", price: "9KM", imageSrc: "assets/maslenica.webp" },
      { title: "Uštipci", description: "", price: "9KM", imageSrc: "assets/maslenica.webp" },
      { title: "Slatki Uštipci", description: "", price: "7KM", imageSrc: "assets/maslenica.webp" },
    ],  
    Combo: [
      { title: "Combo 1", description: "Margherita, Funghi", description2: " sok po želji i palačinak", price: "11KM", imageSrc: "assets/maslenica.webp" },
      { title: "Combo 2", description: "Capricciosa, Sarajevo, Vegeteriana, Al Tonno", description2: "sok po želji i palačinak", price: "12KM", imageSrc: "assets/maslenica.webp" },
      { title: "Combo 3", description: "Wisa, Bosanska, Mexicana, Piletina, Doner Pizza, Quattro Formagio", description2: "sok po želji i palačinak", price: "13KM", imageSrc: "assets/maslenica.webp" }
    ],  
    Palacinci: [
      { title: "Nutella Palačinak 1x", description: "", price: "2KM", imageSrc: "assets/maslenica.webp" },
      { title: "Čokolada Palačinak 1x", description: "", price: "1.5KM", imageSrc: "assets/maslenica.webp" },
      { title: "Džem Palačinak 1x", description: "", price: "1.5KM", imageSrc: "assets/maslenica.webp" }
    ],
    Pica: [
      { title: "Sokovi", description: "Coca Cola, Coca Cola Zero, Fanta, Ice Tea, Prirodni Sokovi", price: "3KM", imageSrc: "assets/soda.webp" },
      { title: "Voda", description: "", price: "2KM", imageSrc: "assets/voda.webp" },
      { title: "Mineralna voda 0.5l", description:"", price: "2KM", imageSrc: "assets/mineralwater.webp" }
    ],
  };

  const handleNext = () => {
    swiperRef.current.slideNext(); 
  };

  const handlePrev = () => {
    swiperRef.current.slidePrev(); 
  };

  return (
    <div className="flex justify-center items-center flex-col mb-50 relative px-30">
      <p className="font-black text-5xl text-[#F3274C] mb-6">PONUDA</p>

      <div className="flex flex-row gap-10 font-semibold text-lg mb-20 select-none">
        {["Pizza", "Sendvici", "Maslenice", "Combo", "Palacinci", "Pica"].map((cat) => (
          <p
            key={cat}
            onClick={() => setCategory(cat)}
            className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ${
              category === cat ? "bg-[#F3274C] text-white" : "text-black"
            }`}
          >
            {cat === "Sendvici" ? "Sendviči, Doner i Salate" :
             cat === "Maslenice" ? "Maslenice i Uštipci" :
             cat === "Combo" ? "Combo Paketi" :
             cat === "Palacinci" ? "Palačinci" :
             cat === "Pica" ? "Pića" : cat}
          </p>
        ))}
      </div>

      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        loop={false}
        navigation={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setCanSlidePrev(false);
          setCanSlideNext(swiper.isEnd ? false : true);
        }}
        onSlideChange={(swiper) => {
          setCanSlidePrev(!swiper.isBeginning);
          setCanSlideNext(!swiper.isEnd);
        }}
        slidesPerView={Math.min(foodData[category]?.length, 4)}
        breakpoints={{
          640: { slidesPerView: Math.min(foodData[category]?.length, 1) },
          768: { slidesPerView: Math.min(foodData[category]?.length, 2) },
          1024: { slidesPerView: Math.min(foodData[category]?.length, 3) },
          1280: { slidesPerView: Math.min(foodData[category]?.length, 3) },
          1536: { slidesPerView: Math.min(foodData[category]?.length, 4) }
        }}
        className="flex justify-center items-center max-w-[1300px] "
      >
        {foodData[category]?.map((item, index) => (
          <SwiperSlide key={index} className="py-4 justify-center">
            <FoodCard
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              description2={item.description2}
              price={item.price}
              price2={item.price2}
              price3={item.price3}
              category={category} 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons (Placed at the bottom now) */}
      <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 flex gap-5">
        <button
          onClick={handlePrev}
          disabled={!canSlidePrev}
          className={`px-2 py-4 rounded-full transition-transform duration-300 ${
            canSlidePrev ? "bg-[#F3274C] text-white hover:scale-104" : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
        >
          <FaChevronLeft size={26} />
        </button>
        <button
          onClick={handleNext}
          disabled={!canSlideNext}
          className={`px-2 py-4 rounded-full transition-transform duration-300 ${
            canSlideNext ? "bg-[#F3274C] text-white hover:scale-104" : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
        >
          <FaChevronRight size={26} />
        </button>
      </div>
    </div>
  );
};

export default FoodOffer;
