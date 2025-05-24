
import { useEffect } from 'react';

interface HeroSliderProps {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

const HeroSlider = ({ currentSlide, setCurrentSlide }: HeroSliderProps) => {
  const slides = [
    {
      image: "/lovable-uploads/a6545cb5-93e4-49eb-b89d-bc6c96698ec4.png",
      title: "19 Years of Excellence in Sainik School Coaching",
      subtitle: "Preparing Class 6 & 9 Students for AISSEE Success"
    },
    {
      image: "/lovable-uploads/35454136-90ce-4866-b89d-bc6c96698ec4.png",
      title: "Expert Faculty & Proven Results",
      subtitle: "Join 857+ Students Who Successfully Joined Sainik Schools"
    },
    {
      image: "/lovable-uploads/72df1778-b4b6-4235-bbd7-ef18a179a6a7.png",
      title: "State First Rank Holders",
      subtitle: "Excellence in Every Achievement"
    },
    {
      image: "/lovable-uploads/e23ebe87-69a7-4d76-ac32-4e458910a88e.png",
      title: "Comprehensive Training Program",
      subtitle: "Mock Tests, Interviews & Personalized Attention"
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
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-navy-900 bg-opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
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
