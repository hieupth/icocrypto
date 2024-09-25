"use client";

import {
    Accordion,
    AccordionItem,
} from "@/components/elements/element-accordion";
export default function Home() {
    return (
        <>
            <Accordion variant="S4">
                <AccordionItem title="Accordion 1">
                    <p>This is the content of Accordion 1.</p>
                </AccordionItem>
                <AccordionItem title="Accordion 2">
                    <p>This is the content of Accordion 2.</p>
                </AccordionItem>
                <AccordionItem title="Accordion 3">
                    <p>This is the content of Accordion 3.</p>
                </AccordionItem>
            </Accordion>
        </>
    );
}
