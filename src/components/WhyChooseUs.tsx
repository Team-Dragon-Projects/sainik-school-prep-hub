
import { Users, BookOpen, Award, Home, FileText } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Expert teachers with years of AISSEE coaching experience"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "857+ students successfully joined Sainik Schools"
    },
    {
      icon: BookOpen,
      title: "Personalized Attention",
      description: "Small batch sizes ensuring individual focus"
    },
    {
      icon: Home,
      title: "Residential Campus",
      description: "Fully equipped residential facilities for outstation students"
    },
    {
      icon: FileText,
      title: "Mock Tests & Interviews",
      description: "Regular assessments and interview preparation sessions"
    }
  ];

  return (
    <section id="why-choose" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the preferred choice for Sainik School preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
