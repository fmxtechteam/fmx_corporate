import { Button } from "@/components";
import { BenefitsImage } from "./benefitsImage/benefitsImage";

export const Benefits = () => {
  return (
    <div className="py-[5.8rem] -mt-5  px-[3%] sm:px-0 md:mt-12 max-w-[70.6rem] mx-auto">
      <div className="grid md:grid-cols-2 items-start  gap-x-20 mb-[5.5rem]  justify-between">
        <div className={`!order-[1]`}>
          <h2 className="text-primary text-[15px] md:text-[15.6px] mt-10 bg-primary/5 w-fit mb-4 font-medium  md:mt-8 py-1 px-[17px] rounded-[4px] md:rounded-lg">
            OUR MISSION
          </h2>
          <div className="text-2xl md:text-[2.3rem] font-medium leading-[1.6]">
            {"We make trading easier at the Centralized Wholesale Market"}
          </div>
          <p className="max-w-[32.8rem] mt-[1.5rem] mb-[41px] md:mt-11 md:mb-14 md:text-[#A6A6A6] md:mb-10 text-[18px] leading-[28.5px] font-normal text-gray-primary/50">
            {`We are committed to elevating the epping wholesale market through comprehensive solutions, forging a path towards efficiency, innovation, and unparalleled success.`}
          </p>
          <Button
            link={"/login"}
            title="Get Started Free"
            className="sm:!px-[2rem] !bg-primary hover:!bg-primary/75 mt-[42px] lg:!px-[4.4rem] !w-fit lg:!py-[.9rem] text-[15px] md:!text-[16px] !rounded-[7.9px] md:!rounded-[16px] !px-[2.3rem] !py-[12px] !container !flex-grow"
            icon={true}
            iconClassName="!text-2xl"
          />
        </div>
        <BenefitsImage />
      </div>
    </div>
  );
};
