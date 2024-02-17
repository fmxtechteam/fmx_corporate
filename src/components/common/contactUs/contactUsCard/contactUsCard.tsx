"use client";
import Image, { StaticImageData } from "next/image";

import { Button } from "@/components";
import { useTranslation } from "react-i18next";

export const ContactUsCard = ({
  image,
  country,
  address,
}: {
  image: StaticImageData;
  country: string;
  address: string;
}) => {
  const { t } = useTranslation();
  return (
    <div className="items-center md:ml-10  max-w-[94.8%]">
      <div className="z-[-1]">
        <div className="z-[-1]">
          <Image
            alt={"contact us image"}
            src={image}
            style={{ objectFit: "cover" }}
            className="rounded-t-3xl !z-[-1] h-80 md:h-auto"
          />
        </div>
        <div className="!z-20 bg-[url('/images/medium-contact-us-card-img.png')] md:bg-[url('/images/contact-us-card-img.png')] -mb-[5.4rem] relative rounded-[16px] md:rounded-3xl bg-cover bg-no-repeat md:pl-14 md:pt-6 -mt-4 md:-mt-10">
          <div className="md:flex pt-[3.7rem] bg- items-start justify-between  mb-40   text-white p-6">
            <div>
              <div className="text-xl leading-[28px]  md:text-2xl pb-5 -mt-[5px] font-medium ">
                {t(`contactUs:${country}`)}
              </div>
              <div className="text-2xl md:text-[25px] leading-[45px] !min-w-[20rem] text-gray/75 max-w-sm md:leading-[28px] -mt-[5px] font-medium ">
                {t(`contactUs:${address}`)}
              </div>
              <Button
                link={"https://www.google.com/maps"}
                title={t("common:use_google_map")}
                className="sm:!px-[1rem] mt-[42px] flex !justify-center md:justify-start w-full hover:!bg-primary md:!px-[2.9rem] mb-10 md:mb-9 md:!w-fit md:!py-[.9rem] !bg-transparent !text-white !border-white !border !text-[16px] !rounded-[8px] !px-[1rem] !py-[16px] !container !flex-grow"
                icon={true}
                iconClassName="!text-2xl"
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-20 gap-10 -mt-2">
              <div className="text-xl leading-[28px]  md:text-2xl pb-5 -mt-[5px] font-medium ">
                {t("contactUs:contactUS_mail_us")}
                <nav className="mt-3">
                  <ul className=" text-base font-medium space-y-1">
                    <li className=" hover:text-primary hover:underline text-gray/50 cursor-pointer transition duration-300">
                      info@freshmarketxchange.co
                    </li>
                    <li className=" hover:text-primary hover:underline text-gray/50 pt-2 cursor-pointer transition duration-300">
                      freshmarketxchange.co
                    </li>{" "}
                  </ul>
                </nav>
              </div>
              <div className="text-xl leading-[28px]  md:text-2xl pb-5 -mt-[5px] font-medium ">
                {t("contactUs:contactUS_call_us")}
                <nav className="mt-3">
                  <ul className=" text-base font-medium space-y-2">
                    <li className=" hover:text-primary hover:underline text-gray/50 cursor-pointer transition duration-300">
                      + 097645764242345
                    </li>
                    <li className=" hover:text-primary hover:underline text-gray/50 pt-2 cursor-pointer transition duration-300">
                      + 097645764242345
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
