'use client';
import { AArrowLeft, ArrowRight } from "@/assets/icons";
import { Button } from "@/components";
import { useTranslation } from "react-i18next";

export const SaleSolution = () => {
  const { t } = useTranslation();
  return (
    <div className="xl:bg-[url('/images/successStory.png')] bg-no-repeat md:-ml-4  bg-contain text-center  flex justify-center items-center  -mt-[7.8rem] xl:flex-col  w-full h-[20rem] mb-20">
      <section className="xl:max-w-[71rem]  mx-auto px-[3%] sm:px-4 ">
        <div className="xl:flex sm:items-center xl:space-x-6 xl:justify-between justify-start sm:justify-center text-start  sm:text-center xl:text-left">
          <h2 className="md:text-[37px] font-medium  xl:min-w-[18rem] text-2xl xl:leading-[58px]">
            {t('sale_solution_title')}
          </h2>
          <div className="text- bg-red-5  flex-grow [17.2px] leading-[31px] text-gray-primary/50 w-full max-w-[36rem] xl:min-w-[28rem] mt-16 mb-[4.2rem] relative h">
            <AArrowLeft className="absolute -top-[7.8rem] -left-[6rem]  hidden xl:flex" />
            <div className="text-lg leading-[28.5px]  md:text-[17px] text-left sm:text-center xl:text-left md:leading-[29px] tracking-tight xl:flex-grow font-medium -mt-8 xl:-mt-0">
              {t('sale_solution_content')}
            </div>
            <ArrowRight className="absolute -bottom-[7.5rem] -right-[6.8rem] hidden xl:flex" />
          </div>
          <Button
            link={"/login"}
            title={t('common:get_started_free')}
            className="!px-[4.5rem] xl:!px-[4rem] !rounded-[7.9px] xl:!w-max !justify-center xl:!justify-start !text-[16px] -mt-4 xl:-mt-0 !py-[15px] !container xl:!rounded-[16px] !flex-grow"
            icon={true}
          />
        </div>
      </section>
    </div>
  );
};
