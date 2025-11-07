import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Plants =()=> {
  const [cardPlants, setCardPlants] = useState([]);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then(setCardPlants)
      .catch(console.error);
  }, []);

  if (cardPlants.length === 0) {
    return <Loading/>;
  }

  return (
  
    <div>
      <h2 className="text-2xl font-bold mb-4 py-5 text-center">Our beloved  Indoor Plants</h2>
      <div className="grid grid-cols-2  md:grid-cols-3  xl:grid-cols-4 gap-4">
        {cardPlants.map(p => (
          <div key={p.plantId} className="border rounded p-3">
            <Link to={`${p.plantId}`}  >
            <img src={p.image} alt={p.plantName} className="h-40 w-full object-cover mb-2" />
            <h3 className="font-semibold">{p.plantName}</h3>
            <p>Price: ${p.price}</p>
            <p>Rating: {p.rating}</p>
            <Link to={`${p.plantId}`} className="mt-2 inline-block text-white bg-green-600 px-3 py-1 rounded ">View Details</Link>
      </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Plants;