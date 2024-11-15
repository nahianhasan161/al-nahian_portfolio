import * as React from "react";
import OtherOption from "../Option/OtherOption";
import { details } from "@/constants/constant";

export interface IOtherOptionSectionProps {
  addToRefs: any;
}

export default function OtherOptionSection(props: IOtherOptionSectionProps) {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] pt-[90px]
    2xl:px-[10%]
    "
    >
      <OtherOption
        title={details.project4.title}
        imageUrl={details.project4.imageUrl}
        actionText={details.project4.actionText}
        link={details.project4.link}
        addToRefs={props.addToRefs}
      />
      <OtherOption
        title={details.project5.title}
        imageUrl={details.project5.imageUrl}
        actionText={details.project5.actionText}
        link={details.project5.link}
        addToRefs={props.addToRefs}
      />
      <OtherOption
        title={details.project6.title}
        imageUrl={details.project6.imageUrl}
        actionText={details.project6.actionText}
        link={details.project6.link}
        addToRefs={props.addToRefs}
      />
    </section>
  );
}
