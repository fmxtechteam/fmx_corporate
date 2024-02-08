import { faqs } from "@/data";
import {
  Faqs,
  Features,
  GetInTouchSection,
  MainLayout,
  Pos,
  Testimonials,
} from "@/components";

const PointOfSale = () => {
  return (
    <MainLayout>
      <Pos />
      <Features />
      <Testimonials className="!mb-20" />
      <Faqs faqs={faqs} className="!pt-20" />
      <GetInTouchSection />
    </MainLayout>
  );
};

export default PointOfSale;
