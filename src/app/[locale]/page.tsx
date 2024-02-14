import { faqs } from "@/data";
import {
  AboutUs,
  Faqs,
  GetInTouchSection,
  MainLayout,
  OurServices,
  SaleSolution,
  Showcase,
  Skyrocket,
  SuccessStory,
  Testimonials,
  VideoSection,
} from "@/components";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";
import async from './page';

const namespaces = ['home', 'navbar'];
const Home = async ({ params: { locale } }: {
  params: {
    locale: string
  }
}) => {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces} >
      <MainLayout>
        <Showcase />
        <SuccessStory />
        <AboutUs />
        <Skyrocket />
        <OurServices />
        <SaleSolution />
        <VideoSection />
        <Faqs faqs={faqs} />
        {/* <Testimonials /> */}
        <GetInTouchSection />
      </MainLayout>
    </TranslationsProvider>
  );
}
export default Home;