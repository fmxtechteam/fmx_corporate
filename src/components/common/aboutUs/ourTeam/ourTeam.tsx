'use client'
import Image from "next/image";

import { aboutUsCard } from "@/data";
import { useTranslation } from "react-i18next";

export const OurTeam = () => {
  const { t } = useTranslation();
  return (
    <div className="sm:px-0 px-[3%] max-w-[70.6rem] mx-auto pt-12">
      <div className="flex flex-col uppercase font-medium text-[16px] items-center w-full mb-6">
        <h3>{t('aboutUs:ourTeam_title')}</h3>
        <div
          className={`text-[36px]  text-center normal-case leading-[55px] font-medium mt-2 mb-8`}
        >
          {t('aboutUs:ourTeam_description')}
        </div>
      </div>
      <div>
        <div className=" mb-[6.2rem] grid  justify-between  order-[1] bg__about gap-x-16 md:gap-y-32 gap-y-20">
          {aboutUsCard.map(({ id, name, title, image, description }) => (
            <div
              key={id}
              className="rounded-[24px] grid relative w-full md:grid-cols-2 bg"
            >
              <Image
                src={image}
                alt={"online ordering image"}
                className={`w-full md:h-[420px] md:w-[540px] right-0 ${id === 2 ? "md:col-start-2" : ""
                  } ${id === 4 ? "md:col-start-2" : ""}`}
              />
              <div
                className={`border md:absolute md:top-10 bg-white order-[11] px-6 md:px-10 md:w-[60%] h-full md:h-[80%] top-5 border-gray-primary/25 rounded-[16px] -right-20 md:right-[0rem] ${id === 2 ? "md:!left-0" : ""
                  }  ${id === 4 ? "md:!left-0" : ""} py-3`}
              >
                <h1 className="font-medium text-[19px] md:text-base mt-5 mb-4 text-primary">
                  {name}
                </h1>
                <h1 className="font-medium text-[19px] md:text-base mb-4">
                  {t(`aboutUs:${title}`)}
                </h1>
                <p className="mb-[8px]  text-[17px] md:text-[16.9px] py-4 md:py-0 leading-[28.5px] text-gray-primary/50 font-normal">
                  {t(`aboutUs:${description}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
