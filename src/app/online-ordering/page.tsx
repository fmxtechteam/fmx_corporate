import { faqs } from "@/data";
import {
  Benefits,
  Faqs,
  GetInTouchSection,
  MainLayout,
  OnlineOrdering,
  Testimonials,
} from "@/components";

const OnlineOrderingScreen = () => {
  return (
    <MainLayout>
      <OnlineOrdering />
      <Benefits />
      <Testimonials />
      <Faqs faqs={faqs} />
      <GetInTouchSection />
    </MainLayout>
  );
};

export default OnlineOrderingScreen;
