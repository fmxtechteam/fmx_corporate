import Image from "next/image";
import { Logistic1, Logistic2, Logistic3 } from "@/constant/imgs";

export const BenefitsImage = () => {
  return (
    <div className="relative -mt-7">
      <Image
        src={Logistic2}
        alt={"logistic-image"}
        className="w-[9rem] md:w-[12rem] absolute -top-5 right-0"
      />
      <Image
        src={Logistic1}
        alt={"logistic-image"}
        className="md:h-[333px] w-[556px]"
      />
      <Image
        src={Logistic3}
        alt={"logistic-image"}
        className="w-[9rem] md:w-[12rem] -bottom-5 absolute -left-5"
      />
    </div>
  );
};
