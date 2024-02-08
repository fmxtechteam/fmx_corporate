import { ReactNode } from "react";

export interface ILayout {
  children: ReactNode;
  className?: string;
  footerClassName?: string;
}
