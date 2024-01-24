"use client";
import { CATS } from "@/graphQl/query";
import { graphqlClient } from "@/lib/graphql-client";
import React from "react";

const ProjectsHeader = async ({ hasCategory = true, title, onCatClick }) => {
  // API
  let { projects: cats } = await graphqlClient.request(CATS);

  const flattenedCategories = cats.reduce((acc, curr) => {
    curr.category.forEach((c) => {
      if (!acc.includes(c)) {
        acc.push(c);
      }
    });
    return acc;
  }, []);

  return (
    <div className="c-projects__header w-full px-8 pt-10 pb-11  max-w-screen-2xl">
      <h3 className="text-6xl text-black u-has-before-separator font-normal ">{title || "Category"}</h3>
      <div className="c-projects__categories flex justify-start gap-8 md:pl-40 mt-8 flex-wrap">
        {hasCategory && flattenedCategories && flattenedCategories.length > 0
          ? flattenedCategories.map((cat, index) => (
              <span
                onClick={() => console.log("ad")}
                key={`cats_${index}`}
                className="text-black text-base font-normal cursor-pointer hover:text-gray-400"
              >
                {cat}
              </span>
            ))
          : null}
      </div>
    </div>
  );
};

export default ProjectsHeader;
