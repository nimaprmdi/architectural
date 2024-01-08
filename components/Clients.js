"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Clients = () => {
  return (
    <section className="c-clients w-full flex justify-center py-12 pb-32 ">
      <div className="w-full flex justify-between max-w-7xl items-center flex-wrap">
        <div className="c-clients__logo w-full lg:w-max flex justify-center lg:justify-start gap-12  order-2 md:order-1">
          <Icon width={40} icon="ri:amazon-fill" />
          <Icon width={40} icon="ri:behance-fill" />
          <Icon width={40} icon="mdi:google" />
          <Icon width={40} icon="ri:linkedin-fill" />
        </div>

        <div className="c-client__title w-full md:w-max order-1 md:order-2">
          <h4 className="text-4xl lg:text-6xl text-black u-has-before-separator u-has-before-separator--right u-has-before-separator--right-md w-max">
            Our Clients
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Clients;
