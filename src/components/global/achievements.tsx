import { achievements } from "@/data";

export const Achievements = () => {
  return (
    <section className="bg-secondary z-40">
      <div className="text-white py-[4.4rem] md:pb-[3.8rem] md:pt-[6.9rem] -mt-3 w-full grid grid-cols-2 gap-14 md:flex md:max-w-[70.6rem] mx-auto px-[3%] sm:px-0 justify-center  md:justify-between">
        {achievements.map(({ id, count, description }) => (
          <div className="text-center flex flex-col items-center" key={id}>
            <h1 className="text-2xl md:text-[3.2rem] mb-2 md:mb-7 font-medium">
              {count}
            </h1>
            <p className="text-sm md:text-[15px] pt-3 md:pt-6 font-medium capitalize">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
