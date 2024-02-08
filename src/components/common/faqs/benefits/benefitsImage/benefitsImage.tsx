import Image, { StaticImageData } from "next/image";

export const BenefitsImage = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="">
      <Image
        src={image}
        alt={"online ordering image"}
        className="h-[313px] w-[556px]"
      />
    </div>
  );
};
