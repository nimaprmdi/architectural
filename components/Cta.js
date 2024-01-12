import Image from "next/image";
import React from "react";
import Link from "next/link";

const Cta = ({ data }) => {
  return (
    <div className="w-full bg-accent flex justify-between items-center">
      {data && data.length > 0
        ? data.map((about, index) => (
            <React.Fragment key={`about_component_key_${index}`}>
              <div style={{ width: "50%", height: "90vh", position: "relative" }}>
                <Image
                  className="object-cover"
                  src={about.descriptionThumbnail.url || "/images/building_1.jpg"}
                  layout="fill"
                />
              </div>
              <div className="w-1/2 h-max  flex justify-start pl-4 content-center flex-wrap">
                <h3 className="text-6xl text-white w-full">{about.descriptionTitle}</h3>

                {about.descriptionTitle ? <span className="u-separator"></span> : <></>}

                <p className="text-white w-full">{about.description}</p>

                <Link href="/about" className="c-btn">
                  Read More
                </Link>
              </div>
            </React.Fragment>
          ))
        : null}
    </div>
  );
};

export default Cta;
