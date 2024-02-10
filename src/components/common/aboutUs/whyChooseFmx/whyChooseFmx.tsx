import { aboutUs } from "@/data";

export const WhyChooseFmx = () => {
  return (
    <div className="sm:px-0 px-[3%] max-w-[70.6rem] mx-auto -mt-[5rem] md:-mt-[2.8rem]">
      <div className="flex flex-col text-lg md:text-[15.7px] items-center font-medium w-full mb-6">
        <h3>WHY CHOOSE FMX</h3>
        <div
          className={`text-3xl max-w-sm md:text-[36px] md:max-w-[34rem] text-center md:leading-[55px] font-medium mt-4 md:mt-2`}
        >
          Experience ease in trading with support and technology
        </div>
      </div>
      <div>
        <div className=" mb-[6.2rem] pt-6 md:pt-10 grid md:grid-cols-2 justify-between gap-x-10 lg:gap-x-20 gap-y-[3.4rem] md:gap-y-[3.3rem]">
          {aboutUs.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="rounded-[16px] md:rounded-[32px] bg-secondary text-white   border md:shadow-[0px_4px_9px_0px_#0000001A] w-fit md:pt-[4.7rem] md:pb-[3.7rem] p-8 md:px-[4.4rem]"
            >
              <div className="mb-4 md:-mt-1 md:pb-1">
                <Icon className="w-14 md:w-14" />
              </div>
              <h1 className="font-medium py-2  md:py-[3px] text-lg md:text-[26px] mt-6 mb-3">
                {title}
              </h1>
              <p className="text-[17px] pb-4 md:pb-0 md:pt-[3px] md:text-[16.5px] leading-[28.5px] font-normal text-gray/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
