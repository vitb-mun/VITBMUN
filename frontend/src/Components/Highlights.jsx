import React from 'react';

const Highlights = () => {
  const photos = [
    { img: "path/to/image1.jpg" },
    { img: "path/to/image2.jpg" },
    { img: "path/to/image3.jpg" },
    { img: "path/to/image4.jpg" },
    { img: "path/to/image5.jpg" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Event Highlights</h2>
      {/* Horizontal Scrollable Container */}
      <div className="flex overflow-x-auto space-x-6 p-4 gap-10">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-36 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={photo.img}
              alt=''
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
