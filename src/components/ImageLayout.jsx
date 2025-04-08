import React from "react";

const ImageLayout = () => {
  return (
    <div className="w-screen grid grid-cols-2 md:grid-cols-3 gap-0">
      <img
        src="assets/ImageGallery/image4.jpg"
        alt="Pizza"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image3.png"
        alt="Food container"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image7.jpg"
        alt="Pizza close-up"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image8.jpg"
        alt="Focaccia bread"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image5.jpg"
        alt="More pizza"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image9.jpg"
        alt="Delicious dish"
        className="w-full object-cover h-full"
      />
    </div>
  );
};

export default ImageLayout;