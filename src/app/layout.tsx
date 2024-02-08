import { ReactNode } from "react";

import { StaticImageData } from "next/image";
import "./globals.css";

export const metadata: IMetaData = {
  title: "Home FMX",
  description:
    "Elevate your presence at Epping Wholesale Market with our pioneering solutions. Experience seamless trading, streamlined processes, and user-friendly excellence. Join us to redefine wholesale success.",
};

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={"/images/logo.png"} type={"image/png"} />
      </head>
      <body className="relative font-poppins">{children}</body>
    </html>
  );
}

interface IRootLayout {
  children: ReactNode;
}
interface IMetaData {
  title: string;
  description: string;
  image?: StaticImageData;
}
