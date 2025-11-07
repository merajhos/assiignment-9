import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import Loading from "./Loading";

const Profile= ()=> {
  const { user, updateUserProfile, logOut } = useContext(AuthContext);
  const [loading, setLoading ] = useState(false)
  const [form, setForm] = useState({ name: user?.displayName || "", photo: user?.photoURL || "" });
  const handleUpdate = async (e) => {
    e.preventDefault();
     setLoading(true);
    try {
      await updateUserProfile({ displayName: form.name,
         photoURL: form.photo });
        
      toast.success("Profile updated");
    } catch (err) {
      toast.error(err.message);
    }
     finally {
      setLoading(false);
     }
  };

  return (
    <div className=" mx-auto  items-center flex flex-col pt-10 w-full bg-cover py-20"    style={{ backgroundImage: `url(https://s.yimg.com/fz/api/res/1.2/c9Ij3VxBj8OubbFPCVacGw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/06/76/39/0676397e0202a7f62267d7c2a08850b4.jpg)`}} >
       {loading && <Loading />}
      
      <h2 className="text-2xl font-bold mb-8">My Profile</h2>
      <img src={user?.photoURL || "https://www.facebook.com/share/p/17VCnnRWSo/ " } alt="avatar" className="w-52 h-52 rounded-full mb-3 outline-4 outline-offset-8 outline-green-600 hover:scale-110" />
      <p className="text-xl py-1">Name: {user?.displayName}</p>
      <p className="text-xl py-1">Email: {user?.email}</p>

      <form onSubmit={handleUpdate} className="space-y-2 my-4 w-64">
        <input placeholder="Type Your Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="w-full border p-2 rounded" />
        <input placeholder="Type Photo Url" value={form.photo} onChange={(e)=>setForm({...form,photo:e.target.value})} className="w-full border p-2 rounded" />
        <button className="bg-green-600 text-white py-2 rounded w-full border-none  outline-offset-3 outline-blue-700 hover:outline-2 mt-2 ">Update Profile</button>
      </form>
        <button className="btn py-2 bg-red-500 text-white hover:bg-red-600 w-[255px]"  onClick={logOut}>
                  LogOut
                </button>
    </div>
  );
}
export default Profile;
