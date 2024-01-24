"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination, Scrollbar, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import SwiperChild from "./SwiperChild";

const Hero = ({ data, className, hasNav = true }) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  console.log("data", data);

  useEffect(() => {
    console.log(typeof data);
  }, [data]);

  return (
    <div className="h-screen bg-primary flex justify-end relative">
      {/* We can have Loading Component OR using classes Here OR Both */}
      {data && (data.length > 0 || Object.keys(data).length > 0) ? (
        <div className={className || "w-full md:w-3/4"}>
          <Swiper
            modules={[Pagination, Scrollbar, Controller, Autoplay, EffectFade]}
            spaceBetween={0}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect={"fade"}
            slidesPerView={1}
            pagination={{ clickable: true, enabled: false }}
            scrollbar={{ el: null }}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            className="swiper w-100 h-full bg-primary"
          >
            {typeof data === "Array" &&
              data.map((project, index) => (
                <SwiperSlide key={`project_slider_image_${index}`} className="w-100 h-52 bg-primary text-white">
                  <div className="w-100 h-full flex justify-center items-center">
                    {/* <Image
                    className="cursor-grab"
                    src={project.projectsGallery[0].url || "/images/main.png"}
                    alt={project.projectTitle || "Image title"}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  /> */}
                    <img
                      className="cursor-grab w-full h-full u-animated-background"
                      src={project.projectsGallery[0].url || "/images/main.png"}
                      alt={project.projectTitle || "Image title"}
                      layout="fill"
                      objectFit="cover"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}

            {typeof data === "object" && (
              <SwiperSlide className="w-100 h-52 bg-primary text-white">
                <div className="w-100 h-full flex justify-center items-center">
                  {/* <Image
                    className="cursor-grab"
                    src={project.projectsGallery[0].url || "/images/main.png"}
                    alt={project.projectTitle || "Image title"}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  /> */}
                  <img
                    className="cursor-grab w-full h-full u-animated-background"
                    src={data.projectsGallery[0].url || "/images/main.png"}
                    alt={data.projectTitle || "Image title"}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      ) : null}

      {/* Titles */}
      <div className="w-full lg:w-3/4 h-screen absolute left-0 top-0 block select-none pointer-events-none">
        {data && (data.length > 0 || Object.keys(data).length > 0) ? (
          <Swiper
            modules={[Pagination, Scrollbar, Controller, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true, enabled: false }}
            scrollbar={{ el: null }}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            allowTouchMove={false}
            className="main-swiper w-100 h-full relative"
          >
            {typeof data === "Array" &&
              data.map((project, index) => (
                <SwiperSlide key={`project_slider_title_${index}`} className="w-100 h-52  text-white">
                  <div className="w-100 h-full flex justify-start items-center">
                    <h3 className="absolute top-1/3 u-left-10 font-normal text-4xl md:text-6xl">
                      {project.projectTitle}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}

            {typeof data === "object" && (
              <SwiperSlide className="w-100 h-52  text-white">
                <div className="w-100 h-full flex justify-start items-center">
                  <h3 className="absolute top-1/3 u-left-10 font-normal text-4xl md:text-6xl">{data.projectTitle}</h3>
                </div>
              </SwiperSlide>
            )}

            {hasNav ? <SwiperChild /> : null}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default Hero;
