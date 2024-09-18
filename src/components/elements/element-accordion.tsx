"use client";

import React, { useState } from "react";

interface Accordion {
    title: string;
    children: React.ReactNode;
}

export const AccordionItem: React.FC<Accordion> = ({ title, children }) => {
    return <>{children}</>;
};

export const AccordionS1: React.FC<{
    children: React.ReactElement<Accordion>[];
}> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<string>("tab-1");

    const handleToggle = (id: string) => {
        setActiveTab((prev) => (prev === id ? "" : id)); // Toggle logic
    };

    return (
        <div className="col-lg-10">
            <div className="" id="acc-1">
                {React.Children.map(children, (child, index) => {
                    const element = child as React.ReactElement<Accordion>;
                    const tabId = `tab-${index + 1}`;
                    const isActive = activeTab === tabId;

                    return element.props ? (
                        <div
                            className={`accordion-item ${
                                isActive ? "current" : ""
                            }`}
                            
                        >
                            <h5
                                className={`accordion-title accordion-title-sm ${
                                    !isActive ? "collapsed" : ""
                                }`}
                                data-bs-toggle="collapse"
                                data-bs-target={`#${tabId}`}
                                onClick={() => handleToggle(tabId)} // Toggle accordion
                            >
                                {element.props.title}
                                <span className="accordion-icon"></span>
                            </h5>
                            <div
                                id={tabId}
                                className={`collapse ${isActive ? "show" : ""}`}
                                data-bs-parent="#acc-1"
                            >
                                <div className="accordion-content">
                                    {element.props.children}
                                </div>
                            </div>
                        </div>
                    ) : null;
                })}
            </div>
        </div>
    );
};

export const AccordionS2: React.FC<{
    children: React.ReactElement<Accordion>[];
}> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<string>("tab-1");

    const handleToggle = (id: string) => {
        setActiveTab((prev) => (prev === id ? "" : id)); // Toggle logic
    };

    return (
        <div className="col-lg-10">
            <div className="" id="acc-2">
                {React.Children.map(children, (child, index) => {
                    const element = child as React.ReactElement<Accordion>;
                    const tabId = `tab-${index + 1}`;
                    const isActive = activeTab === tabId;

                    return element.props ? (
                        <div
                            className={`accordion-item accordion-item-s2 ${
                                isActive ? "current" : ""
                            }`}
                        >
                            <h5
                                className={`accordion-title accordion-title-sm ${
                                    !isActive ? "collapsed" : ""
                                }`}
                                data-bs-toggle="collapse"
                                data-bs-target={`#${tabId}`}
                                onClick={() => handleToggle(tabId)} // Toggle accordion
                            >
                                {element.props.title}
                                <span className="accordion-icon accordion-icon-s2"></span>
                            </h5>
                            <div
                                id={tabId}
                                className={`collapse ${isActive ? "show" : ""}`}
                                data-bs-parent="#acc-2"
                            >
                                <div className="accordion-content">
                                    {element.props.children}
                                </div>
                            </div>
                        </div>
                    ) : null;
                })}
            </div>
        </div>
    );
};
export const AccordionS3: React.FC<{
    children: React.ReactElement<Accordion>[];
}> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<string>("tab-1");

    const handleToggle = (id: string) => {
        setActiveTab((prev) => (prev === id ? "" : id)); // Toggle logic
    };

    return (
        <div className="col-lg-10">
            <div className="accordion" id="acc-3">
                {React.Children.map(children, (child, index) => {
                    const element = child as React.ReactElement<Accordion>;
                    const tabId = `tab-${index + 1}`;
                    const isActive = activeTab === tabId;

                    return element.props ? (
                        <div
                            className={`accordion-item accordion-item-s3 ${
                                isActive ? "current" : ""
                            }`}
                        >
                            <h5
                                className={`accordion-title accordion-title-sm ${
                                    !isActive ? "collapsed" : ""
                                }`}
                                data-bs-toggle="collapse"
                                data-bs-target={`#${tabId}`}
                                onClick={() => handleToggle(tabId)} // Toggle accordion
                            >
                                {element.props.title}
                                <span className="accordion-icon"></span>
                            </h5>
                            <div
                                id={tabId}
                                className={`collapse ${isActive ? "show" : ""}`}
                                data-bs-parent="#acc-3"
                            >
                                <div className="accordion-content">
                                    {element.props.children}
                                </div>
                            </div>
                        </div>
                    ) : null;
                })}
            </div>
        </div>
    );
};
export const AccordionS4: React.FC<{
    children: React.ReactElement<Accordion>[];
}> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<string>("tab-1");

    const handleToggle = (id: string) => {
        setActiveTab((prev) => (prev === id ? "" : id)); // Toggle logic
    };

    return (
        <div className="accordion accordion-s1" id="acc-4">
            {React.Children.map(children, (child, index) => {
                const element = child as React.ReactElement<Accordion>;
                const tabId = `tab-${index + 1}`;
                const isActive = activeTab === tabId;

                return element.props ? (
                    <div
                        className={`accordion-item accordion-item-s4 ${
                            isActive ? "current" : ""
                        }`}
                    >
                        <h5
                            className={`accordion-title accordion-title-sm ${
                                !isActive ? "collapsed" : ""
                            }`}
                            data-bs-toggle="collapse"
                            data-bs-target={`#${tabId}`}
                            onClick={() => handleToggle(tabId)} // Toggle accordion
                        >
                            {element.props.title}
                            <span className="accordion-icon accordion-icon-s2"></span>
                        </h5>
                        <div
                            id={tabId}
                            className={`collapse ${isActive ? "show" : ""}`}
                            data-bs-parent="#acc-4"
                        >
                            <div className="accordion-content">
                                {element.props.children}
                            </div>
                        </div>
                    </div>
                ) : null;
            })}
        </div>
    );
};
