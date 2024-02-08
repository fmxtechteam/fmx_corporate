import { FeaturesIcon } from "@/assets/icons";
import { FeaturesCard } from "./featuresCard/featuresCard";

export const Features = () => {
  return (
    <section className="md:max-w-[70.6rem] md:text-center flex flex-col  px-[3%] sm:px-0  md:items-center my-1 md:my-6 font-sans pt-12 md:pt-[4.8rem] md:mx-auto">
      <FeaturesIcon className={`w-[6rem] md:w-[7.6rem]`} />
      <div
        className={`text-2xl leading-[36px] max-w-[19rem]  md:text-[36px] mt-[1.2rem]  md:max-w-[34rem] md:leading-[55px] font-medium md:mt-4`}
      >
        {" Some awesome features you will enjoy with our solution"}
      </div>
      <div>
        <FeaturesCard />
      </div>
    </section>
  );
};
