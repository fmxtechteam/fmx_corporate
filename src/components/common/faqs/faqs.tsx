'use client'
import { PosIcon } from "@/assets/icons";
import { ShowcaseBanner } from "@/components";
import { useTranslation } from "react-i18next";

export const FaqsSection = () => {
  const { t } = useTranslation();
  return (
    <ShowcaseBanner
      title={t("faqs:faqs_heading")}
      className="max-w-sm md:!max-w-[34rem] !leading-[45px] md:!leading-[80px] !mt-3 !-tracking-[0.0099em]"
      icon={PosIcon}
      aboutUs={true}
      faqs={true}
      iconClassName="w-[9rem] hidden"
      bg="md:bg-[url('/images/faqs-banner-md.png')] bg-[url('/images/faqs-banner.png')]"
      containerClassName="!overflow-hidden !h-[28rem] md:!h-[30rem] md:!w-full md:!bg-cover md:!rounded-b-[32px] !z-20"
      // description={t("faqs:faqs_sub_heading")}

      descriptionClassName="!normal-case !text-[15.9px] !mt-9 !tracking-tighter !text-gray-primary/50"
    />
  );
};
