import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import { ArrowDown, ButtonArrow } from "@/assets/icons";
import { languages, routes, services } from "@/data";
import { Menu, Transition } from "@headlessui/react";

export const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const current = usePathname();

  return (
    <aside className="relative">
      <section
        className={`fixed top-5 sm:-top-6 z-[-1] right-0 sm:px-4  h-screen w-screen transform transition-transform duration-500 ease-out ${
          isOpen ? "" : "-translate-y-full"
        }`}
      >
        <div className="bg-white w-full h-[85vh]    right-0  top-0 bottom-0 absolute ">
          <div className="w-64 h-96 mt-20 px-[3%]  sm:px-[3%]">
            <div className="w-44 top-[50px] sm:top-24 absolute justify-start items-start gap-4 flex flex-col">
              {routes.map((item) => (
                <div key={item.id} className="justify-center items-center flex">
                  {item.link && (
                    <Link
                      href={item.link ?? ""}
                      className={`text-gray-primary/60 relative text-[17px] font-normal py-4 rounded-[4px]  transition-all w-max ${
                        current === item.link && "!text-gray-primary"
                      }`}
                    >
                      {item.name}
                      {current === item.link && (
                        <div className="w-full h-[2.6px] bg-primary absolute bottom-1 rounded-full" />
                      )}
                    </Link>
                  )}
                  {!item.link && (
                    <>
                      {item.id === 2 && (
                        <>
                          <div className="relative mt-6 mb-3">
                            <Menu>
                              {({ open }) => (
                                <>
                                  <Menu.Button
                                    className={"flex items-center space-x-1"}
                                  >
                                    <div
                                      className={`cursor-pointer text-gray-primary/60 ${
                                        open && "text-gray-primary"
                                      }`}
                                    >
                                      {item.name}
                                    </div>
                                    {open ? (
                                      <ArrowDown className="-ml-0 rotate-180 cursor-pointer" />
                                    ) : (
                                      <ArrowDown className="-ml-0 cursor-pointer" />
                                    )}
                                  </Menu.Button>
                                  <Menu.Items
                                    className={
                                      "!z-[80] top-10 rounded-2xl shadow-[0px_4px_4px_0px_#00000026] pl-4 mt-8  pb-[34px] space-y-4 w-[15.5rem] bg-white"
                                    }
                                  >
                                    {services.map(
                                      ({ id, text, icon: Icon, link }) => (
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
                                                <Link
                                                  className={`w-full flex space-x-2 items-center bg-gray/50 font-medium ${
                                                    active && ""
                                                  }`}
                                                  href={link}
                                                >
                                                  <Icon className="w-10 h-10" />
                                                  <p className="w-fit text-gray-primary/50 text-[15px]">
                                                    {text}
                                                  </p>
                                                  <ButtonArrow className="hover:text-gray/50 w-4 h-4" />
                                                </Link>
                                              )}
                                            </Menu.Item>
                                          </Transition>
                                        </div>
                                      )
                                    )}
                                  </Menu.Items>
                                </>
                              )}
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
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-16 sm:top-[7rem] right-5 sm:right-4">
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className={"flex items-center space-x-1"}>
                  <div className="cursor-pointer text-gray-primary/70">EN</div>
                  {open ? (
                    <ArrowDown className="-ml-0 rotate-180 cursor-pointer" />
                  ) : (
                    <ArrowDown className="-ml-0 cursor-pointer" />
                  )}
                </Menu.Button>
                <Menu.Items
                  className={
                    "absolute !z-[80] top-8 rounded-[4px] shadow-[0px_2px_4px_0px_#00000026] space-y-8 py-4 pl-5 pr-1 bg-white -ml-6"
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
                              className={`w-full flex space-x-8 items-center text-gray-primary/70 font-normal ${
                                active && ""
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
      </section>
    </aside>
  );
};
