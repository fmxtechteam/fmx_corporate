"use client";
import React, { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 1000 seconds = 1000000 milliseconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full md:h-[700px] h-[200px] overflow-hidden md:my-10 my-3">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 bg-cover  bg-center bg-no-repeat ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          {/* Optionally, you can add other content here */}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
