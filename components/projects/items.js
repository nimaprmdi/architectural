import React from "react";
import Link from "next/link";
import ImageContent from "../gallery/ImageContent";

const ProjectItems = ({ id, src, title, isLink = true, onHandleClick, mimeType, hasImageHover = true }) => {
  return (
    <div
      className="c-projects__item-wrapper h-96 md:h-96 w-full lg:w-1/3 px-5 mb-12"
      // onClick={onHandleClick}
    >
      <div
        className={` w-full h-full relative bg-black flex items-center justify-start mb-4 ${
          hasImageHover ? "c-projects__item" : "c-projects__item c-projects__item--no-hover"
        }`}
      >
        {isLink ? (
          <Link href={`/projects/${id}`}>
            <ImageContent title={title} src={src} mimeType={mimeType} />
          </Link>
        ) : (
          <>
            <ImageContent title={title} src={src} mimeType={mimeType} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectItems;
