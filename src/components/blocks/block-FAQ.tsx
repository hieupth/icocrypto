import { Accordion, AccordionItem } from "../elements/element-accordion";
import { TabItem, TabS1, TabS2, TabS3, TabS4 } from "../elements/element-tab";
import { ColorStyle, Stylable } from "@/utils/colorclass";

interface FAQItem {
    title: string;
    content: string;
}

interface TabContent {
    id: string;
    title: string;
    faqs: FAQItem[];
}

interface BlockFAQProps {
    tabs: TabContent[];
    color?: ColorStyle;
    style?: Stylable;
    dark?: boolean;
    variant: "S1" | "S2" | "S3" | "S4";
}

export const BlockFAQ: React.FC<BlockFAQProps> = ({
    tabs,
    color = "default", // Default color if not provided
    style = "",
    dark = false, // Default dark mode to false
    variant = "S1",
}) => {
    const darkClass = dark ? "dark" : "";
    const styleClass = style ? style : "";
    const colorClass = color ? color : "default";
    const TabComponent =
        variant === "S1"
            ? TabS1
            : variant === "S2"
            ? TabS2
            : variant === "S3"
            ? TabS3
            : variant === "S4"
            ? TabS4
            : TabS1;
    const AccodionComponent =
        variant === "S1"
            ? "S1"
            : variant === "S2"
            ? "S3"
            : variant === "S3"
            ? "S2"
            : variant === "S4"
            ? "S4"
            : "S1";

    return (
        <section className={`mgy-x ${styleClass} ${colorClass} ${darkClass}`}>
            <TabComponent>
                {tabs.map((tab) => (
                    <TabItem key={tab.id} id={tab.id} title={tab.title}>
                        <Accordion variant={AccodionComponent}>
                            {tab.faqs.map((faq, index) => (
                                <AccordionItem key={index} title={faq.title}>
                                    <p>{faq.content}</p>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </TabItem>
                ))}
            </TabComponent>
        </section>
    );
};
