'use client'
import { achievements } from "@/data";
import { Button } from "@/components";
import { useTranslation } from "react-i18next";

export const AchievementsComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="z-40 grid md:grid-cols-2 md:-mt-[20rem] lg:-mt-[20rem] xl:mt-40 2xl:-mt-0 md:gap-20 px-[3%] sm:px-0  items-center max-w-[78rem] mx-auto">
      <div className=" md:py-[6rem]   mx-auto">
        <div className="">
          <div className="pt-4">
            <h2 className="text-primary text-[15.6px] bg-white md:bg-transparent md:border-gray-primary/50 border-gray-primary/15 border w-fit mb-4 font-medium py-1 px-[17px] rounded-[4px] md:rounded-lg">
              {t("aboutUs:achievements_heading")}
            </h2>
            <div className="text-2xl md:text-[2.3rem] font-medium max-w-md leading-[1.6]">
              {t("aboutUs:achievements_description")}
            </div>
            <p className="max-w-[32rem] mt-[1.8rem] mb-[56px] md:mt-12 text-[17px] leading-[28.5px] font-normal text-gray-primary/50">
              {t("aboutUs:achievements_subheading")}
            </p>
          </div>
        </div>
        <Button
          link={"/login"}
          title={t("common:get_started_free")}
          className="!px-11 md:w-auto md:!px-[4.5rem] xl:!px-[4rem] !bg-primary hover:!bg-primary/75 !rounded-[7.9px] xl:!w-max !justify-center xl:!justify-start !text-[16px] -mt-4 xl:-mt-0 !py-[14.5px] md:!container xl:!rounded-[16px] md:!flex-grow"
          icon={true}
        />
      </div>
      <section className=" text-gray-primary pb-[3.8rem] -ml-4 md:-ml-0 grid grid-cols-2 pt-[4rem] md:pt-[7rem] md:gap-y-[8.8rem] gap-y-[4rem] -mt-3  w-full flex max-w-[70.6rem] md:mx-auto px-[3%] sm:px-0  justify-between">
        {achievements.map(({ id, count, description }) => (
          <div className="text-center" key={id}>
            <h1 className="text-3xl md:text-[3.2rem] mb-7 font-medium">
              {count}
            </h1>
            <p className="text-sm md:text-[15px] md:pt-6 font-medium capitalize">
              {t(`common:${description}`)}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
};
