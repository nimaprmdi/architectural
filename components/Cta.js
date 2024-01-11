import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <div className="w-full bg-accent flex justify-between items-center">
      <div style={{ width: "50%", height: "90vh", position: "relative" }}>
        <Image className="object-cover" src="/images/building_1.jpg" layout="fill" />
      </div>

      <div className="w-1/2 h-max  flex justify-start pl-4 content-center flex-wrap">
        <h3 className="text-6xl text-white w-full">Our DNA</h3>

        <span className="u-separator"></span>

        <p className="text-white w-full">
          Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed
          augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
        </p>

        <button className="btn">Read More</button>
      </div>
    </div>
  );
};

export default Cta;
