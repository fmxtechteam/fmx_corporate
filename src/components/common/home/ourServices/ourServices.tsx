import { ourService } from "@/data";
import { Aside } from "./aside/aside";
import { Rating } from "@/components";

export const OurServices = () => {
  return (
    <main className="bg-[url('/images/our-service-banner.png')] bg-no-repeat mb-40 bg-cover w-full  h-full md:h-[45rem] -mt-56 md:-mt-[18.9rem]">
      <section className="grid md:space-x-4 md:grid-cols-2 justify-between max-w-[72.5rem] mx-auto font-sans pt-[5.4rem] px-[3%] sm:px-4">
        <div>
          <Aside />
        </div>
        <div className="flex flex-col space-y-[30px] md:space-y-[53px]  my-[30px]">
          {ourService.map(({ id, title, description, icon: Icon }) => (
            <div key={id} className="flex items-start space-x-[10px] md:max-w-[33rem]">
              <Icon className="w-[6rem] h-[6rem]" />
              <div className="md:pt-2 pt-6">
                <h4 className="text-xl md:text-[26px] font-medium leading-[1.6] mb-2 text-white">
                  {title}
                </h4>
                <p className="text-base pt-2 md:pt-0 leading-[28.5px] md:text-[16.2px] md:leading-[31px] font-medium text-gray/60  max-w-[37rem]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden space-x-10 md:space-x-[4.8rem] pt-[4rem] flex pb-16 md:pb-0">
          <Rating
            countries="Productivity"
            iconClassName="!w-[20px] !h-[18px] "
            containerClassName="!space-y-3 !text-white !text-xs"
            countriesClassName="text-gray/60 !text-xs"
            ratingClassName="!text-[15px]"
          />
          <Rating
            countries="Efficiency"
            iconClassName="!w-[20px] !h-[18px] "
            containerClassName="!space-y-3 !text-white !text-xs"
            countriesClassName="text-gray/60 !text-xs"
            ratingClassName="!text-[15px]"
          />
        </div>
      </section>
    </main>
  );
};
