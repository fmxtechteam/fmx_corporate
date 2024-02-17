'use client'
import { ServicesOnlineOrdering } from "@/assets/icons";
import { Achievements, ShowcaseBanner } from "@/components";
import { useTranslation } from "react-i18next";

export const OnlineOrdering = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="z-20 relative">
        <ShowcaseBanner
          title={t("online_ordering:heading")}
          icon={ServicesOnlineOrdering}
          iconClassName="!mb-8 !w-4  md:mb-2"
          containerClassName="!overflow-hidden md:!h-[34rem] !h-[32rem]"
          descriptionClassName="!max-w-[20rem] md:!max-w-[26rem] !mt-8 md:-mt-0"
          className="!max-w-[20rem] md:!max-w-[38rem] !mt-6 md:!mt-2 leading-[50px]"
          buttonClassName="md:!py-[16.5px]"
          description={t('aboutUs:description')}
        />
      </div>
      <Achievements />
    </div>
  );
};
