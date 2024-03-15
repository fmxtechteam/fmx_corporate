"use client"
import Image from "next/image";

import { aboutUsImg } from "@/constant/imgs";
import { WeMakeTradingEasier } from "./weMakeTradingEasier/weMakeTradingEasier";
import { Fade } from "react-awesome-reveal";

export const AboutUs = () => {
  return (
    <section className="bg-gray-secondary h-full md:h-[43rem] 2xl:h-[49rem] -mt-[8rem] md:-mt-[24.2rem] ">
      <div className="max-w-[70rem] mx-auto grid md:grid-cols-2 md:space-x-[2.7rem] px-[3%] sm:px-0 ">
        <div className="mt-[42.7px] md:-ml-6 md:mr-[11px] pt-4 md:pt-0">
          <Fade>
            <Image
              src={aboutUsImg}
              alt={"about-image"}
              className="md:scale-[.93]"
            />
          </Fade>
        </div>
        <div className="md:pb-5">
          <WeMakeTradingEasier />
        </div>
      </div>
    </section>
  );
};
