"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { HEADER } from "@/graphQl/query";
import { graphqlClient } from "@/lib/graphql-client";

const Header = async () => {
  let data = await graphqlClient.request(HEADER);
  const headerData = data.abouts[data.abouts.length - 1];

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

        <h1 className="c-header__logo text-white text-base md:text-2xl">{headerData.title}</h1>
      </div>

      <div className="c-header__navs  w-full lg:w-1/4 flex justify-center sm:justify-start items-center gap-8 pl-2 md:pl-9 order-2 lg:order-1 my-4">
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

      <div className="c-header__navs  w-full lg:w-1/4 flex pl-4 xl:pl-0 justify-center sm:justify-end items-center gap-2 sm:gap-8 order-3 sm:pr-6">
        {Object.keys(headerData.aboutSocials).map((social, index) => (
          <a
            key={social}
            className="text-white hover:text-gray-500 cursor-pointer"
            href={Object.values(headerData.aboutSocials)[index]}
          >
            <Icon icon={`mdi:${social}`} color="#fff" width={24} height={24} />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
