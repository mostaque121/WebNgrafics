import ResponseForm from "@/components/Manual/Form/ResponseForm";
import HeroSection from "@/components/Manual/Home/HeroSection";
export default function Home() {
  return (
    <div className="w-full pt-16">
      <div className="buble-blue-left"></div>
      <div className="buble-blue"></div>
      <div className="buble-red"></div>
      <div className=" pt-16 items-center flex-col md:flex-row flex w-full justify-between px-5 md:px-10 gap-8 max-w-7xl mx-auto">
        <HeroSection />
        <ResponseForm />
      </div>
    </div>
  );
}
