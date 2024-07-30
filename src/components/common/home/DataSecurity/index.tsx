'use client'

import { Star, Underline } from "@/assets/icons";
import { FileLock } from "@/assets/icons/file-lock";
import { Lock } from "@/assets/icons/Lock";
import { ShieldTick } from "@/assets/icons/ShieldTick";
import { Stars } from "@/assets/icons/Stars";
import Image from "next/image";
import { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const DataSecurity = () => {
  const { t } = useTranslation();
  return (
    <section className=" md:pt-20 py-6">
      <div className="container mx-auto md:p-0 p-2">
        <div className="flex md:flex-row flex-col-reverse md:gap-20" >
          <section className="md:py-10 py-4 relative">

            <Underline className=" absolute top-[28%] left-[55%] md:block hidden" />


            <h2 className="text-dark font-medium md:text-base text-sm my-3">
              {t('security_title')}
            </h2>
            <div className="md:w-[556px] w-full grid md:gap-[44px] gap-6">
              <h2 className="md:text-[40px] md:leading-[60px] text-2xl font-medium text-dark  leading-[36px]">
                {t('security_sub_title')}
              </h2>
              <p className="font-medium md:text-lg text-base text-dark/50 md:w-[489px] w-full md:leading-normal leading-[30px]">
                {t('security_content')}
              </p>
            </div>
          </section>
          <section className="bg-[url('/images/lady-security.png')] bg-no-repeat w-full md:h-[450px] bg-cover bg-center p-4 h-[400px] rounded-lg">
            <div className="bg-gray rounded-lg py-3 px-4 w-[198px] grid gap-3">
              <Fade>
                <p className="text-dark font-bold md:text-lg text-base"> {t('secured_by_amazon')}</p>
              </Fade>
              <Fade>
                <div className='flex gap-2' >
                  <Star className="" />
                  <Star className="" />
                  <Star className="" />
                  <Star className="" />
                  <Star className="" />
                </div>
              </Fade>
            </div>
          </section>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-[40px] md:py-20 py-6">
          {
            lists?.map((list, index) => (
              <Fragment key={`${list.title}-${index}`}>
                <Fade>


                  <div className="shadow-dropdown py-8 px-6 rounded-3xl border border-dark/15 space-y-6" >
                    <div className="shadow-dropdown h-[56px] w-[56px] bg-[#F3FBF3] rounded-lg p-4 flex justify-center items-center">
                      {list.icon}
                    </div>
                    <div className='space-y-4'>
                      <h3 className="md:text-lg font-medium text-dark text-base">
                        {t(list.title)}
                      </h3>
                      <p className="md:text-lg text-base leading-[30px] font-medium text-dark/50 ">
                        {t(list.content)}
                      </p>
                    </div>
                  </div>
                </Fade>
              </Fragment>

            ))
          }

        </div>
      </div>

    </section>
  )
}

const lists = [
  {
    title: 'security_list_heading1',
    content: 'security_list_content1',
    icon: <ShieldTick />
  },
  {
    title: 'security_list_heading2',
    content: 'security_list_content2',
    icon: <Lock />
  },
  {
    title: 'security_list_heading3',
    content: 'security_list_content3',
    icon: <FileLock />
  },
]