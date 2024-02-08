import { cookies, personalData, termsAndCondition } from "@/data";
import { Faqs, MainLayout, TermsAndConditionSection } from "@/components";

const TermsAndConditions = () => {
  return (
    <MainLayout>
      <TermsAndConditionSection />
      <div className={"!max-w-[70.6rem] mx-auto pt-24"}>
        <Faqs
          asideContent={true}
          className="!-mt-[7.2rem] md:!-mt-[6.8rem]"
          titleClassName="hidden"
          descriptionClassName="hidden"
          asideClassName="md:!space-x-2"
          asideTitle="Account terms"
          faqs={termsAndCondition}
        />
        <Faqs
          asideContent={true}
          asideTitle="Personal data"
          className="!-mt-[7.2rem] md:!-mt-[6.8rem]"
          titleClassName="hidden"
          asideClassName="md:!space-x-4"
          descriptionClassName="hidden"
          faqs={personalData}
        />
        <Faqs
          asideContent={true}
          asideTitle="Cookies"
          className="!-mt-[7.2rem] md:!-mt-[6.8rem]"
          titleClassName="hidden"
          asideClassName="md:!space-x-20"
          descriptionClassName="hidden"
          faqs={cookies}
        />
      </div>
    </MainLayout>
  );
};

export default TermsAndConditions;
