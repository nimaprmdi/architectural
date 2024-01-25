"use client";
import React, { useState, useEffect } from "react";
import ProjectItems from "./projects/items";
import ProjectsHeader from "./projects/ProjectsHeader";

import NextJsImage from "../components/NextJsImage";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ data, hasCategory = false }) => {
  // States
  const [currentCat, setCurrentCat] = useState("");
  const [index, setIndex] = useState(-1);
  const [galleryData, setGalleryData] = useState();
  const [projectSlides, setProjectSlides] = useState([]);
  const [open, setOpen] = useState(false);

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

  return (
    <section className="c-projects flex flex-wrap justify-center mb-16 mt-16">
      <ProjectsHeader onCatClick={handleClick} hasCategory={hasCategory} title="Gallery" />

      <div className="c-projects__items w-full flex justify-start flex-wrap items-start max-w-screen-2xl">
        {galleryData &&
          galleryData.map((item, itemIndex) => (
            <ProjectItems
              id={item.id}
              title={item.title}
              key={`project_images_slider_${itemIndex}_${Math.random() * 100}`}
              src={item.url}
              index={itemIndex}
              onHandleClick={() => handleClick(itemIndex)}
            />
          ))}
      </div>

      {/* <button onClick={() => setOpen(true)}>Open Lightbox</button> */}
      {/* <Lightbox open={open} close={() => setOpen(false)} slides={projectSlides} render={{ slide: NextJsImage }} /> */}
    </section>
  );
};

export default Gallery;
