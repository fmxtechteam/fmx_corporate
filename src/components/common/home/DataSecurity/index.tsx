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
      <div className="max-w-[1192px] container mx-auto md:p-0 p-2">
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
          <section className="bg-[url('/images/lady-security.svg')] bg-no-repeat w-full md:h-[450px] bg-cover bg-center p-4 h-[400px] rounded-lg flex justify-center items-center">
            <div className="bg-gray rounded-lg  md:px-10 px-5 grid md:gap-3  gap-[6px] md:w-[248px] w-[128.44px]  md:py-6  py-3">
              <Fade>
                <h4 className="text-dark font-medium md:text-[28px] md:leading-8 text-center text-sm w-full">{t('data_security')}</h4>
                <p className='text-secondary font-bold md:text-lg md:leading-[21px] text-[9.32px] leading-[10.93px] text-center'>{t('secured_by_amazon')}</p>
                <Image src={'/images/badge.svg'} alt="Badge" width={0} height={0} className="h-[88px] w-full md:w-[150px] md:h-[170px]" />
              </Fade>
              <div className='flex justify-center items-center'>
                <div className='md:block hidden'>
                  <Stars type="desktop" />
                </div>
                <div className='md:hidden block'>
                  <Stars type="mobile" />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-[40px] md:py-20 py-6">
          {
            lists?.map((list, index) => (
              <Fragment key={`${list.title}-${index}`}>
                <Fade>
                  <div className="shadow-dropdown py-8 px-6 rounded-3xl border border-dark/15 space-y-6 md:h-[339px]" >
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