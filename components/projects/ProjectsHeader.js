"use client";
import { CATS } from "@/graphQl/query";
import { graphqlClient } from "@/lib/graphql-client";
import React, { useEffect, useState } from "react";

const ProjectsHeader = ({ hasCategory = true, title, onCatClick }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // API
      const { projects: cats } = await graphqlClient.request(CATS);

      const filteredCats = cats
        ? cats.reduce((acc, curr) => {
            curr.category.forEach((c) => {
              if (!acc.includes(c)) {
                acc.push(c);
              }
            });
            return acc;
          }, [])
        : null;

      setCategories(filteredCats);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="c-projects__header w-full px-8 pt-10 pb-11  max-w-screen-2xl">
      <h3 className="text-6xl text-black u-has-before-separator font-normal ">{title || "Category"}</h3>
      <div className="c-projects__categories flex justify-start gap-8 md:pl-40 mt-8 flex-wrap">
        {hasCategory ? (
          <span
            onClick={(e) => onCatClick(e, "all")}
            className="text-black text-base font-normal cursor-pointer hover:text-gray-400"
          >
            All
          </span>
        ) : null}

        {hasCategory && categories && categories.length > 0
          ? categories.map((cat, index) => (
              <span
                onClick={(e) => onCatClick(e, cat)}
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
