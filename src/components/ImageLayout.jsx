import React from "react";

const ImageLayout = () => {
  return (
    <div className="w-screen grid grid-cols-2 md:grid-cols-3 gap-0">
      <img
        src="assets/ImageGallery/image1.webp"
        alt="Wisa Pizza"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image2.webp"
        alt="Wisa"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image3.webp"
        alt="Meni Pizza"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image4.webp"
        alt="Wisa objekat"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image5.webp"
        alt="Wisa meni"
        className="w-full object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image6.webp"
        alt="Wisa objekat"
        className="w-full object-cover h-full"
      />
    </div>
  );
};

export default ImageLayout;