import { faqs } from "@/data";
import {
  Faqs,
  GetInTouchSection,
  LogisticsComponent,
  MainLayout,
  Testimonials,
} from "@/components";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
const namespaces = ['home', 'navbar', 'common', 'footer', 'aboutUs', 'faqs', 'point_of_sale', 'online_ordering', 'logistics'];
const Logistics = async ({ params: { locale } }: {
  params: {
    locale: string
  }
}) => {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces} >
      <MainLayout>
        <LogisticsComponent />
        {/* <Testimonials /> */}
        <Faqs faqs={faqs} className="!pt-[6.5rem]" />
        <GetInTouchSection />
      </MainLayout>
    </TranslationsProvider>
  );
};

export default Logistics;
