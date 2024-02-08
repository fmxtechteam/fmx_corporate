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
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <MainLayout>
        <Showcase />
        <SuccessStory />
        <AboutUs />
        <Skyrocket />
        <OurServices />
        <SaleSolution />
        <VideoSection />
        <Faqs faqs={faqs} />
        <Testimonials />
        <GetInTouchSection />
      </MainLayout>
    </RootLayout>
  );
}
