'use client';
import { IFaqs } from "@/interfaces";
import { DisclosureComponent } from "./disclosureComponent/disclosureComponent";
import { useTranslation } from "react-i18next";

export const Faqs: React.FC<IFaqs> = ({
  className,
  descriptionClassName,
  titleClassName,
  asideContent = false,
  asideTitle = "General",
  asideClassName,
  faqs,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`md:mx-auto mb-[5.8rem] pt-9  w-full flex md:text-center  md:justify-center ${asideContent
        ? `items-start flex-col md:flex-row  md:space-x-20 px-[3%] sm:px-4 md:px-0 ${asideClassName}  -mt-1`
        : "items-center px-[3%] sm:px-4"
        }  ${className}`}
    >
      {asideContent && (
        <div className="mt-[3.3rem] !-mb-5 md:min-w-fit">
          <h2 className="font-medium text-[26px] text-gray-primary/75 ">
            {asideTitle}
          </h2>
        </div>
      )}
      <div className="w-full mx-auto">
        <big
          className={` ${titleClassName} uppercase text-base md:text-[15.6px] font-medium`}
        >
          {t('faqs_heading')}
        </big>
        <h2
          className={` ${descriptionClassName} text-[28px] md:text-[37px] max-w-sm md:max-w-none -tracking-[0.010em] font-medium my-4`}
        >
          {t('faqs_sub_heading')}
        </h2>
        <div className="min-w-screen mt-4 lg:min-w-full lg:flex justify-center md:-mt-[30px]">
          <DisclosureComponent
            containerClassName={
              asideContent ? "md:!w-full md:mr-10" : "md:!w-[61.5rem]"
            }
            faqs={faqs}
          />
        </div>
      </div>
    </div>
  );
};
