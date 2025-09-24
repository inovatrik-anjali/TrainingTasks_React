import React, { useEffect, useState, useRef } from "react";

export default function ImageCarousel() {
  const images = [
    { src: "/images/flower1.jpg", caption: "Blossom Beauty" },
    { src: "/images/flower2.jpg", caption: "Spring Freshness" },
    { src: "/images/flower3.jpg", caption: "Nature’s Canvas" },
    { src: "/images/flower4.jpg", caption: "Blooming Elegance" }
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimeout = useRef(null);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [paused, images.length]);

  const handleMouseEnter = () => {
    clearTimeout(resumeTimeout.current);
    setPaused(true);
  };

  const handleMouseLeave = () => {
    resumeTimeout.current = setTimeout(() => {
      setPaused(false);
    }, 5000); 
  };

  return (
    <div
      className="w-full max-w-5xl mx-auto relative overflow-hidden rounded-lg shadow-md bg-white py-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image  */}
      <div className="flex items-center justify-center w-full">
        <img
          key={index}
          src={images[index].src}
          alt={`Slide ${index + 1}`}
          className="w-[700px] h-auto object-contain transition duration-700 ease-in-out"
        />
      </div>

      {/* Caption */}
      <div className="mt-4 text-center text-gray-800 text-xl font-semibold">
        {images[index].caption}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 text-gray-800 p-3 rounded-full shadow transition"
        aria-label="Previous"
      >
        ◀
      </button>

      <button
        onClick={() => setIndex((i) => (i + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 text-gray-800 p-3 rounded-full shadow transition"
        aria-label="Next"
      >
        ▶
      </button>

      
      <div className="mt-4 flex justify-center space-x-2">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-gray-800 scale-125" : "bg-red-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
