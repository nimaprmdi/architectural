"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="c-header w-100 text-center pt-5 pb-5 bg-primary flex justify-start content-center flex-wrap">
      <div className="c-heder__logo w-full lg:w-2/4 flex justify-center md:justify-start order-1 lg:order-2">
        <span className="c-header__border ml-2 mr-1 md:mr-2"></span>

        {/* <Image
            src="/images/image.png"
            alt="My image"
            width={500}
            height={500}
          /> */}

        <h1 className="c-header__logo text-white text-base md:text-2xl">Architectural</h1>
      </div>

      <div className="c-header__navs  w-2/3 lg:w-1/4 flex justify-start md:justify-start items-center gap-8 pl-2 xl:pl-9 order-2 lg:order-1 my-4">
        <Link className="text-white hover:text-gray-500 cursor-pointer" href="/">
          Home
        </Link>

        <Link className="text-white hover:text-gray-500 cursor-pointer" href="/projects">
          Projects
        </Link>

        <Link className="text-white hover:text-gray-500 cursor-pointer" href="/about">
          About
        </Link>
      </div>

      <div className="c-header__navs w-1/3 lg:w-1/4 flex pl-4 xl:pl-0 justify-end xl:justify-end items-center gap-2 md:gap-8 order-3 md:pr-6">
        <Link className="text-white hover:text-gray-500 cursor-pointer" href="/">
          <Icon icon="ant-design:facebook-outlined" color="#fff" width={24} height={24} />
        </Link>

        <Link className="text-white hover:text-gray-500 cursor-pointer" href="/projects">
          <Icon icon="ant-design:facebook-outlined" color="#fff" width={24} height={24} />
        </Link>

        <Link className="text-white hover:text-gray-500 cursor-pointer" href="/about">
          <Icon icon="ant-design:facebook-outlined" color="#fff" width={24} height={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
