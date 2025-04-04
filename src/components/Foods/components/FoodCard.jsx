import React from "react";

const FoodCard = ({
  imageSrc,
  title,
  description,
  description2,
  price,
  price2,
  price3,
  category,
}) => {
  return (
    <div className="flex justify-center items-center select-none flex-col w-[300px] h-[500px] bg-white rounded-2xl shadow-md hover:scale-104 transition-transform duration-300">
      <div className="w-full h-5/7 rounded-2xl">
        <img
          src={imageSrc}
          alt={title}
          className="w-full min-h-full object-cover rounded-2xl"
        />
      </div>
      <div className="w-full h-1/2 p-4 flex flex-col justify-between py-6">
        <div>
          <h2 className="text-2xl font-semibold text-[#F3274C]">{title}</h2>
          <p className="text-sm text-[#555] mt-2">{description}</p>
          {description2 && (
            <p className="text-sm text-[#555] mt-2">{description2}</p>
          )}
        </div>

        <div className={`mt-4 ${category === "Pizza" ? "flex justify-center items-center" : "text-left"}`}>
          {category === "Pizza" ? (
            <div className="flex flex-row justify-center items-center gap-8">
              <div className="flex justify-center items-center flex-col">
                <p className="font-semibold text-xs">mala</p>
                {price && (
                  <p className="text-[18px] font-bold text-[#F3274C]">
                    {price}
                  </p>
                )}
              </div>

              <div className="flex justify-center items-center flex-col">
                <p className="font-semibold text-xs">srednja</p>
                {price2 && (
                  <p className="text-[18px] font-bold text-[#F3274C]">
                    {price2}
                  </p>
                )}
              </div>
              <div className="flex justify-center items-center flex-col">
                <p className="font-semibold text-xs">jumbo</p>
                {price3 && (
                  <p className="text-[18px] font-bold text-[#F3274C]">
                    {price3}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <p className="text-[23px] font-bold text-[#F3274C]">{price}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;