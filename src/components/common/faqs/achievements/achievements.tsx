import { achievements } from "@/data";

export const Achievements = () => {
  return (
    <section className="bg-secondary z-40">
      <section className=" text-white pb-[3.8rem] pt-[5.5rem] -mt-3  w-full flex max-w-[70.6rem] mx-auto px-[3%] sm:px-0  justify-between">
        {achievements.map(({ id, count, description }) => (
          <div className="text-center" key={id}>
            <h1 className="text-[3.2rem] mb-7 font-medium">{count}</h1>
            <p className="text-[15px] font-medium capitalize">{description}</p>
          </div>
        ))}
      </section>
    </section>
  );
};
