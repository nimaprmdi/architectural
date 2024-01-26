import React from "react";
import Link from "next/link";

const Cta = ({ data, hasReadMore = true }) => {
  /**
   * title
   * description
   * image
   */

  return (
    <div className="w-full bg-accent flex flex-wrap justify-between items-center">
      {data ? (
        <React.Fragment>
          <div className="c-cta__image">
            <img
              className="object-cover w-full h-full u-animated-background"
              src={data.image || "/images/building_1.jpg"}
              layout="fill"
            />
          </div>
          <div className="w-full md:w-1/2 h-max  flex justify-start px-8 content-center flex-wrap py-14 md:py-0">
            <h3 className="text-6xl text-white w-full">{data.title}</h3>

            {data.title ? <span className="u-separator"></span> : <></>}

            <p className="text-white w-full">{data.description}</p>

            {hasReadMore ? (
              <Link href="/about" className="c-btn">
                Read More
              </Link>
            ) : (
              ""
            )}
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default Cta;
