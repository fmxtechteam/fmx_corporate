"use client";
import Image from "next/image";

import { Aside } from "./aside/aside";
import { homeImg, homeImgChart, homeImgChart2 } from "@/constant/imgs";
import Cookies from 'js-cookie'
import { Fade } from "react-awesome-reveal";
export const Showcase = () => {
  const translate = Cookies.get('NEXT_LOCALE')

  return (
    <main className="bg-[url('/images/homeFrame.png')] px-[3%] sm:px-4 md:px-0 bg-no-repeat md:mb-40  bg-cover w-full  2xl:h-screen h-full pb-10 rounded-b-[32px] overflow-hidden">
      <section className="grid lg:grid-cols-2 md:max-w-[70.6rem] font-sans pt-[7.2rem] mx-auto">
        <div className="">
          <Aside />
        </div>

        <Fade direction="up" triggerOnce>
          <div className="relative sm:-mt-2 mt-10 ">
            <Image src={homeImg} alt={"home-image"} className="sm:scale-[.98]" />
            <Image
              src={translate === 'en' ? homeImgChart : homeImgChart2}
              alt={"home-image"}
              style={{ objectFit: "cover" }}
              className="absolute top-0  sm:top-11 w-[8rem] sm:w-[10rem] right-12 md:right-16 md:w-[14rem] lg:w-[9.5rem]"
            />
          </div>
        </Fade>
      </section>
    </main>
  );
};
