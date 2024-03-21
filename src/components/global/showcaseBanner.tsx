'use client'
import Image from "next/image";

import { IServiceShowcase } from "@/interfaces";
import { Button, Input } from "@/components";
import { aboutUsShowcaseImg, videoScreen, youtube } from "@/constant/imgs";
import { useTranslation } from "react-i18next";
import { Fade, Slide } from "react-awesome-reveal";

export const ShowcaseBanner: React.FC<IServiceShowcase> = ({
  title = "Transporting Produce Made easier ",
  className,
  icon: Icon,
  bg = "bg-[url('/images/logistics-banner.png')]",
  pos = false,
  containerClassName,
  aboutUs = false,
  descriptionClassName,
  aboutUsImg = false,
  faqs = false,
  buttonClassName,
  description,
  aboutText = false,
}) => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <main
        className={`z-40 ${bg} ${containerClassName} px-[3%] sm:px-4 md:px-0 bg-no-repeat relative bg-cover w-full  pb-2 rounded-b-[32px]`}
      >
        <section className="md:max-w-[70.6rem] text-center flex flex-col items-center font-sans pt-[4.8rem] mx-auto max-w-lg">
          {
            aboutText &&
            <Fade>
              <h2 className="px-3 py-1 text-primary border-gray-300 border rounded-md shadow-md">{aboutText}</h2>
            </Fade>
          }
          <Slide direction="up">
            <div
              className={`text-3xl md:text-[52px] max-w-[33rem] md:leading-[80px] font-medium mt-2 ${className}`}
            >

              {title}
            </div>
          </Slide>
          <Fade>
            <p
              className={`${descriptionClassName} max-w-[26rem] mt-[2.47rem] text-[16.2px] leading-[28px] text-dark/50 font-medium`}
            >
              {description}
            </p>
          </Fade>

          {!aboutUs && (
            <div className="flex items-center justify-center md:space-x-1 mb-16 mt-10 md:mt-[3.8rem]">
              <Button
                link={"/login"}
                title={t("common:get_started_free")}
                className={`${buttonClassName} sm:!px-[2rem] lg:!px-[4.4rem] py-[.9rem] md:py-[.9rem] !text-[13px] md:!text-[16px] md:!rounded-[16px] !px-[2rem] !container !flex-grow`}
                icon={true}
                iconClassName="!text-2xl"
              />
              <Button
                link={"/contact-us"}
                title={t("common:talk_to_support")}
                className="!bg-transparent !normal-case  !text-[13px] md:!text-[17px] md:!py-[7px]  !text-primary underline"
              />
            </div>
          )}
          {pos && (
            <>
              {" "}
              <div className="mx-auto flex relative mt-10 md:mt-0 justify-center">
                <div className="top-0 max-w-[980px] md:mx-auto max-h-[95%]  -mt-2">
                  <Image
                    src={videoScreen}
                    className="h-[250px] md:h-[660px]"
                    alt={"video playback"}
                  />
                </div>
                <Image
                  src={youtube}
                  className="absolute w-[6rem] top-16 md:top-[10.3rem] md:w-[12.7rem]"
                  alt={"youtube"}
                />
              </div>
            </>
          )}
        </section>
      </main>
      {aboutUsImg && (
        <>
          <div className="hidden md:block !z-50 xl:-mt-[449px] -mt-[280px]  absolute">
            <Image
              src={aboutUsShowcaseImg}
              className=""
              alt={"about showcase image"}
            />
          </div>
          <div className="md:hidden !z-50 md:-mt-[449px] -mt-[290px]  absolute">
            <Image
              src={aboutUsShowcaseImg}
              className="h-40"
              alt={"about showcase image"}
            />
          </div>
        </>
      )}
    </div>
  );
};
