"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <header className="c-header w-100 text-center pt-5 pb-5 bg-slate-900 flex justify-start content-center flex-wrap">
      <div className="c-header__social w-full sm:w-1/4 flex justify-center md:justify-start items-center gap-8 pl-9 order-2 md:order-1">
        <a href="#">
          <Icon icon="ant-design:facebook-outlined" color="#fff" width={24} height={24} />
        </a>

        <a href="#">
          <Icon icon="akar-icons:instagram-fill" color="#fff" width={24} height={24} />
        </a>
      </div>

      <div className="c-heder__logo w-full sm:w-3/4 flex justify-center md:justify-start order-1 md:order-2">
        <span className="c-header__border ml-2 mr-4 md:mr-10"></span>

        {/* <Image
          src="/images/image.png"
          alt="My image"
          width={500}
          height={500}
        /> */}

        <h1 className="c-header__logo text-white text-base md:text-2xl">Architectural</h1>
      </div>
    </header>
  );
};

export default Header;
