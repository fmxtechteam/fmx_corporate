'use client'
import { HomeArrow } from "@/assets/icons";
import { Button } from "@/components";
import { useTranslation } from "react-i18next";

export const Aside = () => {
  const { t } = useTranslation();

  return (
    <>
      {" "}
      <aside className="text-white hidden md:block">
        <div className="text-[24px] md:text-[3.2rem] font-medium leading-[1.55] sm:-mt-2 -mt-[4.5rem] max-w-sm sm:max-w-xl md:-mt-2 lg:-mt[8rem]">
          {t('showcase_heading')}
          <div className="sm:mt-7 mt-4 mb-[3rem]">
            <HomeArrow className="sm:scale-[.95] scale-[.65] sm:-ml-4 -ml-[84px]" />
          </div>
          <div className="text-[16.2px] leading-[29px] text-gray/60 max-w-[26rem] sm:mt-6 mt-4 mb-[3.7rem] ">
            {t('showcase_content')}
          </div>
        </div>
        <div>
          <div className="flex sm:space-x-2 items-center">
            <Button
              link={"/login"}
              title={t('showcase_btn_text')}
              className="md:!px-[4rem] rounded-[7.9px] !text-[15px] sm:!text-[16px] !py-[14.5px] !container sm:!rounded-[16px] !flex-grow"
              icon={true}
            />
            <Button
              link={"/contact-us"}
              title={t('showcase_link_text')}
              className="!bg-transparent !text-[15px] !normal-case !text-primary underline sm:!text-[16px]"
            />
          </div>
          <p className="py-[14px] font-medium text-[10.5px] sm:text-xs md:pb-[6.1rem]">
            {t('showcase_text')}
          </p>
        </div>
      </aside>
      <aside className="text-white md:hidden">
        <div className="text-[26px] max-w-[18rem] md:text-[32px] font-medium leading-[1.55]  md:-mt-2 -mt-[5rem] md:max-w-none">
          {t('showcase_heading')}
          <div className="mt-2 md:mt-4 mb-[3rem]">
            <HomeArrow className="scale-[.51]  -ml-[7.5rem]" />
          </div>
          <div className="text-[13px] md:text-[16.2px] leading-[18px] md:leading-[29px] text-gray/60 max-w-[17rem] sm:max-w-[26rem] sm:mt-6 -mt-5  mb-[3.7rem] ">
            {t('showcase_content')}
          </div>
        </div>
        <div>
          <div className="flex items-center -mt-8">
            <Button
              link={"/login"}
              title={t('showcase_btn_text')}
              className="sm:!px-[2rem] rounded-[7.9px] !px-[2.5rem] !py-[14px] !container  !flex-grow"
              icon={true}
            />
            <Button
              link={"/contact-us"}
              title={t('showcase_link_text')}
              className="!bg-transparent !normal-case !py-[7px]  !text-primary underline"
            />
          </div>
          <p className="py-[14px] font-medium text-[9px]">
            {t('showcase_text')}
          </p>
        </div>
      </aside>
    </>
  );
};
