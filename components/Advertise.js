"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Advertise = () => {
  return (
    <section className="c-advertise w-full mt-5 flex items-center justify-center relative py-20 pb-32">
      <div className="c-advertise__blue-box w-full lg:w-9/12 max-w-6xl bg-slate-900 relative pt-12 pb-32 px-6">
        <div className="c-advertise__title">
          <h4 className="u-has-before-separator u-has-before-separator--md u-has-before-separator--white  text-6xl text-white">
            Why Us
          </h4>
        </div>

        <div className="c-advertise__desc w-100 flex justify-center  mt-7">
          <p className="max-w-2xl text-white">
            Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed
            augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
          </p>
        </div>

        <div className="c-advertise__items mt-24 w-full lg:absolute flex flex-wrap justify-center items-center gap-6">
          <div className="c-advertise__item  w-44 h-44 bg-gray-300 flex justify-center items-center flex-wrap content-center">
            <Icon icon="mdi:leaf" width={50} height={50} />

            <p className=" w-full font-bold text-lg text-black text-center mt-5">Eco-Friendly</p>
          </div>
          <div className="c-advertise__item w-44 h-44 bg-gray-300 flex justify-center items-center flex-wrap content-center">
            <Icon icon="mdi:leaf" width={50} height={50} />

            <p className=" w-full font-bold text-lg text-black text-center mt-5">Eco-Friendly</p>
          </div>
          <div className="c-advertise__item w-44 h-44 bg-gray-300 flex justify-center items-center flex-wrap content-center">
            <Icon icon="mdi:leaf" width={50} height={50} />

            <p className=" w-full font-bold text-lg text-black text-center mt-5">Eco-Friendly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertise;
