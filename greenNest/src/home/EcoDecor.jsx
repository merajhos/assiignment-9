import React from "react";
const EcoDecor = () => {
  const decorIdeas = [
    {
      id: 1,
      title: "Shelf Styling",
      tip: "Use trailing plants like Pothos for a cascading look.",
    },
    {
      id: 2,
      title: "Bathroom Oasis",
      tip: "High-humidity lovers like Ferns thrive in bathroom spaces.",
    },
    {
      id: 3,
      title: "Minimalist Desk",
      tip: "One sculptural plant, like a Snake Plant, adds focus.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-green-800 mb-12 text-center ">
          🌿 Eco Decor Ideas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {decorIdeas.map((idea) => (
            <div key={idea.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                {idea.title}
              </h3>
              <p className="text-gray-600">{idea.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default EcoDecor;
