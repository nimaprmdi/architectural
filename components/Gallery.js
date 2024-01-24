"use client";
import React, { useState, useEffect } from "react";
import ProjectItems from "./projects/items";
import ProjectsHeader from "./projects/ProjectsHeader";

import NextJsImage from "../components/NextJsImage";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ data, hasCategory = false, onCatClick }) => {
  //
  const [index, setIndex] = useState(-1);
  const [projects, setProjects] = useState([]);
  const [projectSlides, setProjectSlides] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    console.log("e", e);
  };

  useEffect(() => {
    const projectSlides = data && data.map((project) => project.url);
    setProjectSlides(projectSlides);
    setProjects(data);
  }, [data]);

  return (
    <section className="c-projects flex flex-wrap justify-center mb-16 mt-16">
      <ProjectsHeader onCatClick={onCatClick} hasCategory={hasCategory} title="Gallery" />

      <div className="c-projects__items w-full flex justify-start flex-wrap items-start max-w-screen-2xl">
        {data &&
          data.map((item, projectIndex) => (
            <ProjectItems
              id={item.id}
              key={`project_images_slider_${projectIndex}_${Math.random() * 100}`}
              src={item.url}
              index={projectIndex}
              onHandleClick={() => handleClick(projectIndex)}
            />
          ))}
      </div>

      {/* <button onClick={() => setOpen(true)}>Open Lightbox</button> */}
      {/* <Lightbox open={open} close={() => setOpen(false)} slides={projectSlides} render={{ slide: NextJsImage }} /> */}
    </section>
  );
};

export default Gallery;
