"use client";
import React, { useState, useEffect } from "react";
import ProjectItems from "./projects/items";
import ProjectsHeader from "./projects/ProjectsHeader";

import NextJsImage from "../components/NextJsImage";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ data, hasCategory = false }) => {
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

    // console.log("data", data);
  }, [data]);

  return (
    <section className="c-projects flex flex-wrap justify-center mb-16 mt-16">
      <ProjectsHeader hasCategory={hasCategory} title="Gallery" />

      <div className="c-projects__items w-full flex justify-between flex-wrap items-start max-w-screen-2xl">
        <button onClick={() => setOpen(true)}>Open Lightbox</button>

        {data &&
          data.map((item, projectIndex) => (
            <ProjectItems
              id={item.id}
              key={`project_images_slider_${index}`}
              src={item.url}
              index={projectIndex}
              onHandleClick={() => handleClick(index)}
            />
          ))}
      </div>
      <Lightbox open={open} close={() => setOpen(false)} slides={projectSlides} render={{ slide: NextJsImage }} />
    </section>
  );
};

export default Gallery;
