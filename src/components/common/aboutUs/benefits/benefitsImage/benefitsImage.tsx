import Image from "next/image";

export const BenefitsImage = () => {
  return (
    <Image
      src="https://res.cloudinary.com/mobinet/image/upload/v1726628921/WhatsApp_Image_2024-09-18_at_03.07.36_wafih4.jpg"
      alt="online ordering image"
      width={556} // set the original width of the image
      height={453} // set the original height of the image
      className="!w-full border border-[#F3FBF3] rounded-[32px] bg-[#F3FBF3] p-2 object-center"
    />
  );
};
