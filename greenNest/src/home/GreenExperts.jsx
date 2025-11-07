import React from "react";
import expart3 from "../assets/expart3.jpg";
const GreenExperts = () => {
  const experts = [
    {
      id: 1,
      name: "Meraj",
      specialization: "Tropical Flora",
      imageUrl: expart3,
    },
    {
      id: 2,
      name: "Meraj",
      specialization: "Succulents & Cacti",
      imageUrl: expart3,
    },
    {
      id: 3,
      name: "Meraj",
      specialization: "Pest Management",
      imageUrl: expart3,
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-12">
          Meet Our Green Experts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <div key={expert.id} className="bg-white p-6 rounded-lg shadow-xl">
              <img
                src={expert.imageUrl}
                alt={expert.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                {expert.name}
              </h3>
              <p className="text-green-600 font-semibold mt-1">
                {expert.specialization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreenExperts;
