import { market9, ourMission } from "@/constant/imgs";
import Image from "next/image";

export const BenefitsImage = () => {
  return (
    <Image
      src={
        "https://res.cloudinary.com/mobinet/image/upload/v1726495777/nick_mfetgi.jpg"
      }
      height={350}
      width={350}
      alt={"online ordering image"}
      className="h-[350px] w-full md:h-[453px] md:w-[556px] border border-[#F3FBF3] rounded-[32px] bg-[#F3FBF3] p-3  object-center"
    />
  );
};
