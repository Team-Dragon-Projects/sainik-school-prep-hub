
import { useState, useEffect, useRef } from 'react';

const AchievementCounters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    trained: 0,
    cleared: 0,
    joined: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    { key: 'years', target: 19, label: 'Years', description: 'of training students for Sainik School entrance exam' },
    { key: 'trained', target: 1545, label: 'Students', description: 'trained and appeared for the exam' },
    { key: 'cleared', target: 1329, label: 'Students', description: 'cleared the written exam' },
    { key: 'joined', target: 857, label: 'Students', description: 'joined Sainik School' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    achievements.forEach((achievement) => {
      let current = 0;
      const increment = achievement.target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= achievement.target) {
          current = achievement.target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [achievement.key]: Math.floor(current)
        }));
      }, 20);
    });
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.key} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                {counters[achievement.key as keyof typeof counters]}
              </div>
              <div className="text-xl md:text-2xl font-semibold mb-2">
                {achievement.label}
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementCounters;
