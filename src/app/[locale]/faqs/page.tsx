import { faqs, pricing } from "@/data";
import { Faqs, FaqsSection, GetInTouchSection, MainLayout } from "@/components";

const PointOfSale = () => {
  return (
    <MainLayout>
      <FaqsSection />
      <div className={"!max-w-[70.6rem] mx-auto"}>
        <Faqs
          asideContent={true}
          className="!-mt-[7.2rem] md:!-mt-[6.7rem]"
          titleClassName="hidden"
          descriptionClassName="hidden"
          faqs={faqs}
        />
        <Faqs
          asideContent={true}
          asideTitle="Pricing"
          className="!-mt-[6.9rem]"
          titleClassName="hidden"
          descriptionClassName="hidden"
          faqs={pricing}
        />
      </div>
      <div className="-mt-[2.9rem]">
        <GetInTouchSection />
      </div>
    </MainLayout>
  );
};

export default PointOfSale;
