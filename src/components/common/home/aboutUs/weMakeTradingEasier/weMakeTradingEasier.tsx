'use client'
import { Underline } from "@/assets/icons";
import { Button, Rating } from "@/components";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const WeMakeTradingEasier = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-[4.2rem] ">
      <Slide direction="down">
        <h2 className="text-[15px] md:text-base font-medium uppercase">{t('about_us_title')}</h2>
      </Slide>
      <Slide direction="right">
        <h1 className="text-2xl max-w-[28.8rem] md:max-w-none leading-[40px] md:text-[36px] md:leading-[60px] my-2 font-medium">
          {t('about_us_heading1')} {` `}
          <div className="relative inline-flex mx-2">
            {t('about_us_heading2')}{` `}
            <Underline className="w-20 h-20 md:h-auto md:w-auto absolute -bottom-9 md:-bottom-1 left-0" />
          </div>{" "}
          {t('about_us_heading3')}
        </h1>
      </Slide>
      <Fade direction="up">
        <p className="max-w-[28.8rem] mt-[1.5rem] mb-[41px] md:mt-10 text-[16.2px] leading-[28.5px] font-medium text-gray-primary/50">
          {t('about_us_content')} {` `}
        </p>
      </Fade>
      <div className="pt-[22px] hidden md:block md:pb-10">
        <Bounce>
          <Button
            link={"/about-us"}
            title={t('about_us_btn_text')}
            className="!pl-[92px] !pr-[78px] md:!pl-[92px] md:!pr-[78px] !w-fit !text-base !py-[11.5px] !normal-case !container !rounded-[16px] !font-semibold !border !bg-transparent !border-primary !text-primary hover:!text-white hover:!bg-primary !flex-grow"
            icon={true}
          />
        </Bounce>
      </div>
    </div>
  );
};
