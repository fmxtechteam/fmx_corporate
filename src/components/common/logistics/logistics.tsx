"use client"
import { LogisticsBadge } from "@/assets/icons";
import { Benefits } from "./benefits/benefits";
import { Features } from "./features/features";
import { Achievements, ShowcaseBanner } from "@/components";
import { useTranslation } from "react-i18next";

export const LogisticsComponent = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="z-20 relative">
        <ShowcaseBanner
          title={t('logistics:heading')}
          icon={LogisticsBadge}
          className="!max-w-[20rem] md:!max-w-[33rem] !-mt-0 md:!-mt-0 leading-[50px]"
          containerClassName="!overflow-hidden md:!h-[34.6rem] !h-[32rem]"
          descriptionClassName="!max-w-[20rem]  md:!max-w-[26rem] !mt-8 md:!mt-10"
          description={t('aboutUs:description')}
          buttonClassName="md:!py-[16.5px]"
        />
      </div>
      <Achievements />
      <Benefits />
      <Features />
    </div>
  );
};
