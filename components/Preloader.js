import React from "react";

const Preloader = () => {
  return (
    <div className="w-full h-screen bg-black fixed top-0 left-0 flex justify-center items-center">
      <h2 className="text-6xl text-white">Loading...</h2>
    </div>
  );
};

export default Preloader;
