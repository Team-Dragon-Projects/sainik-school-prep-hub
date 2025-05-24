
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import FounderSection from '../components/FounderSection';
import AchievementCounters from '../components/AchievementCounters';
import RankHolders from '../components/RankHolders';
import Gallery from '../components/Gallery';
import ContactSection from '../components/ContactSection';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slider every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSlider currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      <AchievementCounters />
      <AboutSection />
      <WhyChooseUs />
      <FounderSection />
      <RankHolders />
      <Gallery />
      <ContactSection />
    </div>
  );
};

export default Index;
