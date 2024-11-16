"use client";

import * as React from "react";

import Logo from "@/app/assets/icons/logo.svg";
import HamburgerIcon from "@/app/assets/icons/hamburger.svg";
import Cross from "@/app/assets/icons/cross.svg";
import { useState } from "react";
import Link from "next/link";
import { details } from "@/constants/constant";
export interface IPrimaryNavbarProps {
  addToRefs: any;
}
const PrimaryNavbar = React.forwardRef(function Button(
  props: IPrimaryNavbarProps,
  ref: any
) {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <nav
        className="px-[20px] md:px-[60px] sticky pt-8 font-SF_Pro_Display
     top-0 z-50 2xl:px-[10%]
    "
      >
        <div className="flex items-center justify-between ">
          <div ref={props.addToRefs}>
            <div className="flex items-center gap-4 text-sm font-[250] tracking-[1.12px]">
              <div className="">
                <Logo className="w-[30px] 2xl:h-[36px] " />
              </div>
              <div className="text-xs sm:text-[15px]">
                <h4>
                  {details.firstName}{" "}
                  <span className="text-white font-medium pb-1">
                    {details.lastName}
                  </span>
                </h4>
                <h4>Based in Bangladesh</h4>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-[50px] 2xl:gap-[67px]">
            <a
              className="md:block hidden underline cursor-pointer"
              onClick={openModal}
            >
              Resume
            </a>
            <a
              href={`mailto:${details.mail}`}
              className="px-3 sm:px-5 py-[6px] border-[.5px] border-white tracking-[.8px] rounded-[20px] 
          font-medium   bg-hover 
          text-xs sm:text-base 2xl:text-xl bg-white text-black

          "
              ref={props.addToRefs}
            >
              Get in touch
            </a>
            <div className="relative flex justify-center items-center">
              <div ref={props.addToRefs}>
                {!isActive ? (
                  <HamburgerIcon
                    onClick={() => setIsActive(!isActive)}
                    className={`p-1 transition-all duration-500 ease-in-out  ${
                      !isActive ? " visible" : " invisible"
                    }`}
                  />
                ) : (
                  <Cross
                    onClick={() => setIsActive(!isActive)}
                    className={`transition-all duration-500 ease-in-out  ${
                      isActive ? " visible" : " invisible"
                    }`}
                  />
                )}
              </div>

              <ul
                ref={props.addToRefs}
                className={`absolute text-end space-y-4 right-0 top-10 
              transition-all duration-500 ease-in-out overflow-hidden
              text-xs sm:text-base xl:text-xl 2xl:text-2xl
              ${
                isActive
                  ? "opacity-1 translate-x-0 visible"
                  : "opacity-0 translate-x-[50px] invisible"
              }`}
              >
                <li>
                  <Link href="#home">Home</Link>
                </li>
                <li>
                  <Link href="#projects">Projects</Link>
                </li>

                <li>
                  <Link href="#contact">Contact</Link>
                </li>
                <li className="block md:hidden underline" onClick={openModal}>
                  Resume
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-c-gray pt-10 pb-4 px-4 rounded-lg relative h-[95%] w-1/2">
            <embed
              src={details.cvLink}
              type="application/pdf"
              className="w-full h-full rounded-md"
            />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-2 mr-4 text-c-green-dark"
            >
              Close
            </button>
            <a
              href={details.cvLink}
              download
              className="absolute top-0 right-14 m-2 mr-4 text-c-green-dark"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </>
  );
});
export default PrimaryNavbar;
