import React from "react";
import { FaGithub } from "react-icons/fa6";

import TerminalButton from "../Terminal/TerminalButton";

const ProjectsCard = ({
  img,
  alt,
  title,
  description,
  ghUrl,
  url,
  stackIcons,
}) => {
  return (
    <div className="card w-60 rounded-md bg-termScreen font-scp text-termTop shadow-xl">
      <div className="h-6 w-full rounded-t-md bg-termTop">
        <div className="ml-2 flex h-full w-16 items-center justify-between">
          <div className={`h-4 w-4 rounded-full bg-termExit`}></div>
          <div className={`h-4 w-4 rounded-full bg-termMin`}></div>
          <div className={`h-4 w-4 rounded-full bg-termMax`}></div>
        </div>
      </div>
      <a href={url} target="_blank">
        <figure className="max-h-[193.5px] overflow-hidden">
          <img src={img} alt={alt} />
        </figure>
      </a>
      <div className="card-body items-center bg-termScreen p-3 text-center">
        <a href={url} target="_blank">
          <h2 className="card-title">{title}</h2>
        </a>
        {/* <div className="stack-icons flex gap-2">
          {stackIcons.map((Icon, index) => (
            <Icon key={index} size={"1.5rem"} />
          ))}
        </div> */}
        <div className="card-actions">
          <a href={ghUrl}>
            <FaGithub size={"2rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
