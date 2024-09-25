import { TabRow } from "../elements/element-tab";

export const BlockFAQDefault: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <section className="section bg-white">
            <TabRow>{children}</TabRow>
        </section>
    );
};
export const BlockFAQLight: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <section className="section bg-light">
            <TabRow>{children}</TabRow>
        </section>
    );
};
export const BlockFAQTheme: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <section className="section bg-theme">
            <TabRow>{children}</TabRow>
        </section>
    );
};
export const BlockFAQThemeDark: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <section className="section bg-theme-dark">
            <TabRow>{children}</TabRow>
        </section>
    );
};
export const BlockFAQBgimage: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <section className="section">
            <TabRow>{children}</TabRow>
        </section>
    );
};
