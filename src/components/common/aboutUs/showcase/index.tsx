"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { market2 } from "@/constant/imgs";
import { Fade } from "react-awesome-reveal";
import Carousel from "@/components/Carousel";
export const ShowCaseAboutUs = () => {
  const { t } = useTranslation();
  const images = [
    "https://res.cloudinary.com/mobinet/image/upload/v1723025808/market4_kn6rfn.jpg",
    "https://res.cloudinary.com/mobinet/image/upload/v1723025808/market2_nalgna.jpg",
    "https://res.cloudinary.com/mobinet/image/upload/v1723025810/market10_fwxc2d.jpg",
    "https://res.cloudinary.com/mobinet/image/upload/v1723025808/market1_ppb6is.jpg",
  ];

  return (
    <main className="md:py-10 py-4">
      <section className="container mx-auto max-w-[1192px] md:px-0 px-3">
        <div className=" justify-center items-center flex">
          <Fade direction="down">
            <h4 className="py-2 px-4 rounded-[4px] text-primary font-medium text-xl border border-dark/15 w-[180px] leading-[18.75px] capitalize text-center">
              {t("aboutUs:title")}
            </h4>
          </Fade>
        </div>
        <div className="py-2 justify-center items-center flex ">
          <Fade direction="bottom-right">
            <h2 className="md:text-[56px] text-[26px] md:leading-[84px] leading-[39px] font-medium text-center text-dark md:w-[583px] w-[265px] my-2">
              {t("aboutUs:showcase")}
            </h2>
          </Fade>
        </div>
        <div className="py-2 justify-center items-center flex ">
          <Fade cascade={true}>
            <p className="md:text-lg text-base leading-[30px] font-medium text-center text-dark/50 md:w-[500px] w-full ">
              {t("aboutUs:description")}
            </p>
          </Fade>
        </div>
      </section>
      <div className="">
        <Carousel images={images} />
      </div>
    </main>
  );
};
