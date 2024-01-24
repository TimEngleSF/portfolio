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
  shiftImgY,
}) => {
  return (
    <div className="card w-80 rounded-md bg-termScreen font-scp text-termTop  shadow-xl md:w-60">
      <div className="h-6 w-full rounded-t-md bg-termTop">
        <div className="ml-2 flex h-full w-16 items-center justify-between">
          <div className={`h-4 w-4 rounded-full bg-termExit`}></div>
          <div className={`h-4 w-4 rounded-full bg-termMin`}></div>
          <div className={`h-4 w-4 rounded-full bg-termMax`}></div>
        </div>
      </div>
      <a href={url} target="_blank">
        <figure className="max-h-[193.5px] overflow-hidden md:h-[193.5px] ">
          <img src={img} alt={alt} className={`${shiftImgY}`} />
        </figure>
      </a>
      <div className="card-body items-center rounded-b-md bg-termScreen p-3 text-center">
        <a href={url} target="_blank">
          <h3 className="card-title">{title}</h3>
        </a>
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
