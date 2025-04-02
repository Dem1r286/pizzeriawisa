import React from "react";

const ImageLayout = () => {
  return (
    <div className="w-screen grid grid-cols-2 md:grid-cols-3 gap-0">
      <img
        src="assets/combopizza.jpg"
        alt="Pizza"
        className="w-full object-cover"
      />
      <img
        src="assets/ImageGallery/pizza2.png"
        alt="Food container"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/combopizza.jpg"
        alt="Pizza close-up"
        className="w-full object-cover"
      />
      <img
        src="assets/ImageGallery/pizza2.png"
        alt="Focaccia bread"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/pizza.png"
        alt="More pizza"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/pizza3.jpg"
        alt="Delicious dish"
        className="w-full object-cover h-full"
      />
    </div>
  );
};

export default ImageLayout;
