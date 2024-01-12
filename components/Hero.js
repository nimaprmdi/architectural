"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperChild from "./SwiperChild";

const Hero = ({ data, className }) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div className="h-screen bg-primary flex justify-end relative">
      {/* We can have Loading Component OR using classes Here OR Both */}
      {data && data.length > 0 ? (
        <div className={className || "w-3/4"}>
          <Swiper
            modules={[Pagination, Scrollbar, Controller]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true, enabled: false }}
            scrollbar={{ el: null }}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            className="swiper w-100 h-full bg-primary"
          >
            {data.map((project, index) => (
              <SwiperSlide key={`project_slider_image_${index}`} className="w-100 h-52 bg-primary text-white">
                <div className="w-100 h-full flex justify-center items-center">
                  <Image
                    className="cursor-grab"
                    src={project.projectsGallery[0].url || "/images/main.png"}
                    alt={project.projectTitle || "Image title"}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}

      {/* Titles */}
      <div className="w-3/4 h-screen absolute left-0 top-0 block select-none pointer-events-none">
        {data && data.length > 0 ? (
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
            {data.map((project, index) => (
              <SwiperSlide key={`project_slider_title_${index}`} className="w-100 h-52  text-white">
                <div className="w-100 h-full flex justify-start items-center">
                  <h3 className="absolute top-1/3 u-left-10 font-normal text-4xl md:text-6xl">
                    {project.projectTitle}
                  </h3>
                </div>
              </SwiperSlide>
            ))}

            <SwiperChild />
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default Hero;
