import { SquareArrowOutUpRight } from "lucide-react";
const HeroSection = () => {
    return (
        <div className="relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-4xl mx-auto">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
                    We Design. We Develop. We Market.
                </h1>
                <p className="text-Ttext mt-6 text-xl md:text-2xl lg:text-3xl max-w-2xl">
                    We offer web solutions, graphic design, SEO, and marketing tailored to your business goals.
                </p>

                <div className="flex justify-center md:justify-start gap-4 items-center mt-5 md:mt-8">
                    <span className="text-xl md:text-2xl lg:text-3xl text-white cursor-pointer">
                        Work With Us
                    </span>
                    <SquareArrowOutUpRight className="bg-[#fc1c69] text-white p-3 rounded-[20px] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 hover:scale-110 transition-transform duration-200 cursor-pointer" />
                </div>
            </div>

        </div>
    );
};

export default HeroSection;