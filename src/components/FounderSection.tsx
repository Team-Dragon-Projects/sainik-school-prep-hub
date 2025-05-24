
const FounderSection = () => {
  return (
    <section id="founder" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Meet Our Founder
            </h2>
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=500&q=80"
                alt="Founder"
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
