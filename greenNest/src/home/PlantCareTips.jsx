import React from "react";

 const PlantCareTips = ()=> {

const careTips = [
  { icon: '💧', title: "Watering Guide", description: "Check soil moisture before watering. Never let roots sit in standing water." },
  { icon: '☀️', title: "Sunlight Needs", description: "Most indoor plants thrive in bright, indirect light. Avoid harsh direct sun." },
  { icon: '🌱', title: "Fertilizing Schedule", description: "Feed your plants every 4-6 weeks during the spring and summer growing season." },
];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-12">Essential Plant Care Tips</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {careTips.map((tip, index) => (
            <div key={index} className="p-6 border-2 border-green-200 rounded-lg shadow-md">
              <span className="text-5xl block mb-4">{tip.icon}</span>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default PlantCareTips