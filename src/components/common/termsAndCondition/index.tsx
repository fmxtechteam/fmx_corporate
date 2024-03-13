"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';

export const TermsAndConditionBody = ({ text, content, subContent1, subContent2, subContent3, subContent4, subContent5 }: TermsAndConditionBodyProps) => {
    const { t } = useTranslation();
    return (
        <main className={"pt-6"}>
            {
                text ? <h1 className='text-sm xl:text-base  font-bold text-black'>{`${t(`terms_conditions:${text}`)}`}</h1> : null
            }
            {
                content ? <p className='text-dark/50  opacity-65 text-sm xl:text-base my-3'>{`${t(`terms_conditions:${content}`)}`}</p> : null
            }
            {
                subContent1 ? <p className='text-dark/50  text-sm opacity-65 xl:text-base my-3'>{`${t(`terms_conditions:${subContent1}`)}`}</p> : null
            }
            {
                subContent2 ? <p className='text-dark/50  text-sm xl:text-base my-3 opacity-65'>{`${t(`terms_conditions:${subContent2}`)}`}</p> : null
            }
            {
                subContent3 ? <p className='text-dark/50  text-sm xl:text-base opacity-65'>{`${t(`terms_conditions:${subContent3}`)}`}</p> : null
            }
            {
                subContent4 ? <p className='text-dark/50  text-sm xl:text-base opacity-65'>{`${t(`terms_conditions:${subContent4}`)}`}</p> : null
            }
            {
                subContent5 ? <p className='text-dark/50  text-sm xl:text-base opacity-65'>{`${t(`terms_conditions:${subContent5}`)}`}</p> : null
            }
        </main>
    )
}
interface TermsAndConditionBodyProps {
    text?: string;
    content: string;
    subContent1?: string;
    subContent2?: string;
    subContent3?: string;
    subContent4?: string
    subContent5?: string

}