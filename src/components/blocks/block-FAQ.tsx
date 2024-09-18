import { TabRow } from "../elements/element-tab";

export const FAQDefault: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <section className="section bg-white">
            <TabRow>{children}</TabRow>
        </section>
    );
};
export const FAQLight: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <section className="section bg-light">
            <TabRow>{children}</TabRow>
        </section>
    );
};
export const FAQTheme: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <section className="section bg-theme">
            <TabRow>{children}</TabRow>
        </section>
    );
};
export const FAQThemeDark: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <section className="section bg-theme-dark">
            <TabRow>{children}</TabRow>
        </section>
    );
};
export const FAQBgimage: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <section className="section">
            <TabRow>{children}</TabRow>
        </section>
    );
};
