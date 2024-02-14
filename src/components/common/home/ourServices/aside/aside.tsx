import { Rating } from "@/components";
import { useTranslation } from "react-i18next";

export const Aside = () => {
  const { t } = useTranslation();
  return (
    <aside className="text-white">
      <div className="text-2xl md:text-[2.3rem] font-medium leading-[1.6]">
        <h2 className="text-[13px] -mt-5 md:-mt-0 md:text-[14.8px] font-medium">
          {t('our_service_heading')}
        </h2>
        <div className="my-2">
          {t('our_service_content1')}
        </div>

        <div className="text-lg leading-[28.5px] md:text-[16px] md:leading-[29px] text-gray/60 max-w-[32rem] mt-5 md:mt-[3.6rem] md:mb-[4.2rem]">
          {t('our_service_content2')}
        </div>
      </div>
      <div className="md:flex space-x-[4.8rem] pt-[4rem] hidden">
        <Rating
          countries={t(`common:productivity`)}
          containerClassName="!space-y-6"
          countriesClassName="text-gray/60"
        />
        <Rating
          countries={t(`common:efficiency`)}
          containerClassName="!space-y-6"
          countriesClassName="text-gray/60"
        />
      </div>
    </aside>
  );
};
