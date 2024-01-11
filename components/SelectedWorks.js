"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperChild from "./SwiperChild";
import Image from "next/image";
import SwiperNavs from "./SwiperNavs";

const SelectedWorks = () => {
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div className="c-selected-work w-full px-12">
      <div className="c-selected-work__header w-full  pt-32  ">
        <h2 className="u-has-before-separator text-6xl font-normal">Selected Work</h2>

        <p className="u-pl-5-percent u-max-w-1360 py-6 mb-0">
          Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed
          augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
        </p>
      </div>

      <div className="w-full mt-8" style={{ height: "650px" }}>
        <Swiper
          modules={[Pagination, Scrollbar, Controller]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true, enabled: false }}
          scrollbar={{ el: null }}
          // controller={{ control: controlledSwiper }}
          controller={{ control: secondSwiper }}
          className="swiper w-100 h-full "
        >
          <SwiperSlide className="w-full h-52  text-white relative">
            <div className="w-full h-full bg-haji-400 flex ">
              <div className="slider__images w-4/6 h-full flex justify-center  relative items-center">
                <div className="slider__counter absolute" style={{ top: "15%", left: "20%" }}>
                  <span className="text-9xl" style={{ color: "#a9ceee" }}>
                    01
                  </span>
                </div>

                <div className="image absolute right-0 top-0" style={{ width: "65%", height: "450px" }}>
                  <Image
                    className="cursor-grab"
                    src="/images/main.png"
                    alt="My image"
                    // width={570}
                    // height={385}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>

                <div className="image absolute left-0 bottom-0" style={{ width: "45%", height: "400px" }}>
                  <Image
                    className="cursor-grab"
                    src="/images/main.png"
                    alt="My image"
                    // width={570}
                    // height={385}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>

                <div className="slider__btn absolute" style={{ bottom: "12%", right: "40%" }}>
                  <a className="c-btn btn--big">View Case</a>
                </div>
              </div>

              <div className="slider__context w-2/6 h-full  flex items-center flex-wrap content-center pl-8 relative">
                <h4 className="text-black text-5xl">A Residence</h4>
                <p className="text-black mt-4">
                  Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui
                  sed augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
                </p>

                <SwiperNavs />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-full h-52 text-white relative">
            <div className="w-full h-full flex ">
              <div className="slider__images w-4/6 h-full flex justify-center  relative items-center">
                <div className="slider__counter absolute" style={{ top: "15%", left: "20%" }}>
                  <span className="text-9xl" style={{ color: "#a9ceee" }}>
                    01
                  </span>
                </div>

                <div className="image absolute right-0 top-0" style={{ width: "65%", height: "450px" }}>
                  <Image
                    className="cursor-grab"
                    src="/images/main.png"
                    alt="My image"
                    // width={570}
                    // height={385}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>

                <div className="image absolute left-0 bottom-0" style={{ width: "45%", height: "400px" }}>
                  <Image
                    className="cursor-grab"
                    src="/images/main.png"
                    alt="My image"
                    // width={570}
                    // height={385}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>

                <div className="slider__btn absolute" style={{ bottom: "12%", right: "40%" }}>
                  <a className="c-btn btn--big">View Case</a>
                </div>
              </div>

              <div className="slider__context w-2/6 h-full  flex items-center flex-wrap content-center pl-8 relative">
                <h4 className="text-black text-5xl">A Residence</h4>
                <p className="text-black mt-4">
                  Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui
                  sed augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
                </p>

                <SwiperNavs />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SelectedWorks;
