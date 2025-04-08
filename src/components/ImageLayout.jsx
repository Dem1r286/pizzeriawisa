import React from "react";

const ImageLayout = () => {
  return (
    <div className="w-screen grid grid-cols-2 md:grid-cols-3 gap-0">
      <img
        src="assets/ImageGallery/image1.webp"
        alt="Pizza"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image2.webp"
        alt="Food container"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image3.webp"
        alt="Pizza close-up"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image4.webp"
        alt="Focaccia bread"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image5.webp"
        alt="More pizza"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image6.webp"
        alt="Delicious dish"
        className="w-full object-cover h-full"
      />
    </div>
  );
};

export default ImageLayout;