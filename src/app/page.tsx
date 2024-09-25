"use client";

import {
    Accordion,
    AccordionItem,
} from "@/components/elements/element-accordion";
import { Content } from "@/components/elements/element-content";
export default function Home() {
    return (
        <>
            {/* Test ContentTextBlock */}
            <Content.TextBlock>
                This is a text block content.
                {/* Test ContentHead */}
                <Content.Head>
                    <Content.TitleMd>Section Head Example</Content.TitleMd>
                </Content.Head>
                {/* Test TitleHead with different colors and sizes */}
                <Content.TitleHead color="primary" size="lg">
                    Large Primary Title
                </Content.TitleHead>
                <Content.TitleXs color="success" size="sm">
                    Small Success Title
                </Content.TitleXs>
                {/* Test TitleLight */}
                <Content.TitleLight color="info" size="md">
                    Light Title with Info Color
                </Content.TitleLight>
                {/* Test Lead */}
                <Content.Lead color="warning" size="lg">
                    This is a lead paragraph with warning color and large size.
                </Content.Lead>
                {/* Test Center */}
                <Content.Center>This content is centered!</Content.Center>
                {/* Test TitleS2 */}
                <Content.TitleS2 color="danger">
                    Title S2 with Danger Color
                </Content.TitleS2>
                {/* Test TitleS3 */}
                <Content.TitleS3 size="xl">
                    Title S3 with Extra Large Size
                </Content.TitleS3>
            </Content.TextBlock>
        </>
    );
}
