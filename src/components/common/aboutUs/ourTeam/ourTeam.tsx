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
        <div className="grid md:gap-10 gap-5">
          {aboutUsCard.map(({ id, name, title, image, description }) => (
            <div
              key={id}
              className="rounded-[24px] w-full border-gray-primary/25 border grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4"
            >
              <div className="md:hidden block">
                {
                  <Image
                    src={image}
                    alt={name}
                    className={`w-full object-cover rounded-[24px] ${name === "Takaaki Ueno" ? "h-[500px]" : ""}`}
                  />
                }
              </div>
              <div className="md:block hidden">
                {
                  id % 2 !== 0 ? <Image
                    src={image}
                    alt={name}
                    className={`w-full object-cover rounded-[24px] p-3 ${name === "Takaaki Ueno" ? "h-[500px]" : ""}`}
                  /> : null
                }
              </div>
              <div
                className={`p-4 rounded-md -right-20 md:right-[0rem]  py-3`}
              >
                <h1 className="font-medium text-[19px] md:text-base mt-5 mb-4 text-primary">
                  {name}
                </h1>
                <h1 className="font-medium text-[19px] md:text-base mb-4">
                  {t(`aboutUs:${title}`)}
                </h1>
                <p className="mb-[8px]  text-[17px] md:text-[16.9px] py-4 md:py-0 leading-[28.5px] text-gray-primary/50 font-normal">
                  {t(`aboutUs:${description}`)}
                </p >
                {
                  name === "Takaaki Ueno" ? <p className="  text-[17px] md:text-[16.9px] py-4 md:py-0 leading-[28.5px] text-gray-primary/50 font-normal">
                    {t(`aboutUs:ourTeam_team_description3b`)}
                  </p > : null
                }
              </div>
              <div className=" md:block hidden">
                {
                  id % 2 === 0 ? <Image
                    src={image}
                    alt={name}
                    className={`w-full object-cover rounded-[24px] p-3 ${name === "Takaaki Ueno" ? "h-[500px]" : ""}`}
                  /> : null
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
