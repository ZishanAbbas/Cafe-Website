const menuItems = [
    { id: 1, name: "Cappuccino", image: "/Menu/menu1.jpg" },
    { id: 2, name: "Espresso", image: "/Menu/menu2.jpg" },
    { id: 3, name: "Latte", image: "/Menu/menu3.jpg" },
    { id: 4, name: "Mocha", image: "/Menu/menu4.jpg" },
    { id: 5, name: "Black Coffee", image: "/Menu/menu5.jpg" },
    { id: 6, name: "Iced Coffee", image: "/Menu/menu6.jpg" },
    { id: 7, name: "Macchiato", image: "/Menu/menu7.jpg" },
    { id: 8, name: "Affogato", image: "/Menu/menu8.jpg" },
  ];
  
  const Menu = () => {
    return (
      <section  id="menu" className="py-12 bg-gray-100 text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-[#6F4E37] mb-8">Our Menu</h2>
  
        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-100 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <button className="mt-3 bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-md text-lg font-semibold shadow-md transition-all cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* "View More" Button */}
        <div className="mt-8">
          <button
            className="bg-yellow-500 text-lg px-6 py-3 mt-10 rounded-md font-semibold shadow-md hover:bg-yellow-400 transition-all transform hover:scale-105 animate-bounce"
            onClick={() => alert("Redirecting to full menu...")}
          >
            View More
          </button>
        </div>
      </section>
    );
  };
  
  export default Menu;
  