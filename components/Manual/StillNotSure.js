import { MoveRight } from 'lucide-react';
import Image from 'next/image';

const StillNotSure = () => {
    return (
        <div className=" bg-white px-6 md:px-12 lg:px-20 pt-16 md:pt-0">
            <div className="flex flex-col-reverse md:flex-row items-center md:gap-10 lg:gap-16">

                {/* Image Section */}
                <div className="relative w-full md:w-1/2">
                    <Image
                        width={1920}
                        height={1200}
                        className="object-cover pt-5 md:pt-0 h-auto w-full rounded-lg "
                        alt="Still not sure?"
                        src="/stillnotsure.png"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left">
                    <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                        Still not sure?
                    </h4>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-5 leading-relaxed">
                        Want to see how WebnGraphic works? Schedule a live demo for a personalized, in-depth tour of our platform and process.
                    </p>

                    {/* Call-to-Action Button */}
                    <button className="group flex mx-auto md:mx-0 mt-8 bg-Redish rounded-full text-lg md:text-xl lg:text-2xl py-3 px-8 justify-center items-center gap-3 font-semibold text-white transition-all duration-300 hover:bg-Redishover active:bg-Redishactive">
                        <span>BOOK A DEMO</span>
                        <MoveRight className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={3} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StillNotSure;
