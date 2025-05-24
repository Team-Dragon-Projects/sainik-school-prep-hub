
import { useEffect } from 'react';

interface HeroSliderProps {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

const HeroSlider = ({ currentSlide, setCurrentSlide }: HeroSliderProps) => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3",
      title: "19 Years of Excellence in Sainik School Coaching",
      subtitle: "Preparing Class 6 & 9 Students for AISSEE Success"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
      title: "Expert Faculty & Proven Results",
      subtitle: "Join 857+ Students Who Successfully Joined Sainik Schools"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
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
                <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors animate-scale-in">
                  Apply Now
                </button>
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

      {/* Floating Apply Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold transition-all hover:scale-105">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
