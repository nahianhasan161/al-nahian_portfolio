import Image from "next/image";
import * as React from "react";
import ProjectDetailsCard from "../Card/ProjectDetailsCard";
import { details } from "@/constants/constant";
export interface IProjectSectionProps {
  addToRefs: any;
}

export default React.forwardRef(function ProjectSection(
  props: IProjectSectionProps,
  ref: any
) {
  return (
    <div className="space-y-[56px] 2xl:px-[10%]" id="projects">
      <ProjectDetailsCard
        addToRefs={props.addToRefs}
        title={details.project1.title}
        imageUrl={details.project1.imageUrl}
        description={details.project1.description}
        link={details.project1.link}
        date={details.project1.date}
        platform={details.project1.platform}
        tools={details.project1.tech}
      />
      <ProjectDetailsCard
        addToRefs={props.addToRefs}
        title={details.project2.title}
        imageUrl={details.project2.imageUrl}
        description={details.project2.description}
        link={details.project2.link}
        date={details.project2.date}
        platform={details.project2.platform}
        tools={details.project2.tech}
      />
      <ProjectDetailsCard
        addToRefs={props.addToRefs}
        title={details.project3.title}
        imageUrl={details.project3.imageUrl}
        description={details.project3.description}
        link={details.project3.link}
        date={details.project3.date}
        platform={details.project3.platform}
        tools={details.project3.tech}
      />
    </div>
  );
});
