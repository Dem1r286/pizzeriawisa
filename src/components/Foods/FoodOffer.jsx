import React from "react";
import FoodCard from "./components/FoodCard";


const FoodOffer = () => {
  return (
    <div className="flex justify-center items-center flex-col mb-50">
      <p className="font-black text-5xl text-[#F3274C] mb-3">PONUDA</p>

      <div className="flex flex-row gap-10 font-semibold text-lg mb-20">
        <p>Pizza</p>

        <p>Sendviči i Doner</p>

        <p>Maslenice</p>

        <p>Combo Paketi</p>

        <p>Palačinci</p>

        <p>Pića</p>

        <p>Ostalo</p>
      </div>

      <div className="flex justify-center items-center flex-row gap-[2vw]">
        <FoodCard
          imageSrc="/assets/combopizza.jpg"
          title="Delicious Pizza"
          description="A savory pizza with fresh ingredients."
          price="$12.99"
        />

        <FoodCard
          imageSrc="/assets/combopizza.jpg"
          title="Tasty Burger"
          description="A juicy burger with crispy fries."
          price="$8.99"
        />

        <FoodCard
          imageSrc="./assets/combopizza.jpg"
          title="Pasta Delight"
          description="Pasta served with a rich creamy sauce."
          price="$15.50"
        />
      </div>
    </div>
  );
};

export default FoodOffer;
