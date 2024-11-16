import Image from "next/image";
import * as React from "react";
import Coute from "@/app/assets/icons/coute.svg";

export interface ICouteCardProps {
  name: string;
  quotes: string;
  avatar?: string;
  key?: string | number;
}

export default function CouteCard(props: ICouteCardProps) {
  return (
    <div
      key={props.key}
      className="space-y-6 px-5 py-10 min-w-[320px] 
  border  border-white/40 rounded-lg mx-4 min-h-max relative z-10"
    >
      <div className="text-right relative">
        <Coute className="absolute top-[-20px] left-[-20px] z-[-1]" />
        {/* <h1 className="font-bold text-base 2xl:text-xl">{props.quotes}</h1> */}
        <p className="text-xs 2xl:text-base pl-4">{props.quotes}</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-6 justify-center items-center">
          <hr className="  w-full h-[.5px] bg-[#D9D9D9]" />
          <Image
            src={props.avatar ? props.avatar : "/Images/clients/profile.svg"}
            alt="avatar"
            height={50}
            width={50}
          />
        </div>
        <p className="text-[10px] 2xl:text-xs">{props.name}</p>
      </div>
    </div>
  );
}
