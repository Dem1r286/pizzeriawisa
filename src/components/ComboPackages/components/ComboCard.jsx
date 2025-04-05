import React from "react";

const ComboCard = ({ imageSrc, title, description, price }) => {
    return (
        <div className="flex justify-center sm:flex-row flex-col items-center sm:w-[500px] w-[320px] h-[300px] bg-white rounded-2xl shadow-md hover:scale-104 transition-transform duration-300">
            {/* Image on the left side */}
            <div className="w-full h-1/2 rounded-2xl sm:w-1/2 sm:h-full">
                <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-2xl" />
            </div>

            {/* Text on the right side */}
            <div className="sm:w-1/2 w-full h-full flex sm:flex-col px-6 flex-row justify-between items-center sm:py-6 py-4 sm:items-start sm:justify-between">
                <div>
                    <h2 className="sm:text-2xl text-xl font-bold text-[#F3274C]">{title}</h2>
                    <p className="sm:text-sm text-xs text-[#555] mt-2"><span className="text-[#F3274C] font-black">-</span>  {description}</p>
                    <p className="sm:text-sm text-xs text-[#555] mt-2"><span className="text-[#F3274C] font-black">-</span>  Sok po želji</p>
                    <p className="sm:text-sm text-xs text-[#555] mt-2"><span className="text-[#F3274C] font-black">-</span> Palačinak</p>
                </div>

                {/* Price at the bottom */}
                <p className="mt-4 sm:text-[23px] text-[15px] font-bold text-[#F3274C] mt-22 sm:mt-0">{price}</p>
            </div>
        </div>
    );
};

export default ComboCard;
