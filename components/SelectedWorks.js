"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination, Scrollbar, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Image from "next/image";
import SwiperNavs from "./SwiperNavs";

const SelectedWorks = ({ data }) => {
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div className="c-selected-work w-full px-12 lg:pb-24">
      <div className="c-selected-work__header w-full  pt-32">
        <h2 className="u-has-before-separator text-2xl md:text-6xl font-normal break-words">Selected Work</h2>

        <p className="u-pl-5-percent u-max-w-1360 py-6 mb-0">
          Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed
          augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
        </p>
      </div>

      <div className="w-full mt-8" style={{ height: "650px" }}>
        {data && data.length > 0 ? (
          <Swiper
            modules={[Pagination, Scrollbar, Controller, EffectFade]}
            spaceBetween={0}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            speed={700}
            slidesPerView={1}
            pagination={{ clickable: true, enabled: false }}
            scrollbar={{ el: null }}
            // controller={{ control: controlledSwiper }}
            controller={{ control: secondSwiper }}
            className="swiper w-100 h-full "
          >
            {data.map((selectedWork, index) => (
              <SwiperSlide key={`selectedworks_slider_${index}`} className="w-full  md:h-52 text-white relative">
                <div className="w-full h-full flex flex-wrap">
                  <div className="slider__images md:mt-16 w-full lg:w-4/6  h-96 md:h-full flex justify-center relative items-center">
                    <div className="slider__counter absolute" style={{ top: "15%", left: "20%" }}>
                      <span className="text-9xl" style={{ color: "#a9ceee" }}>
                        {index <= 9 ? `0${++index}` : ++index}
                      </span>
                    </div>

                    {selectedWork.projectsGallery[0] ? (
                      <div className="c-selected-work__main-image image lg:absolute right-0 top-0">
                        <img
                          className="cursor-grab w-full h-full u-animated-background u-animated-background--md"
                          src={selectedWork.projectsGallery[0].url || "/images/main.png"}
                          alt="My image"
                          layout="fill"
                          loading="lazy"
                        />
                      </div>
                    ) : null}

                    {selectedWork.projectsGallery[1] ? (
                      <div
                        className="c-selected-work__secondary-image image absolute left-0 bottom-0"
                        style={{ width: "45%", height: "400px" }}
                      >
                        <img
                          className="cursor-grab w-full h-full u-animated-background u-animated-background--md"
                          src={selectedWork.projectsGallery[1].url || "/images/main.png"}
                          alt="My image"
                          layout="fill"
                          loading="lazy"
                        />
                      </div>
                    ) : null}

                    <div className="c-selected-work__button slider__btn absolute top-36 h-auto ">
                      <a className="c-btn btn--big btn--high-contrast">View Case</a>
                    </div>
                  </div>

                  <div className="slider__context absolute lg:relative top-0 w-full lg:w-2/6 h-96 md:h-full flex items-center flex-wrap  content-center pl-8 z-50">
                    <h4 className="text-black text-5xl bg-white">{selectedWork.projectTitle}</h4>
                    <p className="text-black mt-4 bg-white w-4/5 lg:w-full">{selectedWork.description}</p>

                    <SwiperNavs className="hidden lg:flex flex-wrap" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default SelectedWorks;
