import { faqs } from "@/data";
import {
  Faqs,
  GetInTouchSection,
  LogisticsComponent,
  MainLayout,
  Testimonials,
} from "@/components";

const Logistics = () => {
  return (
    <MainLayout>
      <LogisticsComponent />
      {/* <Testimonials /> */}
      <Faqs faqs={faqs} className="!pt-[6.5rem]" />
      <GetInTouchSection />
    </MainLayout>
  );
};

export default Logistics;
