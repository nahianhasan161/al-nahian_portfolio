import * as React from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import { details } from "@/constants/constant";

export interface IFooterProps {
  addToRefs: any;
}

export default React.forwardRef(function Footer(props: IFooterProps, ref: any) {
  const refElement = React.useRef<HTMLDivElement>(null);
  /* const { scrollYProgress } = useScroll({
    target: refElement,
    offset: ["start 20%", "end 100%"],
  }); */
  const { scrollYProgress } = useScroll({
    target: refElement,
    // Start tracking the scroll 20% before the footer enters the viewport and end when it is fully visible
    offset: ["-10 0", "0 0"],
  });
  /* offset: ["-2 0", "0 0"], */
  const footerY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const w = useTransform(scrollYProgress, (value) => {
    const progress = `${value * 100}%`;
    /* if (value * 100 > 40) {
      return "100%";
    } */
    return progress;
  });

  return (
    <motion.div
      /* variants={{
        initial: { y: 0 },
        whileHover: { y: 60 },
      }}
      initial="initial"
      whileInView={{ y: 100 }} */
      style={{ y: footerY }}
      className="relative  mx-auto overflow-hidden 2xl:px-[10%]"
      ref={refElement}
    >
      <motion.div
        style={{ width: w }}
        className="absolute w-full h-full bg-black_c-400 inset-0  rounded-t-[50px] z-[-1] mx-auto"
      ></motion.div>

      <div
        className="sub-section-padding  mt-[100px] py-[50px]  tracking-[.28px]
    rounded-t-[50px]
    "
      >
        <h5
          className="text-gray_c-500 font-bold tracking-[.32px]
      text-base 2xl:text-xl pb-2
      "
        >
          Services
        </h5>
        <div className=" flex justify-between gap-10 md:gap-0 flex-col md:flex-row md:items-end 2xl:text-lg md:text-sm text-xs">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 leading-[21px] pl-3 ">
            <li
              ref={props.addToRefs}
              className="relative before:absolute before:w-1 before:h-1 before:rounded-full before:bg-white before:-left-3 before:top-1/2 before:-translate-y-1/2"
            >
              Product Design
            </li>
            <li
              ref={props.addToRefs}
              className="relative before:absolute before:w-1 before:h-1 before:rounded-full before:bg-white before:-left-3 before:top-1/2 before:-translate-y-1/2"
            >
              Product Development
            </li>
            <li
              ref={props.addToRefs}
              className="relative before:absolute before:w-1 before:h-1 before:rounded-full before:bg-white before:-left-3 before:top-1/2 before:-translate-y-1/2"
            >
              Product Deployment
            </li>
            <li
              ref={props.addToRefs}
              className="relative before:absolute before:w-1 before:h-1 before:rounded-full before:bg-white before:-left-3 before:top-1/2 before:-translate-y-1/2"
            >
              Product Strategy
            </li>
          </ul>
          <div className="inline">
            <div
              ref={props.addToRefs}
              className="inline-flex gap-1 text-xs 2xl:text-base font-light tracking-[.24px]"
            >
              © 2024 All Rights Reserved.{" "}
              <div className="inline group">
                <div className="svg-hover">
                  {" "}
                  {details.firstName + " " + details.lastName}
                  <hr
                    className="w-0 mr-[10%] group-hover:w-[100%] h-[2px]
                  transition-all duration-500 ease-in-ouiput
                  "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
