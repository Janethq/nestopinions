import { useEffect, useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Assuming 3 slides
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute inset-0 flex transition-opacity duration-1000"
          style={{
            opacity: currentSlide === 0 ? 1 : 0,
          }}
        >
          <img
            src="/images/key2.jpg"
            alt="key2"
            className="h-20vh w-full max-w-full"
          />
        </div>
        <div
          className="absolute inset-0 flex transition-opacity duration-1000"
          style={{
            opacity: currentSlide === 1 ? 1 : 0,
          }}
        >
          <img
            src="/images/housemodel1.jpg"
            alt="house"
            className="h-20vh w-full max-w-full"
          />
        </div>
        <div
          className="absolute inset-0 flex transition-opacity duration-1000"
          style={{
            opacity: currentSlide === 2 ? 1 : 0,
          }}
        >
          <img
            src="/images/slide3.jpg"
            alt="slide3"
            className="h-20vh w-full max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;

//https://tailwindui.com/components/application-ui/overlays/slide-overs
