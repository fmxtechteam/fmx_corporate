
import { MainLayout } from "@/components";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import { CommercialDisclosureHeader } from "@/components/common/commercialDisclosure/CommercialDisclosureHeader";
import {CommercialDisclosureBody} from '@/components/common/commercialDisclosure'
const namespaces = ['home', 'navbar', 'common', 'footer', 'aboutUs', 'faqs', 'point_of_sale', 'online_ordering', 'logistics', 'privacy_policy', 'terms_conditions', 'commercial_disclosure'];
const CommercialDisclosure = async ({ params: { locale } }: {
  params: {
    locale: string
  }
}) => {
  const { t, resources } = await initTranslations(locale, namespaces);

  const termsAndConditionLists = [
    {
      text: 'sectionOne',
      content: "sectionOneContentOne",
    },
    {
      text: 'sectionTwo',
      content: "sectionTwoContentOne",
    },
    {
      text: 'sectionThree',
      content: "sectionThreeContentOne",
    },
    {
      text: 'sectionFour',
      content: "sectionFourContentOne",
    },
    {
      text: 'sectionFive',
      content: "sectionFiveContentOne",
      subContent1: "sectionFiveContentTwo",
    },
    {
      text: 'sectionSix',
      content: "sectionSixContentOne",
    },
    {
      text: "sectionSeven",
      content: "sectionSevenContentOne",
    },
    {
      text: "sectionEight",
      content: "sectionEightContentOne",

    },
    {
      text: "sectionNine",
      content: "sectionNineContentOne",
    },
  ]

  const lists = ["point_of_sales", "online_ordering", "logistics"]
  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces} >
      <MainLayout>
        <CommercialDisclosureHeader />

        <section className="!max-w-[70.6rem] mx-auto py-20 px-2">
          <div>
            <h1 className='text-sm xl:text-xl  font-bold text-black'>{`${t(`commercial_disclosure:title`)}`}</h1>
            <ul className="grid gap-3 mt-4">
              {
                lists?.map((item, index) => (
                  <li key={`list-${index}`} className='text-sm xl:text-base text-black uppercase'>{`${t(`navbar:${item}`)}`}</li>
                ))
              }
            </ul>
          </div>
          {
            termsAndConditionLists.map((item, index) => (
              <CommercialDisclosureBody
                key={`termsAndCondition-${index}`}
                {...item}
              />
            ))
          }
        </section>
      </MainLayout>
    </TranslationsProvider>
  );
};

export default CommercialDisclosure;
