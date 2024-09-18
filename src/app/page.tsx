"use client";

import { TabItem, TabRow } from "@/components/elements/element-tab";
import {
    FAQBgimage,
    FAQDefault,
    FAQLight,
    FAQTheme,
    FAQThemeDark,
} from "@/components/blocks/block-FAQ";
import {
    AccordionItem,
    AccordionS1,
} from "@/components/elements/element-accordion";

export default function Home() {
    return (
        <>
            <FAQDefault>
                <TabItem id="faq-1" title="General Questions">
                    <AccordionS1>
                        <AccordionItem title="What is ICO Crypto?">
                            <p>
                                Once ICO period is launched, you can purchase
                                Token with Ethereum, Bitcoin, or Litecoin. You
                                can also tempor incididunt ut labore et dolore
                                magna aliqua sed do eiusmod eaque ipsa.
                            </p>
                            <p>
                                Once ICO period is launched, you can purchase
                                Token with Ethereum, Bitcoin, or Litecoin. You
                                can also tempor incididunt ut labore et dolore
                                magna aliqua sed do eiusmod eaque ipsa.
                            </p>
                        </AccordionItem>
                        <AccordionItem title="What cryptocurrencies can I use to purchase?">
                            <p>
                                Once ICO period is launched, you can purchase
                                Token with Ethereum, Bitcoin, or Litecoin. You
                                can also tempor incididunt ut labore et dolore
                                magna aliqua sed do eiusmod eaque ipsa.
                            </p>
                        </AccordionItem>
                    </AccordionS1>
                </TabItem>

                <TabItem id="faq-2" title="ICO Questions">
                    <AccordionS1>
                        <AccordionItem title="Which of us ever undertakes laborious?">
                            <p>
                                Once ICO period is launched, you can purchase
                                Token with Ethereum, Bitcoin, or Litecoin. You
                                can also tempor incididunt ut labore et dolore
                                magna aliqua sed do eiusmod eaque ipsa.
                            </p>
                        </AccordionItem>
                        <AccordionItem title="Who do not know how to pursue rationally?">
                            <p>
                                Once ICO period is launched, you can purchase
                                Token with Ethereum, Bitcoin, or Litecoin. You
                                can also tempor incididunt ut labore et dolore
                                magna aliqua sed do eiusmod eaque ipsa.
                            </p>
                        </AccordionItem>
                    </AccordionS1>
                </TabItem>
            </FAQsDefault>
        </>
    );
}
