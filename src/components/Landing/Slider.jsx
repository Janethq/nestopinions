import { useEffect, useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2); // Assuming 2 slides
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-auto">
      <div
        className="slides flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="slide min-w-full">
          <img
            src="/images/housekey.jpeg"
            alt="Image 1"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="slide min-w-full">
          <img
            src="TAMPINES01.jpeg"
            alt="Image 2"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
