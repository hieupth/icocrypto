"use client";

import React, { useState } from "react";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

interface AccordionContainerProps {
    children: React.ReactElement<AccordionProps>[];
    variant: "S1" | "S2" | "S3" | "S4"; // Variant to control style
}

export const AccordionItem: React.FC<AccordionProps> = ({
    title,
    children,
}) => {
    return <>{children}</>;
};

export const Accordion: React.FC<AccordionContainerProps> = ({
    children,
    variant,
}) => {
    const [activeTab, setActiveTab] = useState<string>("tab-1");

    const handleToggle = (id: string) => {
        setActiveTab((prev) => (prev === id ? "" : id));
    };

    const getClasses = (baseClass: string, isActive: boolean) => {
        const activeClass = isActive ? "current" : "";
        return `${
            variant === "S1" ? "" : baseClass
        } accordion-item-${variant.toLowerCase()} ${activeClass}`;
    };

    return (
        <div
            className={`col-lg-10 accordion accordion-${variant.toLowerCase()}`}
            id={`acc-${variant.toLowerCase()}`}
        >
            {React.Children.map(children, (child, index) => {
                const element = child as React.ReactElement<AccordionProps>;
                const tabId = `tab-${index + 1}`;
                const isActive = activeTab === tabId;

                return (
                    <div className={getClasses("accordion-item", isActive)}>
                        <h5
                            className={`accordion-title accordion-title-sm ${
                                isActive ? "" : "collapsed"
                            }`}
                            onClick={() => handleToggle(tabId)}
                        >
                            {element.props.title}
                            <span
                                className={`accordion-icon accordion-icon-${variant.toLowerCase()}`}
                            ></span>
                        </h5>
                        <div
                            id={tabId}
                            className={`collapse ${isActive ? "show" : ""}`}
                        >
                            <div className="accordion-content">
                                {element.props.children}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
