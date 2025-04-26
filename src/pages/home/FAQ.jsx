import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from "react-router-dom";
import building from "@/assets/buildings/building2.jpg"
import { MessageCircleQuestion } from "lucide-react";

const FAQ = () => {
    return (
        <div className="p-4 max-w-3xl mx-auto">
            <div className='max-w-2xl mx-auto'>
                <h3 className={`text-2xl sm:text-3xl text-center font-semibold mb-1`}>FAQ</h3>
                <p className={`text-center dark:text-slate-400  text-slate-600  px-4 mb-8`}>Answers to common questions about IBA RU, admissions, and programs.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-2  items-center">
                <div className="h-75 overflow-hidden rounded-md relative">
                    <img src={building} alt="IBA Building" className="object-top sm:object-center object-cover w-full h-full" />
                    <div className="absolute inset-0  flex items-center justify-center text-white text-4xl font-bold dark:bg-background/60 bg-black/50">
                        <MessageCircleQuestion size={96} />
                    </div>
                </div>

                <div className="space-y-2">
                    <Accordion type="single" collapsible className="overflow-x-hidden border rounded-md">
                        <AccordionItem value="item-1" className={`bg-card `}>
                            <AccordionTrigger className="px-4">
                                Is IBA a department?
                            </AccordionTrigger>
                            <AccordionContent className="px-4">
                                No, IBA RU (Institute of Business Administration, University of Rajshahi) is not a department; it is a semi-autonomous institute within the University of Rajshahi. It is one of six institutes at the university and operates independently from the traditional faculty-based departments. IBA RU offers specialized programs in business education, including BBA, MBA (Regular, Evening, Executive), MPhil, and PhD degrees.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion type="single" collapsible className="overflow-x-hidden border rounded-md">
                        <AccordionItem value="item-1" className={`bg-card `}>
                            <AccordionTrigger className="px-4">
                                Does IBA RU offer scholarships?
                            </AccordionTrigger>
                            <AccordionContent className="px-4">
                                Yes, IBA RU provides merit-based scholarships and financial aid opportunities for eligible students.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion type="single" collapsible className="overflow-x-hidden border rounded-md">
                        <AccordionItem value="item-1" className={`bg-card `}>
                            <AccordionTrigger className="px-4">
                                What facilities are available for students?
                            </AccordionTrigger>
                            <AccordionContent className="px-4">
                                Students have access to a modern library, computer labs, classrooms, research resources, and extracurricular activities.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion type="single" collapsible className="overflow-x-hidden border rounded-md">
                        <AccordionItem value="item-1" className={`bg-card `}>
                            <AccordionTrigger className="px-4">
                                Are international students eligible to apply?
                            </AccordionTrigger>
                            <AccordionContent className="px-4">
                                Yes, international students can apply, but they must meet all academic and visa requirements set by the university.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="overflow-x-hidden border rounded-md">
                        <AccordionItem value="item-1" className={`bg-card `}>
                            <AccordionTrigger className="px-4">
                                How can I apply for admission to IBA RU?
                            </AccordionTrigger>
                            <AccordionContent className="px-4">
                                You can apply online through the official IBA RU website during the admission period. Follow the guidelines provided for your selected program. <Link className="underline opacity-70 hover:opacity-100" to="/admission-bba">Details</Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

        </div>
    );
};

export default FAQ;