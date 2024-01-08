import Image from "next/image";
import React from "react";

const LastestProjects = () => {
  return (
    <section className="c-lastest-projects w-full pt-28 pb-12 relative">
      <div className="w-full h-5/6 lg:h-96 bg-slate-900 absolute top-0 -z-10"></div>

      <h4 className="u-has-before-separator u-has-before-separator--md u-has-before-separator--white text-5xl md:text-6xl text-white">
        Latest Projects
      </h4>

      <div className="c-lastest-projects__items flex justify-center gap-6 px-6 flex-wrap mt-12">
        <div className="w-1/4 h-96 bg-red-400 min-w-full md:min-w-96 relative mb-24">
          <div className="absolute top-3 left-3 bg-gray-200 px-6 py-1 z-40">Intirior</div>

          <Image
            className="cursor-grab"
            src="/images/main.png"
            alt="My image"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />

          <div
            className="w-11/12 absolute bottom-0 bg-blue-950 py-5 px-3"
            style={{ left: "50%", transform: "translate(-50% , 50%)" }}
          >
            <p className="m-0 text-white text-xl text-center">Amet eu facilisi posuere ut at cras non ipsum proin</p>
          </div>
        </div>

        <div className="w-1/4 h-96 bg-red-400 min-w-full md:min-w-96 relative mb-24">
          <div className="absolute top-3 left-3 bg-gray-200 px-6 py-1 z-40">Intirior</div>

          <Image
            className="cursor-grab"
            src="/images/main.png"
            alt="My image"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />

          <div
            className="w-11/12 absolute bottom-0 bg-blue-950 py-5 px-3"
            style={{ left: "50%", transform: "translate(-50% , 50%)" }}
          >
            <p className="m-0 text-white text-xl text-center">Amet eu facilisi posuere ut at cras non ipsum proin</p>
          </div>
        </div>

        <div className="w-1/4 h-96 bg-red-400 min-w-full md:min-w-96 relative mb-24">
          <div className="absolute top-3 left-3 bg-gray-200 px-6 py-1 z-40">Intirior</div>

          <Image
            className="cursor-grab"
            src="/images/main.png"
            alt="My image"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />

          <div
            className="w-11/12 absolute bottom-0 bg-blue-950 py-5 px-3"
            style={{ left: "50%", transform: "translate(-50% , 50%)" }}
          >
            <p className="m-0 text-white text-xl text-center">Amet eu facilisi posuere ut at cras non ipsum proin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastestProjects;
