'use client';
import { useTranslation } from "react-i18next";
import { BenefitsImage } from "./benefitsImage/benefitsImage";

export const Benefits = () => {

  const { t } = useTranslation();
  return (
    <div className="py-[6.5rem]  px-[3%] sm:px-0 max-w-[70.6rem] mx-auto">
      <div className="grid md:grid-cols-2 items-center  gap-12 md:gap-0 justify-between">
        <div className="pt-4 order-[1] md:order-[-1]">
          <h2 className="text-primary text-[15.6px] bg-primary/5 w-fit mb-4 font-medium py-1 px-[17px] rounded-lg">
            {t('logistics:beneftis_title')}
          </h2>
          <div className="text-2xl md:text-[2.3rem] font-medium leading-[1.6]">
            {t('logistics:beneftis_description')}
          </div>
          <p className="max-w-[28.8rem] mt-[1.5rem] mb-[41px] md:mt-12 text-[18px] leading-[28.5px] font-normal text-gray-primary/50">
            {t('logistics:beneftis_content')}
          </p>
        </div>
        <BenefitsImage />
      </div>
    </div>
  );
};
