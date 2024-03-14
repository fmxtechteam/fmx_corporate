'use client';
import { ourService } from "@/data";
import { Aside } from "./aside/aside";
import { Rating } from "@/components";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

export const OurServices = () => {
  const { t } = useTranslation();
  return (
    <main className="bg-[url('/images/our-service-banner.png')] bg-no-repeat mb-40 bg-cover w-full  h-full md:h-[45rem] -mt-56 md:-mt-[18.9rem]">
      <section className="grid md:space-x-4 md:grid-cols-2 justify-between max-w-[72.5rem] mx-auto font-sans pt-[5.4rem] px-[3%] sm:px-4">
        <div>
          <Aside />
        </div>
        <div className="flex flex-col space-y-[30px] md:space-y-[53px]  my-[30px]">
          {ourService.map(({ id, title, description, icon: Icon }) => (
            <div key={id} className="flex items-start space-x-[10px] md:max-w-[33rem]">
              <Fade>
                <Icon className="w-[6rem] h-[6rem]" />
                <div className="md:pt-2 pt-6">
                  <h4 className="text-xl md:text-[26px] font-medium leading-[1.6] mb-2 text-white">
                    {t(title)}
                  </h4>
                  <p className="text-base pt-2 md:pt-0 leading-[28.5px] md:text-[16.2px] md:leading-[31px] font-medium text-gray/60  max-w-[37rem]">
                    {t(description)}
                  </p>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
