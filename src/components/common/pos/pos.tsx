"use client";
import { Achievements, ShowcaseBanner, VideoSection } from "@/components";
import { PosIcon } from "@/assets/icons";
import { useTranslation } from "react-i18next";

export const Pos = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="z-20  relative">
        <ShowcaseBanner
          title={t("point_of_sale:title")}
          className="!max-w-[20rem] md:!max-w-[33rem] -mt-0 md:-mt-0 leading-[50px]"
          icon={PosIcon}
          iconClassName="w-[9rem] md:!w-[8.9rem] "
          pos={true}
          bg="bg-[url('/images/pos-banner.png')]"
          containerClassName="!overflow-hidden "
          descriptionClassName="!max-w-[20rem] mt-8 md:mt-10 md:!max-w-[26rem]"
          buttonClassName="md:!py-[16.5px]"
          description={t("point_of_sale:description")}
        />
      </div>
      <Achievements />
    </div>
  );
};
