import React from "react";

const FoodCard = ({ imageSrc, title, description, price }) => {
  return (
    <div className="flex justify-center items-center flex-col w-[300px] h-[500px] bg-white rounded-2xl shadow-md hover:scale-104 transition-transform duration-300">

      <div className="w-full h-1/2 rounded-2xl">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="w-full h-full p-4 flex flex-col justify-between items-start py-6">
        <div>
          <h2 className="text-2xl font-semibold text-[#F3274C]">{title}</h2>

          <p className="text-sm text-[#555] mt-2">{description}</p>
        </div>

        <p className="mt-4 text-lg font-bold text-[#F3274C]">{price}</p>
      </div>
    </div>
  );
};

export default FoodCard;
