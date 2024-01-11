"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperChild from "./SwiperChild";

const Hero = ({ className }) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div className="h-screen bg-primary flex justify-end relative">
      <div className={className || "w-3/4"}>
        <Swiper
          modules={[Pagination, Scrollbar, Controller]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true, enabled: false }}
          scrollbar={{ el: null }}
          // controller={{ control: controlledSwiper }}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          className="swiper w-100 h-full bg-primary"
        >
          <SwiperSlide className="w-100 h-52 bg-primary text-white">
            <div className="w-100 h-full flex justify-center items-center">
              <Image
                className="cursor-grab"
                src="/images/main.png"
                alt="My image"
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-100 h-52 bg-primary text-white">
            <div className="w-100 h-full flex justify-center items-center">
              <Image
                className="cursor-grab"
                src="/images/main.png"
                alt="My image"
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-100 h-52 bg-primary text-white">
            <div className="w-100 h-full flex justify-center items-center">
              <Image
                className="cursor-grab"
                src="/images/main.png"
                alt="My image"
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-100 h-52 bg-primary text-white">
            <div className="w-100 h-full flex justify-center items-center">
              <Image
                className="cursor-grab"
                src="/images/main.png"
                alt="My image"
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-3/4 h-screen absolute left-0 top-0 block select-none pointer-events-none">
        <Swiper
          modules={[Pagination, Scrollbar, Controller]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true, enabled: false }}
          scrollbar={{ el: null }}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          allowTouchMove={false}
          className="main-swiper w-100 h-full relative"
        >
          <SwiperSlide className="w-100 h-52  text-white">
            <div className="w-100 h-full flex justify-start items-center">
              <h3 className="absolute top-1/3 u-left-10 font-normal text-4xl md:text-6xl">Architecture Studio</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-100 h-52  text-white">
            <div className="w-100 h-full flex justify-start items-center">
              <h3 className="absolute top-1/3 u-left-10 font-normal text-4xl md:text-6xl">Architecture Studio</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-100 h-52  text-white">
            <div className="w-100 h-full flex justify-start items-center">
              <h3 className="absolute top-1/3 u-left-10 font-normal text-4xl md:text-6xl">Architecture Studio</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-100 h-52  text-white">
            <div className="w-100 h-full flex justify-start items-center">
              <h3 className="absolute top-1/3 u-left-10 font-normal text-4xl md:text-6xl">Architecture Studio</h3>
            </div>
          </SwiperSlide>

          <SwiperChild />
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
