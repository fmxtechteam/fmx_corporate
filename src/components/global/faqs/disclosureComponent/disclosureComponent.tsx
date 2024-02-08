"use client";

import { Disclosure } from "@headlessui/react";
import { IDisclosure } from "@/interfaces";
import { Add, Minus } from "@/assets/icons";

export const DisclosureComponent: React.FC<IDisclosure> = ({
  containerClassName,
  faqs,
}) => {
  return (
    <div
      className={`md:px-4 md:pt-9 mt-10 text-start  lg:w-[61.5rem] ${containerClassName}`}
    >
      {faqs?.map(({ id, title, description }) => (
        <div
          className={`md:mx-auto w-full rounded-2xl mb-[11px]  ${
            faqs ? "py-2 pl-0 pr-2" : "p-2"
          }`}
          key={id}
        >
          <Disclosure>
            {({ open }) => (
              <div
                className={`${
                  open ? "border-primary" : "border-gray-primary/50"
                } border transition duration-300 w-full  rounded-lg px-6 pt-[18.9px] pb-[18.1px]`}
              >
                <Disclosure.Button className="transition duration-300 w-full">
                  <div className="flex w-full flex-grow text-start md:text-center justify-between py-1 lg:pt-0">
                    <span className="text-gray-primary text-lg   md:text-base text-medium tracking-wide max-w-[90%] md:max-w-none">
                      {title}
                    </span>
                    {open ? (
                      <Minus className="-mt-1" />
                    ) : (
                      <Add className="-mt-px" />
                    )}
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="pt-6  text-[18px] md:text-[16.1px] leading-[28.5px] md:font-medium text-gray-primary/50">
                  {description}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};
