import React from "react";

const ImageLayout = () => {
  return (
    <div className="columns-2 md:columns-3 gap-4 p-4 w-full max-w-5xl mx-auto">
      <img src="/src/assets/combopizza.jpg" alt="Pizza" className="w-full mb-4 rounded-lg shadow-lg object-cover" style={{ height: '200px' }} />
      <img src="/src/assets/container.jpg" alt="Food container" className="w-full mb-4 rounded-lg shadow-lg object-cover" style={{ height: '300px' }} />
      <img src="/src/assets/combopizza.jpg" alt="Pizza close-up" className="w-full mb-4 rounded-lg shadow-lg object-cover" style={{ height: '250px' }} />
      <img src="/src/assets/container.jpg" alt="Focaccia bread" className="w-full mb-4 rounded-lg shadow-lg object-cover" style={{ height: '350px' }} />
      <img src="/src/assets/combopizza.jpg" alt="More pizza" className="w-full mb-4 rounded-lg shadow-lg object-cover" style={{ height: '220px' }} />
      <img src="/src/assets/combopizza.jpg" alt="Delicious dish" className="w-full mb-4 rounded-lg shadow-lg object-cover" style={{ height: '280px' }} />
    </div>
  );
};

export default ImageLayout;