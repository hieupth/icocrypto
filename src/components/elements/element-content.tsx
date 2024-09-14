import React from "react";

interface ListDotProps {
    children: React.ReactNode;
}

export const ContentTextBlock = ({ children }: React.PropsWithChildren<{}>) => {
    return <div className={`nk-block-text`}>{children}</div>;
};
export const ContentHead = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <div className={`section-head text-center wide-auto-sm`}>
            {children}
        </div>
    );
};
export const ContentTitleHead = ({ children }: React.PropsWithChildren<{}>) => {
    return <h4 className={`title title-lg title-dark`}>{children}</h4>;
};
export const ContentNkBlock = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <>
            <div className="gap-3x"></div>
            <div className="hr"></div>
            <div className="gap-3x"></div>
        </>
    );
};
export const ContentNkBlockE = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <>
            <div className="hr mt-0"></div>
            <div className="gap-3x"></div>
        </>
    );
};
export const ContentTitleMd = ({ children }: React.PropsWithChildren<{}>) => {
    return <h4 className={`title title-md`}>{children}</h4>;
};
export const ContentTitleXs = ({ children }: React.PropsWithChildren<{}>) => {
    return <h6 className={`title title-xs tc-primary`}>{children}</h6>;
};
export const ContentTitleLight = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return <h2 className={`title title-light`}>{children}</h2>;
};
export const ContentTitleXsLight = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return <h6 className={`title-xs title-light`}>{children}</h6>;
};
export const ContentTitleS2 = ({ children }: React.PropsWithChildren<{}>) => {
    return <h2 className={`title title-s2`}>{children}</h2>;
};

export const ContentTitleS3 = ({ children }: React.PropsWithChildren<{}>) => {
    return <h2 className={`title title-s3`}>{children}</h2>;
};
export const ContentTitleX1 = ({
    children,
    title,
}: React.PropsWithChildren<{ title: string }>) => {
    return (
        <h2 className="title title-xl" title="What and Why">
            {children}
        </h2>
    );
};
export const ContentListDot: React.FC<ListDotProps> = ({ children }) => {
    return <ul className="list list-dot">{children}</ul>;
};
export const ContentTitle: React.FC<ListDotProps> = ({ children }) => {
    return (
        <h2 className="title">
            {React.Children.map(children, (child, index) => (
                <>
                    {child}
                    <br key={`br-${index}`} className="d-none d-md-block" />
                </>
            ))}
        </h2>
    );
};
export const ContentListCheck: React.FC<ListDotProps> = ({ children }) => {
    return <ul className="list list-check">{children}</ul>;
};
export const ContentLead = ({ children }: React.PropsWithChildren<{}>) => {
    return <p className={`lead`}>{children}</p>;
};
export const ContentCenter = ({ children }: React.PropsWithChildren<{}>) => {
    return <div className={`text-center`}>{children}</div>;
};

export const ContentTextBlockHeadS9 = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return (
        <div className={`section-head section-head-s9 wide-auto-sm`}>
            {children}
        </div>
    );
};
export const ContentTextBlockHeadS8 = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return (
        <div
            className={`section-head section-head-s8 wide-auto-sm text-center`}
        >
            {children}
        </div>
    );
};
export const ContentTextBlockHeadS7 = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return (
        <div
            className={`section-head section-head-s7 wide-auto-sm text-center`}
        >
            {children}
        </div>
    );
};
export const ContentTextBlockHeadS6 = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return (
        <div
            className={`section-head section-head-s6 wide-auto-sm text-center`}
        >
            {children}
        </div>
    );
};
export const ContentTextBlockHeadS5 = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return (
        <div
            className={`section-head section-head-s5 wide-auto-sm text-center`}
        >
            {children}
        </div>
    );
};
export const ContentTextBlockHeadS4 = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return (
        <div
            className={`section-head section-head-s4 wide-auto-sm text-center`}
        >
            {children}
        </div>
    );
};
export const ContentTextBlockHeadS3 = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return (
        <div
            className={`section-head section-head-s3 wide-auto-sm text-center`}
        >
            {children}
        </div>
    );
};
export const ContentTextBlockHeadS2 = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return (
        <div
            className={`section-head section-head-s2 wide-auto-sm text-center`}
        >
            {children}
        </div>
    );
};
