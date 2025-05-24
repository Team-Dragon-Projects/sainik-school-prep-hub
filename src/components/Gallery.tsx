
const Gallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/5da3d753-4d7a-427e-9043-73d125ddaafc.png",
      alt: "Students group photo on steps",
      caption: "Our students during outdoor activities"
    },
    {
      src: "/lovable-uploads/14cf1b10-0d8c-42ca-8ccc-745893d0d4c7.png",
      alt: "Students celebrating together",
      caption: "Victory celebrations after exam success"
    },
    {
      src: "/lovable-uploads/73961736-d76b-41fc-a890-c0194583085d.png",
      alt: "Students in formation",
      caption: "Morning assembly and physical training"
    },
    {
      src: "/lovable-uploads/5a5af6d2-bada-4c92-a3b0-cc0454c9ce8e.png",
      alt: "Large group of students outdoors",
      caption: "Annual camp activities"
    },
    {
      src: "/lovable-uploads/4826a2dd-28f3-48f3-b299-d382122d687d.png",
      alt: "Yoga session in classroom",
      caption: "Mind and body wellness sessions"
    },
    {
      src: "/lovable-uploads/ea038328-f548-4f2c-b9d3-38ca44946a71.png",
      alt: "Students walking on road",
      caption: "Nature walks and outdoor learning"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses of our vibrant campus life and student activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
