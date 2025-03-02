import Image from 'next/image';
import { HowWeHelpPoints } from "../Json";

const HowWeHelp = () => {
    return (
        <div className="md:px-16 py-16 px-10  text-white">
            <div className="max-w-5xl mx-auto text-center px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-100">
                    How <span className="text-Ttext">We</span> Elevate Your Growth
                </h2>
                <p className="text-gray-200 mt-4 md:text-lg">
                    Empowering your business with tailored solutions that drive success and unlock new opportunities.
                </p>
            </div>

            <div className="hidden lg:flex justify-between overflow-hidden rounded-md bg-Sbg items-center mt-8">
                {/* Text Section */}
                <div className="w-[650px] py-12 px-10 rounded-md">
                    <div className=" grid grid-cols-2 gap-10">
                        {HowWeHelpPoints.map((item, index) => (
                            <div key={index} className="flex flex-col  items-center">
                                <div className="w-20 h-20"><Image src={item.img} alt="pp" width={200} height={200} /></div>
                                <h4 className="text-xl mt-6 text-center font-semibold">{item.title}</h4>
                                <p className="text-gray-300 text-center mt-2">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <button className="bg-Ttext py-2 block mx-auto px-40 mt-8 text-center rounded-md hover:bg-TtextH transition-all duration-200">Contact Us</button>
                </div>
                <div className="relative h-[800px] flex-1 ">
                    <Image src="/hwhimage.jpg" alt="hwdimage" fill className="object-cover w-full h-auto" />
                </div>
            </div>
            {/* Image Section */}


            <div className="lg:hidden">
                <div className="grid mt-10 md:grid-cols-2 gap-10">
                    {HowWeHelpPoints.map((item, index) => (
                        <div key={index} className="flex flex-col  items-center">
                            <div className="w-24 h-24"><Image src={item.img} alt="pp" width={200} height={200} /></div>
                            <h4 className="text-xl mt-6 text-center font-semibold">{item.title}</h4>
                            <p className="text-gray-300 text-center mt-2">{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center w-full">
                    <button className="max-w-96 py-1 px-10 w-full text-center rounded-md mt-8 bg-Ttext hover:bg-TtextH">Contuct Us</button>
                </div>
            </div>
        </div>
    );
};

export default HowWeHelp;
