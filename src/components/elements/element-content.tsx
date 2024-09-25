import React from "react";
import { getColorStyleClass, Stylable, ColorStyle } from "@/utils/colorclass";
import { getSizeStyleClass, SizeStylable, StyledSize } from "@/utils/sizeclass";

interface ContentProps {
    color?: ColorStyle | string;
    size?: StyledSize | string;
    alt?: boolean;
    dark?: boolean;
    children: React.ReactNode;
}

// Generalized component for all content elements
const ContentComponent =
    (className: string, Tag: keyof JSX.IntrinsicElements = "div") =>
    ({ children, color, size, alt, dark }: ContentProps) => {
        const colorClass = getColorStyleClass(Stylable.Text, color, alt, dark);
        const sizeClass = getSizeStyleClass(SizeStylable.Text, size, alt);
        return (
            <Tag className={`${className} ${colorClass} ${sizeClass}`}>
                {children}
            </Tag>
        );
    };

// Consolidating all content components into a single export
export const Content = {
    TextBlock: ContentComponent("nk-block-text"),
    Head: ContentComponent("section-head text-center wide-auto-sm"),
    TitleHead: ContentComponent("title title-lg title-dark", "h4"),
    TitleMd: ContentComponent("title title-md", "h4"),
    TitleXs: ContentComponent("title title-xs tc-primary", "h6"),
    TitleLight: ContentComponent("title title-light", "h2"),
    TitleXsLight: ContentComponent("title-xs title-light", "h6"),
    TitleS2: ContentComponent("title title-s2", "h2"),
    TitleS3: ContentComponent("title title-s3", "h2"),
    Lead: ContentComponent("lead", "p"),
    Center: ContentComponent("text-center"),
};

export const ContentNkBlock = () => (
    <>
        <div className="gap-3x"></div>
        <div className="hr"></div>
        <div className="gap-3x"></div>
    </>
);

export const ContentNkBlockE = () => (
    <>
        <div className="hr mt-0"></div>
        <div className="gap-3x"></div>
    </>
);

// List components with color and size support
export const ContentListDot = ContentComponent("list list-dot", "ul");
export const ContentListCheck = ContentComponent("list list-check", "ul");

// Title component with optional line breaks, color, and size support
export const ContentTitle: React.FC<ContentProps> = ({
    children,
    color,
    size,
    alt,
    dark,
}) => (
    <h2
        className={`title ${getColorStyleClass(
            Stylable.Text,
            color,
            alt,
            dark
        )} ${getSizeStyleClass(SizeStylable.Text, size, alt)}`}
    >
        {React.Children.map(children, (child, index) => (
            <>
                {child}
                <br key={`br-${index}`} className="d-none d-md-block" />
            </>
        ))}
    </h2>
);

// Generalized Section Head component with variant support
export const ContentTextBlockHead: React.FC<
    ContentProps & { variant: string }
> = ({ children, color, size, alt, dark, variant }) => {
    return (
        <div
            className={`section-head section-head-${variant} wide-auto-sm text-center ${getColorStyleClass(
                Stylable.Text,
                color,
                alt,
                dark
            )} ${getSizeStyleClass(SizeStylable.Text, size, alt)}`}
        >
            {children}
        </div>
    );
};
