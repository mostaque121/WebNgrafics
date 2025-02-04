import { SquareArrowOutUpRight } from "lucide-react";
const HeroSection = () => {
    return (
        <div className="relative z-10">
            <div>
                <h1 className="text-white text-4xl md:text-5xl text-center md:text-left lg:text-6xl">
                    We Design. We Develop. We Market.
                </h1>
                <p className="text-Ttext mt-8 text-center md:text-left text-xl md:text-2xl lg:text-3xl">We offer web solutions, graphic design, SEO, and marketing tailored to your business goals.</p>

                <div className="flex justify-center md:justify-start gap-5 items-center mt-10">
                    <span className=" text-xl md:text-2xl cursor-pointer lg:text-3xl text-center text-white">Work With <br></br> Us</span>
                    <SquareArrowOutUpRight className="bg-[#fc1c69] text-white p-3 rounded-[20px] w-12 h-12 hover:scale-105 duration-200 transition-all cursor-pointer md:w-14 md:h-14" />
                </div>


            </div>
        </div>
    );
};

export default HeroSection;