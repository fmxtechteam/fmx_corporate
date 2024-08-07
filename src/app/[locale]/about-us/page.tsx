import initTranslations from "@/app/i18n";
import {
  AboutUsComponent,
  AchievementsComponent,
  GetInTouchSection,
  MainLayout,
} from "@/components";
import TranslationsProvider from "@/components/TranslationsProvider";
import { ShowCaseAboutUs } from "@/components/common/aboutUs/showcase";
const namespaces = ["home", "navbar", "common", "footer", "aboutUs"];
const AboutUs = async ({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) => {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={namespaces}
    >
      <MainLayout>
        <main
          className={`bg-[url('/images/about-us-overlay.svg')] bg-cover bg-center py-6 w-full rounded-bl-[32px] `}
        >
          <ShowCaseAboutUs />
          <AchievementsComponent />
        </main>
        <AboutUsComponent />
        <GetInTouchSection />
      </MainLayout>
    </TranslationsProvider>
  );
};

export default AboutUs;
