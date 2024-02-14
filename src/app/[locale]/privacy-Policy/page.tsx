import { dataCollection, privacyCookies, termsAndCondition } from "@/data";
import { Faqs, MainLayout, PrivacyPolicyComponent } from "@/components";

const PrivatePolicy = () => {
  return (
    <MainLayout>
      <PrivacyPolicyComponent />
      <div className={"lg:!max-w-[70.6rem] mx-auto pt-24"}>
        <Faqs
          asideContent={true}
          className="!-mt-[7.2rem] md:!-mt-[6.8rem]"
          titleClassName="hidden"
          descriptionClassName="hidden"
          asideClassName="md:!space-x-10"
          asideTitle="Your consent"
          faqs={termsAndCondition}
        />
        <Faqs
          asideContent={true}
          asideTitle="Data collection"
          className="!-mt-[7.2rem] md:!-mt-[6.8rem]"
          titleClassName="hidden"
          asideClassName="md:!space-x-4"
          descriptionClassName="hidden"
          faqs={dataCollection}
        />
        <Faqs
          asideContent={true}
          asideTitle="Cookies"
          className="!-mt-[7.2rem] hidden md:!flex md:!-mt-[6.8rem]"
          titleClassName="hidden"
          asideClassName="md:!space-x-[6.2rem]"
          descriptionClassName="hidden"
          faqs={privacyCookies}
        />
      </div>
    </MainLayout>
  );
};

export default PrivatePolicy;
