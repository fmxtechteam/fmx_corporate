import { AboutUsIcon } from "@/assets/icons";
import {
  AboutUsComponent,
  AchievementsComponent,
  GetInTouchSection,
  MainLayout,
  ShowcaseBanner,
} from "@/components";

const AboutUs = () => {
  return (
    <MainLayout>
      <div className="z-20 -mt-6 md:-mt-0 w-full  relative bg-[url('/images/logistics-banner.png')] md:rounded-b-[36px]">
        <div className="h-full bg-cover w-full md:h-auto">
          <ShowcaseBanner
            title={"We make Produce Trading easier"}
            className="!max-w-[20rem] md:!max-w-[33rem] -mt-0 md:-mt-0 leading-[50px]"
            icon={AboutUsIcon}
            iconClassName="w-[9rem] md:!w-[8rem]"
            pos={false}
            aboutUs={true}
            aboutUsImg={true}
            bg=""
            containerClassName="!overflow-hidden xl:h-[55.3rem] h-[44.5rem]"
            descriptionClassName="!max-w-[20rem] mt-8 md:mt-10 md:!max-w-[26rem]"
            buttonClassName="md:!py-[16.5px]"
          />
        </div>
        <div className=" px-[3%] w-full -mt-20  sm:px-0 md:mt-80 items-center max-w-[70.6rem] mx-auto">
          <AchievementsComponent />
        </div>
      </div>
      <AboutUsComponent />
      <GetInTouchSection />
    </MainLayout>
  );
};

export default AboutUs;
