import React from "react";
import ProjectItems from "./projects/items";
import ProjectsHeader from "./projects/ProjectsHeader";

const Gallery = ({ hasCategory = false }) => {
  return (
    <section className="c-projects  flex flex-wrap justify-center mb-16">
      {hasCategory ? <ProjectsHeader /> : null}

      <div className="c-projects__items w-full flex justify-between flex-wrap items-start max-w-screen-2xl">
        <ProjectItems />
        <ProjectItems />
        <ProjectItems />

        <ProjectItems />
        <ProjectItems />
        <ProjectItems />
      </div>
    </section>
  );
};

export default Gallery;
