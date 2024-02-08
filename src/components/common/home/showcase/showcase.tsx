import Image from "next/image";

import { Aside } from "./aside/aside";
import { homeImg, homeImgChart } from "@/constant/imgs";

export const Showcase = () => {
  return (
    <main className="bg-[url('/images/homeFrame.png')] px-[3%] sm:px-4 md:px-0 bg-no-repeat md:mb-40  bg-cover w-full  2xl:h-screen h-full pb-10 rounded-b-[32px]">
      <section className="grid lg:grid-cols-2 md:max-w-[70.6rem] font-sans pt-[7.2rem] mx-auto">
        <div className="">
          <Aside />
        </div>
        <div className="relative sm:-mt-2 mt-10 ">
          <Image src={homeImg} alt={"home-image"} className="sm:scale-[.98]" />
          <Image
            src={homeImgChart}
            alt={"home-image"}
            style={{ objectFit: "cover" }}
            className="absolute top-0  sm:top-11 w-[8rem] sm:w-[10rem] right-12 md:right-16 md:w-[14rem] lg:w-[9.5rem]"
          />
        </div>
      </section>
    </main>
  );
};
