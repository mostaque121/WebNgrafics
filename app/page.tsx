import ContactForm from "@/components/Manual/Form/ContactForm";
import ResponseForm from "@/components/Manual/Form/ResponseForm";
import HeroSection from "@/components/Manual/Home/HeroSection";
import ServiceWeProvide from "@/components/Manual/Home/ServiceWeProvide";
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

      <ServiceWeProvide />
      <ContactForm />
    </div>
  );
}
