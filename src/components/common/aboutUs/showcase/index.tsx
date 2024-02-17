'use client'
import { ShowcaseBanner } from '@/components/global'
import React from 'react'
import { AboutUsIcon } from "@/assets/icons";
import { useTranslation } from 'react-i18next';
export const ShowCaseAboutUs = () => {
    const { t } = useTranslation();
    return (
        <div className="h-full bg-cover w-full md:h-auto">
            <ShowcaseBanner
                title={t('aboutUs:showcase')}
                className="!max-w-[20rem] md:!max-w-[33rem] -mt-0 md:-mt-0 leading-[50px]"
                icon={AboutUsIcon}
                iconClassName="w-[9rem] md:!w-[8rem]"
                pos={false}
                aboutUs={true}
                aboutUsImg={true}
                bg=""
                description={t('aboutUs:description')}
                containerClassName="!overflow-hidden xl:h-[55.3rem] h-[44.5rem]"
                descriptionClassName="!max-w-[20rem] mt-8 md:mt-10 md:!max-w-[26rem]"
                buttonClassName="md:!py-[16.5px]"
                aboutText={t('aboutUs:title')}

            />
        </div>
    )
}
