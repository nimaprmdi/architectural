import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItems = () => {
  return (
    <div className="c-projects__item-wrapper h-96 md:h-96 w-full lg:w-1/3 px-5 mb-12">
      <div className="c-projects__item w-full h-full relative bg-black flex items-center justify-start mb-4 ">
        <Link href="/">
          <h5 className="c-projects__title text-6xl text-white pl-6 font-light">Zeus Gallery</h5>

          <img
            className="c-projects__image cursor-pointer w-full h-full absolute top-0 u-animated-background"
            src="/images/main.png"
            alt="My image"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />

          {/* <Image
            className="c-projects__image cursor-pointer"
            src="/images/main.png"
            alt="My image"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          /> */}
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;
