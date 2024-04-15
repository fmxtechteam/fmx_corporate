"use client"
import { ShowcaseBanner } from "@/components";
import { PosIcon } from "@/assets/icons";
import { useTranslation } from "react-i18next";

export const CommercialDisclosureHeader = () => {
  const { t } = useTranslation();
  return (
    <ShowcaseBanner
      title={t('commercial_disclosure:heading')}
      className="max-w-sm md:!max-w-[34rem] !leading-[45px] md:!leading-[80px] !mt-3 md:!mt-7 !-tracking-[0.0099em]"
      icon={PosIcon}
      aboutUs={true}
      iconClassName="w-[9rem] hidden"
      bg="bg-[url('/images/privacy-and-terms-banner.png')] md:bg-[url('/images/term-and-Policy-Banner.png')]"
      containerClassName="!overflow-hidden !h-[26rem] md:!h-[24.8rem] md:!w-full md:!bg-cover md:!rounded-b-[32px] !z-20"
      description={t('commercial_disclosure:subheading')}
      descriptionClassName="!normal-case !text-[16.9px] !max-w-[18rem]  md:!max-w-[26rem] md:!text-[18px] !mt-9 md:!mt-5 !tracking-tighter !text-gray-primary/45"
    />
  );
};
