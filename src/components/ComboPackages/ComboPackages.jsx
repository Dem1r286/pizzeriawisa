import React from "react";
import ComboCard from "./components/comboCard";

const ComboPackages = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-[#F3274C] w-screen pt-10 pb-30 gap-16">
      <div className="flex flex-col justify-center items-center">
        <p className="text-white font-black text-5xl mb-3">COMBO PAKETI</p>
        <div className="flex justify-center items-center flex-row gap-6">
          <p className="font-bold text-lg text-white">Akcijska Ponuda</p>
          <p className="bg-black text-white py-1 px-4 rounded-xl font-bold">-20%</p>
        </div>
      </div>

      <div className="flex justify-center items-center flex-row flex-wrap gap-[3vw]">
        <ComboCard
          imageSrc="/src/assets/combopizza.jpg"
          title="Pizza Combo"
          description="A delicious combo of pizza, fries, and a drink."
          price="13KM"
        />
        <ComboCard
          imageSrc="/src/assets/ImageGallery/pizza2.png"
          title="Combo Pizza"
          description="A fresh and healthy salad combo with a dressing of your choice."
          price="12KM"
        />
        <ComboCard
          imageSrc="/src/assets/ImageGallery/pizza3.jpg"
          title="Pizza Combo"
          description="A delicious combo of pizza, fries, and a drink."
          price="11KM"
        />
      </div>
    </div>
  );
};

export default ComboPackages;
