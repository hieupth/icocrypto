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
const createContentComponent = (
    className: string,
    Tag: keyof JSX.IntrinsicElements = "div"
) => {
    const ContentComponent: React.FC<ContentProps> = ({
        children,
        color,
        size,
        alt,
        dark,
    }) => {
        const colorClass = getColorStyleClass(Stylable.Text, color, alt, dark);
        const sizeClass = getSizeStyleClass(SizeStylable.Text, size, alt);
        return (
            <Tag className={`${className} ${colorClass} ${sizeClass}`}>
                {children}
            </Tag>
        );
    };
    ContentComponent.displayName = `Content${
        Tag.charAt(0).toUpperCase() + Tag.slice(1)
    }`;
    return ContentComponent;
};

// Consolidating all content components into a single export
export const Content = {
    Title: createContentComponent("title", "h2"),
    TextBlock: createContentComponent("nk-block-text"),
    Head: createContentComponent("section-head text-center wide-auto-sm"),
    TitleHead: createContentComponent("title title-lg title-dark", "h4"),
    TitleMd: createContentComponent("title title-md", "h4"),
    TitleXs: createContentComponent("title title-xs tc-primary", "h6"),
    TitleLight: createContentComponent("title title-light", "h2"),
    TitleXsLight: createContentComponent("title-xs title-light", "h6"),
    TitleS2: createContentComponent("title title-s2", "h2"),
    TitleS3: createContentComponent("title title-s3", "h2"),
    Lead: createContentComponent("lead", "p"),
    Center: createContentComponent("text-center"),
};

export const ContentNkBlock: React.FC = () => (
    <>
        <div className="gap-3x"></div>
        <div className="hr"></div>
        <div className="gap-3x"></div>
    </>
);

export const ContentNkBlockE: React.FC = () => (
    <>
        <div className="hr mt-0"></div>
        <div className="gap-3x"></div>
    </>
);

// List components with color and size support
export const ContentListDot = createContentComponent("list list-dot", "ul");
export const ContentListCheck = createContentComponent("list list-check", "ul");

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
            <React.Fragment key={`fragment-${index}`}>
                {child}
                <br key={`br-${index}`} className="d-none d-md-block" />
            </React.Fragment>
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
export const ContentTitleX1 = ({
    children,
    title,
}: React.PropsWithChildren<{ title: string }>) => {
    return (
        <h2 className="title title-xl" title={title}>
            {children}
        </h2>
    );
};
