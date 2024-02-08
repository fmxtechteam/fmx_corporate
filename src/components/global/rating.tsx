import { Star } from "@/assets/icons";

export const Rating = ({
  countries = "Australia",
  countriesClassName,
  containerClassName,
  iconClassName,
  ratingClassName,
}: {
  countries?: string;
  countriesClassName?: string;
  containerClassName?: string;
  iconClassName?: string;
  ratingClassName?: string;
}) => {
  return (
    <div className={` ${containerClassName} grid space-y-4`}>
      <div className="flex items-end mb-[2px]  space-x-[2.5px]">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            className={`w-[25px] h-[25px] md:w-[25px] md:h-[25px] cursor-pointer ${iconClassName}`}
            key={index}
          />
        ))}
      </div>
      <div>
        <div
          className={` ${ratingClassName} text-base md:text-base font-bold tracking-wide md:-mt-2`}
        >
          4.9 / 5 rating
        </div>
        <div
          className={`text-sm md:text-base leading-[31px] font-bold text-gray-primary/50 mt-2 md:mt-2.5 ${countriesClassName}`}
        >
          {countries}
        </div>
      </div>
    </div>
  );
};
