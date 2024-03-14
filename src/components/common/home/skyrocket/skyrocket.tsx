'use client'
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const Skyrocket = () => {
  const { t } = useTranslation();
  return (
    <section className="md:mx-10">
      <div className="md:bg-[url('/images/successStory.png')] bg-no-repeat  bg-contain text-center flex justify-center items-center mt-[45px] flex-col mb-[15.1rem]  w-full md:h-[59vh] py-9 md:py-0 mx-auto px-[3%] sm:px-4">
        <div>
          <Fade>
            <h2 className="text-2xl md:text-[37px] font-medium md:-mt-1  md:max-w-[35rem] md:leading-[60px]">
              {t('skyrocket_text')}{" "}
            </h2>
          </Fade>
        </div>
      </div>
    </section>
  );
};
