import img4 from '../assets/Gallery/img4.jpg';
import img5 from '../assets/Gallery/img5.jpg';
import img6 from '../assets/Gallery/img6.jpg';
import img7 from '../assets/Gallery/img7.jpg';

const Gallery = () => {
  return (
    <section  id="gallery" className="py-12 bg-gray-100 text-center">
      <h2 className="text-5xl font-bold text-[#6F4E37] mb-8 animate-fade-in">Our Gallery</h2>

      {/* Image Grid with Animations */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {[img4, img5, img6, img7].map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 animate-slide-up">
            <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>

      {/* "View More" Button with Smooth Scroll */}
      <div className="mt-10">
      <div className="animate-bounce">
        <a
    href="#view-more"
    className="bg-yellow-500 text-lg px-6 py-3  rounded-md font-semibold shadow-md hover:bg-yellow-400 transition-all transform hover:scale-105">
    View More</a>
    </div>
      </div>
    </section>
  );
};

export default Gallery;
