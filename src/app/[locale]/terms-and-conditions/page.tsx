import { cookies, personalData, termsAndCondition } from "@/data";
import { Faqs, MainLayout, TermsAndConditionSection } from "@/components";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";

const namespaces = ['home', 'navbar', 'common', 'footer', 'aboutUs', 'faqs', 'point_of_sale', 'online_ordering', 'logistics'];
const TermsAndConditions = async ({ params: { locale } }: {
  params: {
    locale: string
  }
}) => {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces} >
      <MainLayout>
        <TermsAndConditionSection />
        <div className={"!max-w-[70.6rem] mx-auto pt-24"}>
          <Faqs
            asideContent={true}
            className="!-mt-[7.2rem] md:!-mt-[6.8rem]"
            titleClassName="hidden"
            descriptionClassName="hidden"
            asideClassName="md:!space-x-2"
            asideTitle="accountTerm"
            faqs={termsAndCondition}
          />
          <Faqs
            asideContent={true}
            asideTitle="personalData"
            className="!-mt-[7.2rem] md:!-mt-[6.8rem]"
            titleClassName="hidden"
            asideClassName="md:!space-x-4"
            descriptionClassName="hidden"
            faqs={personalData}
          />
          <Faqs
            asideContent={true}
            asideTitle="cookies"
            className="!-mt-[7.2rem] md:!-mt-[6.8rem]"
            titleClassName="hidden"
            asideClassName="md:!space-x-20"
            descriptionClassName="hidden"
            faqs={cookies}
          />
        </div>
      </MainLayout>
    </TranslationsProvider>
  );
};

export default TermsAndConditions;
