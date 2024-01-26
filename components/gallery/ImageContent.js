import React from "react";

const ImageContent = ({ title, src, mimeType = "image/jpeg" }) => {
  return (
    <>
      <h5 className="c-projects__title text-6xl text-white pl-6 font-light">{title}</h5>
      {mimeType === "video/mp4" ? (
        <video
          style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute" }}
          className="c-projects__image cursor-pointer w-full h-full absolute top-0 u-animated-background object-fill"
          autoplay
          muted
          loop
        >
          <source src={src} type="video/mp4" className="" />
        </video>
      ) : (
        <img
          className="c-projects__image cursor-pointer w-full h-full absolute top-0 u-animated-background "
          style={{ position: "absolute" }}
          src={src}
          alt="My image"
          layout="fill"
          loading="lazy"
        />
      )}
    </>
  );
};

export default ImageContent;
