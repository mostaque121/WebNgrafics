import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqData } from "../Json"; // Make sure FaqData is an array of objects with 'question' and 'answer'

export function Faq() {
    return (
        <div className=" px-5 md:px-16 py-16 text-white">
            <h3 className="text-center text-2xl md:text-4xl text-white">FAQs</h3>
            <div className="flex gap-2 items-center justify-center">
                <div className="md:w-10 w-7 h-1 bg-Ttext"></div>
                <span className="text-Ttext md:text-base text-sm">FREQUENTLY ASKED QUESTIONS</span>
                <div className="md:w-10 w-7 h-1 bg-Ttext"></div>
            </div>
            <Accordion type="single" collapsible className="w-full mt-8 ">
                {FaqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="md:text-2xl">{faq.question}</AccordionTrigger>
                        <AccordionContent className="md:text-2xl">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
