'use client'
import { FC } from "react";

import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { ILayout } from "@/interfaces";

export const MainLayout: FC<ILayout> = ({ children, className }) => {
  return (
    <>
      <div className={`${className}  z-50 sticky top-0`}>
        <Navbar />
      </div>
      <main className=" overflow-hidden ">
        {children}
      </main>
      <Footer />
    </>
  );
};
