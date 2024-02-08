import Link from "next/link";

import { IButton } from "@/interfaces";
import { ButtonArrow } from "@/assets/icons";

export const Button: React.FC<IButton> = ({
  title = "Register",
  className,
  link,
  icon = false,
  iconClassName,
}) => {
  return (
    <Link href={link}>
      <button
        className={`${className} transition-all duration-700 bg-primary md:!px-[22px] text-[12px] !px-[20px] md:text-[14.5px] font-medium md:font-bold md:py-[9.6px] rounded-lg capitalize text-white flex items-center`}
      >
        {title}
        {icon && (
          <ButtonArrow
            className={`text-2xl sm:text-base fill-current ml-[3px] font-black ${iconClassName}`}
          />
        )}
      </button>
    </Link>
  );
};
