import { Button } from "@/components";
import { serviceFeatures } from "@/data";
import Image from "next/image";

export const FeaturesCard = () => {
  return (
    <div className="md:mt-[5.5rem] mt-[4.4rem]">
      <div className="mb-[6.2rem] -mt-3 sm:px-0 max-w-[70.6rem] space-y-20 justify-between gap-8 ">
        {serviceFeatures.map(({ id, icon: Icon, title, image }) => (
          <div
            key={id}
            className="rounded-[24px] grid md:grid-cols-2 border mb-[6rem]  text-left md:shadow-[0px_4px_9px_0px_#0000001A] w-full "
          >
            <Image
              src={image}
              alt={"pos image"}
              className="max-h-[27rem] md:h-full lg:max-w-[33rem]"
            />
            <div className="px-6 py-7">
              <div className="mt-3">
                <Icon />
              </div>
              <h4 className="text-lg md:text-[26px] mt-6 font-medium leading-[1.6] mb-8">
                {title}
              </h4>
              <p className="md:mb-[8px]  text-[17px] leading-[28.5px] lg:mr-10 font-medium text-gray-primary/50">
                {`Unleash the power of digital sales. Provide your customers with
            convenience. Unleash the power of digital sales. Provide your
            customers with convenience.`}
              </p>
              <Button
                link={"/login"}
                title="Get Started Free"
                className="sm:!px-[2rem] mt-[42px] lg:!px-[4.4rem] !w-fit !py-[.9rem] !text-[16px] md:!rounded-[16px] !px-[2rem] !container !flex-grow"
                icon={true}
                iconClassName="!text-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
