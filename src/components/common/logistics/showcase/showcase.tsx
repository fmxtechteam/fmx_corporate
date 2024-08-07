import { LogisticsBadge } from "@/assets/icons";
import { Button } from "@/components";

export const ShowcaseComponent = () => {
  return (
    <main className="z-40 bg-[url('/images/logistics-banner.png')] px-[3%] sm:px-4 md:px-0 bg-no-repeat  bg-cover w-full   pb-2 rounded-b-[32px]">
      <section className="md:max-w-[70.6rem] text-center flex flex-col items-center font-sans pt-[4.8rem] mx-auto">
        <LogisticsBadge className="w-[6.9rem]" />
        <div className="text-[52px] max-w-[33rem] leading-[80px] font-medium mt-2">
          {"Transporting Produce Made easier "}
        </div>
        <p className="max-w-[26rem] mt-[2.47rem] text-[16.2px] leading-[28px] text-dark/50 font-medium">
          {`Buying and selling produce at the epping wholesale market made easier,
          we’ve got all your needs covered.`}
        </p>
        <div className="flex items-center justify-center mb-16 mt-[3.8rem]">
          <Button
            link={"https://pos.freshmarketxchange.co/"}
            title="Get Started Free"
            className="sm:!px-[2rem] lg:!px-[4.4rem] lg:!py-[.9rem] !text-[16px] !rounded-[16px] !px-[2rem] !py-[7px] !container !flex-grow"
            icon={true}
            iconClassName="!text-2xl"
          />
          <Button
            link={"/contact-us"}
            title="Talk to Support"
            className="!bg-transparent !normal-case !text-[16px] !py-[7px]  !text-primary underline"
          />
        </div>
      </section>
    </main>
  );
};
