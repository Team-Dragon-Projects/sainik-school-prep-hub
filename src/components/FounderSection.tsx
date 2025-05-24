
const FounderSection = () => {
  return (
    <section id="founder" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Meet Our Founder
            </h2>
            <h3 className="text-2xl font-semibold text-navy-800 mb-4">
              S Radhakrishnan
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With a vision to democratize quality education and make Sainik School dreams accessible to every aspiring student, our founder established this academy with unwavering commitment to excellence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Having dedicated over two decades to educational leadership and student mentorship, our founder brings invaluable experience in understanding the unique challenges faced by AISSEE aspirants.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Under their guidance, we have not only achieved remarkable success rates but have also nurtured thousands of young minds to become confident, disciplined, and academically excellent individuals ready for the prestigious Sainik School environment.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/lovable-uploads/8c30fef0-a870-4c4f-b0f7-c691b12cf952.png"
                alt="S Radhakrishnan - Founder"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-navy-900 bg-opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
