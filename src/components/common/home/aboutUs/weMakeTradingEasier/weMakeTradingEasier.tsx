import { Underline } from "@/assets/icons";
import { Button, Rating } from "@/components";

export const WeMakeTradingEasier = () => {
  return (
    <div className="mt-[4.2rem] ">
      <h2 className="text-[15px] md:text-base font-medium">{`ABOUT US`}</h2>
      <h1 className="text-2xl max-w-[28.8rem] md:max-w-none leading-[40px] md:text-[36px] md:leading-[60px] my-2 font-medium">
        We make trading{" "}
        <div className="relative inline-flex">
          easier
          <Underline className="w-20 h-20 md:h-auto md:w-auto absolute -bottom-9 md:-bottom-1 left-0" />
        </div>{" "}
        at the Centralized Wholesale Market
      </h1>
      <p className="max-w-[28.8rem] mt-[1.5rem] mb-[41px] md:mt-10 text-[16.2px] leading-[28.5px] font-medium text-gray-primary/50">
        {`We are committed to elevating the traditional centralized wholesale
        market through comprehensive solutions, forging a path towards
        efficiency, innovation, and unparalleled success.`}
      </p>
      <div className="pt-[22px] hidden md:block md:pb-10">
        <Button
          link={"/about-us"}
          title="Learn more"
          className="!pl-[92px] !pr-[78px] md:!pl-[92px] md:!pr-[78px] !w-fit !text-base !py-[11.5px] !normal-case !container !rounded-[16px] !font-semibold !border !bg-transparent !border-primary !text-primary hover:!text-white hover:!bg-primary !flex-grow"
          icon={true}
        />
      </div>
    </div>
  );
};
