import { Faq } from "@/components/Manual/Faq";
import ContactForm from "@/components/Manual/Form/ContactForm";
import ResponseForm from "@/components/Manual/Form/ResponseForm";
import HeroSection from "@/components/Manual/Home/HeroSection";
import Services from "@/components/Manual/Home/Services";
import ServiceWeProvide from "@/components/Manual/Home/ServiceWeProvide";
import HowWeDifferent from "@/components/Manual/HowWeDifferent";
import HowWeHelp from "@/components/Manual/HowWeHelp";
import HowWeWorks from "@/components/Manual/HowWeWork";
import StillNotSure from "@/components/Manual/StillNotSure";
export default function Home() {
  return (
    <div className="w-full  max-w-7xl mx-auto pt-16 relative">
      <div className="buble-blue-left"></div>
      <div className="buble-blue"></div>
      <div className="buble-red"></div>
      <div>
        <div className=" pt-16 pb-10 items-center flex-col md:flex-row flex w-full justify-between px-5 md:px-16 gap-8">
          <HeroSection />
          <ResponseForm />
        </div>
      </div>
      <Services />

      <ServiceWeProvide />
      <HowWeDifferent />
      <HowWeHelp />
      <HowWeWorks />
      <Faq />
      <StillNotSure />
      <ContactForm />
    </div>
  );
}
