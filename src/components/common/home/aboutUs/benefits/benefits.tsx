import { onlineOrdering } from "@/data";
import { BenefitsImage } from "./benefitsImage/benefitsImage";

export const Benefits = () => {
  return (
    <div className="py-[5.8rem] bg  px-[3%] sm:px-0 max-w-[70.6rem] mx-auto">
      {onlineOrdering.map(({ id, image, order, title }) => (
        <div
          key={id}
          className="grid grid-cols-2 items-start  gap-x-20  mb-[5.5rem] justify-between"
        >
          <div
            className={`${id === 1 && "order-1"} ${id === 3 && "order-1"}`}
          >
            <h2 className="text-primary text-[15.6px] bg-primary/5 w-fit mb-4 font-medium py-1 px-[17px] rounded-lg">
              {title}
            </h2>
            <div className="text-2xl md:text-[2.3rem] font-medium leading-[1.6]">
              {"Designed to enhance the efficiency of your supply chain"}
            </div>
            <p className="max-w-[28.8rem] mt-[1.5rem] mb-[41px] md:mt-12 text-[18px] leading-[28.5px] font-normal text-gray-primary/50">
              {`Unleash the power of digital sales. Provide your customers with
            convenience. Unleash the power of digital sales. Provide your
            customers with convenience.`}
            </p>
          </div>
          <BenefitsImage image={image} />
        </div>
      ))}
    </div>
  );
};
