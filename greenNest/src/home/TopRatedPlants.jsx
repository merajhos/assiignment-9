import { Star, StarHalf } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loading from "../pages/Loading";

const TopRatedPlants = () => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("/plant.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch(console.error);
  },  []);

   if (plants.length === 0) {
    return <Loading></Loading>;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="p-6">
        <h1 className="text-3xl text-green-700 font-bold mb-4 text-center">
          Top Rated Indoor Plants
        </h1>
        <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 ">
          {plants.map(p => (
            <div key={p.plantId}
              className="border rounded-lg p-4 shadow-md bg-gray-200"
            >
              <img
                src={p.image}
                alt={p.plantName}
                className="rounded-lg h-40 w-full"
              />
              <h3 className="font-bold mt-2 text-black">{p.plantName}</h3>
              <div>
                <p className="text-black">${p.price}</p>
              <p className=" flex text-black gap-5 justify-between">{p.rating}
              <div className="flex gap-2 ">
                <Star className="text-yellow-700 " size={15}></Star>
               <Star className="text-yellow-700" size={15}></Star>
               <Star className="text-yellow-700" size={15}></Star>
               <Star className="text-yellow-700" size={15}></Star>
               <StarHalf className="text-yellow-700" size={15}></StarHalf> 
              </div>
              
                 </p>
              </div>
              
              <Link to={`/plants/${p.plantId}`}
                className="btn btn-sm bg-green-600 text-white mt-2  w-10/12 mx-auto flex border-none  outline-offset-3 outline-blue-700 hover:outline-2"
              >
                buy
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TopRatedPlants;
