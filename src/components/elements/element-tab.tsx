"use client";
import React, { useState } from "react";

// Define interface for TabItem props
interface TabItemProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

// Define the TabItem component
export const TabItem: React.FC<TabItemProps> = ({ title, children }) => {
    return <>{children}</>;
};

// Define the TabRow component (handles TabItem)
export const TabRow: React.FC<{
    children: React.ReactNode; // This allows both single and multiple children
}> = ({ children }) => {
    const elements = React.Children.toArray(
        children
    ) as React.ReactElement<TabItemProps>[];
    const [activeTab, setActiveTab] = useState<string>(elements[0]?.props.id);

    return (
        <div className="row">
            {/* Tab Navigation */}
            <div className="col-md-4 mb-4 mb-lg-0">
                <ul className="nav tab-nav tab-nav-vr tab-nav-bdr me-lg-3">
                    {elements.map((element) => (
                        <li key={element.props.id}>
                            <a
                                className={
                                    activeTab === element.props.id
                                        ? "active"
                                        : ""
                                }
                                onClick={() => setActiveTab(element.props.id)}
                                href={`#${element.props.id}`}
                                data-bs-toggle="tab"
                            >
                                <em className="fas fa-caret-right"></em>
                                {element.props.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tab Content */}
            <div className="col-md-8">
                <div className="tab-content">
                    {elements.map((element) => (
                        <div
                            key={element.props.id}
                            className={`tab-pane fade ${
                                activeTab === element.props.id
                                    ? "show active"
                                    : ""
                            }`}
                            id={element.props.id}
                        >
                            {element.props.children}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Define TabLine component
export const TabLine: React.FC<{
    children: React.ReactElement<TabItemProps>[]; // Updated to use TabItemProps
}> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<string>(children[0]?.props.id);

    return (
        <div className="col-lg-10">
            {/* Tab Navigation */}
            <ul className="nav tab-nav tab-nav-line tab-nav-center">
                {React.Children.map(children, (child) => {
                    const element = child as React.ReactElement<TabItemProps>;
                    return element.props ? (
                        <li key={element.props.id}>
                            <a
                                className={
                                    activeTab === element.props.id
                                        ? "active"
                                        : ""
                                }
                                onClick={() => setActiveTab(element.props.id)}
                                href={`#${element.props.id}`}
                                data-bs-toggle="tab"
                            >
                                <em className="fas fa-caret-right"></em>
                                {element.props.title}
                            </a>
                        </li>
                    ) : null;
                })}
            </ul>

            {/* Tab Content */}
            <div className="tab-content">
                {React.Children.map(children, (child) => {
                    const element = child as React.ReactElement<TabItemProps>;
                    return element.props ? (
                        <div
                            key={element.props.id}
                            className={`tab-pane fade ${
                                activeTab === element.props.id
                                    ? "show active"
                                    : ""
                            }`}
                            id={element.props.id}
                        >
                            {element.props.children}
                        </div>
                    ) : null;
                })}
            </div>
        </div>
    );
};
