import React from "react";
import { useSwiper } from "swiper/react";

const SwiperChild = () => {
  const swiper = useSwiper();

  return (
    <div className="bg-red-950">
      <span
        className="c-slider__next pl-32 text-white pointer-events-auto select-auto u-left-10 bottom-1/3 cursor-pointer"
        style={{ position: "absolute", zIndex: 2000 }}
        onClick={() => {
          swiper.slideNext();
        }}
      >
        Next
      </span>
      <span
        className="c-slider__next c-slider__next--prev pr-16 text-white pointer-events-auto select-auto u-left-10 bottom-1/4 cursor-pointer"
        style={{ position: "absolute", zIndex: 2000 }}
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        Prev
      </span>
    </div>
  );
};

export default SwiperChild;
