import React from "react";

const ImageLayout = () => {
  return (
    <div className="w-screen grid grid-cols-2 md:grid-cols-3 gap-0">
      <video
        src="assets/ImageGallery/video2.mp4"
        className="w-full max-h-[500px] object-cover h-full"
        autoPlay
        loop
        muted
        playsInline
      />
      <img
        src="assets/ImageGallery/image2.webp"
        alt="Wisa"
        className="w-full max-h-[500px] object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image3.webp"
        alt="Meni Pizza"
        className="w-full max-h-[500px] object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image4.webp"
        alt="Wisa objekat"
        className="w-full max-h-[500px] object-cover h-full"
      />
      <img
        src="assets/ImageGallery/image5.webp"
        alt="Wisa meni"
        className="w-full max-h-[500px] object-cover h-full"
      />
      <video
        src="assets/ImageGallery/video1.mp4"
        className="w-full max-h-[500px] object-cover h-full"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default ImageLayout;
