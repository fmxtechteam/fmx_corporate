import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import "./globals.css";
import { dir } from 'i18next';
import i18nConfig from "@/i18nConfig";
import { Roboto } from "next/font/google";


export const metadata: IMetaData = {
  title: "Home FMX",
  description:
    "Elevate your presence at Japan's Wholesale Market with our pioneering solutions. Experience seamless trading, streamlined processes, and user-friendly excellence. Join us to redefine wholesale success.",
};
export function generateStaticParams() {
  return i18nConfig.locales.map((locale: any) => ({ locale }));
}

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children, params: { locale } }: IRootLayout) {
  return (
    <html lang="ja" dir={dir(locale)}>
      <head>
        <link rel="icon" href={"/images/logo.png"} type={"image/png"} />
      </head>
      <body className={`${roboto.className} relative`}>{children}</body>
    </html>
  );
}

interface IRootLayout {
  children: ReactNode;
  params: {
    locale: string;
  }
}
interface IMetaData {
  title: string;
  description: string;
  image?: StaticImageData;
}