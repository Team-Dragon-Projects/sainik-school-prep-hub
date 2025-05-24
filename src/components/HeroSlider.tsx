
import { useEffect } from 'react';

interface HeroSliderProps {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

const HeroSlider = ({ currentSlide, setCurrentSlide }: HeroSliderProps) => {
  const slides = [
    {
      image: "/lovable-uploads/a6545cb5-93e4-49eb-b89d-bc6c96698ec4.png"
    },
    {
      image: "/lovable-uploads/35454136-90ce-4866-b89d-bc6c96698ec4.png"
    },
    {
      image: "/lovable-uploads/72df1778-b4b6-4235-bbd7-ef18a179a6a7.png"
    },
    {
      image: "/lovable-uploads/e23ebe87-69a7-4d76-ac32-4e458910a88e.png"
    }
  ];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
