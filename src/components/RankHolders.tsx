
const RankHolders = () => {
  const rankers = [
    { year: "2023", standard: "IX", name: "Arjun Kumar S", marks: "342/400", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&q=80" },
    { year: "2023", standard: "VI", name: "Priya Sharma", marks: "378/400", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=150&q=80" },
    { year: "2022", standard: "IX", name: "Rahul Krishna B", marks: "328/400", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&q=80" },
    { year: "2022", standard: "VI", name: "Anjali Rao", marks: "356/400", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&q=80" },
    { year: "2021", standard: "IX", name: "Vikram Singh", marks: "334/400", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=150&q=80" },
    { year: "2021", standard: "VI", name: "Shreya Patel", marks: "362/400", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=150&q=80" },
    { year: "2020", standard: "IX", name: "Aditya Gupta", marks: "318/400", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&w=150&q=80" },
    { year: "2020", standard: "VI", name: "Kavya Menon", marks: "348/400", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=150&q=80" }
  ];

  return (
    <section id="rankers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            AISSEE State First Rank Holders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating our top achievers who secured first rank in their respective states
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {rankers.map((ranker, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={ranker.image}
                  alt={ranker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm font-semibold text-orange-500 mb-2">
                {ranker.year}: {ranker.standard} Std
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">
                {ranker.name}
              </h3>
              <div className="text-sm text-gray-600">
                Marks: <span className="font-semibold">{ranker.marks}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RankHolders;
