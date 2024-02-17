import initTranslations from "@/app/i18n";
import { ContactUs, MainLayout } from "@/components";
import TranslationsProvider from "@/components/TranslationsProvider";
const namespaces = ['home', 'navbar', 'common', 'footer', 'aboutUs', 'contactUs'];
const ContactUS = async ({ params: { locale } }: {
  params: {
    locale: string
  }
}) => {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces} >
      <MainLayout>
        <ContactUs />
      </MainLayout>
    </TranslationsProvider>
  );
};

export default ContactUS;
