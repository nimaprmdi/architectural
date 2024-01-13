"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Advertise = ({ data }) => {
  //   description
  // :
  // "Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis"
  // descriptionThumbnail
  // :
  // {url: 'https://media.graphassets.com/output=format:jpg/adYz9WDyTmSeW7Dl58sO'}
  // descriptionTitle
  // :
  // "Our DNA"
  // featuresDescription
  // :
  // "asdasdasdasdasdasdasdasd"
  // featuresIconsData
  // :
  // [{…}]
  // featuresTitle
  // :
  // "asdasdasdasdasdasd"

  // icons: (3)[("mdi:leaf", "mdi:tools", "ri:24-hours-line")];
  // titles: (3)[("Eco-Friendly", "Reliable", "24*7 Support")];

  return (
    <section className="c-advertise w-full flex items-center justify-center relative pb-32 mb-32 mt-64">
      {data && data.length > 0 ? (
        <div className="c-advertise__blue-box w-full lg:w-9/12 max-w-6xl bg-primary relative pt-12 pb-32 px-6">
          <div className="c-advertise__title">
            <h4 className="u-has-before-separator u-has-before-separator--md u-has-before-separator--white  text-6xl text-white">
              {data[0].featuresTitle || "Why Us"}
            </h4>
          </div>

          <div className="c-advertise__desc w-100 flex justify-center  mt-7">
            <p className="max-w-2xl text-white">
              {data[0].featuresTitle ||
                "Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis"}
            </p>
          </div>

          <div className="c-advertise__items mt-24 w-full lg:absolute flex flex-wrap justify-center items-center gap-6">
            {data[0].featuresIconsData[0].titles.map((icon, index) => (
              <div
                key={`main_icons_${index}`}
                className="c-advertise__item w-44 h-44 bg-gray-300 flex justify-center items-center flex-wrap content-center"
              >
                <Icon icon={data[0].featuresIconsData[0].icons[index]} width={50} height={50} />

                <p className=" w-full font-bold text-lg text-black text-center mt-5 mb-0">{icon}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Advertise;
