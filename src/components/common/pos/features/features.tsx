'use client'
import { FeaturesCard } from "./featuresCard/featuresCard";
import { useTranslation } from "react-i18next";

export const Features = () => {
  const { t } = useTranslation();
  return (
    <section className="md:max-w-[70.6rem] md:text-center flex flex-col  px-[3%] sm:px-0  md:items-center my-1 md:my-6 font-sans pt-12 md:pt-[4.8rem] md:mx-auto">
      <h2 className="px-3 py-1 text-primary  rounded-md bg-[#F3FBF3]">{t('point_of_sale:features_heading')}</h2>
      <div
        className={`text-2xl leading-[36px] max-w-[19rem]  md:text-[36px] mt-[1.2rem]  md:max-w-[34rem] md:leading-[55px] font-medium md:mt-4`}
      >
        {t('point_of_sale:features_description')}
      </div>
      <div>
        <FeaturesCard />
      </div>
    </section>
  );
};
