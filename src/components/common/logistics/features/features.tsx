'use client';
import { features } from "@/data";
import { useTranslation } from "react-i18next";

export const Features = () => {
  const { t } = useTranslation();
  return (
    <div className="px-[3%] mb-[6.2rem] md:-mt-3 sm:px-0 max-w-[70.6rem] -mt-20 mx-auto grid md:grid-cols-3 justify-between gap-8 ">
      {features.map(({ id, icon: Icon, title }) => (
        <div
          key={id}
          className="rounded-[24px] border shadow-[0px_4px_9px_0px_#0000001A] w-fit py-4 px-5 md:max-w-[22rem] "
        >
          <div className="mt-3">
            <Icon />
          </div>
          <h1 className="font-medium text-base mt-5 mb-4">{t(`logistics:features.${title}`)}</h1>
          <p className="mb-[8px]  text-[18px] leading-[28.5px] font-normal text-gray-primary/50">
            {t(`logistics:beneftis_content`)}
          </p>
        </div>
      ))}
    </div>
  );
};
