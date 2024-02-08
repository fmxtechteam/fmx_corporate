import { IInput } from "@/interfaces";
import { Circle, InputArrowRight, SearchIcon } from "@/assets/icons";

export const Input: React.FC<IInput> = ({
  className,
  placeholder = "Enter your Email here",
  label,
  labelClassName,
  inputContainer,
  type = "text",
  faqs = false,
}) => {
  return (
    <>
      <label
        htmlFor="input"
        className={`text-dark text-lg mb-1 ${labelClassName}`}
      >
        {label}
      </label>
      <div
        className={`flex items-center outline-0 ${
          faqs
            ? "w-[90%] md:w-[25.6rem] border-gray-primary/20 h-[52px]"
            : "md:w-[24.2rem] border-gray-primary/25 justify-between h-14 "
        }  border-2 py-3 my-8  relative rounded-full  ${inputContainer}`}
      >
        {faqs && (
          <div className=" h-min cursor-pointer ml-4">
            <SearchIcon className="!h-4 !w-4" />
          </div>
        )}
        <input
          id="input"
          type={type}
          className={`-mt-[.1rem] outline-0 border-0 align-middle place-content-start  bg-transparent font-medium text-gray-primary/50 ${
            faqs
              ? "placeholder:text-gray-primary/30 pl-2 pr-4"
              : "placeholder:text-gray-primary/50 px-4"
          } text-[16.5px] leading-[28px] ${className}`}
          placeholder={placeholder}
        />
        {!faqs && (
          <div className="relative h-min cursor-pointer -ml-4">
            <Circle className="m-1 p-px" />
            <InputArrowRight className="absolute top-[15px] right-[14px]" />
          </div>
        )}
      </div>
    </>
  );
};
