import { dataCollection, privacyCookies, termsAndCondition } from "@/data";
import { Faqs, MainLayout, PrivacyPolicyComponent } from "@/components";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
const namespaces = [
  "home",
  "navbar",
  "common",
  "footer",
  "aboutUs",
  "faqs",
  "point_of_sale",
  "online_ordering",
  "logistics",
  "privacy_policy",
];
const PrivatePolicy = async ({
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
        <PrivacyPolicyComponent />
        <div className={"lg:!max-w-[70.6rem] mx-auto pt-24"}>
          <Faqs
            asideContent={false}
            className="!-mt-[7.2rem] md:!-mt-[6.8rem]"
            titleClassName="hidden"
            descriptionClassName="hidden"
            asideClassName="md:!space-x-10"
            asideTitle="yourConsent"
            faqs={termsAndCondition}
          />
        </div>
      </MainLayout>
    </TranslationsProvider>
  );
};

export default PrivatePolicy;
