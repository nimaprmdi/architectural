import Image from "next/image";
import Link from "next/link";
import React from "react";

const LastestProjects = ({ data }) => {
  return (
    <section className="c-lastest-projects w-full pt-28 pb-12 relative">
      <div className="w-full h-5/6 lg:h-96 bg-primary absolute top-0 -z-10"></div>

      <h4 className="u-has-before-separator u-has-before-separator--md u-has-before-separator--white text-5xl md:text-6xl text-white">
        Latest Projects
      </h4>

      {data && data.length > 0 ? (
        <div className="c-lastest-projects__items flex justify-center gap-6 px-6 flex-wrap mt-12">
          {data.map((project, index) => (
            <Link
              key={`main_posts_${index}`}
              href="/"
              className={`w-1/4 h-96 bg-accent cursor-pointer min-w-full md:min-w-96 relative mb-24 ${
                index < 3 ? "" : "hidden"
              }`}
            >
              <div className="absolute top-3 left-3 flex gap-2 w-11/12 z-40">
                {project.category.map((cat, index) => (
                  <div key={`className-${index}`} className="bg-gray-200 px-6 py-1 mr-2 text-black">
                    {cat}
                  </div>
                ))}
              </div>

              {/* <Image
                src={project.projectsGallery[0].url || "/images/main.png"}
                alt={project.projectTitle || "Image Title"}
                layout="fill"
                objectFit="cover"
                loading="lazy"
              /> */}

              <img
                src={project.projectsGallery[0].url || "/images/main.png"}
                alt={project.projectTitle || "Image Title"}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className="w-full h-full u-animated-background"
              />

              <div
                className="w-11/12 haji absolute bottom-0 bg-primary py-5 px-3 z-50"
                style={{ left: "50%", transform: "translate(-50% , 50%)" }}
              >
                <p className="m-0 text-white text-xl text-center">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default LastestProjects;
