import { MoveRight } from "lucide-react";
import Image from "next/image";

const Services = () => {
    return (
        <div className="bg-white md:px-16 px-5 py-16">
            <div className="max-w-5xl mx-auto text-center px-6">
                <p className="text-gray-800 font-semibold mt-4 text-2xl md:text-3xl">
                    Empowering Your Digital Presence with<br /> Cutting-Edge Solutions
                </p>
            </div>
            <div className="grid mt-8 md:grid-cols-[25%_25%_50%] gap-4">
                {/* Left Column (25%) */}
                <div className="flex flex-col gap-4 md:min-h-full">
                    <div className="w-full flex flex-col rounded-2xl bg-[#00BC8F] aspect-square">
                        <h5 className="text-left text-[16px] lg:text-[22px]  px-6 text-white py-3 font-semibold leading-tight">WEB<br />DEVELOPMENT</h5>
                        <div className="flex-1 relative">
                            <Image src={"/webdevservice.png"} alt="webdevservice" fill />
                        </div>
                    </div>
                    <div className="w-full flex flex-col rounded-2xl bg-[#64CFFE] aspect-square">
                        <h5 className="text-left px-6 py-3 leading-tight text-white font-semibold text-[16px] lg:text-[22px]">WEB<br />DESIGN</h5>
                        <div className="relative flex-1 flex w-full ">
                            <Image src={"/webdesignservice.png"} className="w-full" alt="webdesignservice" fill />
                        </div>

                    </div>
                </div>

                {/* Middle Column (25%) */}
                <div className="overflow-hidden md:overflow-visible rounded-2xl aspect-square md:aspect-auto relative bg-[#FEBE3C] min-h-full">
                    <h5 className="text-left text-[16px] lg:text-[22px] px-6 py-3 text-white font-semibold leading-tight">GRAPHIC<br />DESIGN</h5>
                    <div className="flex  relative h-full">
                        <Image src={"/graphicdesignservice.png"} className="object-cover" fill alt="graphicdesignservice" />
                    </div>

                </div>

                {/* Right Column (50%) */}
                <div className="relative w-full min-h-full aspect-square md:aspect-auto flex flex-col gap-4 justify-between">
                    <section className="relative flex rounded-3xl flex-1 flex-col w-full bg-[#576EE7] ">
                        <h5 className="text-left text-[16px] lg:text-[22px] text-white px-6 py-3 font-semibold leading-tight">
                            DIGITAL <br /> MARKETING
                        </h5>
                        <div className="mt-2 rounded-3xl overflow-hidden">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full aspect-video object-contain"
                            >
                                <source src="/digitalmarketingvideo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </section>

                    {/* Button */}
                    <div className="flex justify-end">
                        <button className="group flex bg-[#00BC8F] rounded-3xl text-lg md:text-xl lg:text-2xl py-3 md:py-5 px-8 items-center gap-3 font-semibold text-white transition-all duration-30">
                            <span>VIEW ALL SERVICES</span>
                            <MoveRight className="w-7 h-7 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={3} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;
