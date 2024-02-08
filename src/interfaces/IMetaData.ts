import { StaticImageData } from "next/image";

export interface IMetaData {
  title: string;
  description: string;
  image?: StaticImageData;
}
