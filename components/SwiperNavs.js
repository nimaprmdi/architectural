import React from "react";
import { useSwiper } from "swiper/react";

const SwiperNavs = ({ className = "" }) => {
  const swiper = useSwiper();

  return (
    <div style={{ bottom: "15%", right: "10%" }} className={`absolute  right-1/4  w-52 ${className}`}>
      <span
        className="c-slider__next relative text-black c-slider__next--black pl-32 pointer-events-auto select-auto bottom-1/3 cursor-pointer"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        Next
      </span>

      <span
        className="c-slider__next mt-4 left-0 relative c-slider__next--prev pr-16 text-black c-slider__next--black pointer-events-auto select-auto u-left-10 bottom-1/4 cursor-pointer"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        Prev
      </span>
    </div>
  );
};

export default SwiperNavs;
