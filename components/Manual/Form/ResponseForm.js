'use client'
import { useState } from "react";
import LoadingButton from "../../Button/LoadingButton";

const ResponseForm = () => {
    const [loading] = useState(false);
    return (
        <div className="bg-Tbg flex-shrink-0 bg-opacity-70 border-[0.5px] border-[#00b1dc4d] w-full md:w-[350px] lg:w-[380px] h-[450px] py-8 px-5 rounded-md z-40">
            <h3 className="text-[#00b1dc] text-center md: text-lg md:text-2xl mb-8 font-semibold">Get your free consultants!</h3>
            <form>
                <input placeholder="Name" className="response-form-input mb-4" type='text' required />
                <input placeholder="Email" className="response-form-input mb-4" type='email' required />
                <input placeholder="Phone" className="response-form-input mb-4" type='text' required />
                <textarea placeholder="Message" className="response-form-input mb-4 !h-20" required />
                <LoadingButton defaultText={'Submit'} loadingText={'Submitting...'} isLoading={loading} className={'bg-Ttext text-[#F1F1F1] hover:bg-TtextH active:bg-TtextA py-2 rounded-md'} required />
            </form>
        </div>
    );
};

export default ResponseForm;