"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <header className="c-header w-100 text-center pt-5 bg-slate-900 flex justify-start content-center px-9 md">
      <div className="c-header__social w-1/4  flex justify-start items-center gap-8">
        <Icon icon="ant-design:facebook-outlined" color="#fff" width={24} height={24} />
        <Icon icon="akar-icons:instagram-fill" color="#fff" width={24} height={24} />
      </div>
      <div className="c-heder__logo w-3/4  flex justify-start">
        <span className="c-header__border ml-2 mr-4 md:mr-10"></span>

        {/* <Image
          src="/images/image.png"
          alt="My image"
          width={500}
          height={500}
        /> */}

        <h1 className="c-header__logo h2 text-white">Architectural</h1>
      </div>
    </header>
  );
};

export default Header;
