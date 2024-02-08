import { FeaturesIcon } from "@/assets/icons";
import { FeaturesCard } from "./featuresCard/featuresCard";

export const Features = () => {
  return (
    <section className="md:max-w-[70.6rem] text-center flex flex-col items-center my-6 font-sans pt-[4.8rem] mx-auto">
      <FeaturesIcon className={`w-[7.6rem]`} />
      <div
        className={`text-[36px] max-w-[34rem] leading-[55px] font-medium mt-4`}
      >
        Some awesome features you will enjoy with our solution
      </div>
      <div>
        <FeaturesCard />
      </div>
    </section>
  );
};
