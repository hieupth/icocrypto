"use client";

import { BlockFAQ } from "@/components/blocks/block-FAQ";
import { BlockFeaturesPanel } from "@/components/blocks/block-features-panel";
import {
    Accordion,
    AccordionItem,
} from "@/components/elements/element-accordion";
import {
    Content,
    ContentTextBlockHead,
    ContentTitle,
    ContentTitleX1,
} from "@/components/elements/element-content";
import { ColorStyle } from "@/utils/colorclass";
export default function Home() {
    const tabData = [
        {
            id: "tab-1",
            title: "Nav One",
            faqs: [
                { title: "What is ICO Crypto?", content: "Answer about ICO." },
                {
                    title: "What cryptocurrencies can I use?",
                    content: "Answer about cryptocurrencies.",
                },
            ],
        },
        {
            id: "tab-2",
            title: "Nav Two",
            faqs: [
                {
                    title: "How can I participate?",
                    content: "Answer about participation.",
                },
                {
                    title: "How do I benefit?",
                    content: "Answer about benefits.",
                },
            ],
        },
        {
            id: "tab-3",
            title: "Nav Two",
            faqs: [
                {
                    title: "How",
                    content: "Answer about participation.",
                },
                {
                    title: "How do I benefit?",
                    content: "Answer about benefits.",
                },
            ],
        },
    ];
    return (
        <>
            <BlockFAQ variant="S2" tabs={tabData} color={ColorStyle.Default} />
        </>
    );
}
