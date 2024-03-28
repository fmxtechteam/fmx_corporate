
import { MainLayout, TermsAndConditionSection } from "@/components";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import Content from "@/components/common/termsAndCondition/Content";
import { TermsAndConditionBody } from "@/components/common/termsAndCondition";
import { termsAndCondition } from '../../../data/termsAndCondition';
import { text } from "stream/consumers";

const namespaces = ['home', 'navbar', 'common', 'footer', 'aboutUs', 'faqs', 'point_of_sale', 'online_ordering', 'logistics', 'privacy_policy', 'terms_conditions'];
const TermsAndConditions = async ({ params: { locale } }: {
  params: {
    locale: string
  }
}) => {
  const { t, resources } = await initTranslations(locale, namespaces);

  const termsAndConditionLists = [
    {
      text: 'title1',
      content: "content",
      subContent1: "subContentOne",
      subContent2: "subContentTwo",
      subContent3: "subContentThree"
    },
    {
      text: 'sectionOne',
      content: "sectionOneContentOne",
      subContent1: "sectionOneContentTwo",
      subContent2: "sectionOneContentThree"
    },
    {
      text: 'sectionTwo',
      content: "sectionTwoContentOne",
      subContent1: "sectionTwoContentTwo",
      subContent2: "sectionTwoContentThree",
      subContent3: "sectionTwoContentFour"
    },
    {
      text: 'sectionThree',
      content: "sectionThreeContentOne",
      subContent1: "sectionThreeContentTwo"
    },
    {
      text: 'sectionFour',
      content: "sectionFourContentOne",
      subContent1: "sectionFourContentTwo",
      subContent2: "sectionFourContentThree"
    },
    {
      text: 'sectionFive',
      content: "sectionFiveContentOne",
      subContent1: "sectionFiveContentTwo",
      subContent2: "sectionFiveContentThree",
      subContent3: "sectionFiveContentFour"
    },
    {
      text: 'sectionSix',
      content: "sectionSixContentOne",
      subContent1: "sectionSixContentTwo",
      subContent2: "sectionSixContentThree",
    },
    {
      text: "sectionSeven",
      content: "sectionSevenContentOne",
      subContent1: "sectionSevenContentTwo"
    },
    {
      text: "sectionEight",
      content: "sectionEightContentOne",
      subContent1: "sectionEightContentTwo",
      subContent2: "sectionEightConteentThree",

    },
    {
      text: "sectionNine",
      content: "sectionNineContentOne",
      subContent1: "sectionNineContentTwo",
      subContent2: "sectionNineContentThree",
    },
    {
      text: "sectionTen",
      content: "sectionTenContentOne",
    },
    {
      text: "sectionEleven",
      content: "sectionElevenContentOne",
      subContent1: "sectionElevenContentTwo",
    },
    {
      text: "sectionTwelve",
      content: "sectionTwelveContentOne",
    },
    {
      text: "sectionThirteen",
      content: "sectionThirteenContentOne",
      subContent1: "sectionThirteenContentTwo",
      subContent2: "sectionThirteenContentThree",
      subContent3: "sectionThirteenContentFour",
      subContent4: "sectionThirteenContentFive",
    },
    {
      text: "sectionFourteen",
      content: "sectionFourteenContentOne",
    },
    {
      text: "sectionFifteen",
      content: "sectionFifteenContentOne",
    },
    {
      text: "sectionSixteen",
      content: "sectionSixteenContentOne",
      subContent1: "sectionSixteenContentTwo",
      subContent2: "sectionSixteenContentThree",
    },
    {
      text: "sectionSeventeen",
      content: "sectionSeventeenContentOne",
      subContent1: "sectionSeventeenContentTwo",
      subContent2: "sectionSeventeenContentThree",
    },
    {
      text: "sectionEighteen",
      content: "sectionEighteenContentOne",
    },
    {
      text: "sectionNineteen",
      content: "sectionNineteenContentOne",
      subContent1: "sectionNineteenContentTwo",
    },
    {
      text: "sectionTwenty",
      content: "sectionTwentyContentOne",

    }
  ]
  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces} >
      <MainLayout>
        <TermsAndConditionSection />
        <section className="!max-w-[70.6rem] mx-auto py-20 px-2">
          {
            termsAndConditionLists.map((item, index) => (
              <TermsAndConditionBody
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

export default TermsAndConditions;
