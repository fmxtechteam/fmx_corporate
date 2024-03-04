import { faqs, pricing } from "@/data";
import { Faqs, FaqsSection, GetInTouchSection, MainLayout } from "@/components";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
const namespaces = ['home', 'navbar', 'common', 'footer', 'aboutUs', 'faqs'];

const FaqsPage = async ({ params: { locale } }: {
  params: {
    locale: string
  }
}) => {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces} >
      <MainLayout>
        <FaqsSection />
        <div className={"!max-w-[70.6rem] mx-auto mt-20"}>
          <Faqs
            asideContent={true}
            className="!-mt-[7.2rem] md:!-mt-[6.7rem]"
            titleClassName="hidden"
            descriptionClassName="hidden"
            faqs={faqs}
          />
          {/* <Faqs
            asideContent={true}
            asideTitle="Pricing"
            className="!-mt-[6.9rem]"
            titleClassName="hidden"
            descriptionClassName="hidden"
            faqs={pricing}
          /> */}
        </div>
        <div className="-mt-[2.9rem]">
          <GetInTouchSection />
        </div>
      </MainLayout>
    </TranslationsProvider>
  );
};

export default FaqsPage;
