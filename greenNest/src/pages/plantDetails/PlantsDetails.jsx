import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading";

const PlantsDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/plants.json")
      .then((r) => r.json())
      .then((data) => {
          setPlant(data.find((p) => String(p.plantId) === id));
          setLoading(false);
      })
      .catch(error => {
          console.error("Fetch error:", error);
          setLoading(false);
      });
  },
  [id]);

  if (loading) {
    return <Loading></Loading>
  }


  const handleBook = (e) => {
    e.preventDefault();
    console.log("helle ")
    toast.success("Consultation booked successfully!");
    setForm({ name: "", email: "" });
  };

  return (
    <div className="max-w-3xl mx-auto  px-3">
      <img
        src={plant.image}
        alt={plant.plantName}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-2xl font-bold">{plant.plantName}</h2>
      <p>{plant.description}</p>
      <p className="">
        Price: ${plant.price}
      </p>
      <p className="">
         Rating: {plant.rating} 
      </p>
      <p className="">
        Stock:{plant.availableStock}
      </p>

      <div className="mt-6 border p-4 rounded">
        <h3 className="font-semibold mb-2">Book Consultation</h3>
        <form onSubmit={handleBook} className="space-y-2">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Name"
            className="w-full border p-2 rounded"
            required
          />
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            className="w-full border p-2 rounded"
            type="email"
            required
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};
export default PlantsDetails;
