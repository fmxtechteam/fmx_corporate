'use client'
import { Benefits } from "./benefits/benefits";
import { OurTeam } from "./ourTeam/ourTeam";
import { WhyChooseFmx } from "./whyChooseFmx/whyChooseFmx";

export const AboutUsComponent = () => {
  return (
    <div className={"-mt-4"}>
      <Benefits />
      <WhyChooseFmx />
      <OurTeam />
    </div>
  );
};
