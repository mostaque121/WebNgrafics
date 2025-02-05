import { Check } from "lucide-react";
import Image from 'next/image';
import { HowWeDifferentPoints } from "../Json";

const HowWeDifferent = () => {
    return (
        <div className="md:px-16 px-10 mt-10 text-white">
            <h3 className="text-white text-2xl md:text-4xl text-center font-semibold">
                How WebnGraphic is <span className="text-Ttext">Different</span>
            </h3>

            <div className="hidden lg:flex justify-between items-center gap-10 mt-8">
                {/* Image Section */}
                <div className="relative h-[580px] flex-1 ">
                    <Image src="/hwdimage.jpg" alt="hwdimage" fill className="object-cover w-full h-auto rounded-md" />
                </div>

                {/* Text Section */}
                <div className="w-[510px] bg-Sbg py-12 px-10 rounded-md">
                    {HowWeDifferentPoints.map((item, index) => (
                        <div key={index} className="mb-6">
                            <div className="flex gap-2 items-center">
                                <div className="bg-Ttext rounded-full p-1">
                                    <Check strokeWidth={2.75} className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-semibold">{item.title}</h4>
                            </div>
                            <p className="text-gray-300 mt-3">{item.text}</p>
                        </div>
                    ))}
                    <button className="bg-Ttext py-2 w-full text-center rounded-md hover:bg-TtextH transition-all duration-200">Get Started</button>
                </div>
            </div>

            <div className="lg:hidden">
                <div className="grid mt-10 md:grid-cols-3 gap-10">
                    {HowWeDifferentPoints.map((item, index) => (
                        <div key={index} className="flex flex-col  items-center">
                            <div className="w-24 h-24"><Image src={item.img} alt="pp" width={200} height={200} /></div>
                            <h4 className="text-xl mt-6 text-center font-semibold">{item.title}</h4>
                            <p className="text-gray-300 text-center mt-2">{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center w-full">
                    <button className="max-w-96 py-1 px-10 w-full text-center rounded-md mt-8 bg-Ttext hover:bg-TtextH">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HowWeDifferent;
