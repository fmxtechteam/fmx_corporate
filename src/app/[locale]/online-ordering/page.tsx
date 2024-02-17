import { faqs } from "@/data";
import {
  Benefits,
  Faqs,
  GetInTouchSection,
  MainLayout,
  OnlineOrdering,
  Testimonials,
} from "@/components";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
const namespaces = ['home', 'navbar', 'common', 'footer', 'aboutUs', 'faqs', 'point_of_sale', 'online_ordering'];
const OnlineOrderingScreen = async ({ params: { locale } }: {
  params: {
    locale: string
  }
}) => {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces} >
      <MainLayout>
        <OnlineOrdering />
        <Benefits />
        {/* <Testimonials /> */}
        <Faqs faqs={faqs} />
        <GetInTouchSection />
      </MainLayout>
    </TranslationsProvider>
  );
};

export default OnlineOrderingScreen;
