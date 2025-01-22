import React from "react";

const Reviews = () => {
  const reviews = [
    {
      img: "path/to/image1.jpg",
      name: "Delegate Name 1",
      position: "Delegate of Japan",
      review:
        "It was a wonderful experience that enhanced my skills and understanding of teamwork.",
    },
    {
      img: "path/to/image2.jpg",
      name: "Delegate Name 2",
      position: "Delegate of Japan",
      review:
        "An amazing opportunity to connect, learn, and collaborate with others.",
    },
    {
      img: "path/to/image3.jpg",
      name: "Delegate Name 3",
      position: "Delegate of Japan",
      review:
        "The event allowed me to grow both professionally and personally.",
    },
    {
      img: "path/to/image4.jpg",
      name: "Delegate Name 4",
      position: "Delegate of Japan",
      review:
        "An unforgettable experience with incredible opportunities for growth and networking.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Reviews</h2>
      {/* Horizontal Scrollable Container */}
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide p-4 gap-5">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-96 border mb-10 px-2 rounded-lg bg-white shadow-lg"
          >
            <div className="flex flex-row items-center p-4 gap-3">
              {/* Image Section */}
              <img
                src={review.img}
                alt=''
                className="w-20 h-20 object-cover rounded-lg mr-4 border"
              />
              {/* Text Section */}
              <div>
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <h4 className="text-gray-500 mt-1 text-xs italic">{review.position}</h4>
                <p className="text-sm text-gray-600 mt-2">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
