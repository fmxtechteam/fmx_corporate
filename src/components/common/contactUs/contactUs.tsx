"use client";
import { PosIcon } from "@/assets/icons";
import { ShowcaseBanner } from "@/components";
import { ContactUsCard } from "./contactUsCard/contactUsCard";
import { contactUs } from "@/data";
import { useTranslation } from "react-i18next";

export const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ShowcaseBanner
        title={t("contactUs:contactUS_title")}
        className="max-w-sm md:!max-w-[34rem] !leading-[45px] md:!leading-[80px] !mt-3 md:!mt-5 !-tracking-[0.0099em]"
        icon={PosIcon}
        aboutUs={true}
        iconClassName="w-[9rem] hidden"
        bg="bg-[url('/images/contactUs-banner.png')]"
        containerClassName="!overflow-hidden !h-[20rem] md:!h-[20.1rem] md:!w-full md:!bg-cover md:!rounded-b-[32px] !z-20"
        description={t("contactUs:contactUS_sub_title")}
        descriptionClassName="!normal-case !text-[16.9px] !max-w-[20rem] md:!leading-[30px]  md:!max-w-[27rem] md:!text-[17px] !mt-9 md:!mt-8 !tracking-tighter md:!-tracking-[0.07rem] !text-gray-primary/45"
      />
      <div className=" max-w-[70.6rem] mx-auto pl-[3%] sm:pr-[3%] sm:px-0 my-[3.8rem]  ">
        {contactUs.map(({ id, image, country, address }) => (
          <ContactUsCard
            key={id}
            image={image}
            country={country}
            address={address}
          />
        ))}
      </div>
    </div>
  );
};
