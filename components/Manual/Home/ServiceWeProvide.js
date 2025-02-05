import { services } from "@/components/Json";
import ServicesCard from "@/components/Manual/Card/ServicesCard";
const ServiceWeProvide = () => {

    return (
        <div className="md:py-10 py-5 px-5 md:px-16">
            <h2 className='lg:text-5xl md:text-3xl text-2xl text-white text-center'><span className="text-Ttext">Services</span> We Provide</h2>
            <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
                {services.slice(0, 6).map((service, index) => (
                    <ServicesCard key={index} service={service} />
                ))}
            </div>

            <div className="text-center">
                <button className="text-Redish mt-5 md:mt-6 text-lg md:text-xl hover:underline text-center">View All Services</button>
            </div>
        </div>
    );
};

export default ServiceWeProvide;