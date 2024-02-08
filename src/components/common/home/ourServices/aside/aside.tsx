import { Rating } from "@/components";

export const Aside = () => {
  return (
    <aside className="text-white">
      <div className="text-2xl md:text-[2.3rem] font-medium leading-[1.6]">
        <h2 className="text-[13px] -mt-5 md:-mt-0 md:text-[14.8px] font-medium">
          {"OUR SERVICES"}
        </h2>
        <div className="my-2">
          {"How we support sellers at the  wholesale markets"}
        </div>

        <div className="text-lg leading-[28.5px] md:text-[16px] md:leading-[29px] text-gray/60 max-w-[32rem] mt-5 md:mt-[3.6rem] md:mb-[4.2rem]">
          {`We are committed to elevating the wholesale food industry through comprehensive solutions, forging a path towards efficiency, innovation, and unparalleled success.`}
        </div>
      </div>
      <div className="md:flex space-x-[4.8rem] pt-[4rem] hidden">
        <Rating
          countries="Productivity"
          containerClassName="!space-y-6"
          countriesClassName="text-gray/60"
        />
        <Rating
          countries="Efficiency"
          containerClassName="!space-y-6"
          countriesClassName="text-gray/60"
        />
      </div>
    </aside>
  );
};
