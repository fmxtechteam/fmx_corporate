import Image from "next/image";

import { Button } from "@/components";
import { getInTouchBanner } from "@/constant/imgs";

export const GetInTouchSection = () => {
  return (
    <section className="flex justify-center w-full text-center relative  max-w-[70.6rem] mx-auto mt-[7.5rem] mb-[5.8rem] text-white px-[3%] sm:px-4">
      <Image
        src={getInTouchBanner}
        className="h-[30rem] md:h-[27.7rem] rounded-[10px] md:rounded-[32px]"
        alt={"video playback"}
      />
      <div className="md:text-[2.3rem] text-[1.9rem] max-w-[20rem] md:max-w-none font-medium leading-[1.6] pt-[5rem] md:pt-14 space-y-10 absolute h-full -top-10 w-full flex items-center justify-center flex-col">
        <div className="-mb-6">{"We are more than willing to serve you!"}</div>
        <p className="text-[17px] md:text-[16.5px] leading-[40px] md:leading-[29px] text-gray/60 max-w-[22rem] md:max-w-[26rem] px-6 md:px-0 pt-3 md:pt-0 w-[24rem]">{`Don’t hesitate to reach out to us. We are eager to help you the best way we can.`}</p>
        <Button
          link={"/login"}
          title="Get in Touch"
          className="!px-[6rem] md:!px-[5rem] !rounded-[7.9px] mt-[24px] mb-2 md:mb-0 transition-all !normal-case !w-max !mx-auto md:mt-1 hover:gap-x-[2px] !text-[16px] !py-[14.5px] !container md:!rounded-[16px] !flex-grow"
          iconClassName="hover:!pl-1"
          icon={true}
        />
      </div>
    </section>
  );
};
