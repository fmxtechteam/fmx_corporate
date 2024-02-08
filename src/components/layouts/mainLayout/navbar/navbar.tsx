"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  AppLogo,
  ArrowDown,
  ButtonArrow,
  CancelIcon,
  Hamburger,
} from "@/assets/icons";
import { Button } from "@/components";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { languages, routes, services } from "@/data";
import { MobileNav } from "./mobileNav/mobileNav";
import Image from "next/image";
import logo from '@/assets/images/logo2.png'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const current = usePathname();

  return (
    <>
      <header className="bg-white shadow-[0px_1px_4px_0px_#0000000D] w-full">
        <div className="flex lg:space-x-[115px] px-[3%] sm:px-0 items-center max-w-[70.6rem] mx-auto pt-[8px] pb-[10px]">
          <Link href="/" className="flex-grow">
            <Image src={logo} alt="Company Logo" className="w-[58px]" />
          </Link>
          <nav className="hidden xl:block">
            <ul className="flex space-x-[45px] text-dark/50 font-semibold tracking-wider text-[14px] transition-all duration-300">
              {routes.map((route) => (
                <li
                  key={route.id}
                  className={`flex items-center justify-center ${current === route.link ? " text-dark" : ""
                    }`}
                >
                  {current === route.link && (
                    <div className="w-[2.5rem] h-[2.6px] bg-primary/60 absolute bottom-0 rounded-full" />
                  )}
                  {route.link && <Link href={route.link}>{route.name}</Link>}
                  {!route.link && (
                    <>
                      {route.id === 2 && (
                        <>
                          <div className="relative">
                            <Menu>
                              <Menu.Button
                                className={"flex items-center space-x-1"}
                              >
                                <div className="cursor-pointer">
                                  {route.name}
                                </div>
                                <ArrowDown className="-ml-0 cursor-pointer" />
                              </Menu.Button>
                              <Menu.Items
                                className={
                                  "absolute !z-[80] top-10 rounded-2xl shadow-[0px_6px_4px_2px_#0000000D] pl-6 pt-9 pb-[34px] space-y-4 w-[14.5rem] bg-white -ml-7"
                                }
                              >
                                {services.map(
                                  ({ id, text, icon: Icon, link }) => (
                                    <div className="block" key={id}>
                                      <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                      >
                                        <Menu.Item>
                                          {({ active }) => (
                                            <Link
                                              className={`w-full flex space-x-8 items-center bg-gray/50 font-medium ${active && ""
                                                }`}
                                              href={link}
                                            >
                                              <Icon className="w-10 h-10" />
                                              {text}
                                              <ButtonArrow className="hover:text-gray/50 w-4 h-4" />
                                            </Link>
                                          )}
                                        </Menu.Item>
                                      </Transition>
                                    </div>
                                  )
                                )}
                              </Menu.Items>
                            </Menu>
                          </div>
                          {current === "point-of-sale" && (
                            <div className="w-[5rem] h-[2.6px] bg-primary/60 absolute bottom-0 rounded-full" />
                          )}
                          {current === "/point-of-sale" && (
                            <div className="w-[5rem] h-[2.6px] bg-primary/60 absolute bottom-0 rounded-full" />
                          )}
                          {current === "/online-ordering" && (
                            <div className="w-[5rem] h-[2.6px] bg-primary/60 absolute bottom-0 rounded-full" />
                          )}
                          {current === "/logistics" && (
                            <div className="w-[5rem] h-[2.6px] bg-primary/60 absolute bottom-0 rounded-full" />
                          )}
                        </>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-4">
            <div className="text-dark/50 hidden text-sm font-medium md:flex items-center space-x-2 lg:space-x-px">
              <div className="">
                <Menu>
                  {({ open }) => (
                    <>
                      <Menu.Button className={"flex items-center space-x-1"}>
                        <div className="cursor-pointer font-medium">EN</div>
                        {open ? (
                          <ArrowDown className="ml-1 rotate-180 cursor-pointer" />
                        ) : (
                          <ArrowDown className="ml-1 cursor-pointer" />
                        )}
                      </Menu.Button>
                      <Menu.Items
                        className={
                          "absolute !z-[80] top-14 rounded-[4px] shadow-[0px_2px_4px_0px_#00000026] space-y-8 py-4 pl-5 pr-1 bg-white -ml-6"
                        }
                      >
                        {languages.map(({ id, language }) => (
                          <div className="block" key={id}>
                            <Transition
                              as={Fragment}
                              show={open}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    className={`w-full cursor-pointer hover:bg-gray-primary flex space-x-8 items-center text-gray-primary/70 font-normal ${active && ""
                                      }`}
                                  >
                                    {language}
                                    <ButtonArrow className="hover:text-gray/50 w-4 h-4" />
                                  </div>
                                )}
                              </Menu.Item>
                            </Transition>
                          </div>
                        ))}
                      </Menu.Items>
                    </>
                  )}
                </Menu>
              </div>
            </div>
            <div className="flex space-x-2 lg:space-x-4  items-center">
              <Button
                link={"/login"}
                title="Login"
                className="!bg-transparent border !py-[8px] md:!py-[9.6px]  !border-primary !text-primary"
              />
              <Button
                link={"/register"}
                className="mr-2 lg:mr-0  !py-[8px] md:!py-[9.6px]"
              />
              <button
                className={`w-10  flex justify-center ${isOpen === true ? "hidden" : ""
                  } cursor-pointer transition-all duration-300`}
                onClick={() => setIsOpen((c) => !c)}
              >
                <Hamburger className={`xl:hidden cursor-pointer`} />
              </button>
              <button
                className={`w-10 flex justify-center xl:hidden ${!isOpen ? "hidden" : ""
                  } cursor-pointer transition-all duration-300`}
                onClick={() => setIsOpen((c) => !c)}
              >
                <CancelIcon className="fill-current text-dark cursor-pointer w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <aside
        className={`relative xl:hidden px-[3%] sm:px-0 max-w-[60.6rem] mx-auto`}
      >
        {" "}
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </aside>
    </>
  );
};
