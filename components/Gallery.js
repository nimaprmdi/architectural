"use client";
import React, { useState, useEffect } from "react";
import ProjectItems from "./projects/items";
import ProjectsHeader from "./projects/ProjectsHeader";

//
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//
const Gallery = ({ data, hasCategory = false }) => {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setImages(data);
  }, [data]);

  return (
    <section className="c-projects  flex flex-wrap justify-center mb-16 mt-16">
      <ProjectsHeader hasCategory={hasCategory} title="Gallery" />

      <div className="c-projects__items w-full flex justify-between flex-wrap items-start max-w-screen-2xl">
        <button onClick={() => setOpen(true)}>Open Lightbox</button>

        {data && data.length > 0 ? (
          <Lightbox open={open} close={() => setOpen(false)} slides={images} />
        ) : (
          <>
            <ProjectItems />
            <ProjectItems />
            <ProjectItems />

            <ProjectItems />
            <ProjectItems />
            <ProjectItems />
          </>
        )}
      </div>
    </section>
  );
};

export default Gallery;
