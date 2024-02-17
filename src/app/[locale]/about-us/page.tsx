import initTranslations from "@/app/i18n";
import {
  AboutUsComponent,
  AchievementsComponent,
  GetInTouchSection,
  MainLayout,
} from "@/components";
import TranslationsProvider from "@/components/TranslationsProvider";
import { ShowCaseAboutUs } from "@/components/common/aboutUs/showcase";
const namespaces = ['home', 'navbar', 'common', 'footer', 'aboutUs'];
const AboutUs = async ({ params: { locale } }: {
  params: {
    locale: string
  }
}) => {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces} >
      <MainLayout>
        <div className="z-20 -mt-6 md:-mt-0 w-full  relative bg-[url('/images/logistics-banner.png')] md:rounded-b-[36px]">
          <ShowCaseAboutUs />
          <div className=" px-[3%] w-full -mt-20  sm:px-0 md:mt-80 items-center max-w-[70.6rem] mx-auto">
            <AchievementsComponent />
          </div>
        </div>
        <AboutUsComponent />
        <GetInTouchSection />
      </MainLayout>
    </TranslationsProvider>
  );
};

export default AboutUs;
