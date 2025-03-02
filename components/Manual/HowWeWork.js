import Image from "next/image";
import { HowWeWorkPoints } from "../Json";

const HowWeWorks = () => {
    return (
        <section className="py-16 bg-[#FCFCFC]">
            <div className="max-w-5xl mx-auto text-center px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                    How <span className="text-Ttext">WebnGraphic</span> Works
                </h2>
                <p className="text-gray-600 mt-4 md:text-lg">
                    From vision to reality – We bring your ideas to life with precision and creativity.
                </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 md:px-16 px-6">
                {HowWeWorkPoints.map((step, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
                    >
                        {step.icon}
                        <h3 className="mt-4 text-2xl font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 mt-3">{step.description}</p>

                        {/* Image positioned at the bottom using self-end */}
                        <div className="flex self-end w-full mt-auto">
                            <Image
                                src={step.image}
                                width={1920}
                                height={1080}
                                className="rounded-t-lg object-cover w-full"
                                alt={step.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowWeWorks;
