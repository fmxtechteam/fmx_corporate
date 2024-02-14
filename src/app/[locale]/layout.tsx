import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import "./globals.css";
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';

export const metadata: IMetaData = {
  title: "Home FMX",
  description:
    "Elevate your presence at Japan's Wholesale Market with our pioneering solutions. Experience seamless trading, streamlined processes, and user-friendly excellence. Join us to redefine wholesale success.",
};
export function generateStaticParams() {
  return i18nConfig.locales.map((locale: any) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }: IRootLayout) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
        <link rel="icon" href={"/images/logo.png"} type={"image/png"} />
      </head>
      <body className="relative font-poppins">{children}</body>
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