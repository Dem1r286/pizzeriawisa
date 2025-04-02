import React from "react";

const ComboCard = ({ imageSrc, title, description, price }) => {
    return (
        <div className="flex justify-center items-center w-[500px] h-[300px] bg-white rounded-2xl shadow-md">
            {/* Image on the left side */}
            <div className="w-1/2 h-full rounded-2xl">
                <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-2xl" />
            </div>

            {/* Text on the right side */}
            <div className="w-1/2 h-full p-4 flex flex-col justify-between items-start py-6">
                <div>
                    <h2 className="text-2xl font-semibold text-[#F3274C]">{title}</h2>
                    <p className="text-sm text-[#555] mt-2">{description}</p>
                </div>

                {/* Price at the bottom */}
                <p className="mt-4 text-lg font-bold text-[#F3274C]">{price}</p>
            </div>
        </div>
    );
};

export default ComboCard;
