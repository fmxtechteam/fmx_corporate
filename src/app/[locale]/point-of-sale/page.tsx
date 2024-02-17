import { faqs } from "@/data";
import {
  Faqs,
  Features,
  GetInTouchSection,
  MainLayout,
  Pos,
  Testimonials,
} from "@/components";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
const namespaces = ['home', 'navbar', 'common', 'footer', 'aboutUs', 'faqs', 'point_of_sale'];
const PointOfSale = async ({ params: { locale } }: {
  params: {
    locale: string
  }
}) => {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces} >
      <MainLayout>
        <Pos />
        <Features />
        {/* <Testimonials className="!mb-20" /> */}
        <Faqs faqs={faqs} className="!pt-20" />
        <GetInTouchSection />
      </MainLayout>
    </TranslationsProvider>
  );
};

export default PointOfSale;
