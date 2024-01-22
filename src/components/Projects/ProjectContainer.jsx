import React from "react";
import ProjectsCard from "./ProjectsCard";

const ProjectContainer = () => {
  const projectsData = [
    {
      url: "https://www.npmjs.com/package/lc-tracker",
      title: "Leetcode Tracker",
      ghUrl: "https://github.com/TimEngleSF/leetcode-tracker",
      img: "/project_img/lc_tracker.jpg",
      shiftImgY: "md:translate-y-8",
    },
    {
      url: "https://l.timengle.dev",
      title: "URL Shortener",
      ghUrl: "https://github.com/TimEngleSF/url-shortener-go",
      img: "/project_img/url_shortener.jpg",
      shiftImgY: "",
    },
    {
      url: "https://4-7-8.netlify.app/",
      title: "4-7-8 Visualizer",
      ghUrl: "https://github.com/TimEngleSF/4-7-8-Breathing-Visualizer",
      img: "/project_img/478_visualizer.png",
      shiftImgY: "md:translate-y-11",
    },
  ];
  const projectComponents = projectsData.map((project, i) => (
    <ProjectsCard
      title={project.title}
      url={project.url}
      ghUrl={project.ghUrl}
      img={project.img}
      key={i}
      shiftImgY={project.shiftImgY}
    />
  ));
  return (
    <section className="mx-auto flex flex-col items-center gap-12 rounded-b-md pb-20 md:w-[80%] md:justify-center lg:flex-row lg:gap-12">
      {projectComponents}
    </section>
  );
};

export default ProjectContainer;
