import React from "react";

const ProjectsHeader = ({ title }) => {
  return (
    <div className="c-projects__header w-full px-8 pt-10 pb-11  max-w-screen-2xl ">
      <h3 className="text-6xl text-black u-has-before-separator font-normal ">{title || "Category"}</h3>

      <div className="c-projects__categories flex justify-start gap-8 md:pl-40 mt-8 flex-wrap">
        <span className="text-black text-base font-normal cursor-pointer hover:text-gray-400">Office</span>
        <span className="text-black text-base font-normal cursor-pointer hover:text-gray-400">Residental</span>
        <span className="text-black text-base font-normal cursor-pointer hover:text-gray-400">Store</span>
        <span className="text-black text-base font-normal cursor-pointer hover:text-gray-400">Design</span>
      </div>
    </div>
  );
};

export default ProjectsHeader;
