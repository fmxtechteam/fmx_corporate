import Link from "next/link";

import { AppLogo } from "@/assets/icons";
import { Input } from "@/components";

export const Footer = () => {
  return (
    <footer className="bg-[url('/images/footerBackground.png')] h-full md:h-[29.2rem] px-[3%] sm:px-0  bg-cover bg-no-repeat relative">
      <div className="md:flex pt-[3rem] md:pt-[3.7rem] items-center justify-between max-w-[70.6rem] mx-auto">
        <div>
          <Link href="/" className="flex-grow">
            <AppLogo className="!w-[97px] !h-[100px]" />
          </Link>
          <div className="text-[16.5px] leading-[28px] -mt-[5px] font-medium text-gray-primary/50">
            {" Try our Point-of-sale solution now"}
          </div>
          <Input className="md:w-[24rem] mt-1 md:mt-[3px]" />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-20 mt-16 md:-mt-2">
          <div className="font-medium">
            {` Company `}
            <nav className="mt-7">
              <ul className=" space-y-4 text-[15px] font-medium text-gray-primary/50">
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={""}>Partnership</Link>
                </li>{" "}
                <li>
                  <Link href={""}>Career</Link>
                </li>
                <li>
                  <Link href={"/contact-us"}>Contact us</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="font-medium">
            {"Help and Support"}
            <nav className="mt-7">
              <ul className=" space-y-4 text-[15px] font-medium text-gray-primary/50">
                <li>
                  <Link href={"/contact-us"}>Talk to support</Link>
                </li>
                <li>
                  <Link href={""}>Help centre</Link>
                </li>{" "}
                <li>
                  <Link href={""}>Pricing Model</Link>
                </li>
                <li>
                  <Link href={""}>Talk to sales</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="font-medium -mt-2 md:-mt-0">
            Services
            <nav className="mt-7">
              <ul className=" space-y-4 text-[15px] font-medium text-gray-primary/50">
                <li>
                  <Link href={"/point-of-sale"}>Point-of-sale</Link>
                </li>
                <li>
                  <Link href={"/logistics"}>Logistics</Link>
                </li>{" "}
                <li>
                  <Link href={"/online-ordering"}>Online ordering</Link>
                </li>
                <li>
                  <Link href={"/"}>Pricing product</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-20">
        <div className="md:absolute bottom-8 w-full justify-between items-center lg:flex max-w-[70.6rem] mx-auto text-[15px]  md:text-[14.8px] leading-[40px] md:leading-[28px] -mt-[3px] font-medium text-gray-primary/50">
          <ul className="flex space-x-7 list-disc md:hidden mb-16">
            <li className="list-none">
              <Link href={"/terms-and-conditions"}> Terms and Conditions</Link>
            </li>
            <li>
              <Link href={"/privacy-Policy"}>
                <li>Privacy Policy</li>
              </Link>
            </li>
          </ul>
          <div className="">
            © 2024 Fresh Market Exchange (FMX) Inc.{" "}
            <span className="block md:inline-flex">
              {" "}
              Copyright and rights reserved
            </span>
          </div>
          <div>
            <ul className="md:flex space-x-7 list-disc hidden">
              <li className="list-none cursor-pointer">
                <Link href={"/terms-and-conditions"}>
                  {" "}
                  Terms and Conditions
                </Link>
              </li>
              <Link href={"/privacy-Policy"}>
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
