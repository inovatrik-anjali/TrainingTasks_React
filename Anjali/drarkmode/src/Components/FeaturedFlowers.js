import React from 'react';

const flowers = [
  { name: 'Bougainvillea', img: '/images/flower1.jpg' , price:50},
  { name: 'Tulips', img: '/images/flower2.jpg',price:100 },
  { name: 'lotus', img: '/images/flower3.jpg',price:200 },
  { name: 'Gypsum', img: '/images/flower4.jpg',price:150 },
];

const FeaturedFlowers = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition">
      <h3 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-10">
        Selling Flowers
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {flowers.map((flower, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={flower.img}
              alt={flower.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="text-xl font-semibold text-pink-600 dark:text-pink-300">
                {flower.name}
              </h4>

               <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg">
                ₹{flower.price}
                </p>


            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedFlowers;
