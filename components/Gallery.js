"use client";
import React, { useState, useEffect } from "react";
import ProjectItems from "./projects/items";
import ProjectsHeader from "./projects/ProjectsHeader";
import Video from "yet-another-react-lightbox/plugins/video";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ data, hasCategory = false, isLink, hasImageHover }) => {
  // States
  const [currentCat, setCurrentCat] = useState("");

  const [galleryData, setGalleryData] = useState();
  const [gallerySlides, setGallerySlides] = useState([]);
  const [open, setOpen] = useState(false);

  // Light Box Video
  const [controls, setControls] = useState(true);
  const [playsInline, setPlaysInline] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);
  const [loop, setLoop] = useState(false);
  const [muted, setMuted] = useState(false);
  const [disablePictureInPicture, setDisablePictureInPicture] = useState(false);
  const [disableRemotePlayback, setDisableRemotePlayback] = useState(false);
  const [controlsList, setControlsList] = useState([]);
  const [crossOrigin, setCrossOrigin] = useState("");
  const [preload, setPreload] = useState("");

  // Events
  const handleClick = (e, cat) => {
    setCurrentCat(cat);
  };

  // Effects
  useEffect(() => {
    setGalleryData([...data]);
  }, [data]);

  useEffect(() => {
    if (currentCat === "" || currentCat === "all") {
      setGalleryData(data);
    } else {
      const filteredData = data.filter((item) => item.category.find((catItem) => catItem === currentCat));
      setGalleryData(filteredData);
    }
  }, [currentCat]);

  useEffect(() => {
    if (galleryData) {
      const projectSlidersClone = galleryData.map((item, index) => {
        let itemClone = { src: item.url, handle: item.handle };

        if (item.mimeType == "video/mp4") {
          itemClone = {
            ...JSON.parse(JSON.stringify(itemClone)),
            type: "video",
            width: 1280,
            height: 720,
            sources: [
              {
                src: item.url,
                type: "video/mp4",
              },
            ],
          };
        }

        return itemClone;
      });
      setGallerySlides(projectSlidersClone);
    }
  }, [galleryData]);

  return (
    <section className="c-projects flex flex-wrap justify-center mb-16 mt-16 w-100 flex-col items-center">
      <ProjectsHeader onCatClick={handleClick} hasCategory={hasCategory} title="Gallery" />

      <div className="c-projects__items w-full flex justify-start flex-wrap items-start max-w-screen-2xl">
        {galleryData &&
          galleryData.map((item, itemIndex) => (
            <ProjectItems
              isLink={isLink}
              hasImageHover={hasImageHover}
              id={item.id}
              title={item.title}
              key={`project_images_slider_${itemIndex}_${Math.random() * 100}`}
              src={item.url}
              mimeType={item.mimeType}
              index={itemIndex}
              onHandleClick={() => handleClick(itemIndex)}
            />
          ))}
      </div>

      <div className="w-100">
        <button className="btn btn--secondary" onClick={() => setOpen(true)}>
          Open Gallery
        </button>
      </div>

      {Object.keys(gallerySlides).length > 0 ? (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[...gallerySlides]}
          // render={{ slide: NextJsImage }}
          plugins={[Video]}
          video={{
            controls,
            playsInline,
            autoPlay,
            loop,
            muted,
            disablePictureInPicture,
            disableRemotePlayback,
            controlsList: controlsList.join(" "),
            crossOrigin,
            preload,
          }}
        />
      ) : null}
    </section>
  );
};

export default Gallery;
