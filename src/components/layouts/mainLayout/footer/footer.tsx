import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/images/logo2.png";
import { Input } from "@/components";
import { useTranslation } from "react-i18next";
import { companies, services, supports } from "@/constant/footer";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[url('/images/footerBackground.png')] h-full md:h-[29.2rem] px-[3%] sm:px-0  bg-cover bg-no-repeat relative">
      <div className="md:flex pt-[3rem] md:pt-[3.7rem] items-center justify-between max-w-[70.6rem] mx-auto gap-20">
        <div>
          <Link href="/" className="flex-grow md:-ml-20">
            <Image
              src={logo}
              alt="Company Logo"
              className="!w-[120px] !h-[80px]"
            />
          </Link>
          <div className="text-[16.5px] leading-[28px]  mt-4 font-medium text-gray-primary/50">
            {t("footer:footer_title")}
          </div>
          <Input className="md:w-[24rem] mt-1 md:mt-[3px]" />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-20 mt-16 md:-mt-2">
          <div className="font-medium">
            {t("common:company")}
            <nav className="mt-7">
              <ul className=" space-y-4 text-[15px] font-medium text-gray-primary/50">
                {companies.map((company) => (
                  <li key={company.name}>
                    <Link href={company.path}>
                      {t(`common:${company.name}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="font-medium">
            {t("common:help_&_support")}
            <nav className="mt-7">
              <ul className=" space-y-4 text-[15px] font-medium text-gray-primary/50">
                {supports.map((support) => (
                  <li key={support.name}>
                    <Link href={support.path}>
                      {t(`common:${support.name}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="font-medium -mt-2 md:-mt-0">
            {t("common:services")}
            <nav className="mt-7">
              <ul className=" space-y-4 text-[15px] font-medium text-gray-primary/50">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link href={service.path}>
                      {t(`common:${service.name}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-20 mt-4">
        <div className="md:absolute bottom-8 w-full justify-between items-center lg:flex max-w-[70.6rem] mx-auto text-[15px]  md:text-[14.8px] leading-[40px] md:leading-[28px] -mt-[3px] font-medium text-gray-primary/50">
          <ul className="flex space-x-7 list-disc md:hidden mb-16">
            <li className="list-none">
              <Link href={"/terms-and-conditions"}>
                {t('common:terms_and_conditions')}
              </Link>
            </li>
            <li>
              <li>
                <Link href={"/privacy-Policy"}>
                  {t("common:privacy_policy")}
                </Link>
              </li>
            </li>
          </ul>
          <div className="">
            <span className="block md:inline-flex mx-2">
              {" "}
              {t("common:copyright", { year: new Date().getFullYear() })}
            </span>
            <span className="block md:inline-flex">
              {" "}
              {t("common:all_rights_reserved")}
            </span>
          </div>
          <div>
            <ul className="md:flex space-x-7 list-disc hidden">
              <li className="list-none cursor-pointer">
                <Link href={"/terms-and-conditions"} target="_blank">
                  {" "}
                  {t("common:terms_and_conditions")}
                </Link>
              </li>
              <li>
                <Link href={"/privacy-Policy"}>
                  {t("common:privacy_policy")}
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"https://stripe.com/legal/ssa#general-terms"}>
                  {" "}
                  {t("common:stripe_terms_and_conditions")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
