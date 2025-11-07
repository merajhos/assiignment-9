import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 const App =()=> {
  return (
    <>

<ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="min-h-screen flex flex-col lg:container lg:mx-auto">
      <Navbar />
      <main className="flex-1 lg:container lg:mx-auto ">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
    </>
    
  );
}

export default App;
