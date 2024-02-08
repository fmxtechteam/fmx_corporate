import { ourMission } from "@/constant/imgs";
import Image from "next/image";

export const BenefitsImage = () => {
  return (
    <Image
      src={ourMission}
      alt={"online ordering image"}
      className="h-[350px] w-full md:h-[453px] md:w-[556px]"
    />
  );
};
